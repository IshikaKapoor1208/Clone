"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
	useEffect(() => {
		const lenis = new Lenis({
			smooth: true,
			lerp: 0.08
		});

		const raf = (time) => lenis.raf(time * 1000);

		lenis.on("scroll", ScrollTrigger.update);
		gsap.ticker.add(raf);
		gsap.ticker.lagSmoothing(0);

		return () => {
			lenis.off("scroll", ScrollTrigger.update);
			gsap.ticker.remove(raf);
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
}
