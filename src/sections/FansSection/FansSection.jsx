import { motion } from 'framer-motion';

import CustomizeOutfitButton from '../../components/CustomizeOutfitButton';
import Gallery from '../../components/Gallery';
import SliderReview from '../../components/SliderReview';
import Stars from '../../components/Stars';

const FansSection = () => {
  return (
    <div className='mt-[59px] text-center'>
      <div className='px-horizontal-mobile md:px-horizontal-desktop'>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className='h2-header'
        >
          What are our fans saying?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ amount: 0.3 }}
          className='text-[15px] leading-[153%] tracking-[0.03em] mt-4'
        >
          Our products have become a staple in their everyday lives, offering
          unmatched comfort and style. Whether it&apos;s lounging at home or
          stepping out, people love how effortlessly versatile and cozy our
          collection feels
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ amount: 0.3 }}
        className='mt-12 md:desktop:mt-[55px]'
      >
        <Gallery />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ amount: 0.3 }}
        className='px-horizontal-mobile md:px-horizontal-desktop  md:desktop:flex mt-[55px]'
      >
        <SliderReview />
      </motion.div>

      <div className='flex flex-col items-center'>
        <CustomizeOutfitButton />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ amount: 0.3 }}
          className='flex mt-[12px] items-center'
        >
          <Stars />

          <p className='text-[11px] tracking-[0.02em] font-secondary text-secondary-text-color'>
            Over 500+ 5 Star Reviews Online
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FansSection;
