import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./SearchPage.css"
import { useDebounce } from '../../hooks/useDebounce';

export default function SearchPage() {

  const navigate = useNavigate();
  const [searchResults, setsearchResults] = useState([]);

  const useQuery = () => {
    //useLocation() = 리액트 라우터 훅 현재 브라우저의 URL 정보를 객체로 줌.
    //여기서 .search만 뽑으면 ?q=avatar&page=2가 됨. 주소창의 ? 뒤에 붙은 모든 쿼리스트링을 가져오는 거
    //new URLSearchParams(...)자바스크립트 내장 객체로, 쿼리스트링(?q=avatar&page=2)을 다루기 쉽게 바꿔줌.
    //params.get("q")// "avatar"     params.get("page")/ "2" 자동으로 key/value로 매핑해서 꺼낼 수 있음.
    //query = new URLSearchParams("?q=avatar&page=2"); 이게 리턴 결과 
    return new URLSearchParams(useLocation().search);

  }

  let query = useQuery(); //query라는 변수 안에 쿼리스트링을 다룰 수 있는 객체가 들어감
  const searchTerm = query.get("q") //"q"라는 키를 꺼내라는 뜻 → q=avatar에서 "avatar"만 추출.
  const debouncedSearchTerm = useDebounce(searchTerm , 500); //실시간으로 url도 변동하기에 searchTerm 을 넣어줌 

  useEffect(() => {
    if(debouncedSearchTerm ){ //검색어가 없는데 API 호출하면 에러 나거나 불필요한 요청이 생기니까 방지하기 위해 if분 사용 
      fetchSearchMovie(searchTerm); //
    }
  }, [debouncedSearchTerm ]) //debouncedSearchTerm 가 바뀔때마다 실행 
  
  //async 함수 → 비동기 API 호출 가능
  const fetchSearchMovie = async (searchTerm) => {
    try{
      //기서는 search/multi?.주소로 검색 요청 await를 붙였으니 응답이 올 때까지 기다림. 보통 TMDB API 기준으로 응답 구조는 { data: { results: [...] } } 이런 식.
      const request = await axios.get(`search/multi?include_adult=false&query=${searchTerm}`)
      //결과를 state에 저장해서 컴포넌트 다시 렌더링되게 함.
      setsearchResults(request.data.results);

    } catch (error){
      console.log("error" , error)
    }
  }


  const renderSearchResult = () => {
    return searchResults.length > 0 ? ( //결과 갯수가 한개이상이면 
      <section className='search-container'>
        {searchResults
          .filter((movie) => movie.backdrop_path && movie.media_type !== "person") //인물제외하고 백드롭 이미지가만잇는걸로 배열 다시만듬
          .map((movie) => { 
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path; //각 영화마다 이미지 URL 생성. TMDB의 정해진 이미지 베이스 URL + 경로
            return (
              // key는 필수: 리스트 재조정 시 리액트가 항목 식별
              <div key={movie.id} className='movie'> 
                <div className='movie_column-post' onClick={()=>navigate(`/${movie.id}`)}>
                  <img 
                    src={movieImageUrl}
                    alt={movie.title || movie.name}
                    className='movie__poster'
                  />
                </div>
              </div>
            );
          })}
      </section>
    ) : ( //없을때는
      <section className='no-results'>
        <div className='no-results__text'>
          <p>찾고자 하는 검색어 "{debouncedSearchTerm }"에 맞는 영화가 없습니다</p>
        </div>
      </section>
    );
};

  return renderSearchResult();
}
