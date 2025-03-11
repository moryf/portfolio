import React from 'react'
import './Section.css'
import './HomeSection.css'
import Logo from '../../util/dodo_page-0001 (1).jpg'

function HomeSection() {
  return (
    <div className='section' id='home'>
        <div className='home-section'>
            <div className='image'>
                <img src={Logo} alt='logo' />
            </div>
            <div className='title'>
                <h2>welcome to</h2>
                <h1>dodo</h1>
                <p>Join us for a journey through our portfolio!</p>
                <sub>Scroll down to start the adventure!</sub>
            </div>
        </div>
        <button className='next-section-button' onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                next
        </button>
    </div>
  )
}

export default HomeSection