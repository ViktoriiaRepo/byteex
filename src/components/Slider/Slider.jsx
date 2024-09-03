import { useEffect, useState } from 'react';

import img1 from '../../assets/images/image1.png';
import img2 from '../../assets/images/image2.png';
import img3 from '../../assets/images/image3.png';
import img4 from '../../assets/images/image4.png';
import img5 from '../../assets/images/image5.png';

const images = [img1, img2, img3, img4, img5];

const gradient =
  'linear-gradient(180deg, rgba(249, 240, 229, 0.7) 0%, rgba(249, 240, 229, 0.7) 100%)';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getSlideClass = (index) => {
    const position = (index - currentIndex + images.length) % images.length;

    switch (position) {
      case 0:
        return 'absolute w-[70px]  md:desktop:w-[134px] h-[99px] md:desktop:h-[189px] transition-transform duration-1500 easy-in-out -translate-x-[155px] md:desktop:-translate-x-[305px] z-0 will-change-transform';
      case 1:
        return 'absolute w-[110px] md:desktop:w-[209px] h-[166px] md:desktop:h-[316px] transition-all duration-[1500ms] easy-in-out transform translate-x-[-70px] md:desktop:translate-x-[-190px] opacity-80  z-10 will-change-transform';
      case 2:
        return 'absolute  w-[136px] md:desktop:w-[260px] h-[220px] md:desktop:h-[422px] transition-all duration-[1500ms] easy-in-out transform translate-x-[0] scale-[1] z-20 will-change-transform';
      case 3:
        return 'absolute w-[110px] md:desktop:w-[209px] h-[166px] md:desktop:h-[316px] transition-transform duration-1500 easy-in-out translate-x-[70px] md:desktop:translate-x-[190px] opacity-80 z-10 will-change-transform';
      case 4:
        return 'absolute w-[70px] md:desktop:w-[134px] h-[99px] md:desktop:h-[189px] transition-transform duration-1500 easy-in-out translate-x-[155px] md:desktop:translate-x-[305px] z-0 will-change-transform';
      default:
        return '';
    }
  };

  const getSlideStyle = (index) => {
    const position = (index - currentIndex + images.length) % images.length;

    if (position === 0 || position === 4) {
      return { backgroundImage: gradient, backgroundSize: 'cover' };
    } else {
      return {
        backgroundImage: `url(${images[index]})`,
        backgroundSize: 'cover',
      };
    }
  };

  return (
    <div className='relative w-[310px] md:desktop:w-[750px] h-[220px] md:desktop:h-[422px] flex justify-center items-center overflow-hidden '>
      {images.map((src, index) => (
        <div
          key={index}
          style={getSlideStyle(index)}
          className={`absolute transition-all duration-1000 border-solid border-2 ease-in-out border-white ${getSlideClass(
            index
          )} `}
        />
      ))}
    </div>
  );
};

export default Slider;
