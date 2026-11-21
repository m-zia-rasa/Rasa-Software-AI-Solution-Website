"use client";

import { useEffect, useState } from "react";

export type Tier = "high" | "low";

interface NavigatorExtras extends Navigator {
  deviceMemory?: number;
  connection?: { saveData?: boolean };
}

function webglAvailable() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

/**
 * Decides whether this device should get the full 3D experience or the lite version.
 * Returns null until measured (first client render), so server and client markup match.
 * Low tier: no WebGL, reduced-motion / data-saver, or weak hardware (<=2 GB RAM or <=2 cores,
 * or <=4 GB on a phone-sized screen).
 */
export function detectTier(): Tier {
  const nav = navigator as NavigatorExtras;
  if (!webglAvailable()) return "low";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "low";
  if (nav.connection?.saveData) return "low";
  const mem = nav.deviceMemory;
  const cores = nav.hardwareConcurrency;
  const narrow = window.matchMedia("(max-width: 767px)").matches;
  if (mem !== undefined && (mem <= 2 || (narrow && mem <= 4))) return "low";
  if (cores !== undefined && cores <= 2) return "low";
  return "high";
}

export function useGraphicsTier(): Tier | null {
  const [tier, setTier] = useState<Tier | null>(null);
  useEffect(() => {
    setTier(detectTier());
  }, []);
  return tier;
}
