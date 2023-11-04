import { useState } from 'react';

const ImageViewer = ({ imagenes }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < imagenes.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  const closeZoomedView = () => {
    setIsZoomed(false);
  };

  return (
    <div className="image-viewer">
      <div className="image-container">
        <img
          src={imagenes[currentImageIndex]}
          alt={`Imagen ${currentImageIndex + 1}`}
          onClick={handleImageClick}
        />
      </div>
      <div className="image-nav">
        <button onClick={handlePrevImage} disabled={currentImageIndex === 0}>
          Anterior
        </button>
        <span>{`${currentImageIndex + 1} / ${imagenes.length}`}</span>
        <button onClick={handleNextImage} disabled={currentImageIndex === imagenes.length - 1}>
          Siguiente
        </button>
      </div>
      {isZoomed && (
        <div className="image-modal" onClick={closeZoomedView}>
          <div className="image-zoom">
            <img
              src={imagenes[currentImageIndex]}
              alt={`Imagen ${currentImageIndex + 1}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
