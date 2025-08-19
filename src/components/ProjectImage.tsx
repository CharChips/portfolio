import { useState } from 'react';

interface ProjectImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

function ProjectImage({ src, alt, caption, className = '' }: ProjectImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (imageError) {
    return (
      <div className={`retro-photo-placeholder ${className}`}>
        <span className="retro-placeholder-icon">📷</span>
        <span className="retro-placeholder-text">Image not found</span>
        {caption && (
          <p className="retro-photo-caption">{caption}</p>
        )}
      </div>
    );
  }

  return (
    <div className={`retro-photo-item ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className={`retro-project-image ${imageLoaded ? 'loaded' : ''}`}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
      {caption && (
        <p className="retro-photo-caption">{caption}</p>
      )}
    </div>
  );
}

export default ProjectImage;
