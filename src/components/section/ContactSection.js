import React from 'react'
import './Section.css'
import './ContactSection.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Link } from 'react-router-dom';


function ContactSection() {
  return (
    <div className='section' id='contact'>
        <div className='contact-section'>
            <h2>Contact</h2>
            <div className='contact'>
                <div className='contact-left'>
                    <a href='https://github.com/moryf' target='_blank' rel='noreferrer'>
                        <GitHubIcon fontSize='large'/>
                    </a>
                    <a href='https://www.linkedin.com/in/aleksa-djordjiev/' target='_blank' rel='noreferrer'>
                        <LinkedInIcon fontSize='large'/>
                    </a>
                    <a href='mailto:aleksa.kb24@live.com' target='_blank' rel='noreferrer'>
                        <EmailIcon fontSize='large'/>
                    </a>
                    <a href='https://drive.google.com/file/d/1Er34WyVTd7KsGhr0lgJw_3Umgpv8b2-J/view?usp=sharing' target='_blank' rel='noreferrer'>
                        <PictureAsPdfIcon fontSize='large'/>
                    </a>
                </div>
                <div className='contact-center'>
                    <h3>Get in touch</h3>
                    <p>Feel free to reach out to me on any of the platforms above. I would love to hear from you!</p>
                </div>
                <div className='contact-right'>
                    <p>Designed and built by Aleksa Djordjiev</p>
                    <a href='mailto:aleksa.kb24@live.com' target='_blank' rel='noreferrer'>
                        <p>
                            aleksa.kb24@live.com
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection