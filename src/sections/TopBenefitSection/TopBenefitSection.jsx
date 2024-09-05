import { ReactComponent as SunAndMoonIcon } from '../../assets/icons/sun-and-moon.svg';
import { ReactComponent as LeafIcon } from '../../assets/icons/leaf.svg';
import { ReactComponent as WavesIcon } from '../../assets/icons/waves.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';

import SliderLogotypes from '../../components/SliderLogotypes';
import RunningLine from '../../components/RunningLine/RunningLine';
import SliderBenefits from '../../components/SliderBenefits/SliderBenefits';
import CustomizeOutfitButton from '../../components/CustomizeOutfitButton';
import Stars from '../../components/Stars';

const TopBenefitSection = () => {
  return (
    <>
      <div className='px-horizontal-mobile md:px-horizontal-desktop flex flex-col items-center bg-basic-gradient  pt-6 '>
        <p className='text-[15px] text-center text-[#868787] tracking-[0.03em]'>
          as seen in
        </p>
        <div className='w-full h-auto relative mt-[18px] md:desktop:hidden'>
          <SliderLogotypes />
        </div>

        <RunningLine />

        <h2 className='h2-header mt-[42px] md:desktop:hidden'>
          Loungewear you can be proud of.
        </h2>

        <div className='md:desktop:mt-[114px]'>
          <div className='flex flex-col items-center md:desktop:flex-row-reverse md:desktop:items-start md:desktop:gap-[180px]'>
            <div className='w-[303px] h-[453px] md:desktop:w-[453px] md:desktop:h-[668px] relative mt-[25px] md:desktop:mt-0  md:desktop:mr-[40px]'>
              <SliderBenefits />
            </div>

            <div>
              <h2 className='h2-header  hidden md:desktop:block'>
                Loungewear you can be proud of.
              </h2>

              <div className='relative flex flex-col items-center mt-24 md:desktop:mt-[74px] after:content-[""] after:w-full md:desktop:after:hidden after:h-[1px] after:bg-lines-color after:bottom-[-36px] after:absolute after:left-0 after:right-0 md:desktop:flex md:desktop:flex-row md:desktop:gap-[32px] md:desktop:items-start'>
                <div className='flex items-center justify-center w-[42px] h-[42px] text-gray-700 bg-background-color rounded-full flex-shrink-0 '>
                  <CartIcon className='w-[21px] h-[17px] ' />
                </div>
                <div>
                  <h3 className='text-[20px] text-center md:desktop:mt-[10px] tracking-[0.04em] text-accent-color mt-[20px] md:desktop:text-left'>
                    Ethically sourced.
                  </h3>
                  <p className='mt-[20px] md:desktop:[14px] md:desktop:mt-[14px]  text-center md:desktop:text-left px-[92px] md:desktop:px-0 text-[14px] md:desktop:text-[15px] leading-[129%] md:desktop:leading-[154%] text-p-text-color'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce lobortis sapien facilisis tincidunt pellentesque. In
                    eget ipsum et felis finibus consequat.
                  </p>
                </div>
              </div>

              <div className='relative flex flex-col items-center mt-24 md:desktop:mt-[6px] after:content-[""] after:w-full md:desktop:after:hidden after:h-[1px] after:bg-lines-color after:bottom-[-36px] after:absolute after:left-0 after:right-0 md:desktop:flex md:desktop:flex-row md:desktop:gap-[32px] md:desktop:items-start'>
                <div className='flex items-center justify-center w-[42px] h-[42px] text-gray-700 bg-background-color rounded-full flex-shrink-0 '>
                  <LeafIcon className='w-[23px] h-[23px]' />
                </div>
                <div>
                  <h3 className='text-[20px] text-center md:desktop:mt-[12px] tracking-[0.04em] text-accent-color mt-[20px] md:desktop:text-left'>
                    Responsibly made.
                  </h3>
                  <p className='mt-[20px] md:desktop:mt-[14px]  text-center md:desktop:text-left px-[92px] md:desktop:px-0 text-[14px] md:desktop:text-[15px] leading-[129%] md:desktop:leading-[154%] text-p-text-color'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce lobortis sapien facilisis tincidunt pellentesque. In
                    eget ipsum et felis finibus consequat.
                  </p>
                </div>
              </div>

              <div className='relative flex flex-col items-center mt-24 md:desktop:mt-[6px] after:content-[""] after:w-full md:desktop:after:hidden after:h-[1px] after:bg-lines-color after:bottom-[-36px] after:absolute after:left-0 after:right-0 md:desktop:flex md:desktop:flex-row md:desktop:gap-[32px] md:desktop:items-start'>
                <div className='flex items-center justify-center w-[42px] h-[42px] text-gray-700 bg-background-color rounded-full flex-shrink-0 '>
                  <SunAndMoonIcon className='w-[23px] h-[23px]' />
                </div>
                <div>
                  <h3 className='text-[20px] text-center md:desktop:mt-[12px] tracking-[0.04em] text-accent-color mt-[20px] md:desktop:text-left'>
                    Made for living in.
                  </h3>
                  <p className='mt-[20px] md:desktop:mt-[14px]  text-center md:desktop:text-left px-[92px] md:desktop:px-0 text-[14px] md:desktop:text-[15px] leading-[129%] md:desktop:leading-[154%] text-p-text-color'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce lobortis sapien facilisis tincidunt pellentesque. In
                    eget ipsum et felis finibus consequat.
                  </p>
                </div>
              </div>

              <div className='relative flex flex-col items-center mt-24 md:desktop:mt-[6px]   md:desktop:after:hidden    md:desktop:flex md:desktop:flex-row md:desktop:gap-[32px] md:desktop:items-start'>
                <div className='flex items-center justify-center w-[42px] h-[42px] text-gray-700 bg-background-color rounded-full flex-shrink-0 '>
                  <WavesIcon className='w-[14px] h-[13px]' />
                </div>
                <div>
                  <h3 className='text-[20px] text-center md:desktop:mt-[12px] tracking-[0.04em] text-accent-color mt-[20px] md:desktop:text-left'>
                    Unimaginably comfortable.
                  </h3>
                  <p className='mt-[20px] md:desktop:mt-[14px]  text-center md:desktop:text-left px-[92px] md:desktop:px-0 text-[14px] md:desktop:text-[15px] leading-[129%] md:desktop:leading-[154%] text-p-text-color'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce lobortis sapien facilisis tincidunt pellentesque. In
                    eget ipsum et felis finibus consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='md:desktop:hidden flex flex-col items-center'>
            <CustomizeOutfitButton />

            <div className='flex mt-[12px] items-center'>
              <Stars />

              <p className='text-[11px] tracking-[0.02em] font-secondary text-secondary-text-color'>
                Over 500+ 5 Star Reviews Online
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBenefitSection;
