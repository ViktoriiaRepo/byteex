import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import { data } from '../sourses/reviewsData';
import CardReview from './CardReview';
import { useRef } from 'react';

import { ReactComponent as LeftArrowIcon } from '../assets/icons/left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../assets/icons/right-arrow.svg';

const SliderReviewDesktop = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className='relative w-full m-auto px-10'>
      <div
        ref={prevRef}
        className='swiper-button-prev-review absolute inset-y-2/4 -translate-y-1/2 z-10 cursor-pointer left-2'
      >
        <LeftArrowIcon className='md:desktop:w-[10px] md:desktop:h-[20px]' />
      </div>
      <div
        ref={nextRef}
        className='swiper-button-next-review absolute inset-y-2/4 -translate-y-1/2 z-10 cursor-pointer right-2'
      >
        <RightArrowIcon className='md:desktop:w-[10px] md:desktop:h-[20px]' />
      </div>
      <Swiper
        slidesPerView={3}
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
      >
        {data.map((review, index) => (
          <SwiperSlide key={index} className='flex justify-center items-center'>
            <CardReview review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderReviewDesktop;
