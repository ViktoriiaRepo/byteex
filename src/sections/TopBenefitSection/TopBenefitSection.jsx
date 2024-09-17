import { ReactComponent as SunAndMoonIcon } from '../../assets/icons/sun-and-moon.svg';
import { ReactComponent as LeafIcon } from '../../assets/icons/leaf.svg';
import { ReactComponent as WavesIcon } from '../../assets/icons/waves.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';
import { motion } from 'framer-motion';
import SliderLogotypes from '../../components/SliderLogotypes';
import RunningLine from '../../components/RunningLine/RunningLine';
import SliderBenefits from '../../components/SliderBenefits/SliderBenefits';
import CustomizeOutfitButton from '../../components/CustomizeOutfitButton';
import Stars from '../../components/Stars';

const benefits = [
  {
    icon: <CartIcon className='w-[21px] h-[17px]' />,
    title: 'Ethically sourced.',
    description:
      'Our products are created from materials sourced responsibly, ensuring fair labor practices and environmental stewardship throughout our supply chain.',
  },
  {
    icon: <LeafIcon className='w-[23px] h-[23px]' />,
    title: 'Responsibly made.',
    description:
      'We take pride in our manufacturing process, focusing on sustainability and minimizing our ecological footprint while maintaining high-quality standards.',
  },
  {
    icon: <SunAndMoonIcon className='w-[23px] h-[23px]' />,
    title: 'Made for living in.',
    description:
      'Engineered for everyday use, our products offer both durability and comfort, designed to seamlessly integrate into your daily life.',
  },
  {
    icon: <WavesIcon className='w-[14px] h-[13px]' />,
    title: 'Unimaginably comfortable.',
    description:
      'Experience unparalleled comfort with our thoughtfully crafted items, featuring premium materials and innovative design for the ultimate relaxation.',
  },
];

const TopBenefitSection = () => {
  return (
    <div className='px-horizontal-mobile md:px-horizontal-desktop flex flex-col items-center bg-basic-gradient pt-6'>
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

      <div className=' md:desktop:mt-[114px]'>
        <div className='flex flex-col items-center md:desktop:flex-row-reverse md:desktop:items-start md:desktop:gap-[180px]'>
          <div className='w-[303px] h-[453px] md:desktop:w-[453px] md:desktop:h-[668px] relative mt-[25px] md:desktop:mt-0 md:desktop:mr-[40px]'>
            <SliderBenefits />
          </div>

          <div className='mt-[26px] md:desktop:mt-0 '>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className='h2-header hidden md:desktop:block'
            >
              Loungewear you can be proud of.
            </motion.h2>

            <motion.ul
              className='mt-[24px] list-inside px-[21px] md:desktop:px-0 space-y-7 font-secondary'
              initial='hidden'
              whileInView='visible'
              transition={{ staggerChildren: 0.5 }}
            >
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className='relative flex flex-col items-center md:desktop:flex-row md:desktop:gap-[32px] md:desktop:items-start'
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className='flex items-center justify-center w-[42px] h-[42px] text-gray-700 bg-background-color rounded-full flex-shrink-0'>
                    {benefit.icon}
                  </div>
                  <div className='text-center md:desktop:text-left'>
                    <h3 className='text-[20px] tracking-[0.04em] text-accent-color mt-[20px] md:desktop:mt-[10px]'>
                      {benefit.title}
                    </h3>
                    <p className='mt-[20px] text-[14px] md:desktop:text-[15px] leading-[129%] md:desktop:leading-[154%] text-p-text-color'>
                      {benefit.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        <div className='md:desktop:hidden flex flex-col items-center'>
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
    </div>
  );
};

export default TopBenefitSection;
