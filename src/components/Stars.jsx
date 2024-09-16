import PropTypes from 'prop-types';
import yellowStar from '../assets/icons/yellow-star.svg';
import greyStar from '../assets/icons/grey-star.svg';

const Stars = ({ rating = 5 }) => {
  return (
    <div className='flex mr-[14px]'>
      {Array.from({ length: 5 }).map((_, index) => (
        <img
          key={index}
          src={index < rating ? yellowStar : greyStar}
          alt='Star'
          className='w-[11px] h-[10px] ml-[2px]'
        />
      ))}
    </div>
  );
};

Stars.propTypes = {
  rating: PropTypes.number,
};

export default Stars;
