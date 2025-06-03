import "./App.css";
import Article from "./Components/Article/article";
import Hero from "./Components/Hero/hero";
import Benefits from "./Components/Benefits/benefits";
import Footer from "./Components/Footer/footer";
import Argument from "./Components/Argument/argument";

function App() {
  return (
    <div className="app">
      <Hero/>
      <Article/>
      <Benefits/>
      <Argument/>
      <Footer/>
    </div>
  );
}

export default App;
