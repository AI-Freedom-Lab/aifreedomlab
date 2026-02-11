import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroUnlockAnimation() {
  const containerRef = useRef<SVGSVGElement>(null);
  const shackleTopRef = useRef<SVGPathElement>(null);
  const lockBodyRef = useRef<SVGPathElement>(null);
  const keyholeCircleRef = useRef<SVGCircleElement>(null);
  const keyholeRectRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !containerRef.current) {
      return;
    }

    const shackleTop = shackleTopRef.current;
    const lockBody = lockBodyRef.current;

    // Simple animation timeline
    const tl = gsap.timeline({
      delay: 0.3,
    });

    // Shackle opens and fades away
    tl.to(shackleTop, {
      y: -20,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
    });

    // Lock body (hexagon) fades away, leaving keyhole
    tl.to(lockBody, {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.out',
    }, '-=0.2');

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <svg
      ref={containerRef}
      viewBox="0 0 128 128"
      className="w-32 h-32 md:w-40 md:h-40"
      aria-label="Unlocking animation"
    >
      {/* Lock body - hexagonal shape (fades away) */}
      <path
        ref={lockBodyRef}
        d="M 64 48 L 88 60 L 88 84 L 64 96 L 40 84 L 40 60 Z"
        fill="#1A2F5A"
        stroke="#00D9FF"
        strokeWidth="2"
      />

      {/* Keyhole (stays visible) */}
      <circle
        ref={keyholeCircleRef}
        cx="64"
        cy="70"
        r="6"
        fill="#00D9FF"
      />
      <rect
        ref={keyholeRectRef}
        x="61"
        y="70"
        width="6"
        height="12"
        fill="#00D9FF"
        rx="1"
      />

      {/* Shackle top - curved path (fades away) */}
      <path
        ref={shackleTopRef}
        d="M 48 48 Q 48 28, 64 28 Q 80 28, 80 48"
        fill="none"
        stroke="#00D9FF"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
