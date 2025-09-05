// const fullName = function (city , country) {
//     console.log(this.firstName + " " + this.lastName, country);
// }

// const person1 = {
//     firstName : "John",
//     lastName : "smith"
// }


// // fullName.call(person1, "Oslo" , "Norway");


// fullName.apply(person1 , ["Oslo" , "Norway"])


function func(language) {
    if(language === "kor"){
        console.log(`language : ${this.korGreeting}`);
    }else{
        console.log(`language : ${this.engGreeting}`);
    }
}

const greeting = {
    korGreeting:"안녕" ,
    engGreeting:"Hello" ,
}

const boundFunc = func.bind(greeting);

boundFunc("kor");

