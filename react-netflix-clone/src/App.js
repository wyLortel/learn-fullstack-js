import React from 'react';
import {Outlet, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav";
import Footer from './components/Footer';
import "./App.css";
import Mainpage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';


const Layout = () => {
  return(
    <div>
      <Nav/>  {/* 항상 보이는 네비게이션 */}

      <Outlet/> {/* 자식 라우트들이 이 자리에 렌더링됨  뭘 넣는냐에 따라 여기가 바뀜*/}

      <Footer/> {/* 항상 보이는 푸터 */}
    </div>
  )
}

function App() {
  return (
    <div className='App'>
    <Routes>
        <Route path='/' element={<Layout/>}>
            {/* /경로일때 <Layout/을 기본적으로 렌더링 근데  <Layout/> 안에  <Outlet/>이게 잇음 이게 중첩 라우팅 */}
            {/* 부모경로에 /가 잇을경우 기본적으로 보여줄 자식 컴포넌트 중첩인 이유는 처음에 레이아웃을 불러오고 기본값이 메인이니 처음 이화면이 보여지는것 INDEX는 부모의 기본화면*/}
            <Route index element={<Mainpage/>}></Route> 
            {/* 부모 자식 중첩적용 레이아웃과 자식들 그래서 주소에 따라 자식만 바꿔끼우는 그런느낌 그리고 PATH에:나와서 동적경로 어떤값이 들어와도 매칭  */}
            <Route path=':movieId' element={<DetailPage/>}></Route>
            {/* /search 이건정적 이거 아니면 매칭안됨 */}
            <Route path='search' element={<SearchPage/>}></Route>
        </Route>
    </Routes>
    </div>
  )
}

export default App;