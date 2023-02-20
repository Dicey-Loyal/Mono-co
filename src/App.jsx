import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {

  return (
    <div className="App bg-white w-full overflow-hidden">
      <div className="xl:max-w-[1280px] mx-auto">
        <Header />
        <Hero />
      </div>
    </div>
  )
}

export default App;
