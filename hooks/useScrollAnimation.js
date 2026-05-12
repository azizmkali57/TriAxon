/**
 * useScrollAnimation.js
 *
 * Observes one or more elements and applies a "visible" class when they
 * enter the viewport. Works with the `.reveal`, `.reveal-fade`,
 * `.reveal-left`, and `.reveal-right` CSS classes defined in globals.css.
 *
 * Usage (single ref):
 *   const ref = useScrollAnimation();
 *   <div ref={ref} className="reveal">...</div>
 *
 * Usage (staggered children — pass a container ref):
 *   const ref = useScrollAnimation({ stagger: true, staggerDelay: 80 });
 *   <ul ref={ref}>
 *     <li className="reveal">One</li>
 *     <li className="reveal">Two</li>
 *   </ul>
 *
 * Usage (multiple individual refs):
 *   const refs = useScrollAnimation({ count: 3 });
 *   <div ref={refs[0]} className="reveal">A</div>
 *   <div ref={refs[1]} className="reveal">B</div>
 *   <div ref={refs[2]} className="reveal">C</div>
 */

"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * @param {object}  options
 * @param {number}  options.threshold     – 0–1, fraction visible before trigger (default 0.15)
 * @param {string}  options.rootMargin    – IntersectionObserver rootMargin (default "0px 0px -60px 0px")
 * @param {boolean} options.stagger       – animate direct .reveal children with a delay cascade
 * @param {number}  options.staggerDelay  – ms between each staggered child (default 80)
 * @param {boolean} options.once          – only trigger once (default true)
 * @param {number}  options.count         – if > 1 returns an array of refs instead of a single ref
 * @returns {React.RefObject | React.RefObject[]}
 */
export function useScrollAnimation({
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  stagger = false,
  staggerDelay = 80,
  once = true,
  count = 1,
} = {}) {
  const prefersReduced = usePrefersReducedMotion();

  // Multi-ref mode
  const refsArray = useRef(
    Array.from({ length: Math.max(count, 1) }, () => ({ current: null }))
  );

  // Single-ref mode
  const singleRef = useRef(null);

  useEffect(() => {
    // If the user prefers reduced motion, immediately reveal everything
    if (prefersReduced) {
      const allRefs = count > 1 ? refsArray.current : [singleRef];
      allRefs.forEach((r) => {
        if (!r.current) return;
        const targets = stagger
          ? r.current.querySelectorAll(".reveal, .reveal-fade, .reveal-left, .reveal-right")
          : [r.current];
        targets.forEach((el) => el.classList.add("visible"));
      });
      return;
    }

    const observerOptions = { threshold, rootMargin };

    const handleEntry = (entry, index = 0) => {
      if (!entry.isIntersecting) return;

      if (stagger) {
        // Stagger all reveal children inside the container
        const children = entry.target.querySelectorAll(
          ".reveal, .reveal-fade, .reveal-left, .reveal-right"
        );
        children.forEach((child, i) => {
          setTimeout(() => child.classList.add("visible"), i * staggerDelay);
        });
      } else {
        entry.target.classList.add("visible");
      }

      if (once) observer.unobserve(entry.target);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => handleEntry(entry, i));
    }, observerOptions);

    if (count > 1) {
      refsArray.current.forEach((r) => {
        if (r.current) observer.observe(r.current);
      });
    } else {
      if (singleRef.current) observer.observe(singleRef.current);
    }

    return () => observer.disconnect();
  }, [prefersReduced, threshold, rootMargin, stagger, staggerDelay, once, count]);

  if (count > 1) return refsArray.current;
  return singleRef;
}

/**
 * Convenience hook: returns a section ref that auto-reveals all
 * .reveal children with a stagger cascade on scroll.
 *
 * Usage:
 *   const sectionRef = useStaggerReveal();
 *   <section ref={sectionRef}>
 *     <div className="reveal">Card 1</div>
 *     <div className="reveal">Card 2</div>
 *   </section>
 */
export function useStaggerReveal(staggerDelay = 80) {
  return useScrollAnimation({ stagger: true, staggerDelay });
}

export default useScrollAnimation;