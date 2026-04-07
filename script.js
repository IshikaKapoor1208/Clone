window.addEventListener("load", () => {
  const root = document.documentElement;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    root.classList.add("hero-shifted", "title-visible");
    return;
  }

  const drawDuration = 2800;
  const shiftDuration = 900;

  window.setTimeout(() => {
    root.classList.add("hero-shifted");

    window.setTimeout(() => {
      root.classList.add("title-visible");
    }, shiftDuration);
  }, drawDuration);
});
