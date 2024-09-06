import CustomizeOutfitButton from '../../components/CustomizeOutfitButton';
import Gallery from '../../components/Gallery';
import SliderReview from '../../components/SliderReview';
import SliderReviewDesktop from '../../components/SliderReviewDesktop';
import Stars from '../../components/Stars';

const FansSection = () => {
  return (
    <div className='mt-[59px] text-center'>
      <div className='px-horizontal-mobile md:px-horizontal-desktop'>
        <h2 className='h2-header'>What are our fans saying?</h2>
        <p className='text-[15px] leading-[153%] tracking-[0.03em] mt-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat. Fusce non nibh luctus.
        </p>
      </div>

      <div className='mt-12 md:desktop:mt-[55px]'>
        <Gallery />
      </div>

      <div className='px-horizontal-mobile md:px-horizontal-desktop md:desktop:hidden'>
        <SliderReview />
      </div>

      <div className='md:px-horizontal-desktop hidden md:desktop:flex md:desktop:mt-[55px]'>
        <SliderReviewDesktop />
      </div>

      <div className='flex flex-col items-center'>
        <CustomizeOutfitButton />
        <div className='flex mt-[12px] items-center'>
          <Stars />

          <p className='text-[11px] tracking-[0.02em] font-secondary text-secondary-text-color'>
            Over 500+ 5 Star Reviews Online
          </p>
        </div>
      </div>
    </div>
  );
};

export default FansSection;
