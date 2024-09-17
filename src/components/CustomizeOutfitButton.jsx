import { ReactComponent as ArrowIcon } from '../assets/icons/arrow.svg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CustomizeOutfitButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/gallery');
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ amount: 0.3 }}
      className='mt-[28px] md:desktop:mt-[59px] flex justify-center md:desktop:justify-start'
    >
      <button
        onClick={handleButtonClick}
        className='bg-accent-color text-button-text-color w-[370px] h-[56px] font-secondary rounded-[5px] flex items-center justify-center  space-x-3.5 transition-colors duration-300 hover:bg-button-hover-color hover:shadow-lg'
      >
        <span>Customize Your Outfit</span>
        <ArrowIcon className='w-[23px] h-[10px]' />
      </button>
    </motion.div>
  );
};

export default CustomizeOutfitButton;
