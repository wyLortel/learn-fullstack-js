//screen: 렌더된 가짜 화면 안에서 요소를 찾을 수 있는 도우미 객체
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


// test("테스트 설명", () => {
//   // 테스트 코드
// });
// 'the counter starts at 0'은 테스트 이름,
// 괄호 안의 함수가 실제 테스트 코드

test('the counter starts at 0', () => {
  render(<App />); //App을 가짜 DOM에 렌더링
  const counterElement = screen.getByTestId("counter"); //화면(screen) 안에서 data-testid="counter"인 요소를 찾아라
  expect(counterElement).toHaveTextContent(0); //expect(실제값).toBe(기대한값); 실제값이 기대한값과 다르면  실패같으면 성공
  //.toHaveTextContent() → DOM 요소의 텍스트 내용을 검증하는 함수.
});


test("minus button has correct text" , ()=>{
  render(<App />);

  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");

})

//테스트 이름은 이 코드가 어떤 상황에서 어떤 결과를 보여야하는가 를 표현해야함

test("plus button has correct text" , ()=>{
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
})

//각 테스트는 독립된 함수 스코프를 가지기에 다른 테스트랑 변수명이 같아도 상관없는것 

test("when the + button is pressed, the counter changes to 1",()=>{
  render(<App/>)

  const buttonElement = screen.getByTestId("plus-button");
  //fireEvent 테스트 환경에서 제공하는 이벤트 발생 유틸리티 이걸로 테스트 환경에서 이벤트를 가짜로 발생시켜줌
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1)
})


test("on/off button has blue color" , ()=> {
  render(<App/>)
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({backgroundColor: 'blue'});
  //toHaveStyle({ backgroundColor: "blue" })렌더링된 스타일 확인
})


test("Prevent the -,+ button from being pressed when the on/off button is clicked" , ()=> {
  render(<App/>)
  const onOffButtonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onOffButtonElement);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();
  //“이 버튼(pluButtonElement)이 비활성화(disabled) 되어 있어야 한다
})