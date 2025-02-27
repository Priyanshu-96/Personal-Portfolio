import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Project'
import Contact from './components/Contact'
function App() {
  return (
    <>
      <div className='App'>
        <header className = "bg-gray-900 text-white py-4 text-center text-2xl font-bold"> 
          My Portfolio
        </header> 
      <Home />
      <About />
      <Projects />
      <Contact />
      </div>
    </>
  )
}

export default App
