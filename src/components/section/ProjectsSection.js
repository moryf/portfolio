import React from 'react'
import './Section.css'
import './ProjectsSection.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function ProjectsSection() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px", // Adjust this value if necessary
        slidesToShow: 3,
        speed: 500,
    };
    


    return (
        <div className='section'>

                <Slider {...settings}>
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className='slider-item'>
                            <h3>{item}</h3>
                        </div>
                    ))}
                </Slider>
        </div>
    );

}
    

export default ProjectsSection