import { doubleImages } from '../sourses/imagesGallery';

const Gallery = () => {
  return (
    <div className='flex flex-wrap gap-[4px] max-h-[calc(2*100px+8px)] overflow-hidden'>
      {doubleImages.map((image, i) => (
        <img
          src={image.src}
          alt={image.alt}
          key={i}
          className='object-cover w-[calc((100%/auto-fill)-4px)] max-w-[calc(100vw/auto-fit)] h-[100px] flex-grow'
        />
      ))}
    </div>
  );
};

export default Gallery;
