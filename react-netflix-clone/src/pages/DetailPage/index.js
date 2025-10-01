import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';

export default function DetailPage() {
  const { movieId } = useParams(); //URL에 정의된 :movieId 값을 가져옴.  /movie/123 → movieId = "123"

  //api로 가져올 영화 저장
  const [movie, setMovie] = useState(null); // 처음엔 null

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(`/movie/${movieId}`); //TMDB API에서 영화 상세 정보 가져옴.
        setMovie(request.data); //그 결과의 데이터를 넣음 
      } catch (error) {
        console.error("영화 정보를 불러오지 못했습니다:", error);
      }
    }
    fetchData();
  }, [movieId]); //movieId가 바뀔 때 실행.

  if (!movie) return <div>...loading</div>; // 만약 객체가 비면 로딩 출력 

  // backdrop_path 없으면 poster_path 사용
  const imageUrl = movie.backdrop_path || movie.poster_path;

  return (
    <section>
      {imageUrl ? (
        <img
          className='modal__poster-img'
          src={`https://image.tmdb.org/t/p/original${imageUrl}`}
          alt={movie.title || movie.name || "poster"}
        />
      ) : (
        <div>이미지를 찾을 수 없습니다</div> //이미지 없으면 이미지 없다 출력 
      )}
    </section>
  );
}
