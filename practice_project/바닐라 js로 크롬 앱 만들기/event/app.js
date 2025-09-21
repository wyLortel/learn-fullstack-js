const hello = document.querySelector(".hello h1")

function handleTitleClick(){
    if(hello.className === "active"){
        hello.className = "";
    }else{
        hello.className = "active";
    }
}

hello.addEventListener("click", handleTitleClick)
