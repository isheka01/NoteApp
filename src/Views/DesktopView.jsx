import React ,{useState} from 'react'
import Sidebar from '../components/DesktopSidebar'
import Home from '../components/DesktopNotes'
import Popup from '../components/NotesPopUp'
function DesktopView() {
  const [selected , setSelected]= useState('false')
 
 
  return (
    <div style={{display:'flex'}} >
        <Sidebar selected={selected} setSelected={setSelected}  />
        <Home/>
      {  selected || <Popup/>}

    </div>
  )
}

export default DesktopView