import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Build from "./components/Build/Build";
import Business from "./components/Business/Business";
import WhyUs from "./components/Why-Us/WhyUs";
import GettingStarted from "./components/GettingStarted/GettingStarted.component";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className='App bg-white w-full overflow-hidden'>
      <div className='xl:max-w-[1280px] mx-auto'>
        <Header />
        <Hero />
        <Build />
        <Business />
        <WhyUs />
      </div>
      <GettingStarted />
      <Footer />
    </div>
  );
}

export default App;
