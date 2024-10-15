
import './AboutSection.css'
import './Section.css'
import Profile from '../../util/profile.jpeg'


function AboutSection() {

  return (
    <div className='section' id='about'>
      <div className='about-section'>
        <img src={Profile} alt='about' />
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec purus ac nunc tincidunt
          faucibus. Donec auctor, magna
          ac ultrices tincidunt, tur
          pis nunc aliquet nisi, sit amet
          tempus nunc libero nec nunc.
          Donec auctor, magna ac ultr
          ices tincidunt, turpis nunc
          aliquet nisi, sit amet tempus
        </p>

      </div>
    </div>

  );
}

export default AboutSection