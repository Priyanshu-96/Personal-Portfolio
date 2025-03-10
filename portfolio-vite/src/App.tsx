import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0215] text-white transition-all">
      <Home />
      <About />
      <Projects />
      <Contact />
    
    <div>
    <Socials/>
    </div>
    </div>
  );
}

export default App;
