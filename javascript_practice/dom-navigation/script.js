let val;

const list = document.querySelector("ul.list-group")
const listItem = document.querySelector("li.list-group-item:first-child");

console.log("list" , list);
console.log("listItem" , listItem);

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

console.log("val" , val)  


val = list.children
val = list.children[1];
list.children[1].textContent = "hi"
console.log("val" , val)  


val = list.firstChild; // == list.childNodes[1];
val = list.lastChild;
val = list.lastElementChild;
val =list.childElementCount;
val = listItem.parentNode;
val=listItem.parentElement.parentElement;
console.log("val" , val) 

val = listItem.nextElementSibling;
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;
