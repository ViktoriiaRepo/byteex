import FreeShippingBanner from '../FreeShippingBanner/FreeShippingBanner';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

import Slider from '../Slider/Slider';
import CustomizeOutfitButton from '../CustomizeOutfitButton';
import Reviews from '../Reviews';
import css from './HeroSection.module.css';
import HeroList from '../HeroList';

const HeroSection = () => {
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
              <Reviews />
            </div>
          </div>

          <div className='mt-[17px] md:desktop:mt-0 flex justify-center md:desktop:flex-shrink-0 md:desktop:w-[725px] md:desktop:h-auto md:desktop:flex md:desktop:justify-center md:desktop:items-center'>
            <Slider />
          </div>

          <div className='flex flex-col gap-4 md:desktop:hidden  mt-[20px]'>
            <HeroList />
            <CustomizeOutfitButton />
            <Reviews />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
