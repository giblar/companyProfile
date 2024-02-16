import About from "./components/Layouts/About/About"
import Footer from "./components/Layouts/Footer/Footer"
import Home from "./components/Layouts/Home/Home"
import Innovation from "./components/Layouts/Innovation/Innovation"
import Portfolio from "./components/Layouts/Portfolio/Portfolio"
import Solutions from "./components/Layouts/Solutions/Solutions"
import Testimoni from "./components/Layouts/Testimoni/Testimoni"

// import Solutions from "./components/Layouts/Solutions/Solutions"
import Navbar from "./components/Navbar"
import Try from "./components/Page"


function App() {
  

  return (
   <div>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Solutions></Solutions>
    {/* <Innovation></Innovation> */}
   <Portfolio></Portfolio>
   {/* <Testimoni></Testimoni> */}
    
    

   {/* <Footer></Footer> */}
   </div>
  )
}

export default App
