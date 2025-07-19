import React from 'react';
import Heroimg2 from '../components/Heroimg2';
import ServiceCom from '../components/ServiceCom';
import Navbar from '../components/Navbar';

const Services = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="SERVICES" text="Our services"/>
      <ServiceCom/>
    </div>
  )
}

export default Services
