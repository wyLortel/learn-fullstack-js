import React from 'react';
//Routes 여러 Route 묶음 (라우터 컨테이너) URL에 따라 어떤 컴포넌트를 보여줄지 결정
//Route 경로별로 어떤 화면을 보여줄지 설정 path + element 조합
//Link 페이지 이동 버튼 새로고침 없이 URL만 변경
//Navigate 자동 리디렉션 잘못된 경로 접근 시 홈 등으로 보내기
import { Routes, Route, Link , Navigate } from 'react-router-dom'; 
import Home from '../pages/home';
import PostList from '../pages/Posts';
import PostDetail from '../pages/Posts';
import PostEdit from '../pages/Posts/edit';
import PostNew from '../pages/Posts/new';
import ProfilePage from '../pages/profile';
import LoginPage from '../pages/login';
import SignupPage from '../pages/signin';
//Link 컴포넌트는 SPA 이동용 버튼
export default function Router() {
  return (
    <>
       {/* Route 구조 원리  path : URL 경로 정의  element : 그 경로에서 보여줄 JSX 컴포넌트 */}
       {/* /posts로 접속하면 <h1>Post List Page</h1> 렌더링됨 */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/posts' element={<PostList/>} />
        <Route path='/post/:id' element={<PostDetail/>} />
        <Route path='/post/new' element={<PostNew/>} />
        <Route path='/post/edit/:id' element={<PostEdit/>} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
        {/* *는 모든 URL과 매칭되는 와일드카드 존재하지않는 url접근시 /로 강제 이동  replace 옵션은 뒤로가기 스택에 안남음 */}
        <Route path='*' element={<Navigate replace to="/"/>} />
      </Routes>
    </>
  );
}
