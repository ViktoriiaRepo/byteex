import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const gradient =
  'linear-gradient(180deg, rgba(249, 240, 229, 0.7) 0%, rgba(249, 240, 229, 0.7) 100%)';

const SliderHero = ({ slides, currentIndex, isLoading = true }) => {
  if (isLoading) {
    return <div className='loader'></div>;
  }

  const getSlideClass = (index) => {
    const position = (index - currentIndex + slides.length) % slides.length;

    switch (position) {
      case 0:
        return 'absolute w-[70px]  md:desktop:w-[134px] h-[99px] md:desktop:h-[189px] transition-transform duration-1500 ease-in-out -translate-x-[155px] md:desktop:-translate-x-[305px] z-0 will-change-transform';
      case 1:
        return 'absolute w-[110px] md:desktop:w-[209px] h-[166px] md:desktop:h-[316px] transition-all duration-[1500ms] ease-in-out transform translate-x-[-70px] md:desktop:translate-x-[-190px] opacity-80 z-10 will-change-transform';
      case 2:
        return 'absolute  w-[136px] md:desktop:w-[260px] h-[220px] md:desktop:h-[422px] transition-all duration-[1500ms] ease-in-out transform translate-x-[0] scale-[1] z-20 will-change-transform';
      case 3:
        return 'absolute w-[110px] md:desktop:w-[209px] h-[166px] md:desktop:h-[316px] transition-transform duration-1500 ease-in-out translate-x-[70px] md:desktop:translate-x-[190px] opacity-80 z-10 will-change-transform';
      case 4:
        return 'absolute w-[70px] md:desktop:w-[134px] h-[99px] md:desktop:h-[189px] transition-transform duration-1500 ease-in-out translate-x-[155px] md:desktop:translate-x-[305px] z-0 will-change-transform';
      default:
        return '';
    }
  };

  const getSlideStyle = (index) => {
    const position = (index - currentIndex + slides.length) % slides.length;

    if (position === 0 || position === 4) {
      return { backgroundImage: gradient, backgroundSize: 'cover' };
    } else {
      return {
        backgroundImage: `url(${slides[index].imageUrl})`,
        backgroundSize: 'cover',
      };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.3 }}
      className='relative w-[310px] md:desktop:w-[750px] h-[220px] md:desktop:h-[422px] flex justify-center items-center overflow-hidden'
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          style={getSlideStyle(index)}
          className={`absolute transition-all duration-1000 border-solid border-2 ease-in-out border-white ${getSlideClass(
            index
          )}`}
        />
      ))}
    </motion.div>
  );
};

SliderHero.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          attributes: PropTypes.shape({
            avatar: PropTypes.shape({
              data: PropTypes.shape({
                attributes: PropTypes.shape({
                  url: PropTypes.string,
                }),
              }),
            }),
            author: PropTypes.string,
            text: PropTypes.string,
            rating: PropTypes.number,
          }),
        })
      ),
    })
  ).isRequired,
  currentIndex: PropTypes.number.isRequired,
  isLoading: PropTypes.bool,
};

export default SliderHero;
