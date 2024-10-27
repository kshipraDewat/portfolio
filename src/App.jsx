import Header from "./components/Header"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Footer from "./pages/Footer"
import Hero from "./pages/Hero"
import Project from "./pages/Project"
import Skills from "./pages/Skills"

function App() {
  

  return (
    <div className="font-sans font-light tracking-wide ">
    <Header/>
    <Hero/>
    <About/>
    <Project/>
    <Skills/>
    <Experience/>
    <Footer/>
  </div>
  )
}

export default App
