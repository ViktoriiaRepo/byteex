import { useState } from 'react';
import PropTypes from 'prop-types';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-b border-border-color  '>
      <div className='flex justify-between  py-4'>
        <span className='text-accent-color text-[18px] leading-[133%] tracking-[0.04em]'>
          {question}
        </span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-accent-color text-[44px]  leading-[0] tracking-[0.04em] hover:text-gray-700 focus:outline-none  '
        >
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen && (
        <p className='py-4 text-[14px] tracking-[0.03em] '>{answer}</p>
      )}
    </div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FAQItem;
