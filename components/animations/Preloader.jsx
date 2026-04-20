"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const BRAND_TEXT = "Gaurav Patharey Architects";
const TYPE_DURATION_MS = 1200;
const TOTAL_VISIBLE_MS = 1800;

export default function Preloader({ onComplete }) {
	const overlayRef = useRef(null);
	const [isLoading, setIsLoading] = useState(true);
	const [typedText, setTypedText] = useState("");

	useEffect(() => {
		if (!isLoading) {
			return undefined;
		}

		const canUseDom = typeof window !== "undefined";
		const body = canUseDom ? document.body : null;
		const previousOverflow = body?.style.overflow;

		if (body) {
			body.style.overflow = "hidden";
		}

		const totalChars = BRAND_TEXT.length;
		const stepMs = Math.max(28, Math.floor(TYPE_DURATION_MS / totalChars));
		let index = 0;

		const typingTimer = window.setInterval(() => {
			index += 1;
			setTypedText(BRAND_TEXT.slice(0, index));

			if (index >= totalChars) {
				window.clearInterval(typingTimer);
			}
		}, stepMs);

		const doneTimer = window.setTimeout(() => {
			const overlay = overlayRef.current;

			if (!overlay) {
				setIsLoading(false);
				onComplete?.();
				if (body) {
					body.style.overflow = previousOverflow || "";
				}
				return;
			}

			gsap.to(overlay, {
				opacity: 0,
				duration: 0.72,
				ease: "power2.out",
				onComplete: () => {
					setIsLoading(false);
					onComplete?.();
					if (body) {
						body.style.overflow = previousOverflow || "";
					}
				},
			});
		}, TOTAL_VISIBLE_MS);

		return () => {
			window.clearInterval(typingTimer);
			window.clearTimeout(doneTimer);

			if (overlayRef.current) {
				gsap.killTweensOf(overlayRef.current);
			}

			if (body) {
				body.style.overflow = previousOverflow || "";
			}
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
			<p className="preloader-text">{typedText}</p>
		</div>
	);
}
