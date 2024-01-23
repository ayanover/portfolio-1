import './App.css'
import Background from "./Components/background.tsx";
import AboutSection from './Components/AboutSection.tsx'
import Header from './Components/Header.tsx'
import ProjectSection from './Components/ProjectSection.tsx'
import ContactSection from "./Components/ContactSection.tsx";

function App() {
  return (
    <>
        <Background/>
        <div className={'Container'}>
            <Header/>
            <div className='spacer'></div>
            <AboutSection/>
            <div className='spacer'></div>
            <ProjectSection/>
            <div className='spacer'></div>
            <ContactSection/>
        </div>
    </>
  )
}

export default App
