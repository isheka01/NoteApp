import React from 'react'
import barstyle from '../components/DesktopSidebar.module.css'
function DesktopSidebar({ selected, setSelected }) {
  return (
    <div className={barstyle.bg}>
      <h1 className={barstyle.h}>Pocket Notes</h1>
      <div className={barstyle.create} style={{ display: 'flex' }}>
        <p className={barstyle.txt} onClick={() => {
          setSelected(!selected);
        }}>+ Create Notes group </p>
        {/* <p className={barstyle.tx}>Create Notes group</p> */}
      </div>
    </div>
  )
}

export default DesktopSidebar