"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function StaggeredText({ children, className = "" }) {
	const textRef = useRef(null);

	useEffect(() => {
		const element = textRef.current;

		if (!element) {
			return undefined;
		}

		const split = new SplitType(element, { types: "lines" });
		const lines = split.lines || [];

		if (!lines.length) {
			return () => {
				split.revert();
			};
		}

		lines.forEach((line) => {
			const wrapper = document.createElement("div");

			// This wrapper clips each line so the upward reveal stays hidden until the animation plays.
			wrapper.style.overflow = "hidden";
			wrapper.style.display = "block";
			line.parentNode?.insertBefore(wrapper, line);
			wrapper.appendChild(line);
			line.style.display = "block";
			line.style.willChange = "transform, opacity";
		});

		const animation = gsap.from(lines, {
			y: 140,
			opacity: 0,
			stagger: 0.1,
			duration: 1,
			ease: "power3.out",
			paused: true
		});

		const trigger = ScrollTrigger.create({
			trigger: textRef.current,
			start: "top 85%",
			once: true,
			onEnter: () => animation.play()
		});

		ScrollTrigger.refresh();

		if (element.getBoundingClientRect().top <= window.innerHeight * 0.85) {
			animation.play();
			trigger.kill();
		}

		return () => {
			trigger.kill();
			animation.kill();
			split.revert();
		};
	}, [children]);

	return (
		<div ref={textRef} className={className}>
			{children}
		</div>
	);
}
