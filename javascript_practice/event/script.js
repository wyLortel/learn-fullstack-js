// //문서가 로드 될대 이 함수 실행
// window.onload = function() {
//     //id가 text인  요소를 리턴
//     let text = document.getElementById("text");

//     text.innerText = "HTML 문서 loaded "
// }


// const aElement = document.querySelector("a");

// aElement.addEventListener("click", ()=>{
//     alert("a element click")
// })


// const buttonElement = document.querySelector(".btn");
// buttonElement.addEventListener("click", (event) => {
//     let val;
//     val = event.target;
//     val = event.target.id;
//     val = event.target.className;
//     val = event.clientY;
//     val - event.offsetY;
//     console.log(val);
    
// });


const sumbitBtn = document.querySelector(".submit-btn");
const form = document.querySelector("form");
const title = document.querySelector("h2");
const emailInput = document.getElementById("email");

// //event
// sumbitBtn.addEventListener("click",handleEvent);
// sumbitBtn.addEventListener("dbclick",handleEvent);
// sumbitBtn.addEventListener("mousedown",handleEvent);
// sumbitBtn.addEventListener("mouseup",handleEvent);
// sumbitBtn.addEventListener("mouseenter",handleEvent);


// function handleEvent(e){
//     e.preventDefault(`Event TYPE: ${e.type}`);
//     title.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
//     console.log()
// }


form.addEventListener("submit",handleEvent);
emailInput.addEventListener("keydown",handleEvent);


function handleEvent(e){
    if(e.type === "submit") {
        e.preventDefault();
    }

    e.preventDefault(`Event TYPE: ${e.type}`);
    title.textContent = e.target.value;
}