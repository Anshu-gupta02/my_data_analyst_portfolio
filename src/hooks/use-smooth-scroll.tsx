import { useCallback } from 'react';

interface ScrollOptions {
  behavior?: ScrollBehavior;
  offset?: number;
}

export function useSmoothScroll() {
  const scrollToElement = useCallback((elementId: string, options: ScrollOptions = {}) => {
    const { behavior = 'smooth', offset = 0 } = options;
    
    const element = document.getElementById(elementId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior,
    });
  }, []);

  const scrollToTop = useCallback((options: Omit<ScrollOptions, 'offset'> = {}) => {
    const { behavior = 'smooth' } = options;
    
    window.scrollTo({
      top: 0,
      behavior,
    });
  }, []);

  return { scrollToElement, scrollToTop };
}

// Usage:
// const { scrollToElement, scrollToTop } = useSmoothScroll();
// 
// // Scroll to an element with ID "contact"
// scrollToElement('contact', { offset: 80 }); // 80px offset for header
// 
// // Scroll to top
// scrollToTop();
