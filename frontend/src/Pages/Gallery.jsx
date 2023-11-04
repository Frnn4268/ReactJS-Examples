import ImageViewer from "./ImageViewer";

export const Gallery = () => {
    const imagenes = [
        'https://www.comunicare.es/wp-content/uploads/2021/11/desarrollo-web-3.jpg',
        'https://evainformatica.com/wp-content/uploads/2023/05/desarrollo-web.jpg',
        'https://gerardgonzalez.com/wp-content/uploads/2020/10/desarrollo-aplicaciones-web.jpg',
    
      ];
      
    return (
        <div>
            <h1>Images</h1>
            <ImageViewer imagenes={imagenes} />
        </div>
    );
};
