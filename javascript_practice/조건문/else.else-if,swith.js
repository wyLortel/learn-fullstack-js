if(false){
    console.log("hello if!")
}else{
    console.log("hello else!")
}

//되도록 중첩 if문은 피하도록 하자 


//스위치문

let value = "A";

switch(value) {

    default:
        console.log("몰라")
        break;
    case "A": // 밸류랑 조건이랑 같으면 실행한다 중괄호를 안써도 되는데 쓰는걸 추천
        console.log("A")
        break;
    case "B":
        console.log("B")
        break;
     case "C":
        console.log("C")
        break;
}
//이것도 자바랑 완전 동일 default문은 어디에 쓰던지 괜찮


