import { Card } from '../../components/CardComfortSlider';
import { motion } from 'framer-motion';

import CustomizeOutfitButton from '../../components/CustomizeOutfitButton';
import SliderComfort from '../../components/SliderComfort';
import Stars from '../../components/Stars';
import { images } from '../../sourses/imagesComfort';

const ComfortSection = () => {
  return (
    <div className='px-horizontal-mobile md:px-horizontal-desktop flex flex-col items-center'>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ amount: 0.3 }}
        className='h2-header mt-[57px]'
      >
        Comfort made easy
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ amount: 0.3 }}
        className='block md:desktop:hidden'
      >
        <SliderComfort />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ amount: 0.3 }}
        className='hidden md:desktop:w-full md:desktop:mt-[46px] md:desktop:flex md:desktop:justify-around md:desktop:gap-4'
      >
        {images.map((image, index) => (
          <Card key={index} image={image} />
        ))}
      </motion.div>

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
  );
};

export default ComfortSection;
