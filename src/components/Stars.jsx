import yellowStar from '../assets/icons/yellow-star.svg';

const Stars = () => {
  return (
    <div className='flex mr-[14px]'>
      {Array.from({ length: 5 }).map((_, index) => (
        <img
          key={index}
          src={yellowStar}
          alt='Star'
          className='w-[11px] h-[10px] ml-[2px]'
        />
      ))}
    </div>
  );
};

export default Stars;
