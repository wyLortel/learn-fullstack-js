let timeoutId;

function startTimer(){
  timeoutId = setTimeout(()=>{
    console.log("3초 경과: 실행되엇습니다!");
  },3000);

  console.log("3초안에 눌러야 취소됨")
}

startTimer();