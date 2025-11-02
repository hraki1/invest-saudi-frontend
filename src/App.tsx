import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StrategicDirection from './components/StrategicDirection';
import Opportunities from './components/Opportunities';
import Destination from './components/Destination';
// import KeyStrategies from './components/KeyStrategies';
import Footer from './components/Footer';
import Test from './components/Test';
import InvestSectores from './components/InvestSectores';
import RegulatoryAgreement from './components/RegulatoryAgreement';
import UniqueIncentives from './components/UniqueIncentives';
import GigaProjects from './components/GigaProjects';
import StrategicInvestorProgram from './components/StrategicInvestorProgram';
import SuccessStories from './components/SuccessStories';
import Miza from './components/Miza';
import Events from './components/Events';
import InvestorMatchmaking from './components/InvestorMatchmaking';
import EServices from './components/EServices';
import NationalPrograms from './components/NationalPrograms';
import Stocks from './components/Stocks';
// import SaudiMap from './components/SaudiMap';
import QRCard from './components/QRCard';
import Chatbot from './components/Chatbot';
// import Orieb from './components/Orieb';
// import Ahmad from './components/ahmad';

function App() {
  return (
    <div className="min-h-screen duration-300">
      <Navbar />
      <Hero />
      <Stocks />
      {/* <Ahmad />
      <Orieb /> */}
      {/* <SaudiMap /> */}
      <Miza />
      <GigaProjects />
      <StrategicInvestorProgram />
      <Opportunities />
      <StrategicDirection />
      <Destination />
      <InvestSectores />
      {/* <KeyStrategies /> */}
      <Test />
      <UniqueIncentives />
      <SuccessStories />
      <Events />
      <InvestorMatchmaking />
      <EServices />
      <NationalPrograms />
      <RegulatoryAgreement />
      <QRCard />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
