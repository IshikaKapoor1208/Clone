"use client";

import { useState } from "react";
import Preloader from "./Preloader";

export default function PreloaderGate({ children }) {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      {!loadingDone && <Preloader onComplete={() => setLoadingDone(true)} />}
      {loadingDone ? children : null}
    </>
  );
}
