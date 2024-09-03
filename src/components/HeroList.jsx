import { ReactComponent as SunAndMoonIcon } from '../assets/icons/sun-and-moon.svg';
import { ReactComponent as CartIcon } from '../assets/icons/cart.svg';
import { ReactComponent as WavesIcon } from '../assets/icons/waves.svg';

const HeroList = () => {
  return (
    <ul className='mt-[24px] list-disc list-inside space-y-7 font-secondary px-[21px] md:desktop:px-0'>
      <li className='flex items-center space-x-3'>
        <div className='flex items-center justify-center w-[31px] h-[31px] text-gray-700 bg-background-color rounded-full flex-shrink-0'>
          <SunAndMoonIcon className='w-[23px] h-[23px]' />
        </div>
        <p className='text-[13px] leading-[138%] tracking-[0.03em] text-[#676869]'>
          Beautiful, comfortable loungewear for day or night.
        </p>
      </li>
      <li className='flex items-center space-x-3'>
        <div className='flex items-center justify-center w-[31px] h-[31px] text-gray-700 bg-background-color rounded-full flex-shrink-0'>
          <CartIcon className='block w-[21px] h-[17px]' />
        </div>
        <p className='text-[13px] leading-[138%] tracking-[0.03em] text-[#676869]'>
          No wasteful extras, like tags or plastic packaging.
        </p>
      </li>
      <li className='flex items-center space-x-3'>
        <div className='flex items-center justify-center w-[31px] h-[31px] text-gray-700 bg-background-color rounded-full flex-shrink-0'>
          <WavesIcon className='w-[14px] h-[13px]' />
        </div>
        <p className='text-[13px] leading-[138%] tracking-[0.03em] text-[#676869]'>
          Our signature fabric is incredibly comfortable — unlike anything
          you’ve ever felt.
        </p>
      </li>
    </ul>
  );
};

export default HeroList;
