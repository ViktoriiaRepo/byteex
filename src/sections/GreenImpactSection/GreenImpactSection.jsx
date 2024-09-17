import { motion } from 'framer-motion';

import { ReactComponent as CO2 } from '../../assets/icons/green-impact-icons/co2.svg';
import { ReactComponent as H2O } from '../../assets/icons/green-impact-icons/h2o.svg';
import { ReactComponent as Lightning } from '../../assets/icons/green-impact-icons/lightning.svg';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const GreenImpactSection = () => {
  return (
    <div className=' px-horizontal-mobile md:px-horizontal-desktop bg-background-best-self-section mt-[52px] pt-[52px] pb-[74px] '>
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ amount: 0.3 }}
        className='text-[25px] text-h2-best-self-color leading-[160%] tracking-[0.04em] texth2-best-self-color text-center'
      >
        Our Total Green Impact
      </motion.h3>

      <div className='flex flex-col md:desktop:f md:desktop:flex-row md:desktop:gap-[76px]  md:desktop:mt-[26px] md:desktop:justify-center'>
        <motion.div
          className='relative flex flex-col items-center after:content-[""] after:w-[80%] after:bg-lines-color after:h-[1px] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-16px] mt-[38px] md:desktop:after:hidden md:desktop:before:content-[""] md:desktop:before:bg-lines-color md:desktop:before:w-[1px] md:desktop:before:absolute md:desktop:before:h-full md-desktop:before:w-[1px] md:desktop:before:right-[-40px]'
          initial='hidden'
          whileInView='visible'
          transition={{ staggerChildren: 0.3 }}
        >
          <motion.div
            className='flex items-center justify-center w-[42px] h-[42px] bg-[#e2e2e2] rounded-full flex-shrink-0'
            variants={itemVariants}
            transition={{ duration: 0.5 }}
          >
            <CO2 />
          </motion.div>
          <motion.p
            className='text-[22px] tracking-[0.02em] text-h2-best-self-color font-semibold mt-[13px]'
            variants={itemVariants}
          >
            3,927 kg
          </motion.p>
          <motion.p
            className='text-[14px] tracking-[0.03em] text-h2-best-self-color'
            variants={itemVariants}
          >
            of CO2 saved
          </motion.p>
        </motion.div>

        <motion.div
          className='relative flex flex-col items-center after:content-[""] after:w-[80%] after:bg-lines-color after:h-[1px] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-16px] mt-[38px] md:desktop:after:hidden md:desktop:before:content-[""] md:desktop:before:bg-lines-color md:desktop:before:w-[1px] md:desktop:before:absolute md:desktop:before:h-full md-desktop:before:w-[1px] md:desktop:before:right-[-40px]'
          initial='hidden'
          whileInView='visible'
          transition={{ staggerChildren: 0.3 }}
        >
          <motion.div
            className='flex items-center justify-center w-[42px] h-[42px] bg-[#e2e2e2] rounded-full flex-shrink-0'
            variants={itemVariants}
            transition={{ duration: 0.5 }}
          >
            <H2O />
          </motion.div>
          <motion.p
            className='text-[22px] tracking-[0.02em] text-h2-best-self-color font-semibold mt-[13px]'
            variants={itemVariants}
          >
            2,546,167 days
          </motion.p>
          <motion.p
            className='text-[14px] tracking-[0.03em] text-h2-best-self-color'
            variants={itemVariants}
          >
            of drinking water saved
          </motion.p>
        </motion.div>

        <motion.div
          className='hidden relative md:desktop:flex flex-col items-center after:content-[""] after:w-[80%] after:bg-lines-color after:h-[1px] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-16px] mt-[38px] md:desktop:after:hidden'
          initial='hidden'
          whileInView='visible'
          transition={{ staggerChildren: 0.3 }}
        >
          <motion.div
            className='flex items-center justify-center w-[42px] h-[42px] bg-[#e2e2e2] rounded-full flex-shrink-0'
            variants={itemVariants}
            transition={{ duration: 0.5 }}
          >
            <Lightning />
          </motion.div>
          <motion.p
            className='text-[22px] tracking-[0.02em] text-h2-best-self-color font-semibold mt-[13px]'
            variants={itemVariants}
          >
            7,321 kWh
          </motion.p>
          <motion.p
            className='text-[14px] tracking-[0.03em] text-h2-best-self-color'
            variants={itemVariants}
          >
            of energy saved
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default GreenImpactSection;
