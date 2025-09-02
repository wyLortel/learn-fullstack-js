const arr = ["가" , "라" , "다" , "라" , "마" , "라"];

for (let i = 0; i < arr.length; i++){
    if(arr[i] == "라"){
        arr.splice(i,1)
    }
}


while (arr.indexOf("라") > -1){
    arr.splice(arr.indexOf("라"),1)
}


let index = arr.indexOf("라");

while (index > -1) {
    arr.splice(index,-1);
    index = arr.indexOf("라");
}

const arr1 = [1,2,3,4,5]

arr.at(0) // 특정 위치를 가져옴

arr1[-1]//자바 스크립트는 이게 인덱스로 접급이 안되지만
arr.at(-1) // 이렇게하면 됨