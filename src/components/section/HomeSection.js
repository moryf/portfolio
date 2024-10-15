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
                <h1>welcome</h1>
                <h2>to dodo</h2>
                <p>Join us for a journey through our portfolio!</p>
                <sub>Scroll down to start the adventure!</sub>
            </div>
        </div>
    </div>
  )
}

export default HomeSection