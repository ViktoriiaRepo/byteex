import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : '0';
    }
  }, [isOpen]);

  return (
    <div className='border-b border-gray-300'>
      <div className='flex justify-between py-4'>
        <span className='text-accent-color text-lg leading-tight tracking-wide'>
          {question}
        </span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-accent-color text-2xl hover:text-gray-700 focus:outline-none'
        >
          {isOpen ? '-' : '+'}
        </button>
      </div>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-max-height duration-300 ease-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <p className='py-4 text-sm tracking-wide'>{answer}</p>
      </div>
    </div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FAQItem;
