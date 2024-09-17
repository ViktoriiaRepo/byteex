import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { motion } from 'framer-motion';

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
  const [reviewKey, setReviewKey] = useState(0);

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
      setReviewKey((prevKey) => prevKey + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const currentReviewIndex = (currentIndex + 2) % slides.length;
  const currentReview = slides[currentReviewIndex]?.comments[0];

  if (error) {
    return <div>Error: {error}</div>;
  }

  const isLoading = status === 'loading';

  return (
    <>
      <FreeShippingBanner />
      <div
        className={`px-horizontal-mobile md:px-horizontal-desktop ${css.wave_top}`}
      >
        <div className='flex flex-col md:desktop:flex-row md:desktop:gap-[94px]'>
          <div className='flex flex-col items-center md:desktop:items-start md:desktop:w-[calc(100%-725px-94px)]'>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.3 }}
            >
              <div className='flex justify-center md:desktop:justify-start items-center mt-[14px] md:desktop:mt-[33px]'>
                <Logo className='w-[200px] h-[35px]' />
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 1 }}
              className='mt-[14px] md:desktop:mt-[62px] md:desktop:text-[38px] text-h2custom text-accent-color text-center md:desktop:text-left'
            >
              Don’t apologize for being comfortable.
            </motion.h2>

            <div className='hidden md:desktop:flex flex-col gap-4 mt-[20px] md:desktop:mt-[59px] md:desktop:w-full md:desktop:max-w-[414px]'>
              <HeroList />
              <CustomizeOutfitButton />
              <motion.div
                key={reviewKey}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1 }}
              >
                {isLoading ? (
                  <div>Loading Reviews...</div>
                ) : (
                  <Reviews currentReview={currentReview} />
                )}
              </motion.div>
            </div>
          </div>

          <div className='mt-[17px] md:desktop:mt-0 flex justify-center md:desktop:flex-shrink-0 md:desktop:w-[725px] md:desktop:h-auto md:desktop:flex md:desktop:justify-center md:desktop:items-center'>
            <SliderHero
              slides={slides}
              currentIndex={currentIndex}
              isLoading={isLoading}
            />
          </div>

          <div className='flex flex-col gap-4 md:desktop:hidden mt-[20px]'>
            <HeroList />
            <CustomizeOutfitButton />
            <motion.div
              key={reviewKey}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
            >
              {isLoading ? (
                <div>Loading Reviews...</div>
              ) : (
                <Reviews currentReview={currentReview} />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
