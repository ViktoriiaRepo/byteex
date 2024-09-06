import { useState } from 'react';
import CustomizeOutfitButton from '../../components/CustomizeOutfitButton';
import Stars from '../../components/Stars';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-b border-gray-200'>
      <div className='flex justify-between items-center py-2'>
        <span className='text-lg font-semibold'>{question}</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-blue-500 hover:text-blue-700 focus:outline-none'
        >
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen && <p className='py-2'>{answer}</p>}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: 'Our fabrics and garments are made in Portugal. Why?',
      answer:
        'We build strong relationships with our immediate suppliers and visit as often as possible.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: 'What is the return policy?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: 'Where can I find store locations?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <>
      <div className='max-w-2xl mx-auto px-4 py-8'>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className='md:desktop:hidden flex flex-col items-center'>
        <CustomizeOutfitButton />

        <div className='flex mt-[12px] items-center'>
          <Stars />

          <p className='text-[11px] tracking-[0.02em] font-secondary text-secondary-text-color'>
            Over 500+ 5 Star Reviews Online
          </p>
        </div>
      </div>
    </>
  );
};

export default FAQSection;
