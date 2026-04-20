"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MagneticCursor() {
	const cursorRef = useRef(null);
	const labelRef = useRef(null);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const canUseCustomCursor = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
		if (!canUseCustomCursor) return;

		const cursorEl = cursorRef.current;
		const labelEl = labelRef.current;

		if (!cursorEl || !labelEl) return;

		const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
		const pos = { x: mouse.x, y: mouse.y };
		const magneticPull = { x: mouse.x, y: mouse.y, strength: 0 };

		let rafId;

		gsap.set(cursorEl, {
			x: pos.x,
			y: pos.y,
			xPercent: -50,
			yPercent: -50,
			scale: 1,
			autoAlpha: 1
		});

		const setVariant = (variant, text = "") => {
			cursorEl.classList.remove("is-image", "is-arrow");

			if (variant === "image") {
				cursorEl.classList.add("is-image");
			}

			if (variant === "arrow") {
				cursorEl.classList.add("is-arrow");
			}

			labelEl.textContent = text;

			gsap.to(cursorEl, {
				scale: variant === "default" ? 1 : 1.08,
				duration: 0.25,
				ease: "power2.out",
				overwrite: true
			});
		};

		const onPointerMove = (event) => {
			mouse.x = event.clientX;
			mouse.y = event.clientY;
		};

		const tick = () => {
			const targetX = mouse.x + (magneticPull.x - mouse.x) * magneticPull.strength;
			const targetY = mouse.y + (magneticPull.y - mouse.y) * magneticPull.strength;

			pos.x += (targetX - pos.x) * 0.16;
			pos.y += (targetY - pos.y) * 0.16;

			gsap.set(cursorEl, { x: pos.x, y: pos.y });
			rafId = requestAnimationFrame(tick);
		};

		const imageTargets = Array.from(document.querySelectorAll(".cursor-image"));
		const arrowTargets = Array.from(document.querySelectorAll(".cursor-arrow"));
		const magneticTargets = Array.from(document.querySelectorAll(".magnetic"));

		const imageHandlers = imageTargets.map((el) => {
			const handleEnter = () => setVariant("image", "View Project");
			const handleLeave = () => setVariant("default");

			el.addEventListener("mouseenter", handleEnter);
			el.addEventListener("mouseleave", handleLeave);

			return { el, handleEnter, handleLeave };
		});

		const arrowHandlers = arrowTargets.map((el) => {
			const handleEnter = () => {
				const direction = (el.getAttribute("data-cursor-arrow") || "right").toLowerCase();
				const icon = direction === "left" ? "←" : "→";
				setVariant("arrow", icon);
			};

			const handleLeave = () => setVariant("default");

			el.addEventListener("mouseenter", handleEnter);
			el.addEventListener("mouseleave", handleLeave);

			return { el, handleEnter, handleLeave };
		});

		const magneticHandlers = magneticTargets.map((el) => {
			const handleMove = (event) => {
				const rect = el.getBoundingClientRect();
				const centerX = rect.left + rect.width / 2;
				const centerY = rect.top + rect.height / 2;
				const deltaX = event.clientX - centerX;
				const deltaY = event.clientY - centerY;
				const distance = Math.hypot(deltaX, deltaY);
				const maxDistance = Math.max(rect.width, rect.height) * 1.4;

				if (distance < maxDistance) {
					const strength = 1 - distance / maxDistance;
					const moveX = deltaX * 0.18;
					const moveY = deltaY * 0.18;

					gsap.to(el, {
						x: moveX,
						y: moveY,
						duration: 0.3,
						ease: "power3.out",
						overwrite: true
					});

					magneticPull.x = centerX + moveX;
					magneticPull.y = centerY + moveY;
					magneticPull.strength = 0.34 * strength;
				} else {
					magneticPull.strength = 0;
					gsap.to(el, {
						x: 0,
						y: 0,
						duration: 0.3,
						ease: "power3.out",
						overwrite: true
					});
				}
			};

			const handleLeave = () => {
				magneticPull.strength = 0;
				gsap.to(el, {
					x: 0,
					y: 0,
					duration: 0.3,
					ease: "power3.out",
					overwrite: true
				});
			};

			el.addEventListener("mousemove", handleMove);
			el.addEventListener("mouseleave", handleLeave);

			return { el, handleMove, handleLeave };
		});

		window.addEventListener("pointermove", onPointerMove, { passive: true });
		rafId = requestAnimationFrame(tick);

		return () => {
			cancelAnimationFrame(rafId);
			window.removeEventListener("pointermove", onPointerMove);

			imageHandlers.forEach(({ el, handleEnter, handleLeave }) => {
				el.removeEventListener("mouseenter", handleEnter);
				el.removeEventListener("mouseleave", handleLeave);
			});

			arrowHandlers.forEach(({ el, handleEnter, handleLeave }) => {
				el.removeEventListener("mouseenter", handleEnter);
				el.removeEventListener("mouseleave", handleLeave);
			});

			magneticHandlers.forEach(({ el, handleMove, handleLeave }) => {
				el.removeEventListener("mousemove", handleMove);
				el.removeEventListener("mouseleave", handleLeave);
				gsap.killTweensOf(el);
				gsap.set(el, { x: 0, y: 0 });
			});

			gsap.killTweensOf(cursorEl);
		};
	}, []);

	return (
		<div ref={cursorRef} className="magnetic-cursor" aria-hidden="true">
			<span ref={labelRef} className="magnetic-cursor__label" />
		</div>
	);
}
