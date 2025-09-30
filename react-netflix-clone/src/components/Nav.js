import React, { useEffect, useState } from 'react'
import "./Nav.css";
import { useNavigate } from 'react-router-dom';

export default function Nav() {

  const [show , setShow] = useState(false);
  const [searchValue, setsearchValue] = useState("")

  //useNavigate();는 React Router가 제공하는 훅  그걸 변수에 담은것 저걸로 프로그램적 페이지를 이동시켜줌 
  const navigate = useNavigate();

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

  const handleChange = (e)=> {
    setsearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`) //뒤에 ?q=입력값을 붙임 → 쿼리스트링(query string) 으로 검색어를 전달
  }

  return (
    <nav className={`nav ${show ? "nav__black" : ""}`}>
      <img
        alt='Netflix logo'
        src='https://mblogthumb-phinf.pstatic.net/MjAyNDAyMTZfMjg4/MDAxNzA4MDM5MjkzNzgz.OCaw5gZcXEG9-Ug_5_lTbvafjH489eTk_98g4vaW9jIg.KnS33P6lovZjzOv67X0w81DQoVTCQhYMU6mWC9gtE7kg.PNG.leeyekn/Netflix-Logo.png?type=w800'
        className='nav__logo'
        onClick={()=> window.location.reload()}
      />

      <input value={searchValue} onChange={handleChange} className='nav__input' type='text' placeholder='영화를 검색해주세요'/>


      <img
        alt='User logged'
        src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg'
        className='nav__avatar'
      />
    </nav>
  )
}
