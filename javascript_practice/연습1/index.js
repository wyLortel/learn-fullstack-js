
const container = document.querySelector(".container");
const gridButton = document.querySelector("#submit-grid");
const clearGridButton = document.querySelector("#clear-grid");
const gridWidth = document.querySelector("#width-range");
const gridHeight = document.querySelector("#height-range");
const colorButton = document.querySelector("#color-input");
const eraseBtn = document.querySelector("#erase-btn");
const paintBtn = document.querySelector("#paint-btn");
const widthValue = document.querySelector("#width-value");
const heightValue = document.querySelector("#height-value");

//상태변수

//그림그릴것인가 그림모드인가
let draw = false;

//지우개 모든인가를 확인
let erase = false;

//입력장치가 마우스인가 터치인가 확인용
let deviceType = "mouse";


const isTouchDevice = () => {
    //터치 장치이면 투르를 아니면펄스를 변수만 반환해도 상관없지만 안정성을 위해 둘다하는거
  try {
    //터치이벤트가 지원 가능한지 확인 아님에러
    document.createEvent("TouchEvent");
    //되면 디바이스를 터치로 변경
    deviceType = "touch";
    return true;
  } catch (e) {
    //에러나면 터치가 안되는 환경이므로 마우스 그대로 
    deviceType = "mouse";
    return false;
  }
};
isTouchDevice();


gridButton.addEventListener("click", () => {
  container.innerHTML = ""; // 이전에 안에 잇던 html 싹다 초기화
  let count = 0; //셀(마다 고유한 ID를 부여하기 위한 카운터 변수
  //각 칸을 gridCol1, gridCol2, gridCol3 이런 식으로 식별하려고 사용

  //height-range가 10이면 10줄의 행을 만듦.한 번 돌 때마다 하나의 div을 만듦.
  for (let i = 0; i < gridHeight.value; i++) {
    const row = document.createElement("div");
    row.classList.add("gridRow");

    //이간 가로 
    for (let j = 0; j < gridWidth.value; j++) {
      count++; //새 칸을 만들 때마다 카운트를 1씩 증가시켜 고유 ID 생성
      const col = document.createElement("div");
      col.classList.add("gridCol");
      //element.setAttribute("속성이름", "속성값");
      col.setAttribute("id", `gridCol${count}`);
      row.appendChild(col);
    }
    container.appendChild(row);
  }
});


// (1) 마우스 or 터치 시작 하면 색칠한다고 인식 
container.addEventListener("mousedown", (e) => {
  draw = true;
  paint(e);
});
container.addEventListener("touchstart", (e) => {
  draw = true;
  paint(e);
});


//드래그 하면서도 그릴수잇게 해주는
container.addEventListener("mousemove", (e) => {
  if (!draw) return;
  paint(e);
});
container.addEventListener("touchmove", (e) => {
  if (!draw) return;
  paint(e);
});

//어디에서나 손을 때면 그리기 모드 종료
window.addEventListener("mouseup", () => (draw = false));
window.addEventListener("touchend", () => (draw = false));


function paint(e) {
  let clientX, clientY;
  //클릭한곳 위치를 가져와 변수에 넣음 
  if (e.touches) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else {
    clientX = e.clientX;
    clientY = e.clientY;
  }


  const target = document.elementFromPoint(clientX, clientY); //“(x, y) 좌표에 있는 실제 DOM 요소를 찾아서 리턴.”
  if (target && target.classList.contains("gridCol")) {
    if (erase) {
      target.style.backgroundColor = "transparent"; //지우기 모드이면 배경색을 투명하게 
    } else {
      target.style.backgroundColor = colorButton.value;
    }
  }
}


clearGridButton.addEventListener("click", () => {
  container.innerHTML = "";
});

eraseBtn.addEventListener("click", () => {
  erase = true;
  eraseBtn.style.backgroundColor = "#ff5f5f";
  paintBtn.style.backgroundColor = "";
});

paintBtn.addEventListener("click", () => {
  erase = false;
  paintBtn.style.backgroundColor = "#5fff5f";
  eraseBtn.style.backgroundColor = "";
});



gridWidth.addEventListener("input", () => {
  widthValue.innerHTML =
    gridWidth.value < 10 ? `0${gridWidth.value}` : gridWidth.value;
});
gridHeight.addEventListener("input", () => {
  heightValue.innerHTML =
    gridHeight.value < 10 ? `0${gridHeight.value}` : gridHeight.value;
});



window.onload = () => {
  gridHeight.value = 10;
  gridWidth.value = 10;
  widthValue.innerHTML = "10";
  heightValue.innerHTML = "10";
};

