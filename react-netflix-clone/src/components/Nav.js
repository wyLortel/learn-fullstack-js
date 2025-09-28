import React, { useEffect, useState } from 'react'
import "./Nav.css";

export default function Nav() {

  const [show , setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll" , () =>{
        if(window.scrollY > 50){
            setShow(true)
        } else {
            setShow(false)
        }
    })

    return() => {
        window.removeEventListener("scroll" , () => {});
    };
  }, [])

  return (
    <nav className={`nav ${show ? "nav__black" : ""}`}>
      <img
        alt='Netflix logo'
        src='https://mblogthumb-phinf.pstatic.net/MjAyNDAyMTZfMjg4/MDAxNzA4MDM5MjkzNzgz.OCaw5gZcXEG9-Ug_5_lTbvafjH489eTk_98g4vaW9jIg.KnS33P6lovZjzOv67X0w81DQoVTCQhYMU6mWC9gtE7kg.PNG.leeyekn/Netflix-Logo.png?type=w800'
        className='nav__logo'
        onClick={()=> window.location.reload()}
      />
      <img
        alt='User logged'
        src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg'
        className='nav__avatar'
      />
    </nav>
  )
}
