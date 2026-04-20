"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MaskedImageReveal({ src, alt, className = "" }) {
	const containerRef = useRef(null);
	const imageRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		const image = imageRef.current;

		if (!container || !image) return undefined;

		const context = gsap.context(() => {
			gsap.fromTo(
				image,
				{
					clipPath: "inset(100% 0% 0% 0%)",
					scale: 1.2
				},
				{
					clipPath: "inset(0% 0% 0% 0%)",
					scale: 1,
					duration: 1.35,
					ease: "power3.out",
					scrollTrigger: {
						trigger: container,
						start: "top 80%",
						once: true
					}
				}
			);
		}, container);

		return () => {
			context.revert();
		};
	}, []);

	return (
		<div ref={containerRef} className="overflow-hidden">
			<img
				ref={imageRef}
				src={src}
				alt={alt}
				className={className}
				style={{
					display: "block",
					width: "100%",
					height: "100%",
					objectFit: "cover",
					transformOrigin: "center center",
					willChange: "clip-path, transform"
				}}
			/>
		</div>
	);
}

