import './App.css';

import HeroSection from './sections/HeroSection/HeroSection';
import StoreBrowseLink from './components/StoreBrowseLink';
import TopBenefitSection from './sections/TopBenefitSection/TopBenefitSection';
import BestSelfSection from './sections/BestSelfSection/BestSelfSection';
import ComfortSection from './sections/ComfortSection/ComfortSection';
import FansSection from './sections/FansSection/FansSection';
import FAQSection from './sections/FAQSection/FAQSection';
import GreenImpactSection from './sections/GreenImpactSection/GreenImpactSection';

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
      <StoreBrowseLink />
    </div>
  );
}

export default App;
