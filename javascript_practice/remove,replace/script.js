


// let val;

// val = document;

// val = document.baseURI // 웹페이지의 절대  uri 반환 
// val = document.head; //헤드 테그를 반환
// val = document.body; //헤드 테그를 반환
// val = document.forms; //헤드 테그를 반환
// val = document.forms[0].id; //헤드 테그를 반환
// val = document.forms[0].classList; 
// val = document.forms[0].className; 

// val = document.scripts[1].getAttribute("src")

// val = document.scripts
// console.log(val);

// //파라미터를 전달한 id를 가진 태그를 반환
// document.getElementById(요소아이디)

// //파라미터로 전달한 name 속성을 가진 태그를 반환
// document.getElementsByName(name 속성값)

// //파라미터로 전달한 선택자에 맞는 모든 요소 반환
// document.querySelectorAll(선택자)


// headerContainer.style.display = "none";

// console.log(headerContainer)


// const headerContainer = document.getElementById("header-container");

// headerContainer.textContent = "Text Content"
// headerContainer.innerText = "Inner Text"
// headerContainer.innerHTML= "<span>Inner Html</span>"


// console.log(document.querySelector("#form-first-div"))


//여러 요소 접근

// document.getElementsByTagName(태그 이름)
// document.getElementsByClassName(클래스 이름)
// document.querySelectorAll(선택자)

const items = document.getElementsByClassName("list-group-item")
console.log(items);

items[0].style.color = "blue";

items[3].textContent = "hi";

let list = document.getElementsByTagName("li");

list = Array.from(list);


console.log(list);