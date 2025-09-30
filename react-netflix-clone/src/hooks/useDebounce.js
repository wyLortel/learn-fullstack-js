import { useState , useEffect } from "react";

export const useDebounce = (value , delay) => { //나중에 밸류랑 딜레이를 받음 매개변수 살짝 함수같은 느낌 

    const [debounceValue, setdebounceValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
        setdebounceValue(value)
      }, delay);  //딜레이 준 시간 만큼 기다렷다가 밸류를 업데이트 아마 타자를 치면 시간이 걸리는데 딜레이시간 뒤에 업데이트 시키기 위한것 
      
      //effect가 다시 실행되기 전에 이전 effect의 return 함수가 먼저 실행
      //만약 사용자가 빠르게 타이핑해서 value가 계속 변한다면 새로운 setTimeout이 걸리기 전에, 이전 setTimeout을 clearTimeout으로 취소.
      //즉 시간이 초기화 대고 마지막 문자로부터 딜레이 새로운 타이머
      return () => {
        clearTimeout(handler)
      };
      
    }, [value , delay]) //밸류 딜레이가 변할때 마다 실행 
    
    return debounceValue;
};