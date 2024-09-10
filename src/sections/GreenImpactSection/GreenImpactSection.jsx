import { ReactComponent as CO2 } from '../../assets/icons/green-impact-icons/co2.svg';
import { ReactComponent as H2O } from '../../assets/icons/green-impact-icons/h2o.svg';
import { ReactComponent as Lightning } from '../../assets/icons/green-impact-icons/lightning.svg';

const GreenImpactSection = () => {
  return (
    <div className=' px-horizontal-mobile md:px-horizontal-desktop bg-background-best-self-section mt-[52px] pt-[52px] pb-[74px] '>
      <h3 className='text-[25px] text-h2-best-self-color leading-[160%] tracking-[0.04em] texth2-best-self-color text-center'>
        Our Total Green Impact
      </h3>

      <div className='flex flex-col md:desktop:f md:desktop:flex-row md:desktop:gap-[76px]  md:desktop:mt-[26px] md:desktop:justify-center'>
        <div className='relative flex flex-col  items-center after:content-[""] after:w-[80%] after:bg-lines-color after:h-[1px]  after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-16px] mt-[38px] md:desktop:after:hidden md:desktop:before:content-[""] md:desktop:before:bg-lines-color md:desktop:before:w-[1px] md:desktop:before:absolute md:desktop:before:h-full md-desktop:before:w-[1px] md:desktop:before:right-[-40px]'>
          <div className='flex items-center justify-center w-[42px] h-[42px]  bg-[#e2e2e2] rounded-full flex-shrink-0 '>
            <CO2 />
          </div>
          <p className='text-[22px] tracking-[0.02em] text-h2-best-self-color font-semibold mt-[13px]'>
            3,927 kg{' '}
          </p>
          <p className='text-[14px] tracking-[0.03em] text-h2-best-self-color'>
            of CO2 saved
          </p>
        </div>

        <div className='relative flex flex-col  items-center after:content-[""] after:w-[80%] after:bg-lines-color after:h-[1px]  after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-16px] mt-[38px] md:desktop:after:hidden md:desktop:before:content-[""] md:desktop:before:bg-lines-color md:desktop:before:w-[1px] md:desktop:before:absolute md:desktop:before:h-full md-desktop:before:w-[1px] md:desktop:before:right-[-40px]'>
          <div className='flex items-center justify-center w-[42px] h-[42px]  bg-[#e2e2e2] rounded-full flex-shrink-0 '>
            <H2O />
          </div>
          <p className='text-[22px] tracking-[0.02em] text-h2-best-self-color font-semibold mt-[13px]'>
            2,546,167 days{' '}
          </p>
          <p className='text-[14px] tracking-[0.03em] text-h2-best-self-color'>
            of drinking water saved
          </p>
        </div>

        <div className='hidden  relative md:desktop:flex flex-col  items-center after:content-[""] after:w-[80%] after:bg-lines-color after:h-[1px]  after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-16px] mt-[38px] md:desktop:after:hidden'>
          <div className='flex items-center justify-center w-[42px] h-[42px]  bg-[#e2e2e2] rounded-full flex-shrink-0 '>
            <Lightning />
          </div>
          <p className='text-[22px] tracking-[0.02em] text-h2-best-self-color font-semibold mt-[13px]'>
            7,321 kWh
          </p>
          <p className='text-[14px] tracking-[0.03em] text-h2-best-self-color'>
            of energy saved
          </p>
        </div>
      </div>
    </div>
  );
};

export default GreenImpactSection;
