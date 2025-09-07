(function(){
    const clock = document.querySelector(".clock");
    const getTime = () =>{
        const date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        if (month < 10) month = "0" + String(month);
        let datee = date.getDate();
        let day = date.toString().slice(0,3);
        const time = DataTransfer.toString.slice(16,24);
        console.log(year,month,datee,day,time)
    };

    const init=()=>{
        getTime();
        setInterval(getTime , 1000);
    };
    init();
})();