import React from 'react'
import './Sidebar.css'
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
        <ul>
            <li>
                <AddHomeOutlinedIcon />
                <a href='/#home'>Home</a>
            </li>
            <li>
                <AcUnitOutlinedIcon />
                <a href='/#about'>About</a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar