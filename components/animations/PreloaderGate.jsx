"use client";

import { useEffect, useState } from "react";
import Preloader from "./Preloader";

export default function PreloaderGate({ children }) {
  const [loadingDone, setLoadingDone] = useState(false);
  const [shouldShowPreloader, setShouldShowPreloader] = useState(false);

  useEffect(() => {
    const navigationEntry = performance.getEntriesByType("navigation")[0];
    const navigationType = navigationEntry?.type;
    const hasShownBefore = window.sessionStorage.getItem("gp-preloader-shown") === "1";

    if (navigationType === "reload" || !hasShownBefore) {
      setShouldShowPreloader(true);
      return;
    }

    setLoadingDone(true);
  }, []);

  const handleComplete = () => {
    window.sessionStorage.setItem("gp-preloader-shown", "1");
    setLoadingDone(true);
  };

  return (
    <>
      {shouldShowPreloader && !loadingDone && <Preloader onComplete={handleComplete} />}
      {loadingDone ? children : null}
    </>
  );
}
