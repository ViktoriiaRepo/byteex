import './App.css';

import HeroSection from './sections/HeroSection/HeroSection';
import TopBenefitSection from './sections/TopBenefitSection/TopBenefitSection';
import BestSelfSection from './sections/BestSelfSection/BestSelfSection';
import ComfortSection from './sections/ComfortSection/ComfortSection';
import FansSection from './sections/FansSection/FansSection';
import FAQSection from './sections/FAQSection/FAQSection';
import GreenImpactSection from './sections/GreenImpactSection/GreenImpactSection';
import FindSection from './sections/FindSection/FindSection';

function App() {
  return (
    <div className='App'>
      <HeroSection />

      <TopBenefitSection />

      <BestSelfSection />

      <ComfortSection />

      <FansSection />

      <FAQSection />

      <GreenImpactSection />

      <FindSection />
    </div>
  );
}

export default App;
