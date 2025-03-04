import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#0a0215] dark:text-white transition-all">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
