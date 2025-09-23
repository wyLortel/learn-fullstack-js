function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
     
}

function onGeoError(){
    alert("Can't find you. No weather for you")
}



//사용자의 현재 위치(위도, 경도 등)를 가져오는 기능입니다.
//즉, 브라우저에 내장된 위치 서비스(GPS, Wi-Fi, IP 기반 등)를 활용해서 “지금 이 장치가 어디 있나?”를 알려줘요.
navigator.geolocation.getCurrentPosition(onGeoOk , onGeoError);
