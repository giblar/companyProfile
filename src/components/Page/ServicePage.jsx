import React from 'react'
import Home from '../Layouts_Service/Home/Home'
import Service from '../Layouts_Service/Service/Service'
import Consul from '../Layouts_Service/Consul/Consul'
import Navbar from "../../components/Navbar"
const ServicePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Service></Service>
      <Consul></Consul>
    </div>
  )
}

export default ServicePage
