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
import { useSelector } from 'react-redux';

const SliderBenefits = () => {
  const products = useSelector((state) => state.products.products);
  const [activeThumb, setActiveThumb] = useState(null);
  const [productName, setProductName] = useState(
    products[0]?.attributes?.productName || ''
  );

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.realIndex;
    setProductName(products[activeIndex]?.attributes?.productName || '');
  };

  if (!products || products.length === 0) {
    return <p>Loading...</p>;
  }

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
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <img
              src={product.attributes.images?.data[0]?.attributes.url}
              alt={product.attributes.productName}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setActiveThumb}
        spaceBetween={7}
        slidesPerView={7}
        modules={[Navigation, Thumbs]}
        className='product-images-slider-thumbs'
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className='product-images-slider-thumbs-wrapper'>
              <img
                src={product.attributes.images?.data[0]?.attributes.url}
                alt={product.attributes.productName}
                className='absolute top-0 left-0 w-full'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className='font-secondary text-[13px] text-center mt-[-16px] tracking-[0.03em]'>
        {productName}
      </p>
    </>
  );
};

export default SliderBenefits;
