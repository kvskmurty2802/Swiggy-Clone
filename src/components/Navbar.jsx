import React from 'react'

export default function Navbar() {
  return (
    <div>
    <section className='NavbarSection'>
    <div className='title'>
        <h3>Swiggy</h3>
    </div>
    <div className='searchbox'>
        <input type="text" placeholder="Search your food here"/>
    </div>
    <div className='userauth'>
        Login / Signup
    </div>
    </section>
    </div>
  )
}
