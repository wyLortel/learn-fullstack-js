import React from 'react'
import Banner from '../../components/Banner'
import Row from '../../components/Row'
import requests from '../../api/request'

export default function Mainpage() {
  return (
    <div>
      <Banner />

      {/* props로 데이터를 넘겨서 Row 컴포넌트를 재사용 */}
      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row
        title="Trending Now"
        id="TN"
        fetchUrl={requests.fetchTrending}
      />

      <Row
        title="Top Rated"
        id="TR"
        fetchUrl={requests.fetchTopRated}
      />

      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />

      <Row
        title="Comedy Movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />

      <Row
        title="Horror Movies"
        id="HM"
        fetchUrl={requests.fetchHorrorMovies}
      />

      <Row
        title="Romance Movies"
        id="RM"
        fetchUrl={requests.fetchRomanceMovies}
      />

      <Row
        title="Documentaries"
        id="DM"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  )
}
