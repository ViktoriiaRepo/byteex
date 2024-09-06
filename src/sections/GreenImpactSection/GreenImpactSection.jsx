import { ReactComponent as CO2 } from '../../assets/icons/green-impact-icons/co2.svg';
import { ReactComponent as H2O } from '../../assets/icons/green-impact-icons/h2o.svg';

const GreenImpactSection = () => {
  return (
    <div className='px-horizontal-mobile md:px-horizontal-desktop bg-background-best-self-section mt-[52px]'>
      <h3 className='text-[25px] leading-[160%] tracking-[0.04em] texth2-best-self-color'>
        Our Total Green Impact
      </h3>

      <div>
        <CO2 />
        <p>3,927 kg of CO2 saved</p>
      </div>

      <div>
        <H2O />
        <p>2,546,167 days of drinking water saved</p>
      </div>
    </div>
  );
};

export default GreenImpactSection;
