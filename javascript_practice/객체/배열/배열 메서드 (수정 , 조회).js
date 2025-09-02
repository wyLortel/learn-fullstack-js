const target = ["가" , "나" , "다" , "라" , "마"];
// target[3] = "카" // 요소 변경
// console.log(target)


// target.pop() //마지막 요소 제거
// target.shift() // 첫번째 요소 제거


// arr[arr.length = 1] = null // 이렇게 하면 빈값이 들어가는것이 아닌 null 이 배열안에 들어가게 된다


// target.splice(2,2); //인덱스가 2인거에서 2개를 지우겟다 

// target.splice(1); // 두번째 아규머트가 없으면 첫 인덱스 부터 다 지워 버림


// target.splice(1,2,"티","파"); // 이렇게 추가도 가능 


// target.splice(2,0,"바"); // 이렇게 추가도 가능 




// const result = target.includes("다"); //잇으면 트루 없으면 false
// // 이런 불형이 나오는건 조건문 반복문에 주로 같이 쓰임 


// const result2 = target.indexOf("다") // 인덱스를 알려줌
// const result3 = target.lastIndexOf("다") //  뒤 인덱스를 알려줌



//반복문으로 배열 호출 // 다른언어랑 똑같이 문자열도 반복문으로 간으 
// let i = 0;
// while (i < target.length){
//     console.log(target[i])
//     i++;
// }


for (let i = 0; i <target.length; i++){
    console.log(target[i])
}