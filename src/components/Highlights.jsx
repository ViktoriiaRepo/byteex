import { ReactComponent as Cart } from '../assets/icons/cart.svg';
import { ReactComponent as Car } from '../assets/icons/car2.svg';
import { ReactComponent as Agr } from '../assets/icons/agr.svg';

const Highlights = () => {
  return (
    <div className='hidden md:desktop:flex  md:desktop:flex-row md:desktop:gap-[46px]  md:desktop:mt-[26px] md:desktop:justify-center'>
      <div className='relative max-w-[164px] flex flex-row gap-3 items-center  md:desktop:after:hidden md:desktop:before:content-[""] md:desktop:before:bg-lines-color md:desktop:before:w-[1px] md:desktop:before:absolute md:desktop:before:h-full md-desktop:before:w-[1px] md:desktop:before:right-[-24px]'>
        <div className='flex items-center justify-center w-[33px] h-[33px]  text-green-300 bg-[#e2e2e2] rounded-full flex-shrink-0 '>
          <Car className='w-[21px] h-[14px] text-primary-text-color' />
        </div>
        <p className='text-[14px] tracking-[0.03em] leading-[143%] text-left'>
          FREE Shipping on Orders over $200
        </p>
      </div>

      <div className='relative max-w-[164px] flex flex-row gap-3 items-center  md:desktop:after:hidden md:desktop:before:content-[""] md:desktop:before:bg-lines-color md:desktop:before:w-[1px] md:desktop:before:absolute md:desktop:before:h-full md-desktop:before:w-[1px] md:desktop:before:right-[-24px]'>
        <div className='flex items-center justify-center w-[33px] h-[33px]  text-green-300 bg-[#e2e2e2] rounded-full flex-shrink-0 '>
          <Agr className='w-[18px] h-[20px] text-primary-text-color' />
        </div>
        <p className='text-[14px] tracking-[0.03em] leading-[143%] text-left'>
          Over 500+ 5 Star Reviews Online
        </p>
      </div>

      <div className='relative max-w-[164px] flex flex-row gap-3 items-center '>
        <div className='flex items-center justify-center w-[33px] h-[33px]  text-green-300 bg-[#e2e2e2] rounded-full flex-shrink-0 '>
          <Cart className='w-[18px] h-[20px] text-primary-text-color' />
        </div>
        <p className='text-[14px] tracking-[0.03em] leading-[143%] text-left'>
          Made ethically and responsibly.
        </p>
      </div>
    </div>
  );
};

export default Highlights;
