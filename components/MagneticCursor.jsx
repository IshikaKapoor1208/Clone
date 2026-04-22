"use client";

import { useEffect, useRef, useState } from "react";

export default function MagneticCursor() {
	const cursorRef = useRef(null);
	const labelRef = useRef(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted || typeof window === "undefined") {
			return undefined;
		}

		let isDisposed = false;
		let cleanup;

		const setupCursor = async () => {
			const { gsap } = await import("gsap");

			if (isDisposed) {
				return;
			}

			const canUseCustomCursor = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
			if (!canUseCustomCursor) {
				return;
			}

			const cursorEl = cursorRef.current;
			const labelEl = labelRef.current;

			if (!cursorEl || !labelEl) {
				return;
			}

			const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
			const pos = { x: mouse.x, y: mouse.y };
			const magneticPull = { x: mouse.x, y: mouse.y, strength: 0 };
			let activeMagneticEl = null;
			let previousMagneticEl = null;
			let currentVariant = "default";
			let currentLabel = "";
			let rafId;
			let isPressed = false;

			gsap.set(cursorEl, {
				x: pos.x,
				y: pos.y,
				xPercent: -50,
				yPercent: -50,
				scale: 1,
				autoAlpha: 1,
			});

			const setVariant = (variant, text = "") => {
				if (currentVariant === variant && currentLabel === text) {
					return;
				}

				currentVariant = variant;
				currentLabel = text;

				cursorEl.classList.remove("is-image", "is-arrow");

				if (variant === "image") {
					cursorEl.classList.add("is-image");
				}

				if (variant === "arrow") {
					cursorEl.classList.add("is-arrow");
				}

				labelEl.textContent = text;

				gsap.to(cursorEl, {
					scale: variant === "default" ? (isPressed ? 0.88 : 1) : 1.08,
					duration: 0.25,
					ease: "power2.out",
					overwrite: true,
				});
			};

			const handlePointerDown = () => {
				isPressed = true;
				gsap.to(cursorEl, {
					scale: 0.88,
					duration: 0.16,
					ease: "power2.out",
					overwrite: true,
				});
			};

			const handlePointerUp = () => {
				isPressed = false;
				gsap.to(cursorEl, {
					scale: 1,
					duration: 0.18,
					ease: "power2.out",
					overwrite: true,
				});
			};

			const onPointerMove = (event) => {
				mouse.x = event.clientX;
				mouse.y = event.clientY;

				const hoveredNode = document.elementFromPoint(event.clientX, event.clientY);
				const arrowEl = hoveredNode?.closest?.(".cursor-arrow");
				const imageEl = hoveredNode?.closest?.(".cursor-image");
				const magneticEl = hoveredNode?.closest?.(".magnetic");

				activeMagneticEl = magneticEl instanceof HTMLElement ? magneticEl : null;

				if (arrowEl) {
					const direction = (arrowEl.getAttribute("data-cursor-arrow") || "right").toLowerCase();
					setVariant("arrow", direction === "left" ? "←" : "→");
					return;
				}

				if (imageEl) {
					setVariant("image", "View Project");
					return;
				}

				setVariant("default");
			};

			const tick = () => {
				if (previousMagneticEl && previousMagneticEl !== activeMagneticEl) {
					gsap.to(previousMagneticEl, {
						x: 0,
						y: 0,
						duration: 0.28,
						ease: "power3.out",
						overwrite: true,
					});
				}

				if (activeMagneticEl) {
					const rect = activeMagneticEl.getBoundingClientRect();
					const centerX = rect.left + rect.width / 2;
					const centerY = rect.top + rect.height / 2;
					const deltaX = mouse.x - centerX;
					const deltaY = mouse.y - centerY;
					const distance = Math.hypot(deltaX, deltaY);
					const maxDistance = Math.max(rect.width, rect.height) * 1.4;

					if (distance < maxDistance) {
						const strength = 1 - distance / maxDistance;
						const moveX = deltaX * 0.18;
						const moveY = deltaY * 0.18;

						gsap.to(activeMagneticEl, {
							x: moveX,
							y: moveY,
							duration: 0.28,
							ease: "power3.out",
							overwrite: true,
						});

						magneticPull.x = centerX + moveX;
						magneticPull.y = centerY + moveY;
						magneticPull.strength = 0.34 * strength;
					} else {
						magneticPull.strength = 0;
						gsap.to(activeMagneticEl, {
							x: 0,
							y: 0,
							duration: 0.28,
							ease: "power3.out",
							overwrite: true,
						});
					}
				} else {
					magneticPull.strength = 0;
				}

				previousMagneticEl = activeMagneticEl;

				const targetX = mouse.x + (magneticPull.x - mouse.x) * magneticPull.strength;
				const targetY = mouse.y + (magneticPull.y - mouse.y) * magneticPull.strength;

				pos.x += (targetX - pos.x) * 0.16;
				pos.y += (targetY - pos.y) * 0.16;

				gsap.set(cursorEl, { x: pos.x, y: pos.y });
				rafId = requestAnimationFrame(tick);
			};

			window.addEventListener("pointermove", onPointerMove, { passive: true });
			window.addEventListener("pointerdown", handlePointerDown, { passive: true });
			window.addEventListener("pointerup", handlePointerUp, { passive: true });
			rafId = requestAnimationFrame(tick);

			cleanup = () => {
				cancelAnimationFrame(rafId);
				window.removeEventListener("pointermove", onPointerMove);
				window.removeEventListener("pointerdown", handlePointerDown);
				window.removeEventListener("pointerup", handlePointerUp);

				document.querySelectorAll(".magnetic").forEach((el) => {
					gsap.killTweensOf(el);
					gsap.set(el, { x: 0, y: 0 });
				});

				gsap.killTweensOf(cursorEl);
			};
		};

		void setupCursor();

		return () => {
			isDisposed = true;
			cleanup?.();
		};
	}, [mounted]);

	if (!mounted) {
		return null;
	}

	return (
		<div ref={cursorRef} className="magnetic-cursor" aria-hidden="true">
			<span ref={labelRef} className="magnetic-cursor__label" />
		</div>
	);
}
