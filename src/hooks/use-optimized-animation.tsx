import { useEffect, useState, useRef, useCallback } from 'react';

type AnimationOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  animationClass?: string;
  delay?: number;
};

/**
 * A hook that provides optimized animations with intersection observer
 * to minimize layout shifts and improve performance
 */
export function useOptimizedAnimation({
  threshold = 0.1,
  rootMargin = '0px',
  once = true,
  animationClass = 'revealed',
  delay = 0,
}: AnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  // Setup the intersection observer
  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay if needed
            if (delay) {
              setTimeout(() => {
                setIsVisible(true);
                if (current) {
                  current.classList.add(animationClass);
                }
              }, delay);
            } else {
              setIsVisible(true);
              current.classList.add(animationClass);
            }
            
            // Unobserve if we only want to animate once
            if (once && current) {
              observer.unobserve(current);
            }
          } else if (!once) {
            setIsVisible(false);
            if (current) {
              current.classList.remove(animationClass);
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(current);

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [threshold, rootMargin, once, animationClass, delay]);

  // Class builder utility
  const getAnimationClass = useCallback(
    (baseClass: string) => {
      return `${baseClass} ${isVisible ? animationClass : ''}`;
    },
    [isVisible, animationClass]
  );

  return { ref, isVisible, getAnimationClass };
}

// Usage:
// const { ref, isVisible, getAnimationClass } = useOptimizedAnimation({
//   delay: 200,
//   threshold: 0.2
// });
// 
// <div ref={ref} className={getAnimationClass('reveal-on-scroll')}>
//   Content to animate
// </div>
