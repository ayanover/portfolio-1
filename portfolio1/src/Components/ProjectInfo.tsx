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
                <h2> Mały projekt dla salonu optycznego zrealizowany we współpracy z <a href={'http:'}>Adrian Goral</a></h2>
                <button> Czytaj więcej </button>
            </div>
            <div className='grid2-item left-bottom-item photo-item'><a href={'http://www.clinicaoptika.pl/'}></a></div>
            <div className='grid2-item right-bottom-item text-item'>
                <h1>Clinica Optika</h1>
                <hr/>
                <h2> Mały projekt dla salonu optycznego zrealizowany we współpracy z <a href={'http:'}>Adrian Goral</a></h2>
                <button> Czytaj więcej </button>
            </div>
        </div>
    );
}