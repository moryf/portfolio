
import './App.css';
import AboutSection from './components/section/AboutSection';
import HomeSection from './components/section/HomeSection';
import ProjectsSection from './components/section/ProjectsSection';
import Sidebar from './components/sidebar/Sidebar';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function App() {
  return (
    <div className="App">
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
     <Sidebar />
     <button onClick={()=>{
      window.scrollTo({top:0, behavior:'smooth'})
     }}
     className='back-to-top'><KeyboardArrowUpIcon/></button>
    </div>
  );
}

export default App;
