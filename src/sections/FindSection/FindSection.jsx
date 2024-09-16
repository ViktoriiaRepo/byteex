import { useEffect, useState } from 'react';
import CustomizeOutfitButton from '../../components/CustomizeOutfitButton';
import Highlights from '../../components/Highlights';
import PaymentAbility from '../../components/PaymentAbility';
import SliderHero from '../../components/SliderHero';
import Stars from '../../components/Stars';
import { useSelector } from 'react-redux';

const FindSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  const products = useSelector((state) => state.products.products);
  const BASE_URL = 'http://localhost:1337';

  useEffect(() => {
    if (products && products.length > 0) {
      const newSlides = products.flatMap((product) =>
        product.attributes.images?.data.map((image) => ({
          imageUrl: BASE_URL + image.attributes.url,
        }))
      );

      setSlides(newSlides.slice(0, 7));
    }
  }, [products]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className='px-horizontal-mobile md:px-horizontal-desktop py-[52px] text-center bg-footer-gradient'>
      <h2 className='h2-header text-center'>Find something you love</h2>
      <p className='text-[15px] tracking-[0.03em] md:desktop:hidden'>
        Click below to browse our collection!
      </p>
      <p className='hidden md:desktop:block md:desktop:text-[15px] md:desktop:tracking-[0.03em] md:desktop:mt-[16px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
        sapien<br></br>
        facilisis tincidunt pellentesque. In eget ipsum et felis finibus
        consequat.
      </p>
      <div className='mt-[40px] flex justify-center'>
        <SliderHero slides={slides} currentIndex={currentIndex} />
      </div>

      <div className='flex justify-center'>
        <CustomizeOutfitButton />
      </div>
      <div className='flex mt-[12px] justify-center items-center md:desktop:hidden'>
        <Stars />

        <p className='text-[11px] tracking-[0.02em] font-secondary text-secondary-text-color'>
          Over 500+ 5 Star Reviews Online
        </p>
      </div>

      <div className='hidden md:desktop:flex justify-center mt-3'>
        <PaymentAbility />
      </div>
      <div>
        <Highlights />
      </div>
    </div>
  );
};

export default FindSection;
