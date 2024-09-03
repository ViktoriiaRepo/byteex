import './App.css';
import AboutUs from './components/AboutUs ';

import ComfortMadeEasy from './components/ComfortMadeEasy';

import FAQ from './components/FAQ';

import GreenImpact from './components/GreenImpact ';
import HeroSection from './components/HeroSection/HeroSection';

import StoreBrowseLink from './components/StoreBrowseLink';
import TopBenefitSection from './components/TopBenefitSection/TopBenefitSection';

function App() {
  return (
    <div className='App'>
      <HeroSection />

      <TopBenefitSection />

      <AboutUs />
      <FAQ />
      <GreenImpact />
      <StoreBrowseLink />
      <ComfortMadeEasy />
    </div>
  );
}

export default App;
