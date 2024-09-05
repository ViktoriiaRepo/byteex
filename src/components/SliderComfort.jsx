import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFlip, Navigation } from 'swiper/modules';

import { ReactComponent as LeftArrowIcon } from '../assets/icons/left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../assets/icons/right-arrow.svg';
import { Card } from './Card';
import { images } from '../sourses/imagesComfort';

const SliderComfort = () => {
  return (
    <div className='relative w-[360px] m-auto mt-[23px]'>
      <div className='swiper-button-prev-custom absolute inset-y-2/4 -translate-y-1/2 z-10 cursor-pointer left-0'>
        <LeftArrowIcon className='w-[7px] h-[14px]  md:desktop:w-[10px] md:desktop:h-[20px]' />
      </div>
      <div className='swiper-button-next-custom absolute inset-y-2/4 -translate-y-1/2 z-10 cursor-pointer right-0'>
        <RightArrowIcon className='w-[7px] h-[14px]  md:desktop:w-[10px] md:desktop:h-[20px]' />
      </div>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        loop={true}
        modules={[EffectFlip, Navigation]}
        className='w-[325px] h-[325px] p-[50px]'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className='flex justify-center items-center'>
            <Card image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderComfort;
