//jsx(리액트 문법 사용)
import React, { useState, useEffect } from "react";

import requests from "../api/request";  
import axios from "../api/axios";
import "./Banner.css";
//스타일 컴포넌트를 사용한다는 라이브러리
import styled from "styled-components";

//export default로 다른 파일에서 import를 붙여 사용하는게 가능 
export default function Banner() {
  //현재 배너에 보여줄 영화 데이터 movie
  const [movie, setMovie] = useState({}); 
  
  const [isClicked, setIsClicked] = useState(false);



  //리액트가 화면에 컴포넌트를처음 그렷을때 실행됨 이걸 마운트라고 함
  useEffect(() => {
    fetchData();
  }, []); // 빈배열이므로 처음 딱한번만 실행 

  //async/await: 비동기 API 요청을 동기처럼 기다리게 해줌 async 붙은 함수 안에서 await를 쓸 수 있음.
  const fetchData = async () => {
    try {
      // 현재 상영중인 영화 정보 가져오기 (여러 영화) await axios.get(...) → 이 코드가 끝날 때까지 기다림.
      const response = await axios.get(requests.fetchNowPlaying); 
      //axios.get(url) axios에서 우리가 정해줘서 다 안들고와도 자동으로 돰 : 지정한 url로 (베이스 url자동으로 붙음) 
      // GET 요청 보내서 서버 데이터 받아옴. requests.fetchNowPlaying : “현재 상영 중 영화 목록” API 주소가 저장된 문자열.
      //response에 영화들 정보 객체가 배열로 들어잇음 

      // 여러 영화 중 랜덤으로 하나 뽑기
      const movieId =
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)  //response.data.results.length 영화갯수 
        ].id; //영화 목록 객체에서 랜덤으로 id를 뽑음

      // 특정 영화의 상세 정보 가져오기 (비디오 정보 포함)
      //await axios.get(`movie/${movieId} 응답은 객체 그러니 거기서 data만 꺼내 쓰려는 구조분해할당 여기서 data라는 키를 movieDetail이라는 변수에 넣은것 안에 결과적으로 json이 들어감
      const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
        params: { append_to_response: "videos" }, 
      }); // 그 무비 id로 url을 만들어 get요청을 보내는거 http://api.themoviedb.org/3/movie/ 이런식으로
      //{ params: { append_to_response: "videos" } } tmbi 옵션 예고편도 가져와 

      //그걸 현재 배너에 보여줄 데이터에 넣음 
      setMovie(movieDetail);
    } catch (error) {
      console.error("영화 데이터 불러오기 실패:", error);
    }
  };


  // 긴 문자열 자르는 함수 영화줄거리 자름  / str?.length옵셔널 체인 연산자 만약 null 이나 undefind면 그냥 undefind반환  에러안내고 막아줄수잇음 
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str; //.substr()문자열 자르기 메서드 문자열.substr(시작위치, 길이)
  };

  //클릭을 안하면 원래 정적 화면을 보여줌 
  if(!isClicked){
     return (

    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        {/* 영화 제목 */}
        <h1>{movie.title || movie.name || movie.original_name}</h1>

        {/* 버튼들 */}
        <div className="banner__buttons">
          <button className="banner_button play" onClick={() => setIsClicked(true)}>Play</button>
          <button className="banner_button info">More Information</button>
        </div>

        {/* 영화 설명 (길이 제한 적용) */}
        <h1 className="banner_description">
          {truncate(movie?.overview, 100)} 
        </h1>
      </div>
    </header>
  );

  //클릭을 해서 true가 되엇을때 
  } else{
    return(
      <Container>
        <HomeContainer>
          <Iframe
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}
              ?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen"
          ></Iframe>
        </HomeContainer>
      </Container>
    )
  }

 
}

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  //::after CSS의 가상 요소(pseudo-element) 중 하나.어떤 요소의 "마지막 자식"처럼 동작해서, 거기에 추가적인 콘텐츠나 장식을 붙일 수 잇음 content: "" → 빈 텍스트지만 요소가 생김 (눈엔 안 보여도 "틀" 있음).

  &::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`


const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width : 100%;
  height: 100vh; //vh /* 브라우저 창 세로 크기 100% */
`

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`