import Artboard1 from '../../assets/images/Artboard1.png';
import Artboard2 from '../../assets/images/Artboard2.png';
import Artboard3 from '../../assets/images/Artboard3.png';
import Artboard4 from '../../assets/images/Artboard4.png';
import Artboard5 from '../../assets/images/Artboard5.png';

import css from './RunningLine.module.css';

const imagesForDesktop = [
  { src: Artboard1, width: '178px', height: '22px' },
  { src: Artboard2, width: '111px', height: '52px' },
  { src: Artboard3, width: '271px', height: '53px' },
  { src: Artboard4, width: '194px', height: '37px' },
  { src: Artboard5, width: '192px', height: '58px' },
];

const duplicatedImages = [
  ...imagesForDesktop,
  ...imagesForDesktop,
  ...imagesForDesktop,
];

const RunningLine = () => {
  return (
    <div className='hidden md:desktop:block overflow-hidden'>
      <div className={css.sliderContainer}>
        <div
          className={`${css.slider} w-full h-[62px] flex gap-[88px] items-center justify-center mt-[18px]`}
        >
          {duplicatedImages.map((image, index) => (
            <img
              src={image.src}
              alt={`Artboard ${index + 1}`}
              key={index}
              style={{
                width: image.width,
                height: image.height,
                objectFit: 'contain',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RunningLine;
