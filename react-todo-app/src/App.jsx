//클래스형으로 리액트 쓸때는 필수 컴포넌트 클래스안에 리액트가 동작하기 위한 기본 동작이 들어잇음 이걸 상속받지 못하면 리액트가 컴포넌트로 인식못함 
import React, { Component } from "react";

import './App.css';

//기본 내보내는 클래스는 app이고 app은 리액트 부모 클래스를 상속받아 리액트 컴포넌트로 동작 
//onClick={() => this.handleClick(data.id)} 이건 매개 변수를 넘겨주기 위해 이렇게 사용함 
export default class App extends Component {
  btnStyle = {
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',    
    cursor: 'pointer',
    float: 'right',
    background: 'red'        
  }

  getStyle = () => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',   
      textDecoration: 'none',
    }
  }

  toData = [
    { id: 1, title: "공부하기" , completed: true, },
    { id: 2, title: "운동하기" , completed: true,},
    { id: 3, title: "코딩하기" , completed: true,},
  ];

  handleClick = () => {
    console.log("삭제");
  }


  render() {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <div className="title">
            <h1>할일 목록</h1>
          </div>

          {
            this.toData.map((data) => (
              <div key={data.id} style={this.getStyle()}>
                <input type="checkbox" defaultChecked={false} />
                {data.title}
                <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button> 
              </div>
            ))
          }

          
        </div>
      </div>
    )
  }
}
