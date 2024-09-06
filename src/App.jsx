import './App.css';

import FAQ from './components/FAQ';

import GreenImpact from './components/GreenImpact ';
import HeroSection from './sections/HeroSection/HeroSection';

import StoreBrowseLink from './components/StoreBrowseLink';
import TopBenefitSection from './sections/TopBenefitSection/TopBenefitSection';
import BestSelfSection from './sections/BestSelfSection/BestSelfSection';
import ComfortSection from './sections/ComfortSection/ComfortSection';
import FansSection from './sections/FansSection/FansSection';
import FAQSection from './sections/FAQSection/FAQSection';

function App() {
  return (
    <div className='App'>
      <HeroSection />

      <TopBenefitSection />

      <BestSelfSection />

      <ComfortSection />

      <FansSection />

      <FAQSection />

      <FAQ />
      <GreenImpact />
      <StoreBrowseLink />
    </div>
  );
}

export default App;
