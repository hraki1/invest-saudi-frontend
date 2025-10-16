import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StrategicDirection from './components/StrategicDirection';
import Opportunities from './components/Opportunities';
import Destination from './components/Destination';
import KeyStrategies from './components/KeyStrategies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StrategicDirection />
      <Destination />
      <Opportunities />
      <KeyStrategies />
      <Footer />
    </div>
  );
}

export default App;
