import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Build from "./components/Build/Build";
import Business from "./components/Business/Business";
import WhyUs from "./components/Why-Us/WhyUs";
import GettingStarted from "./components/GettingStarted/GettingStarted.component";
import StartBuilding from "./components/Footer/StartBuilding";
function App() {

  return (
    <div className="App bg-white w-full overflow-hidden">
      <div className="xl:max-w-[1280px] mx-auto">
        <Header />
        <Hero />
        <Build />
        <Business />
        <WhyUs />
      </div>
      <GettingStarted />
      <StartBuilding />
    </div>
  )
}

export default App;
