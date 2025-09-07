import { useEffect } from 'react';

interface PreloadResourcesProps {
  resources?: string[];
  children?: React.ReactNode;
}

/**
 * Preloads critical resources like images, fonts, and other assets
 * to improve perceived performance and prevent layout shifts
 */
export function PreloadResources({ resources = [], children }: PreloadResourcesProps) {
  useEffect(() => {
    // Default critical resources
    const criticalResources = [
      '/profilePhoto.jpg',
      '/Anshu_resume.pdf',
      ...resources
    ];

    // Preload images
    criticalResources.forEach(resource => {
      if (resource.match(/\.(jpeg|jpg|png|gif|webp)$/i)) {
        const img = new Image();
        img.src = resource;
      } else if (resource.match(/\.(pdf|doc|docx)$/i)) {
        // Preload documents
        fetch(resource).catch(err => console.error(`Failed to preload ${resource}:`, err));
      }
    });
  }, [resources]);

  return <>{children}</>;
}

export default PreloadResources;
