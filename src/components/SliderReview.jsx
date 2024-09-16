import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import { ReactComponent as LeftArrowIcon } from '../assets/icons/left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../assets/icons/right-arrow.svg';

import { useRef } from 'react';
import CardReview from './CardReview';

const SliderReview = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const reviews = useSelector((state) => state.products.reviews);

  return (
    <div className='relative w-full m-auto'>
      <div
        ref={prevRef}
        className='swiper-button-prev-review absolute inset-y-2/4 -translate-y-1/2 z-10 cursor-pointer left-2'
      >
        <LeftArrowIcon className='w-[7px] h-[14px]  md:desktop:w-[10px] md:desktop:h-[20px]' />
      </div>
      <div
        ref={nextRef}
        className='swiper-button-next-review absolute inset-y-2/4 -translate-y-1/2 z-10 cursor-pointer right-2'
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
        modules={[EffectFlip, Pagination, Navigation]}
        className='w-full h-[320px] p-[50px]'
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
