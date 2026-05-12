/**
 * usePrefersReducedMotion.js
 *
 * Returns `true` if the user has requested reduced motion via their OS/browser
 * accessibility settings. All animation hooks in this project use this to
 * respect the user's preferences — making the site fully WCAG 2.1 compliant.
 *
 * Behaviour:
 *  - On the server (SSR/SSG) → returns `false` (safe default, hydration-safe)
 *  - On the client with `prefers-reduced-motion: reduce` → returns `true`
 *  - Reactively updates if the user changes their system preference at runtime
 *
 * Usage:
 *   const prefersReduced = usePrefersReducedMotion();
 *
 *   // Skip animation if reduced motion preferred
 *   useEffect(() => {
 *     if (prefersReduced) return;
 *     runMyAnimation();
 *   }, [prefersReduced]);
 *
 *   // Or pass to Framer Motion
 *   const transition = prefersReduced ? { duration: 0 } : { duration: 0.6, ease: "easeOut" };
 */

"use client";

import { useState, useEffect } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * @returns {boolean} true when the user prefers reduced motion
 */
export function usePrefersReducedMotion() {
  // Start with false to avoid hydration mismatch on SSR
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    // Guard: window may not exist in test environments
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQuery = window.matchMedia(QUERY);

    // Set the initial value
    setPrefersReduced(mediaQuery.matches);

    // Listen for changes (user toggles accessibility setting at runtime)
    const handleChange = (event) => setPrefersReduced(event.matches);

    // Use addEventListener with fallback for older Safari
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      // Deprecated but needed for Safari < 14
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return prefersReduced;
}

/**
 * useMotionSafe
 *
 * A variant that returns the OPPOSITE — true when it IS safe to show motion.
 * Useful for conditional rendering of animated components.
 *
 * Usage:
 *   const motionSafe = useMotionSafe();
 *   {motionSafe && <AnimatedBackground />}
 */
export function useMotionSafe() {
  return !usePrefersReducedMotion();
}

/**
 * useAnimationConfig
 *
 * Returns a config object for common animation parameters, automatically
 * zeroing out durations/delays when reduced motion is preferred.
 *
 * Usage:
 *   const anim = useAnimationConfig();
 *
 *   // With Framer Motion
 *   <motion.div
 *     initial={{ opacity: 0, y: anim.distance }}
 *     animate={{ opacity: 1, y: 0 }}
 *     transition={{ duration: anim.duration, ease: anim.ease }}
 *   />
 *
 *   // With CSS custom properties via inline style
 *   <div style={{ "--duration": anim.durationMs + "ms" }} className="my-transition">
 */
export function useAnimationConfig() {
  const prefersReduced = usePrefersReducedMotion();

  return {
    /** Whether animations should run */
    enabled: !prefersReduced,

    /** Transition duration in seconds (0 when reduced) */
    duration: prefersReduced ? 0 : 0.6,

    /** Transition duration in ms (0 when reduced) */
    durationMs: prefersReduced ? 0 : 600,

    /** Slow transition duration in seconds */
    durationSlow: prefersReduced ? 0 : 1.0,

    /** Stagger delay between children in ms */
    staggerMs: prefersReduced ? 0 : 80,

    /** Y-axis offset for slide-up animations in px */
    distance: prefersReduced ? 0 : 24,

    /** Recommended easing string */
    ease: "cubic-bezier(0.16, 1, 0.3, 1)",

    /** Framer Motion-compatible transition preset */
    transition: prefersReduced
      ? { duration: 0 }
      : { duration: 0.6, ease: [0.16, 1, 0.3, 1] },

    /** Framer Motion initial state for fade-up */
    fadeUpInitial: { opacity: 0, y: prefersReduced ? 0 : 24 },

    /** Framer Motion animate state */
    fadeUpAnimate: { opacity: 1, y: 0 },
  };
}

export default usePrefersReducedMotion;