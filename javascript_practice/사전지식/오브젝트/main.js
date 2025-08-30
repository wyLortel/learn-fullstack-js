let obj = {
    prop1 : "value1",
    prop2 : "value2",
    prop3 : function() { //이렇게 함수의 이름이 없는걸 무명 함수라고 함
        console.log("value3");
    },
    prop4: {
        prop5 : "value5"
    }
}


console.log(obj.prop4.prop5)
















// 오브젝트의 핵심은 이름(key)과 값(value)을 한 쌍으로 묶어 데이터를 관리하는 것
// 파이썬 딕셔너리 같은거인듯
// 이름 : 값
// 이름 : 함수
// 이름 : 오브젝트
// 이렇게 사용하기도 함 

// 이렇게 두가지 표기법으로 값에 접근 가능 
// Object.name 
// obj["name"] 