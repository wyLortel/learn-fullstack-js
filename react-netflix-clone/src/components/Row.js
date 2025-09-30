import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import "./Row.css";
import MovieModal from "./MovieModal"; 

export default function Row({ isLargeRow, title, id, fetchUrl }) {
  // 영화 리스트 담을 스테이트
  const [movies, setMovies] = useState([]);

  // 모달 상태
  const [modalOpen, setModalOpen] = useState(false);

  // 선택된 영화 정보
  const [movieSeleted, setMovieSeleted] = useState({});

  // 마운트될 때 데이터 가져오기
  useEffect(() => {
    fetchMovieData();
  }, []);

  // 영화 데이터 요청 함수
  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
  };

  // 영화 클릭 → 모달 열고 선택된 영화 저장
  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSeleted(movie);
  };

  // 렌더링 시작
  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        {/* 왼쪽 화살표 */}
        <div
          className="slider__arrow-left"
          onClick={() => {
            document.getElementById(id).scrollLeft -= window.innerWidth - 80;
          }}
        >
          <span className="arrow">{"<"}</span>
        </div>

        {/* 영화 목록 */}
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`https://image.tmdb.org/t/p/original${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name || movie.title}
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>

        {/* 오른쪽 화살표 */}
        <div
          className="slider__arrow-right"
          onClick={() => {
            document.getElementById(id).scrollLeft += window.innerWidth - 80;
          }}
        >
          <span className="arrow">{">"}</span>
        </div>

        {/* 모달 */}
        {modalOpen && (
          <MovieModal {...movieSeleted} setModalOpen={setModalOpen} /> 
          // ✅ 이름 맞춤
        )}
      </div>
    </section>
  );
}
