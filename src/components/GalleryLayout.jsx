import { useEffect, useState } from 'react';

import img1 from '../assets/images/swiper/image1.png';
import img2 from '../assets/images/swiper/image6.png';
import img3 from '../assets/images/swiper/image3.png';

const GalleryLayout = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const positions = [
    {
      central:
        'absolute w-[227px] h-[355px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-blue-400 z-10 transition-all duration-1000',
      bottomLeft:
        'absolute w-[216px] h-[159px] bottom-0 left-0 bg-red-400 z-0 transition-all duration-1000',
      topRight:
        'absolute w-[167px] h-[253px] top-0 right-0 bg-green-400 z-0 transition-all duration-1000',
    },
    {
      central:
        'absolute w-[216px] h-[159px] bottom-0 left-0 bg-red-400 z-10 transition-all duration-1000',
      bottomLeft:
        'absolute w-[167px] h-[253px] top-0 right-0 bg-green-400 z-0 transition-all duration-1000',
      topRight:
        'absolute w-[227px] h-[355px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-blue-400 z-0 transition-all duration-1000',
    },
    {
      central:
        'absolute w-[167px] h-[253px] top-0 right-0 bg-green-400 z-10 transition-all duration-1000',
      bottomLeft:
        'absolute w-[227px] h-[355px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-blue-400 z-0 transition-all duration-1000',
      topRight:
        'absolute w-[216px] h-[159px] bottom-0 left-0 bg-red-400 z-0 transition-all duration-1000',
    },
  ];
  return (
    <div className='relative w-[430px] h-[645px]  '>
      <div
        className={positions[activeIndex].central}
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div
        className={positions[activeIndex].bottomLeft}
        style={{
          backgroundImage: `url(${img2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div
        className={positions[activeIndex].topRight}
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className='absolute w-[134px] h-[189px] bottom-[70px] right-[50px] bg-basic-gradient z-0'></div>

      <div className='absolute w-[149px] h-[183px] top-[20px] left-[20px] bg-basic-gradient z-0'></div>
    </div>
  );
};

export default GalleryLayout;
