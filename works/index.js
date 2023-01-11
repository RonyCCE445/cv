
//(1). Ways to print in JavaScript
    console.log("Hello world!!");
    // document.write("This is document write");
 //(2). JavaScript console API(Application Programming Interface)
    // console.log("Hello world!!");
    // console.warn("This is a warning");
    // console.error("This is an error");
    // alert("Hey its me");
//(3). Variables in JavaScript:
// What are Variables ?
//-> Containers used to store data values.
var number1 = 44;
var number2 = 55;
//console.log(number1+number2);
//(4). Data types in JavaScript :
//      (a). Numbers :
var number3 = 78;
var number4 = 37;
//console.log(number3);
//      (b). Strings:
var string1 = "This is string 1.";
var string2 = 'This is string 2.';
//console.log(string1);
//      (c).Objects:
var marks ={
Rony : 99.999,
Rocky : 79,
Raj : 34
}
//console.log(marks);
//      (d). Boolean :
var t = true;
var f = false;
//      (e) . Undefined :
var und;
//      (f) .Null :
var n = null;
//console.log(n);
 /* At a very High Level , there are 2 types of data types in JavaScript they are :
  (i). Primitive Data types : Boolean,Undefined,Null,Strings,Numbers,Symbols.
  (ii). Reference Data types : Objects and Arrays .*/
//(g) . Arrays :
// var arr = [1,2,"babla",4,5];
//(5). Operators :
//(a). Arithmatic Operators :
var a = 100;
var b = 10;
// console.log("The value of a+b is " ,a+b);
// console.log("The value of a-b is " ,a-b);
// console.log("The value of a*b is " ,a*b);
// console.log("The value of a/b is " ,a/b);
//(b). Assignment operator :
var c = b;
// c += 2;
// c -= 2;
// c *= 2;
// c /= 2;
console.log(c);
//(b). Comparisson operator:
var x = 45;
var y = 55;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x>y);
// console.log(x<y);
//(c).Logical Operators
 //(i)&& operator:(AND)
// console.log(true&&true);
// console.log(false&&true);
// console.log(false&&false);
// (ii). || operator:(OR)
// console.log(true||true);
// console.log(false||true);
// console.log(false||false);
//(iii). ! operator:(NOT)
// console.log(!false);
// console.log(!true);
//(6). Functions in JavaScript :
function avg(a,b){
 c = (a+b)/2;
 return c; 
}
//DRY= Do not Repeat Yourself.
// c1 = avg(14,16);
// c2 = avg(41,61);
// c3 = avg(4,6);
// console.log(c1,c2,c3);
//(7). Conditionals in JavaScript :
var age = 33;
//(a). Single if statement.
// if (age<18){
// console.log("You cannot drink here");
// }
//(b). if else statement.
// if (age>22){
    // console.log("you can drink two rasna bottles");

// }
// else{
    // console.log("you can drink only one")
// }
//(c). if else ladder:
age=44;
// if(age<18){
//     console.log("You are a new adult");
// }
// else if(age<22){
//     console.log("You can drink now");
// }
// else if(age<30){
//     console.log("You are getting old");
// }
// else{
// console.log("you are a old man");
// }
// (8). Loops in JavaScript :
var arr = [1,2,3,4,5,6,7,8];
// //(a). for loops :
// for(var i=0;i<arr.length;i++){
// console.log(arr[i]);
// if (i==2){
//     // break;
//     continue;
// }
//}
// (b). while loop :
// let j = 0;
// while (j<arr.length){
// console.log(arr[j]);
// j++
// } 
// (c). do while loop :
// console.log("This is done by do while loop");
// let l =0;
// do{
// console.log(arr[l]);
// l++
// }while (l<arr.length);

// (9). Array methods :
let myarr = [22,"fan","tv","rony",null,true];
// console.log(myarr.length);
// myarr.pop();
// myarr.push("CH");
// myarr.shift();

const newlen=myarr.unshift("rony");
// console.log(newlen);
// console.log(myarr);
//(10).string methods in JavaScript :
let mylovelystring=("Rony is a very very good good boy");
// console.log(mylovelystring.length);
// console.log(mylovelystring.indexOf("good"));
// console.log(mylovelystring.lastIndexOf("good"));
// console.log(mylovelystring.slice(0,7));
// console.log(mylovelystring.replace("good","food"));\
let mydate=new Date();
console.log(mydate);
//(11). DOM manipulation :
let elem = document.getElementById('click');
// console.log(elem);
let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
// elemClass[0].style.background="brown";
// elemClass[0].classList.add("bg_primary");
// elemClass[0].classList.add("text_success");
// console.log(elem.innerHTML);
// console.log(elemClass[0].innerHTML);
// console.log(elem.innerText);
// console.log(elemClass[0].innerText);
// tn = document.getElementsByTagName('div');
// console.log(tn);
// createdElement= document.createElement('p');
// createdElement.innerText="This is a created para.";
// tn[0].appendChild(createdElement)
// createdElement2= document.createElement('b');
// createdElement2.innerText="This is a created bold.";
// tn[0].replaceChild(createdElement2,createdElement);
// selection using querryS
// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel);
//events
// function clicked(){
//     console.log('The button was clicked')
// }
//  window.onload=function(){
//     // alert("The document is loaded");

    //  console.log("The document was loaded");
//  }
// firstcontainer.addEventListener('click',function(){

//     document.querySelectorAll('.container')[1].innerHTML = "<b>You clicked</b>";

//     console.log("CLick hua");
// })
// firstcontainer.addEventListener('mouseover',function(){
//     console.log("kya hua");
// })
// firstcontainer.addEventListener('mouseout',function(){
//     console.log("kahan ja rahe ho?");
// })
// let prevHTML=document.querySelectorAll('.container')[1].innerHTML
// firstcontainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//     console.log("mouse up when clicked on container");
// })
// firstcontainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>You clicked</b>";

//     console.log("mouse down when clicked on container");
// })
//Arrow function: we can write the functions as arrow function in JavaScript.
// function summ(a,b){
//     return a+b;
// }
// summ = (a,b) => {
//     return a+b;
// }
// //Set timeout and set interval:
login = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b>You clicked</b>";

    console.log("logged in")
}
// setTimeout(login,2000);

// setInterval(login,2000);

// clr = setInterval(login,2000);
//use clearInterval(clr) and clearTimeout(clr)to clear setInterval and setTimeout respectively.
// Local storage getItem and setItem :

localStorage.setItem('name','Rony');
localStorage.getItem('name');
localStorage.removeItem('name');
localStorage.clear();
//JSON(JavaScript Object Notation):
obj={ name:"rony",length:1,a:{this:"that"}}//JSON doesnot accept single quote.
console.log(typeof obj);
jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
parsed = JSON.parse(`{"name":"rony","length":1,"a":{"this":"that"}}`)
console.log(parsed);
//Template literals or Backticks :
u=34;
console.log(`This is my ${u}`)


// to write in console and to change the font size and color and more we have to write
// doccument.getElementsByTagname('name').style.fontsize = "required font size" (fontsize).
// doccument.getElementsByTagname('name').style.background = "required color" (bgcolor).
