import { motion } from 'framer-motion';
import listItems from '../sourses/listIcons';

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const HeroList = () => {
  return (
    <motion.ul
      className='mt-[24px] list-disc list-inside space-y-7 font-secondary px-[21px] md:desktop:px-0'
      initial='hidden'
      whileInView='visible'
      transition={{ staggerChildren: 0.3 }}
    >
      {listItems.map((item, index) => (
        <motion.li
          key={index}
          className='flex items-center space-x-3'
          variants={itemVariants}
          transition={{ duration: 0.5, delay: index * 0.3 }}
        >
          <div className='flex items-center justify-center w-[31px] h-[31px] text-gray-700 bg-background-color rounded-full flex-shrink-0'>
            {item.icon}
          </div>
          <p className='text-[13px] leading-[138%] tracking-[0.03em] text-[#676869]'>
            {item.text}
          </p>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default HeroList;
