import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import Artboard1 from '../assets/images/Artboard1.png';
import Artboard2 from '../assets/images/Artboard2.png';
import Artboard3 from '../assets/images/Artboard3.png';
import Artboard4 from '../assets/images/Artboard4.png';
import Artboard5 from '../assets/images/Artboard5.png';

const images = [
  { src: Artboard1, width: '126px', height: '15px' },
  { src: Artboard2, width: '73px', height: '35px' },
  { src: Artboard3, width: '145px', height: '30px' },
  { src: Artboard4, width: '100px', height: '26px' },
  { src: Artboard5, width: '150px', height: '40px' },
];

const SliderLogotypes = () => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        modules={[Pagination]}
        className='mySwiper h-[34px] items-center justify-center'
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            style={{ width: image.width }}
            className='flex items-center justify-center'
          >
            <img
              src={image.src}
              alt={`Artboard ${index + 1}`}
              style={{
                width: image.width,
                height: image.height,
                objectFit: 'contain',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='relative flex justify-center mt-[32px]'>
        <div className='swiper-pagination '></div>
      </div>
    </>
  );
};

export default SliderLogotypes;
