import avatar from '../assets/images/avatar.png';

import Stars from './Stars';

const Reviews = () => {
  return (
    <div className='w-full bg-white shadow-customShadow rounded-lg border border-[#ededed] mt-8 px-[12px] py-[16px]'>
      <div className='flex items-center'>
        <img
          src={avatar}
          alt='Avatar'
          className='w-[29px] h-[29px] mr-[14px]'
        />
        <p className='mr-[14px] text-[15px] tracking-[0.03em] text-primary-text-color'>
          Jane, S.
        </p>
        <div className='flex mr-[14px]'>
          <Stars />
        </div>
        <p className='text-[11px] tracking-[0.02em] font-secondary text-secondary-text-color'>
          One of 500+ 5 Star Reviews Online
        </p>
      </div>

      <p className='mt-3 font-secondary text-[12px] text-primary-text-color'>
        Overjoyed with my Loungewear set. I have the jogger and the sweatshirt.
        Quality product on every level. From the compostable packaging, to the
        supplied washing bag, even the garments smells like fresh herbs when I
        first held them.
      </p>
    </div>
  );
};

export default Reviews;
