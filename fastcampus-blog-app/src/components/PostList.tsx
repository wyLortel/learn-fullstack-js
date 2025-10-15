import {useState} from "react";
import { Link } from "react-router-dom";

//여기 모르겟음
interface PostListProps{
    hasNavigation?:boolean
}

//서 interface는 “props의 형태(타입)”를 정해주는 TypeScript 문법 boolean 값을 받을 수 있다 이런뜻인듯

type TabType = "all" | "my";


// type TabType = "all" | "my";

// 이건 TypeScript의 타입 별칭(Type Alias) 선언이야.

// 👉 “TabType이라는 이름으로 "all" 또는 "my" 둘 중 하나만 가능하도록 제한하겠다.”




export default function PostListCom({hasNavigation = true}:PostListProps) {

  const [activeTab, setActiveTab] = useState<TabType>("all"); //초기값 all

  return (
    <>
    {hasNavigation && (
          <div className='post__navigation'>
        <div role="presentation" onClick={()=>setActiveTab("all")} className={activeTab === "all" ? "post__navigation--active" : ""}>전체</div>
         <div role="presentation"onClick={()=>setActiveTab("my")} className={activeTab === "my" ? "post__navigation--active" : ""}>나의 글</div>
      </div>
    )}
    
      <div className='post__list'>
        {[...Array(10)].map((_, index) => (
          <div key={index} className='post__box'>
            <Link to={`/posts/${index}`}>
              <div className='post__profile-box'>
                <div className='post__profile'></div>
                <div className='post__author-name'>패스트 캠퍼스</div>
                <div className='post__date'>2023.07.08 토요일</div>
              </div>
              <div className='post__title'>게시글 {index}</div>
              <div className='post__text'>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been th e
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scr ambled it to make
                a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the
                r elease of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.
              </div>
              <div className='post__utils-box'>
                <div className='post__delete'>삭제</div>
                <div className='post__edit'>수정</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
