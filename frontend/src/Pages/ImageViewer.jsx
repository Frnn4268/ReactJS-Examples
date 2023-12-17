import { useState } from 'react';
import '../css/ImageViewer.css'; // Import the CSS file for styling

const ImageViewer = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => prevZoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.1));
  };

  return (
    <div className="image-viewer">
      <div className={`image-container ${isZoomed ? 'zoomed' : ''}`}>
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          onClick={handleImageClick}
          style={{ transform: `scale(${zoomLevel})` }}
        />
        {isZoomed && (
          <div className="zoom-buttons">
            <button onClick={handleZoomIn}>+</button>
            <button onClick={handleZoomOut}>-</button>
          </div>
        )}
      </div>
      <div className="image-nav">
        <button onClick={handleNextImage} disabled={currentImageIndex === images.length - 1}>
          Next
        </button>
        <span>{`${currentImageIndex + 1} / ${images.length}`}</span>
        <button onClick={handlePrevImage} disabled={currentImageIndex === 0}>
          Back
        </button>
      </div>
    </div>
  );
};

export default ImageViewer;
