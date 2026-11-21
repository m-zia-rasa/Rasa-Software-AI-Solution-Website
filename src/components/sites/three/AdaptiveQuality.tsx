"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

/**
 * Watches the frame rate inside a Canvas. If it stays under ~40 fps for a couple of seconds,
 * it calls onDegrade once so the parent can lower resolution / effects.
 */
export default function AdaptiveQuality({ onDegrade }: { onDegrade: () => void }) {
  const acc = useRef({ time: 0, frames: 0, bad: 0, done: false });
  useFrame((_, dt) => {
    const a = acc.current;
    if (a.done) return;
    // ignore long stalls (tab switch, first compile)
    if (dt > 0.25) return;
    a.time += dt;
    a.frames++;
    if (a.time >= 1) {
      const fps = a.frames / a.time;
      a.bad = fps < 40 ? a.bad + 1 : 0;
      a.time = 0;
      a.frames = 0;
      if (a.bad >= 2) {
        a.done = true;
        onDegrade();
      }
    }
  });
  return null;
}
