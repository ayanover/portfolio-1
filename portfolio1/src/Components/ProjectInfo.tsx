import '../Styles/ProjectSection.css';

export default function ProjectInfo(){
    return (
        <div className='grid2-container'>
            <div className=' main-item'>
                <h1>My Projects</h1>
                <hr/>
            </div>
            <a href={'http://www.clinicaoptika.pl/'}></a>
            <div className='grid2-item left-top-item photo-item'><a href={'http://www.clinicaoptika.pl/'}></a></div>
            <div className='grid2-item right-top-item text-item'>
                <h1>Clinica Optika</h1>
                <hr/>
                <h2> A Small project for an optic store in cooperation with <a href={'http:'}>Adrian Goral</a></h2>
                <button> Read More </button>
            </div>
            <div className='grid2-item left-bottom-item photo-item'><a href={'http://www.clinicaoptika.pl/'}></a></div>
            <div className='grid2-item right-bottom-item text-item'>
                <h1>Clinica Optika</h1>
                <hr/>
                <h2> A Small project for an optic store in cooperation with <a href={'http:'}>Adrian Goral</a></h2>
                <button> Read More </button>
            </div>
        </div>
    );
}