import '../Styles/Grid1.css';
function Grid1() {
    return (
        <div className='grid-container'>
            <div className='grid-item left-item'>
                <div className='about-section'>
                    <h1>About Me</h1>
                </div>
                <hr/>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lacinia purus, sed condimentum lacus. Ut a ex ut tortor facilisis lacinia ac id tellus. Etiam faucibus tortor ligula, condimentum mattis risus ultricies quis.Suspendisse potenti. Curabitur at semper arcu. Cras id turpis ipsum.</h2>
                <div className='button-container'>
                    <button className='grid-button contant-button'> Contact Me</button>
                </div>
            </div>
            <div className='grid-item right-top-item1'>
                {/*<div className='about-section'>*/}
                {/*    <h1> My Stack </h1>*/}
                {/*</div>*/}
                {/*<hr/>*/}
                {/*<div className='list-container'>*/}
                {/*    <ul>*/}
                {/*        <li> React </li>*/}
                {/*        <li> Tailwind </li>*/}
                {/*        <li> Three.js </li>*/}
                {/*        <li> Node.js </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
                {/*<div className={'button-container'}>*/}
                {/*    <button className='grid-button'> View more </button>*/}
                {/*</div>*/}
            </div>
            <div className='grid-item right-top-item1'>
            </div>
            <div className='grid-item right-bottom-item'></div>
        </div>
    );
}

export default Grid1;