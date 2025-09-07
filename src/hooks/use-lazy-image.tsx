import { useState, useEffect } from 'react';

interface UseLazyImageProps {
  src: string;
  placeholderSrc?: string;
}

export function useLazyImage({ src, placeholderSrc }: UseLazyImageProps) {
  const [imageSrc, setImageSrc] = useState(placeholderSrc || '');
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setImageLoaded(true);
    };
    
    return () => {
      img.onload = null;
    };
  }, [src]);

  return { imageSrc, imageLoaded };
}

// Usage example:
// const { imageSrc, imageLoaded } = useLazyImage({
//   src: "/path/to/image.jpg",
//   placeholderSrc: "/path/to/placeholder.jpg" // optional
// });
// 
// Then in your JSX:
// <img 
//   src={imageSrc} 
//   className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
//   alt="Description"
// />
