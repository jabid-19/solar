"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SmoothScrolling({ children }: { children: any }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
