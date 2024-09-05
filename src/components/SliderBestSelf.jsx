import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

import img1 from '../assets/images/image1.png';
import img2 from '../assets/images/image2.png';
import img3 from '../assets/images/image3.png';

const images = [img1, img2, img3];

const SliderBestSelf = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative w-full h-[500px]'>
      {images.map((image, index) => {
        const zIndex = index === currentIndex ? 'z-10' : 'z-0';
        const scale = index === currentIndex ? 'scale-100' : 'scale-75';
        const position = index === currentIndex ? 'absolute inset-0' : '';

        return (
          <>
            <div
              key={index}
              className={`transition-transform duration-1000 bg-cover ${position} ${zIndex} ${scale}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          </>
        );
      })}
    </div>
  );
};

export default SliderBestSelf;
