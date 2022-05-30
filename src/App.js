import Destinations from "./components/destinations/Destinations";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/search/Search";
import Selects from "./components/selects/Selects";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
    </div>
  );
}

export default App;
