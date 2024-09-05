import { Card } from '../../components/Card';
import CustomizeOutfitButton from '../../components/CustomizeOutfitButton';
import SliderComfort from '../../components/SliderComfort';
import Stars from '../../components/Stars';
import { images } from '../../sourses/imagesComfort';

const ComfortSection = () => {
  return (
    <div className='px-horizontal-mobile md:px-horizontal-desktop flex flex-col items-center'>
      <h2 className='h2-header mt-[57px]'>Comfort made easy</h2>
      <div className='block md:desktop:hidden'>
        <SliderComfort />
      </div>
      <div className='hidden md:desktop:w-full md:desktop:mt-[46px] md:desktop:flex md:desktop:justify-around md:desktop:gap-4'>
        {images.map((image, index) => (
          <Card key={index} image={image} />
        ))}
      </div>

      <CustomizeOutfitButton />
      <div className='flex mt-[12px] items-center'>
        <Stars />

        <p className='text-[11px] tracking-[0.02em] font-secondary text-secondary-text-color'>
          Over 500+ 5 Star Reviews Online
        </p>
      </div>
    </div>
  );
};

export default ComfortSection;
