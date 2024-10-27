import Header from "./components/Header"
import About from "./pages/About"
import Footer from "./pages/Footer"
import Hero from "./pages/Hero"
import Skills from "./pages/Skills"

function App() {
  

  return (
    <div className="font-sans font-light tracking-wide ">
    <Header/>
    <Hero/>
    <About/>
    <Skills/>
    <Footer/>
  </div>
  )
}

export default App
