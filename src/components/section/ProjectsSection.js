import React from 'react'
import './Section.css'
import './ProjectsSection.css'
import KonstilPicture from '../../util/Screenshot_15-10-2024_122954_konstil.com.jpeg'
import JoilArtPic from '../../util/Screenshot_15-10-2024_123010_joilart.org.jpeg'
import TraianPicture from '../../util/Screenshot_15-10-2024_123033_traian.art.jpeg'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useRef } from 'react';
import {motion} from 'framer-motion';
import KonstilDesktopGif from '../../util/Konstil.gif';
import JoilartDesktopGif from '../../util/Joilart.gif';
import TraianDesktopGif from '../../util/traian.gif';


function ProjectsSection() {
    const projects = [
        {
            title: 'Konstil',
            description: 'A WooCommerce business site for a company specializing in the design, fabrication, and installation of metal structures, offering products such as fences, pergolas, and custom steel elements.',
            desktopImage: KonstilPicture,
            mobileImage: JoilArtPic,
            gifDesktop: KonstilDesktopGif,
            link: 'https://konstil.com/'
        },
        {
            title: 'Joilart',
            description: 'A WooCommerce site for a creative business offering custom metal gates and fences, combining traditional craftsmanship with modern CNC technology to create bespoke architectural solutions.',
            desktopImage: JoilArtPic,
            mobileImage: TraianPicture,
            gifDesktop: JoilartDesktopGif,
            link:'https://joilart.konstil.com/'
        },
        {
            title: 'Traian Art',
            description: 'A custom React.js portfolio site showcasing luxury wrought iron art pieces, combining responsive design with a clean, minimalist aesthetic to highlight the artists craftsmanship.',
            desktopImage: TraianPicture,
            mobileImage: KonstilPicture,
            gifDesktop: TraianDesktopGif,
            link:'https://traian.art/'
        },
    ];

    const projectsContainerRef = useRef(null);

    const handleProjectNav = (direction) => {
        const scrollAmount = projectsContainerRef.current.children[0].offsetWidth; 

        if (projectsContainerRef.current) {
            if (direction === "left") {
                projectsContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else if (direction === "right") {
                projectsContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className='section' id='projects'>
            <div className='projects-section'>
                <h2>Projects</h2>
                <div className='projects' ref={projectsContainerRef}>
                    {projects.map((project, index) => (
                        <div className='project' key={index}>
                            <div className='project-left'>
                                <button
                                    className='project-nav-button'
                                    id='project-nav-button-left'
                                    onClick={() => handleProjectNav("left")}
                                >
                                    <ArrowBackIosRoundedIcon />
                                </button>
                            </div>
                            <a href={project.link}>
                            <div className='project-center'>
                                <motion.img src={project.gifDesktop} alt={'project'+index} className='gif-image' 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    loading='lazy'
                                     />
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                            </a>
                            <div className='project-right'>
                                <button
                                    className='project-nav-button'
                                    id='project-nav-button-right'
                                    onClick={() => handleProjectNav("right")}
                                >
                                    <ArrowForwardIosRoundedIcon />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className='next-section-button' onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                next
        </button>
            
        </div>
    );
}

export default ProjectsSection;
