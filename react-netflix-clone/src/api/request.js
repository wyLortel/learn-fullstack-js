const requests = {
  fetchNowPlaying: "/movie/now_playing",                // 현재 상영작
  fetchNetflixOriginals: "/discover/tv?with_networks=213", // 넷플릭스 오리지널
  fetchTrending: "/trending/all/week",                  // 이번주 트렌드
  fetchTopRated: "/movie/top_rated",                    // 평점 높은 영화
  fetchActionMovies: "/discover/movie?with_genres=28",  // 액션 영화
  fetchComedyMovies: "/discover/movie?with_genres=35",  // 코미디 영화
  fetchHorrorMovies: "/discover/movie?with_genres=27",  // 공포 영화
  fetchRomanceMovies: "/discover/movie?with_genres=10749", // 로맨스 영화
  fetchDocumentaries: "/discover/movie?with_genres=99", // 다큐멘터리
};

export default requests;
