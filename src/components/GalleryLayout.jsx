import { useEffect, useMemo, useState } from 'react';

import { useSelector } from 'react-redux';

const GalleryLayout = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const products = useSelector((state) => state.products.products);
  const firstThreeProducts = useMemo(() => products.slice(0, 3), [products]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const positions = [
    {
      central:
        'absolute w-[227px] h-[355px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-blue-400 z-10 transition-all duration-1000',
      bottomLeft:
        'absolute w-[216px] h-[159px] bottom-0 left-0 bg-red-400 z-0 transition-all duration-1000',
      topRight:
        'absolute w-[167px] h-[253px] top-0 right-0 bg-green-400 z-0 transition-all duration-1000',
    },
    {
      central:
        'absolute w-[216px] h-[159px] bottom-0 left-0 bg-red-400 z-10 transition-all duration-1000',
      bottomLeft:
        'absolute w-[167px] h-[253px] top-0 right-0 bg-green-400 z-0 transition-all duration-1000',
      topRight:
        'absolute w-[227px] h-[355px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-blue-400 z-0 transition-all duration-1000',
    },
    {
      central:
        'absolute w-[167px] h-[253px] top-0 right-0 bg-green-400 z-10 transition-all duration-1000',
      bottomLeft:
        'absolute w-[227px] h-[355px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-blue-400 z-0 transition-all duration-1000',
      topRight:
        'absolute w-[216px] h-[159px] bottom-0 left-0 bg-red-400 z-0 transition-all duration-1000',
    },
  ];
  return (
    <div className='relative w-[430px] h-[645px]  '>
      {firstThreeProducts.length > 0 && (
        <>
          <div
            className={positions[activeIndex].central}
            style={{
              backgroundImage: `url(${firstThreeProducts[0].attributes.images?.data[0]?.attributes.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          <div
            className={positions[activeIndex].bottomLeft}
            style={{
              backgroundImage: `url(${firstThreeProducts[1].attributes.images?.data[0]?.attributes.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          <div
            className={positions[activeIndex].topRight}
            style={{
              backgroundImage: `url(${firstThreeProducts[2].attributes.images?.data[0]?.attributes.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </>
      )}

      <div className='absolute w-[134px] h-[189px] bottom-[70px] right-[50px] bg-basic-gradient z-[-1]'></div>

      <div className='absolute w-[149px] h-[183px] top-[20px] left-[20px] bg-basic-gradient z-[-1]'></div>
    </div>
  );
};

export default GalleryLayout;
