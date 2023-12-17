import ImageViewer from "./ImageViewer";

export const Gallery = () => {
    const images = [
        'https://miro.medium.com/v2/resize:fit:720/format:webp/0*M4bxiCIjcTK-2Xr6.jpeg',
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221222184908/web-development1.png',
        'https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/08/what-is-a-web-developer.jpg',
    
      ];
      
    return (
        <div>
            <h1>Images Gallery</h1>
            <ImageViewer images = {images} />
        </div>
    );
};
