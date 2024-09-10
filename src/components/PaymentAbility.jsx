import { ReactComponent as ClockIcon } from '../assets/icons/payment-icons/clock.svg';

import amex from '../assets/images/payment/amex.png';
import applepay from '../assets/images/payment/apple-pay.png';
import union from '../assets/images/payment/union.png';
import discover from '../assets/images/payment/discover.png';
import gpay from '../assets/images/payment/google-pay.png';
import mastercard from '../assets/images/payment/mastercard.png';
import paypal from '../assets/images/payment/paypal.png';
import amasonpay from '../assets/images/payment/amazon-pay.png';
import visa from '../assets/images/payment/visa.png';

const cards = [
  {
    src: amex,
    alt: 'Amex payment method',
  },
  {
    src: applepay,
    alt: 'Apple Pay payment method',
  },
  {
    src: union,
    alt: 'Union Pay payment method',
  },
  {
    src: discover,
    alt: 'Discover payment method',
  },
  {
    src: gpay,
    alt: 'Google Pay',
  },
  {
    src: mastercard,
    alt: 'MasterCard payment method',
  },
  {
    src: paypal,
    alt: 'PayPal payment method',
  },
  {
    src: amasonpay,
    alt: 'Amason payment method',
  },
  {
    src: visa,
    alt: 'Visa payment method',
  },
];

const PaymentAbility = () => {
  return (
    <div className='relative flex gap-6 md:desktop:before:bg-lines-color md:desktop:before:w-[1px] md:desktop:before:absolute md:desktop:before:h-full md-desktop:before:w-[2px] md:desktop:before:left-[110px]'>
      <div className='flex gap-[4px]'>
        <ClockIcon />
        <span className='font-secondary text-[10px] tracking-[0.04em]  text-green-color'>
          Ships in 1-2 Days
        </span>
      </div>

      <div className='flex gap-[4px]'>
        {cards.map((card, i) => (
          <img
            src={card.src}
            alt={card.alt}
            key={i}
            className=' shadow-[0 3px 10px 1px rgba(0, 0, 0, 0.08)] border border-border-color w-[24px] h-[18px]'
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentAbility;
