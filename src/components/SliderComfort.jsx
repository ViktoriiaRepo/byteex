import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Navigation } from 'swiper/modules';
import { ReactComponent as LeftArrowIcon } from '../assets/icons/left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../assets/icons/right-arrow.svg';
import { images } from '../sourses/imagesComfort';
import { Card } from './CardComfortSlider';
import { useRef } from 'react';

const SliderComfort = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className='relative w-[380px] m-auto mt-[23px]'>
      <div
        ref={prevRef}
        className='swiper-button-prev-custom absolute inset-y-2/4 -translate-y-1/2 z-10 cursor-pointer left-6'
      >
        <LeftArrowIcon className='w-[7px] h-[14px]  md:desktop:w-[10px] md:desktop:h-[20px]' />
      </div>
      <div
        ref={nextRef}
        className='swiper-button-next-custom absolute inset-y-2/4 -translate-y-1/2 z-10 cursor-pointer right-6'
      >
        <RightArrowIcon className='w-[7px] h-[14px]  md:desktop:w-[10px] md:desktop:h-[20px]' />
      </div>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        loop={true}
        modules={[EffectFlip, Navigation]}
        className='w-[380px] h-[380px] p-[30px]'
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
