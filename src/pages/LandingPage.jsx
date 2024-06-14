import React from 'react';
import Navbar from '../components/Navbar';
import Displaybar from '../components/Displaybar';
import Chains from '../components/Chains';

export default function LandingPage() {
  return (
    <>
     <Navbar/> 
     <div className='landingSection'>
      <Displaybar/>
      <Chains/>
     </div>
    </>
  )
}
