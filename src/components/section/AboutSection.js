
import './AboutSection.css'
import './Section.css'
import Profile from '../../util/profile.jpeg'


function AboutSection() {

  return (
    <div className='section' id='about'>
      <div className='about-section'>
        <img src={Profile} alt='about' />
        <h1>About</h1>
        <h3>Hi! I'm Aleksa</h3>
        <p>
        I’m a freelance web developer with 4 years of experience, specializing in building business websites, e-commerce platforms, and custom web applications. I use WordPress for simpler, user-friendly sites that clients can easily manage, and React.js for more complex, custom web designs. Whether it's a sleek business site, a robust e-commerce platform, or a tailored web application for business use, I deliver fast, responsive, and fully optimized solutions.
          <br /><br />
        I offer a turnkey approach—handling everything from design to deployment—so your website or application is ready for immediate use. With a focus on fast delivery and clear communication, I ensure efficient, scalable, and easy-to-manage solutions.
          <br /><br />
        I hold a Bachelor's degree in Information Systems and Technologies from the Faculty of Organizational Sciences at the University of Belgrade and am currently pursuing my Master's in Software Engineering and Artificial Intelligence at the same faculty.
        </p>

      </div>
      <button className='next-section-button' onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                next
        </button>
    </div>

  );
}

export default AboutSection