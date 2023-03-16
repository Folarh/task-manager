import React,{useState, useEffect} from 'react'
import './Navbar.css'

export default function Navbar() {
  const [theme, setTheme]= useState("light")

  useEffect(()=>{
     document.documentElement.removeAttribute("class")
     document.documentElement.classList.add(theme)
  },[theme])
  return (
    <header>
        <div className='logo'>
            <h1>Tasker</h1>
        </div>

        <div className='theme-selector'>
            <span className={theme==="light"? "light activeTheme": "light"} onClick={()=>setTheme('light')}></span>
            <span className={theme==="dark"? "dark activeTheme": "dark"} onClick={()=>setTheme('dark')}></span>
        </div>
    </header>
  )
}
