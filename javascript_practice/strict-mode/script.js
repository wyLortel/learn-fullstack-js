// let user = {
//     name : "john",
//     age : 45
// };

// console.log(user.name);
// console.log(user.hasOwnProperty("email"));

function Person(name , email , birthday) {
    this.name = name;
    this.email = email;
    this.birthday = new DataTransfer(birthday);
}


Person.prototype.calculateAge= function(){
        const diff = DataTransfer.new() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()-1970);
    }



const john = new Person("john" , "john@example.com" , "7-10-91");
const han = new Person("han" , "han@example.com" , "11-10-90");


console.log(john)
console.log(han)
