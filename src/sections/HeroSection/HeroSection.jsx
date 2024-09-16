import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FreeShippingBanner from '../../components/FreeShippingBanner';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import CustomizeOutfitButton from '../../components/CustomizeOutfitButton';
import Reviews from '../../components/Reviews';
import css from './HeroSection.module.css';
import HeroList from '../../components/HeroList';
import SliderHero from '../../components/SliderHero';
import { fetchProducts } from '../../redux/productsSlice';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  const { products, status, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (products && products.length > 0) {
      const newSlides = products.flatMap((product) =>
        product.attributes.images?.data.map((image) => ({
          imageUrl: image.attributes.url,
          comments: product.attributes.comments.data,
        }))
      );
      setSlides(newSlides.slice(0, 7));
    }
  }, [products]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const currentReviewIndex = (currentIndex + 2) % slides.length;
  const currentReview = slides[currentReviewIndex]?.comments[0];

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <FreeShippingBanner />
      <div
        className={`px-horizontal-mobile md:px-horizontal-desktop ${css.wave_top}`}
      >
        <div className='flex flex-col md:desktop:flex-row md:desktop:gap-[94px]'>
          <div className='flex flex-col items-center md:desktop:items-start md:desktop:w-[calc(100%-725px-94px)]'>
            <div className='flex justify-center md:desktop:justify-start items-center mt-[14px] md:desktop:mt-[33px]'>
              <Logo className='w-[200px] h-[35px]' />
            </div>

            <h2 className='mt-[14px] md:desktop:mt-[62px] md:desktop:text-[38px] text-h2custom text-accent-color text-center md:desktop:text-left'>
              Don’t apologize for being comfortable.
            </h2>

            <div className='hidden md:desktop:flex  flex-col gap-4 mt-[20px]  md:desktop:mt-[59px] md:desktop:w-full md:desktop:max-w-[414px]'>
              <HeroList />
              <CustomizeOutfitButton />
              <Reviews currentReview={currentReview} />
            </div>
          </div>

          <div className='mt-[17px] md:desktop:mt-0 flex justify-center md:desktop:flex-shrink-0 md:desktop:w-[725px] md:desktop:h-auto md:desktop:flex md:desktop:justify-center md:desktop:items-center'>
            <SliderHero slides={slides} currentIndex={currentIndex} />
          </div>

          <div className='flex flex-col gap-4 md:desktop:hidden  mt-[20px]'>
            <HeroList />
            <CustomizeOutfitButton />
            <Reviews currentReview={currentReview} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
