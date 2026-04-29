"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const BRAND_TEXT = "Gaurav Patthare Architects";

export default function Preloader({ onComplete }) {
	const overlayRef = useRef(null);
	const logoWrapRef = useRef(null);
	const leftHalfRef = useRef(null);
	const rightHalfRef = useRef(null);
	const nameRef = useRef(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!isLoading) {
			return undefined;
		}

		let isDisposed = false;
		let fadeOutTimer = null;
		const canUseDom = typeof window !== "undefined";
		const body = canUseDom ? document.body : null;
		const previousOverflow = body?.style.overflow;

		if (body) {
			body.style.overflow = "hidden";
		}

		const restoreBody = () => {
			if (body) {
				body.style.overflow = previousOverflow || "";
			}
		};

		const overlay = overlayRef.current;
		const logoWrap = logoWrapRef.current;
		const leftHalf = leftHalfRef.current;
		const rightHalf = rightHalfRef.current;
		const name = nameRef.current;

		if (!overlay || !logoWrap || !leftHalf || !rightHalf || !name) {
			setIsLoading(false);
			onComplete?.();
			restoreBody();
			return undefined;
		}

		gsap.set(overlay, { autoAlpha: 1 });
		gsap.set(logoWrap, { autoAlpha: 1 });
		gsap.set([leftHalf, rightHalf], { autoAlpha: 0, scale: 0.98 });
		gsap.set(name, { autoAlpha: 0, y: 10 });

		const timeline = gsap.timeline({
			defaults: { ease: "power3.out" },
			onComplete: () => {
				if (isDisposed) {
					return;
				}

				fadeOutTimer = window.setTimeout(() => {
					gsap.to(overlay, {
						autoAlpha: 0,
						duration: 0.65,
						ease: "power2.inOut",
						onComplete: () => {
							setIsLoading(false);
							onComplete?.();
							restoreBody();
						},
					});
				}, 350);
			},
		});

		timeline
			.fromTo(
				leftHalf,
				{ x: -60, autoAlpha: 0 },
				{ x: 0, autoAlpha: 1, duration: 0.95 },
				0,
			)
			.fromTo(
				rightHalf,
				{ x: 60, autoAlpha: 0 },
				{ x: 0, autoAlpha: 1, duration: 0.95 },
				0,
			)
			.to([leftHalf, rightHalf], { scale: 1, duration: 0.45 }, 0.5)
			.to(name, { autoAlpha: 1, y: 0, duration: 0.65 }, 0.8)
			.to({}, { duration: 0.95 });

		return () => {
			isDisposed = true;
			timeline.kill();
			if (fadeOutTimer) {
				window.clearTimeout(fadeOutTimer);
			}

			if (overlay) {
				gsap.killTweensOf(overlay);
			}

			restoreBody();
		};
	}, [isLoading, onComplete]);

	if (!isLoading) {
		return null;
	}

	return (
		<div
			ref={overlayRef}
			className="preloader-overlay"
			role="status"
			aria-live="polite"
			aria-label="Loading content"
		>
			<div className="flex flex-col items-center justify-center gap-8 text-center">
				<div ref={logoWrapRef} className="relative h-[clamp(6.5rem,14vw,10rem)] w-[clamp(6.5rem,14vw,10rem)]">
					<div
						ref={leftHalfRef}
						className="absolute inset-0 overflow-hidden [clip-path:inset(0_50%_0_0)]"
					>
						<Image
							src="/Logo-02.png"
							alt=""
							fill
							priority
							sizes="(max-width: 768px) 128px, 160px"
							className="object-contain object-center"
						/>
					</div>
					<div
						ref={rightHalfRef}
						className="absolute inset-0 overflow-hidden [clip-path:inset(0_0_0_50%)]"
					>
						<Image
							src="/Logo-02.png"
							alt=""
							fill
							priority
							sizes="(max-width: 768px) 128px, 160px"
							className="object-contain object-center"
						/>
					</div>
				</div>
				<p
					ref={nameRef}
					className="m-0 max-w-[18ch] font-body text-[1rem] font-light uppercase tracking-normal text-white/92 opacity-0 md:text-[1.15rem]"
				>
					{BRAND_TEXT}
				</p>
			</div>
		</div>
	);
}
