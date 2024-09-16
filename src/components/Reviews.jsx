import PropTypes from 'prop-types';

import avatar from '../assets/images/user.png';

import Stars from './Stars';

const Reviews = ({ currentReview }) => {
  return (
    <div className='w-full bg-white shadow-customShadow rounded-lg border border-[#ededed] mt-8 px-[12px] py-[16px]'>
      <div className='mb-4'>
        <div className='flex items-center'>
          <img
            src={
              currentReview?.attributes.avatar?.data?.attributes?.url
                ? `http://localhost:1337${currentReview.attributes.avatar.data.attributes.url}`
                : avatar
            }
            alt='Avatar'
            className='w-[29px] h-[29px] mr-[14px] rounded-full'
          />
          <p className='mr-[14px] text-[15px] tracking-[0.03em] text-primary-text-color'>
            {currentReview?.attributes.author}
          </p>
          <div className='flex mr-[14px]'>
            <Stars rating={currentReview?.attributes.rating || 0} />
          </div>
          <p className='text-[11px] tracking-[0.02em] font-secondary text-secondary-text-color'>
            One of 500+ 5 Star Reviews Online
          </p>
        </div>

        <p className='mt-3 font-secondary text-[12px] text-primary-text-color'>
          {currentReview?.attributes.text}
        </p>
      </div>
    </div>
  );
};

Reviews.propTypes = {
  currentReview: PropTypes.shape({
    attributes: PropTypes.shape({
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      avatar: PropTypes.shape({
        data: PropTypes.shape({
          attributes: PropTypes.shape({
            url: PropTypes.string,
          }),
        }),
      }),
      rating: PropTypes.number,
    }),
  }),
};

export default Reviews;
