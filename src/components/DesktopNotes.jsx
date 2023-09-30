import React from 'react'
import img from '../images/secure.png'
import notes from '../components/DesktopNotes.module.css'
function DesktopNotes() {
  return (
    <div className={notes.bg}>
        <p className={notes.txt}> Pocket Notes</p><br/>
        <p className={notes.text}>Send and receive messages without keeping your phone online.<br/>
Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p><br/>
<div style={{display:'flex'}} className={notes.down}>
    <img src={img} alt=""/>
    <p >end-to-end encrypted</p>
</div>
    </div>
  )
}

export default DesktopNotes