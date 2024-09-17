import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import CustomizeOutfitButton from '../../components/CustomizeOutfitButton';
import Stars from '../../components/Stars';

import FAQItem from '../../components/FAQItem';
import GalleryLayout from '../../components/GalleryLayout';

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

  const faqItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      className={`px-horizontal-mobile md:desktop:px-horizontal-desktop mt-[68px] md:desktop:mt-[109px]  md:desktop:flex  md:desktop:justify-between`}
    >
      <div className='md:desktop:w-[60%]'>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className='h2-header text-center md:desktop:text-left'
        >
          frequently asked questions.
        </motion.h2>

        <motion.div
          className='max-w-2xl md:desktop:max-w-3xl md:desktop:mx-0 mx-auto py-8'
          initial='hidden'
          whileInView='visible'
          transition={{ staggerChildren: 0.3 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={faqItemVariants}
              transition={{ duration: 0.5 }}
            >
              <FAQItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </motion.div>
        <div className='md:desktop:hidden flex flex-col items-center'>
          <CustomizeOutfitButton />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ amount: 0.3 }}
            className='flex mt-[12px] items-center'
          >
            <Stars />

            <p className='text-[11px] tracking-[0.02em] font-secondary text-secondary-text-color'>
              Over 500+ 5 Star Reviews Online
            </p>
          </motion.div>
        </div>
      </div>
      <div className='hidden md:desktop:block'>
        <GalleryLayout />
      </div>
    </div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FAQSection;
