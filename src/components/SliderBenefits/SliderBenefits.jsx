import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';

import { ReactComponent as LeftArrowIcon } from '../../assets/icons/left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../../assets/icons/right-arrow.svg';

import './SliderBenefits.css';
import { images } from '../../sourses/imagesBenefit';

const SliderBenefits = () => {
  const [activeThumb, setActiveThumb] = useState(null);
  const [description, setDescription] = useState(images[0].description);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.realIndex;
    setDescription(images[activeIndex].description);
  };

  return (
    <>
      <div className='swiper-button-prev-custom absolute inset-y-2/4 -translate-y-1/2 z-10 cursor-pointer left-[-30px]'>
        <LeftArrowIcon className='w-[7px] h-[14px]  md:desktop:w-[10px] md:desktop:h-[20px]' />
      </div>
      <div className='swiper-button-next-custom absolute inset-y-2/4 -translate-y-1/2 z-10 cursor-pointer right-[-30px]'>
        <RightArrowIcon className='w-[7px] h-[14px]  md:desktop:w-[10px] md:desktop:h-[20px]' />
      </div>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        onSlideChange={handleSlideChange}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
        className='product-images-slider'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={7}
        slidesPerView={7}
        modules={[Navigation, Thumbs]}
        className='product-images-slider-thumbs'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='product-images-slider-thumbs-wrapper'>
              <img
                src={image.src}
                alt={image.alt}
                className='absolute top-0 left-0 w-full'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className='font-secondary text-[13px] text-center mt-[-6px] tracking-[0.03em]'>
        {description}
      </p>
    </>
  );
};

export default SliderBenefits;
