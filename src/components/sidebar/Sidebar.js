import React from 'react'
import './Sidebar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ViewCarouselOutlinedIcon from '@mui/icons-material/ViewCarouselOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
        <ul>
            <li>
                <HomeOutlinedIcon />
                <a href='/#home'>Home</a>
            </li>
            <li>
                <ContactsOutlinedIcon />
                <a href='/#about'>About</a>
            </li>
            <li>
                <ViewCarouselOutlinedIcon />
                <a href='/#projects'>Projects</a>
            </li>
            <li>
                <ContactPageOutlinedIcon />
                <a href='/#contact'>Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar