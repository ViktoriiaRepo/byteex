import { Swiper, SwiperSlide } from 'swiper/react';

import { useSelector } from 'react-redux';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import CardReview from './CardReview';
import { useRef } from 'react';

import { ReactComponent as LeftArrowIcon } from '../assets/icons/left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../assets/icons/right-arrow.svg';

const SliderReview = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const reviews = useSelector((state) => state.products.reviews);
  return (
    <div className='relative w-full m-auto px-10'>
      <div
        ref={prevRef}
        className='swiper-button-prev-review absolute inset-y-2/4 -translate-y-1/2 z-10 cursor-pointer left-2'
      >
        <LeftArrowIcon className='w-[7px] h-[14px] md:desktop:w-[10px] md:desktop:h-[20px]' />
      </div>
      <div
        ref={nextRef}
        className='swiper-button-next-review absolute inset-y-2/4 -translate-y-1/2 z-10 cursor-pointer right-2'
      >
        <RightArrowIcon className='w-[7px] h-[14px] md:desktop:w-[10px] md:desktop:h-[20px]' />
      </div>
      <Swiper
        spaceBetween={45}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Navigation]}
        className='mySwiper'
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          960: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1464: {
            slidesPerView: 3,
            spaceBetween: 45,
          },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className='flex justify-center items-center'>
            <CardReview review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderReview;
