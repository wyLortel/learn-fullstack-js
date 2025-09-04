//엘리멘트 생성
const li = document.createElement("li");

// 클래스 추가
li.className = "list-group-item";

//아이디 추가
li.id = "new=item";

li.setAttribute("name" , "New list item");

//링크 엘리멘트 생성
const link = document.createElement("a");

link.className = "alarm-item";
link.innerHTML = "<i class='bi-alarm'></i>"

li.appendChild(link);



//마지막 특정 부모 요소에 자식으로 붙임 
document.querySelector("ul.list-group").appendChild(li);
