import PropTypes from 'prop-types';

export const Card = ({ image }) => {
  const Icon = image.src;
  return (
    <>
      <div
        className='flex flex-col items-center justify-center w-[288px] md:desktop:w-[346px] h-[288px]  md:desktop:h-[321px] rounded-lg  p-[32px]'
        style={{ backgroundColor: image.bg }}
      >
        <Icon style={{ width: image.width, height: image.height }} />
        <h3 className='mt-[10px] text-center text-[22px] leading-[182%] tracking-[0.04em] text-accent-color'>
          {image.title}
        </h3>
        <p className='mt-2 text-center  text-[15px] leading-[153%] tracking-[0.03em]'>
          {image.text}
        </p>
      </div>
    </>
  );
};

Card.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.oneOfType([PropTypes.func, PropTypes.elementType])
      .isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
  }).isRequired,
};
