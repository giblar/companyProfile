import React from 'react'
import About from "../../components/Layouts/About/About"
import Footer from "../../components/Layouts/Footer/Footer"
import Home from "../../components/Layouts/Home/Home"
import Innovation from "../../components/Layouts/Innovation/Innovation"
import Portfolio from "../../components/Layouts/Portfolio/Portfolio"
import Solutions from "../../components/Layouts/Solutions/Solutions"
import Testimoni from "../../components/Layouts/Testimoni/Testimoni"
import Navbar from "../../components/Navbar"
import Support from '../Layouts/Support/Support'



const HomePage = () => {
  return (
    <div className='overflow-hidden'>
    
     <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Solutions></Solutions>
    <Innovation></Innovation>
   <Portfolio></Portfolio>
   <Testimoni></Testimoni>
   <Support></Support>
   <Footer></Footer>
    </div>
  )
}

export default HomePage
