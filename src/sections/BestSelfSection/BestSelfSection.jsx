// import SliderBestSelf from '../../components/SliderBestSelf';

import img from '../../assets/images/best-images.png';
import CustomizeOutfitButton from '../../components/CustomizeOutfitButton';

const BestSelfSection = () => {
  return (
    <div className='mt-[40px] px-horizontal-mobile md:px-horizontal-desktop bg-background-best-self-section py-[40px] md:desktop:pb-[56px]'>
      <h2 className='text-center text-[26px] md:desktop:hidden md:desktop:text-[32px] leading-[154%] md:desktop:leading-[125%] tracking-[0.04em] text-h2-best-self-color'>
        Be your best self.
      </h2>
      {/* <SliderBestSelf /> */}

      <div className='flex flex-col md:desktop:mt-[83px] md:desktop:flex-row md:desktop:gap-[104px]'>
        <div className='mt-[30px] md:desktop:mt-0 shrink-0'>
          <img
            src={img}
            alt='Best Images'
            className='mx-auto  w-[345px] h-[392px] md:desktop:w-[523px] md:desktop:h-[664px] '
          />
        </div>

        <div className='mt-[48px] md:desktop:mt-0 text-[15px] leading-[153%] tracking-[0.03em] text-p-text-color space-y-[20px]'>
          <h2 className='hidden md:desktop:block md:desktop:text-[32px] leading-[154%] md:desktop:leading-[125%] tracking-[0.04em] text-h2-best-self-color'>
            Be your best self.
          </h2>

          <p>Hi! My name’s [Insert Name], and I founded [Insert] in ____.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat.
          </p>
          <p>
            Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec
            placerat volutpat ligula, ac consectetur felis varius non. Aliquam a
            nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu
            congue, faucibus libero nec, placerat ligula.
          </p>
          <p>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
          </p>
          <p>
            Fusce non ante velit. Sed auctor odio eu semper molestie. Nam
            mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus,
            ac convallis urna massa at nibh.
          </p>
          <p>
            Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod
            leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in
            sapien. Cras mattis varius mollis.
          </p>

          <div className='hidden md:desktop:block'>
            <CustomizeOutfitButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelfSection;
