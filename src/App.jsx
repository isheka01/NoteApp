import {React,useState} from 'react'
import Desktop from './Views/DesktopView'
import './App.css'
function App() {
  const [screensize, setscreensize] = useState(window.innerWidth);

  return (
    <div>
      {screensize > 500 && <Desktop/>}
      
    </div>
  )
}

export default App