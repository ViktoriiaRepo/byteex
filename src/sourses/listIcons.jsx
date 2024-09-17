import { ReactComponent as SunAndMoonIcon } from '../assets/icons/sun-and-moon.svg';
import { ReactComponent as CartIcon } from '../assets/icons/cart.svg';
import { ReactComponent as WavesIcon } from '../assets/icons/waves.svg';

const listItems = [
  {
    icon: <SunAndMoonIcon className='w-[23px] h-[23px]' />,
    text: 'Beautiful, comfortable loungewear for day or night.',
  },
  {
    icon: <CartIcon className='block w-[21px] h-[17px]' />,
    text: 'No wasteful extras, like tags or plastic packaging.',
  },
  {
    icon: <WavesIcon className='w-[14px] h-[13px]' />,
    text: 'Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.',
  },
];

export default listItems;
