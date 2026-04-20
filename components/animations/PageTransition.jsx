"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function PageTransition({ variant = "grid", columnsCount = 7 }) {
	const pathname = usePathname();
	const overlayRef = useRef(null);
	const curtainRef = useRef(null);
	const columnRefs = useRef([]);
	const timelineRef = useRef(null);
	const hasMountedRef = useRef(false);

	const columns = useMemo(() => {
		const count = Math.min(8, Math.max(5, columnsCount));
		return Array.from({ length: count });
	}, [columnsCount]);

	useEffect(() => {
		const overlay = overlayRef.current;
		if (!overlay) return undefined;

		gsap.set(overlay, {
			autoAlpha: 0,
			pointerEvents: "none"
		});

		return () => {
			timelineRef.current?.kill();
			timelineRef.current = null;
		};
	}, []);

	useEffect(() => {
		const overlay = overlayRef.current;
		const curtain = curtainRef.current;
		const panels = columnRefs.current.filter(Boolean);

		if (!overlay) return undefined;

		if (!hasMountedRef.current) {
			hasMountedRef.current = true;
			return undefined;
		}

		timelineRef.current?.kill();

		const timeline = gsap.timeline({
			defaults: { ease: "power3.inOut" }
		});

		timelineRef.current = timeline;

		timeline.set(overlay, { autoAlpha: 1 });

		if (variant === "curtain") {
			if (!curtain) return undefined;

			timeline
				.set(curtain, { yPercent: 100, transformOrigin: "bottom center" })
				.to(curtain, { yPercent: 0, duration: 0.42 })
				.to(curtain, { yPercent: -100, duration: 0.48, delay: 0.04 })
				.set(overlay, { autoAlpha: 0 });
		} else {
			if (!panels.length) return undefined;

			timeline
				.set(panels, { yPercent: 100, transformOrigin: "bottom center" })
				.to(panels, {
					yPercent: 0,
					duration: 0.4,
					stagger: 0.045
				})
				.to(panels, {
					yPercent: -100,
					duration: 0.46,
					stagger: 0.04,
					delay: 0.04
				})
				.set(overlay, { autoAlpha: 0 });
		}

		return () => {
			timeline.kill();
		};
	}, [pathname, variant]);

	return (
		<div
			ref={overlayRef}
			aria-hidden="true"
			className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
		>
			{variant === "curtain" ? (
				<div
					ref={curtainRef}
					className="h-full w-full bg-[linear-gradient(180deg,#0b0b0b_0%,#181818_100%)]"
				/>
			) : (
				<div className="flex h-full w-full">
					{columns.map((_, index) => (
						<div
							key={index}
							ref={(element) => {
								columnRefs.current[index] = element;
							}}
							className="h-full flex-1 bg-[linear-gradient(180deg,#0a0a0a_0%,#161616_100%)]"
						/>
					))}
				</div>
			)}
		</div>
	);
}
