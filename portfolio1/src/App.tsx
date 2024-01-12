import './App.css'
import Grid1 from './Components/Grid1.tsx'
import Header from './Components/Header.tsx'
import Grid2 from './Components/Grid2.tsx'

function App() {
  return (
    <>
        <div className={'Container'}>
            <Header/>
            <div className='spacer'></div>
            <Grid1/>
            <div className='spacer'></div>
            <Grid2/>
        </div>
    </>
  )
}

export default App