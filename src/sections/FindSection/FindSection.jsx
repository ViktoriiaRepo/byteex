import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import CustomizeOutfitButton from '../../components/CustomizeOutfitButton';
import Highlights from '../../components/Highlights';
import PaymentAbility from '../../components/PaymentAbility';
import SliderHero from '../../components/SliderHero';
import Stars from '../../components/Stars';
import { useSelector } from 'react-redux';

const FindSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    if (products && products.length > 0) {
      const newSlides = products.flatMap((product) =>
        product.attributes.images.data.map((image) => ({
          imageUrl: image.attributes.formats.small.url,
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

  const isLoading = status === 'loading';

  return (
    <div className='px-horizontal-mobile md:px-horizontal-desktop py-[52px] text-center bg-footer-gradient'>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ amount: 0.3 }}
        className='h2-header text-center'
      >
        Find something you love
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ amount: 0.3 }}
        className='text-[15px] tracking-[0.03em] md:desktop:hidden'
      >
        Click below to browse our collection!
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ amount: 0.3 }}
        className='hidden md:desktop:block md:desktop:text-[15px] md:desktop:tracking-[0.03em] md:desktop:mt-[16px]'
      >
        Explore our carefully curated collection and uncover items that match
        your style.<br></br> Whether you&apos;re looking for timeless classics
        or modern trends, we have something for everyone. Click below to browse
        and find your perfect fit!
      </motion.p>
      <div className='mt-[40px] flex justify-center'>
        <SliderHero
          slides={slides}
          currentIndex={currentIndex}
          isLoading={isLoading}
        />
      </div>

      <div className='flex justify-center'>
        <CustomizeOutfitButton />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ amount: 0.3 }}
        className='flex mt-[12px] justify-center items-center md:desktop:hidden'
      >
        <Stars />

        <p className='text-[11px] tracking-[0.02em] font-secondary text-secondary-text-color'>
          Over 500+ 5 Star Reviews Online
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ amount: 0.3 }}
        className='hidden md:desktop:flex justify-center mt-3'
      >
        <PaymentAbility />
      </motion.div>
      <div>
        <Highlights />
      </div>
    </div>
  );
};

export default FindSection;
