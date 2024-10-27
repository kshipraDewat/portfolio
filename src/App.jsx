import Header from "./components/Header"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Experience from "./pages/Experience"
import Footer from "./pages/Footer"
import Hero from "./pages/Hero"
import Project from "./pages/Project"
import Skills from "./pages/Skills"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  

  return (
    <div>
      <ToastContainer />
   
    <div className="font-sans font-light tracking-wide ">
    <Header/>
    <Hero/>
    <About/>
    <Project/>
    <Skills/>
    <Experience/>
    <Contact/>
    <Footer/>
  </div>

  </div>
  )
}

export default App
