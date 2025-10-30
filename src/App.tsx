import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StrategicDirection from './components/StrategicDirection';
import Opportunities from './components/Opportunities';
import Destination from './components/Destination';
import KeyStrategies from './components/KeyStrategies';
import Footer from './components/Footer';
import Test from './components/Test';
import InvestSectores from './components/InvestSectores';
import RegulatoryAgreement from './components/RegulatoryAgreement';
import UniqueIncentives from './components/UniqueIncentives';
import GigaProjects from './components/GigaProjects';
import SuccessStories from './components/SuccessStories';
import Miza from './components/Miza';
import Events from './components/Events';
import InvestorMatchmaking from './components/InvestorMatchmaking';
import EServices from './components/EServices';
import NationalPrograms from './components/NationalPrograms';

function App() {
  return (
    <div className="min-h-screen duration-300">
      <Navbar />
      <Hero />
      <StrategicDirection />
      <Destination />
      <Opportunities />
      <InvestSectores />
      <KeyStrategies />
      <Test />
      <UniqueIncentives />
      <GigaProjects />
      <SuccessStories />
      <Miza />
      <Events />
      <InvestorMatchmaking />
      <EServices />
      <NationalPrograms />
      <RegulatoryAgreement />
      <Footer />
    </div>
  );
}

export default App;
