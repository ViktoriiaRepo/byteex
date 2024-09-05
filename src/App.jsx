import './App.css';

import ComfortMadeEasy from './components/ComfortMadeEasy';

import FAQ from './components/FAQ';

import GreenImpact from './components/GreenImpact ';
import HeroSection from './sections/HeroSection/HeroSection';

import StoreBrowseLink from './components/StoreBrowseLink';
import TopBenefitSection from './sections/TopBenefitSection/TopBenefitSection';
import BestSelfSection from './sections/BestSelfSection/BestSelfSection';
import ComfortSection from './sections/ComfortSection/ComfortSection';

function App() {
  return (
    <div className='App'>
      <HeroSection />

      <TopBenefitSection />

      <BestSelfSection />

      <ComfortSection />

      <FAQ />
      <GreenImpact />
      <StoreBrowseLink />
      <ComfortMadeEasy />
    </div>
  );
}

export default App;
