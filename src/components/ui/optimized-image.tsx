import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useLazyImage } from '@/hooks/use-lazy-image';
import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ src, alt, width, height, className, priority = false, ...props }, forwardedRef) => {
    const { ref, hasIntersected } = useIntersectionObserver({
      rootMargin: '200px', // Load images when they're 200px from viewport
    });
    
    // If priority is true, load immediately, otherwise wait for intersection
    const shouldLoad = priority || hasIntersected;
    
    const { imageSrc, imageLoaded } = useLazyImage({
      src: shouldLoad ? src : '',
      placeholderSrc: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'
    });

    return (
      <div ref={ref} className="relative overflow-hidden">
        <img
          ref={forwardedRef}
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'} 
          decoding="async"
          className={cn(
            'transition-opacity duration-300',
            imageLoaded ? 'opacity-100' : 'opacity-0',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

OptimizedImage.displayName = 'OptimizedImage';
