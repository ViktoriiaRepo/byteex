import PropTypes from 'prop-types';

import Stars from './Stars';
import avatar from '../assets/images/user.png';

const CardReview = ({ review }) => {
  return (
    <div className='w-full bg-white shadow-customShadow rounded-lg border border-[#ededed] px-[33px] py-[26px]'>
      <div className='flex items-center'>
        <img
          src={avatar}
          alt='Avatar'
          className='w-[39px] h-[39px] mr-[14px]'
        />

        <div className='text-left'>
          <div className='flex mr-[14px]'>
            <Stars />
          </div>
          <p className='mr-[14px] mt-[4px] text-[15px] tracking-[0.03em] leading-[153%] text-primary-text-color'>
            {review.name}
          </p>
        </div>
      </div>

      <p className='mt-3 font-secondary text-[12px] text-primary-text-color'>
        {review.message}
      </p>
    </div>
  );
};

CardReview.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }),
};

export default CardReview;
