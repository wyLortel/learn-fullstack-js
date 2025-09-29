import React from 'react'
import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Row from './components/Row';
import requests from './api/request';
import "./App.css"


function App() {
  return (
    <div className='App'>
        <Nav/>
        <Banner/>

        {/* props로 데이터 넘김  row.js를 함수마냥 하고 넘기는 값만 변경해서 다른것이 나온것 */} 
        <Row
          title="NETFLIX ORIGINALS"
          id = "NO"
          fetchUrl = {requests.fetchNetflixOriginals}
          isLargeRow
        />

        <Row
          title="Trending Now"
          id = "TN"
          fetchUrl = {requests.fetchTrending}
        />

        <Row
          title="Trending Now"
          id = "TR"
          fetchUrl = {requests.fetchTopRated}
        />

        <Row
          title="Trending Now"
          id = "AM"
          fetchUrl = {requests.fetchActionMovies}
        />


        <Row
          title="Comedy Movies"
          id = "CM"
          fetchUrl = {requests.fetchComedyMovies}
        />

        <Row
          title="Horror Movies"
          id = "HM"
          fetchUrl = {requests.fetchHorrorMovies}
        />


        <Row
          title="Romance Movies"
          id = "RM"
          fetchUrl = {requests.fetchRomanceMovies}
        />

        <Row
          title="Documentaries"
          id = "DM"
          fetchUrl = {requests.fetchDocumentaries}
        />

    </div>
  )
}

export default App;