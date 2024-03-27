import React from 'react'
import About from "../../components/Layouts/About/About"
import Footer from "../../components/Layouts/Footer/Footer"
import Home from "../../components/Layouts/Home/Home"
import Innovation from "../../components/Layouts/Innovation/Innovation"
import Portfolio from "../../components/Layouts/Portfolio/Portfolio"
import Solutions from "../../components/Layouts/Solutions/Solutions"
import Testimoni from "../../components/Layouts/Testimoni/Testimoni"
import Slider from "../../components/Layouts/Slider/Slider"

// import Solutions from "./components/Layouts/Solutions/Solutions"
import Navbar from "../../components/Navbar"
import Giblar from "../../components/Giblar"
import Support from '../Layouts/Support/Support'
// import Test from '../Layouts/test/test'



const HomePage = () => {
  return (
    <div className='overflow-hidden'>
      {/* <Giblar></Giblar> */}
     <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Solutions></Solutions>
    <Innovation></Innovation>
   <Portfolio></Portfolio>
   <Testimoni></Testimoni>
   <Support></Support>
    {/* <Slider></Slider> */}
    {/* <Test></Test> */}

   <Footer></Footer>
    </div>
  )
}

export default HomePage
