import Navigation from "./Components/Navigation/Navigation";
import HeroSection from "./pages/home/components/HeroSection";
import SolarEnergyProduction from "./pages/home/components/SolarEnergyProduction";
function App() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <SolarEnergyProduction />
      </main>
    </>
  );
}

export default App;