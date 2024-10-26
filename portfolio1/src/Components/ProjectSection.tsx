import '../Styles/ProjectSection.css';
import { useState} from "react";
import ProjectInfo from "./ProjectInfo.tsx";
export default function ProjectSection() {

    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setPopupOpen(true);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div className='grid2-container'>
            {isPopupOpen && <ProjectInfo onClose={handleClosePopup} />}
            <div className=' main-item'>
                <h1>My Projects</h1>
                <hr/>
            </div>
            <a href={'https://www.clinicaoptika.pl/'}></a>
            <div className='grid2-item left-top-item photo-item'><a href={'http://www.clinicaoptika.pl/'}></a></div>
            <div className='grid2-item right-top-item text-item'>
                <h1>Clinica Optika</h1>
                <hr/>
                <h2>  A Small project for an optic store in cooperation with <a href={'http:'}>Adrian Goral</a></h2>
                <button onClick={handleOpenPopup}> Read More </button>
            </div>
            <div className='grid2-item left-bottom-item photo-item'><a href={'https://www.clinicaoptika.pl/'}></a></div>
            <div className='grid2-item right-bottom-item text-item'>
                <h1>Clinica Optika</h1>
                <hr/>
                <h2>  A Small project for an optic store in cooperation with <a href={'http:'}>Adrian Goral</a></h2>
                <button> Read More </button>
            </div>
        </div>
    );
}