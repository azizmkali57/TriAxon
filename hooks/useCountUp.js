/**
 * useCountUp.js
 *
 * Animates a number from 0 (or a start value) to a target value when the
 * element enters the viewport. Respects prefers-reduced-motion.
 *
 * Basic usage:
 *   const { ref, value } = useCountUp({ target: 150 });
 *   <div ref={ref}>{value}+</div>
 *
 * With all options:
 *   const { ref, value, isComplete } = useCountUp({
 *     target: 98,
 *     start: 0,
 *     duration: 2000,
 *     decimals: 1,
 *     easing: "easeOutCubic",
 *     prefix: "$",
 *     suffix: "%",
 *     separator: ",",
 *     threshold: 0.5,
 *     once: true,
 *   });
 *   <span ref={ref}>{prefix}{value}{suffix}</span>
 *
 * Available easings: "linear" | "easeOutCubic" | "easeOutQuart" | "easeInOutQuad"
 */

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

// ── Easing functions ──────────────────────────────────────────────────────────
const easings = {
  linear:       (t) => t,
  easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),
  easeOutQuart: (t) => 1 - Math.pow(1 - t, 4),
  easeInOutQuad:(t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
};

/**
 * @param {object}  options
 * @param {number}  options.target      – Final value to count to
 * @param {number}  [options.start=0]   – Starting value
 * @param {number}  [options.duration=1800] – Animation duration in ms
 * @param {number}  [options.decimals=0]   – Decimal places to show
 * @param {string}  [options.easing="easeOutCubic"] – Easing function name
 * @param {string}  [options.separator=""] – Thousands separator e.g. ","
 * @param {number}  [options.threshold=0.5] – IntersectionObserver threshold
 * @param {boolean} [options.once=true]    – Only animate once
 *
 * @returns {{ ref: React.RefObject, value: string, rawValue: number, isComplete: boolean }}
 */
export function useCountUp({
  target,
  start = 0,
  duration = 1800,
  decimals = 0,
  easing = "easeOutCubic",
  separator = "",
  threshold = 0.5,
  once = true,
} = {}) {
  const prefersReduced = usePrefersReducedMotion();
  const ref = useRef(null);
  const rafId = useRef(null);
  const startTime = useRef(null);
  const hasAnimated = useRef(false);

  const [rawValue, setRawValue] = useState(prefersReduced ? target : start);
  const [isComplete, setIsComplete] = useState(prefersReduced);

  const easeFn = easings[easing] ?? easings.easeOutCubic;

  // Format number → string
  const format = useCallback(
    (num) => {
      const fixed = num.toFixed(decimals);
      if (!separator) return fixed;
      const [integer, decimal] = fixed.split(".");
      const withSep = integer.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
      return decimal !== undefined ? `${withSep}.${decimal}` : withSep;
    },
    [decimals, separator]
  );

  const runAnimation = useCallback(() => {
    if (prefersReduced) {
      setRawValue(target);
      setIsComplete(true);
      return;
    }

    startTime.current = null;

    const step = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeFn(progress);
      const current = start + (target - start) * eased;

      setRawValue(current);

      if (progress < 1) {
        rafId.current = requestAnimationFrame(step);
      } else {
        setRawValue(target);
        setIsComplete(true);
      }
    };

    rafId.current = requestAnimationFrame(step);
  }, [prefersReduced, target, start, duration, easeFn]);

  useEffect(() => {
    if (prefersReduced) {
      setRawValue(target);
      setIsComplete(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !(once && hasAnimated.current)) {
          hasAnimated.current = true;
          runAnimation();
          if (once) observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [prefersReduced, runAnimation, threshold, once, target]);

  return {
    ref,
    value: format(rawValue),
    rawValue,
    isComplete,
  };
}

/**
 * Convenience: useCountUpArray
 * Animate multiple counters at once, all triggered when the container
 * enters the viewport.
 *
 * Usage:
 *   const { containerRef, values } = useCountUpArray([
 *     { target: 150, suffix: "+" },
 *     { target: 98,  suffix: "%", decimals: 0 },
 *     { target: 4.9, suffix: "★", decimals: 1 },
 *   ]);
 *
 *   <div ref={containerRef}>
 *     {values.map((v, i) => <span key={i}>{v.value}{items[i].suffix}</span>)}
 *   </div>
 */
export function useCountUpArray(items = [], options = {}) {
  const prefersReduced = usePrefersReducedMotion();
  const containerRef = useRef(null);
  const [triggered, setTriggered] = useState(prefersReduced);

  useEffect(() => {
    if (prefersReduced) { setTriggered(true); return; }

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: options.threshold ?? 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [prefersReduced, options.threshold]);

  // Each item gets its own counter, activated when triggered
  const counters = items.map((item) => {
    const { target = 0, start = 0, duration = 1800, decimals = 0, separator = "", easing = "easeOutCubic" } = item;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useIndividualCounter({ target, start, duration, decimals, separator, easing, triggered });
  });

  return { containerRef, values: counters };
}

function useIndividualCounter({ target, start, duration, decimals, separator, easing, triggered }) {
  const prefersReduced = usePrefersReducedMotion();
  const rafId = useRef(null);
  const startTime = useRef(null);
  const easeFn = easings[easing] ?? easings.easeOutCubic;

  const [rawValue, setRawValue] = useState(triggered || prefersReduced ? target : start);
  const [isComplete, setIsComplete] = useState(triggered || prefersReduced);

  const format = (num) => {
    const fixed = num.toFixed(decimals);
    if (!separator) return fixed;
    const [int, dec] = fixed.split(".");
    const withSep = int.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return dec !== undefined ? `${withSep}.${dec}` : withSep;
  };

  useEffect(() => {
    if (!triggered) return;
    if (prefersReduced) { setRawValue(target); setIsComplete(true); return; }

    startTime.current = null;
    const step = (ts) => {
      if (!startTime.current) startTime.current = ts;
      const progress = Math.min((ts - startTime.current) / duration, 1);
      const current = start + (target - start) * easeFn(progress);
      setRawValue(current);
      if (progress < 1) { rafId.current = requestAnimationFrame(step); }
      else { setRawValue(target); setIsComplete(true); }
    };
    rafId.current = requestAnimationFrame(step);
    return () => { if (rafId.current) cancelAnimationFrame(rafId.current); };
  }, [triggered, prefersReduced, target, start, duration, easeFn]);

  return { value: format(rawValue), rawValue, isComplete };
}

export default useCountUp;