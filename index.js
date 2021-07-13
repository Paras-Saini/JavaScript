1.//Ways to print in JavaScript
//console.log("Hello World")
//alert("me");
//document.write("this is document write")


// 2. Javascript console API
//console.log("Hello World")
//console.warn("This is warning")
//console.error("This is an error")


// 3. JavaScript Variables
//What are variables.? Containers to store data variables.

/*multi
line
comment*/
var number1 = 32;
var number2 = 34;
//console.log(number1+number2);

// 4.Data types in JavaScript
//Numbers
var num1 = 455;
var num2 = 43.2;
//console.log(num1);

//String
var str1 = "This is a string";
var str2 = 'This is also a string';
//console.log(str1);


//Objects
var marks = {
    Ravi: 32,
    Shubham: 78,
    Harry: 99.34
}
//console.log(marks)

//Booleans
var a = true;
var b = false;
//console.log(a,b);

//var und=undefined;
var und;
//console.log(und);

var n = null;
//console.log(n);

/* At a very high SVGPathSegLinetoVerticalAbs, there are two types of data types
in JavaScript
1.Primitive data types: undefined,null,number,string,boolean,symbol
2.Refrence data types; Array and Objects
*/

//var arr = [1, 2, 3, 4, 5]
//console.log(arr);
//console.log(arr[0]);

//Operator in Java Script
var a1 = 65;
var b1 = 75;
//console.log("The value of a+b: ", a1 + b1);

//Assignment operator
var c = a1;
c *= 2;
//console.log(c);

//comparisons operator
var x = 36;
var y = 56;
/*console.log(x==y);
console.log(x>=y);
console.log(x<y);*/

//Logical operator

//Logican and
//console.log(true && true);
//console.log(false && true);

//Logica true
//console.log(true || true);
//console.log(false || true);

//Logican not
//console.log(!true);
//console.log(!false);

//Function in JavaScript

//DRY=Do not repeat yourself
function avg(a, b) {
    d = (a + b) / 2;
    return d;
}
c1 = avg(4, 6);
c2 = avg(6, 8);
//console.log(c1, c2);

//In Chrome blue represents - number and black represents-String

//Conditionals in JavaScript

/*var age=4;
if(age >8)
{
    console.log("You're not a kid");
}
else{
    console.log("You're a kid");
}*/

var arr = [1, 2, 3, 4, 5, 6, 7];
//console.log(arr);
/*for(var i=0;i<arr.length;i++)
{
      if(i==2)
      {
        continue;
      }
    console.log(arr[i]) 
}*/

/*arr.forEach(function(element){
    console.log(element)
})*/

//let j = 0;
//const a = 0; //constant
//let j = 0;
/*while(j<arr.length)
{
    console.log(arr[j]);
    j++;
}*/

/*do{
    console.log(arr[j]);
    j++;
}while(j<arr.length);*/

let myArr=["Fan", "Hello",34,null,true];
//console.log(myArr.length)
//myArr.pop();
//myArr.push("Paras");
//myArr.shift()
/*const newLen=myArr.unshift("Paras")
console.log(newLen);
console.log(myArr);

//console.log(myArr.toString());
console.log(myArr.sort());*/

let myStr="God is good good";
//console.log(myStr.length);
//console.log(myStr.indexOf("good"));
//console.log(myStr.lastIndexOf("good"));
//console.log(myStr.slice(0,3));
//d=myStr.replace("good","so");
//console.log(d, myStr);

let myDate=new Date();
//console.log(myDate.getTime());
//console.log(myDate.getFullYear());
//console.log(myDate.getDay()); //give day of the week
//console.log(myDate.getMinutes());
//console.log(myDate.getHours());

// Document Object Model(DOM)....
let elem=document.getElementById('click');
//console.log(elem);

let elemClass=document.getElementsByClassName('container');
//console.log(elemClass);
//elemClass[0].style.background="yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
//console.log(elem.innerHTML);
//console.log(elem.innerText);
//console.log(elemClass[0].innerHTML);
//console.log(elemClass[0].innerText);

let tn=document.getElementsByTagName('div')
console.log(tn);
createdElement=document.createElement('p');
createdElement.innerText="This is a created para"
tn[0].appendChild(createdElement);
createdElement2=document.createElement('b');
createdElement2.innerText="This is a created bold"
tn[0].replaceChild(createdElement2,createdElement);
//removeChild(element);--->removes an element

//Selecting using Query
/*let sel=document.querySelector('.container')
console.log(sel);
let sel1=document.querySelectorAll('.container')
console.log(sel1);

//Events in JavaScript
function clicked()
{
    console.log('The button was clicked');
}

window.onload=function()
{
    console.log("The document was loaded")
}
 firstContainer.addEventListener('mouseover',function(){
     console.log('Mouse on container')
 })
 firstContainer.addEventListener('mouseout',function(){
    console.log('Mouse out of container');
})*/
/*
firstContainer.addEventListener('mouseup',function(){
    console.log('Mouse up when clicked  on container');
})*/
/*let previousHTML=document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML=previousHTML;
    console.log('Mouse up when clicked  on container');
})


firstContainer.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b>We have clicked</b>"
    console.log('Clicked down when clicked  on Container');
})*/


//Arrow Function

//function summ(a,b){
  //  return a+b;
//}

summ=(a,b)=>
{
    return a+b;
}

//SetTimeout and Setinterval
logKaro=()=>
{
    document.querySelectorAll('.container')[1].innerHTML="<b>Set interval fired</b>"
    console.log("I am your log");
}
setTimeout(logKaro,5000);  //use clearTimeout() to stop setTimeout.
//let clr=setInterval(logKaro,2000); //use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

//JavaScript localStorage

//localStorage.setItem('Name', 'Paras')
//localStorage
//localStorage.getItem('name')
//localStorage.removeItem('name')
//localStorage.clear()

//Json----->JavaScript Object Notation uses for data exchange.


/*obj={name:'Paras', length:1, a:{this:'tha"t'}}
jso=JSON.stringify(obj);
console.log(jso);

let parsed=JSON.parse('{"name":"Paras","length":1,"a":{"this":"tha\\t"}}')
console.log(parsed);*/

//Js version-->EcmaScript-is a standard used to maintain JavaScript

//Template literals=Backticks

x1=34;
console.log(`this is my ${x1}`);


