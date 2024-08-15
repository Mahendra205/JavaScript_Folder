// //print the all even number from 1 to 10
// sum=0
// for(let num=0; num <= 100;num++){
//     if(num%2===0){
//     console.log("num=",num);
// }

// sum=sum+num
// console.log(sum);}



//Create a game whare you start with a random game number .Ask the user to keep gussing the number until the user the enterd the correct number,

// let gameNum=30;
// let userNum=prompt("guess the number : ");
// while(userNum != gameNum){
//    userNum=prompt="you enterd the wrong number.Guess the number: "
// }
// console.log("congratulation you enterd the wright number");

// let str="Mahendra";
// let str2="betal";
 

//prompt the user to enter their full name.generate a usrname for them based on the input.start user name with @,followed by their full name and ending with the fullname length
// let fullName=prompt("enter your full name without any space");
// let userName="@"+fullName+fullName.length;
// console.log(userName);

// let citis=["kolkata","howrha","pune","siliguri"];
// for (let cat of citis){
//     console.log(cat.toUpperCase());
// }

// for a given array with marks of students[85,97,44,37,76,60] find the average marks of entire class
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
//     sum+=val;
// }
// let average=sum/marks.length;
// console.log(`the average mark of student is ${average}`);

//for a given array with price of 5 items [250,645,300,900,50] all items have an offer of 10% off on them. change the array to store final price after applying offer.

//using for of loop

// let items=[250,645,300,900,50];
// let i=0;
// for(let val of items){
//     let offer=val/10;
//     items[i]=items[i]-offer;
//     console.log(`the final price after applying offer is ${items[i]}`);
//     i++

// }

//using for loop

// let items=[250,645,300,900,50];
// for(i=0;i<items.length;i++){
//     let offer=items[i]/10;
//     items[i]-=offer;
// }
// console.log(items);


//create an array to store company "Bloomberg","Microsoft","uber","google","IBM","Netflix".
//a. remove the first company from the array

// let company=["Bloomberg","Microsoft","uber","google","IBM","netflix"];
// company.shift();
// console.log(company);

//b.remove uber add ola in its place
// let company=["Bloomberg","Microsoft","uber","google","IBM","netflix"];
// company.splice(2,1,"ola");
// console.log(company);

//c. add amazon at the end

// let company=["Bloomberg","Microsoft","uber","google","IBM","netflix"];
// company.push("amazon");
// console.log(company);


//create a funcatin using the "function" keyword that takes a string as an argument & returns the number of vowels in the string.

// function countVowels(str){
//     let count=0;
//     for(const char of str){
//         if(
//             char==="a"||
//             char==="e"||
//             char==="i"||
//             char==="o"||
//             char==="u"
//         ){
//             count++;
//         }
//     }
//     return count;
// }

// //creat a h2 heading element with text-"hello javascript".append"from apna collage student"to this text using js.
// let h2=document.querySelector("h2");

// console.dir(h2.innertext);
// h2.innerText=h2.innerText+"from Apna collage student";


//create 3 divs with common class name-"box".Access them &add some unique text to each them.
// let divs=document.querySelectorAll(".box");
// // console.log(divs)
// // divs[0].innerText="new text1";
// // divs[1].innerText="new text2";
// // divs[2].innerText="new text3";

// let divs=document.querySelectorAll(".box");
// let idx=1;
// for (div of divs){
//     div.innerText=`new text ${idx}`;
//     idx++
// }

//create a new button element.Give it a text"click me",background color red and text color white.
//insert the button as the first inside the body tag.

// let newBtn=document.createElement("Button");
// newBtn.innerText="click me";
// newBtn.style.backgroundColor="red";
// newBtn.style.color=("white");
// document.querySelector("body").prepend(newBtn);


//create a <p> tag in html ,give it a class &some styling.now create anew class in css and try to append this class to the<p> element .
//Did you notice ,how overwrite the class name when you add a new one?Solve this problem using classList.

//let para=document.querySelector("p");
//para.classList.add("intro");


//you are creating a website for your collage crate a class user with 2 properties name & email.it also has a method called viewData() that allow user to view website data.
// data="this is a data";
//  class user{
//      constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log("Data = ",data)
//     }
// }

// class Admin extends user{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         data="this is edited data";
//     }
// }

// let student1=new user("Mahendra","betalmahendra@gmail.com");
// let student2=new user("Betal","bwubca22187@brainwareuniversity.ac.in");
// let admin1=new Admin("admin","admin@gmail.com");

//create a new class called admin which inherits from user.add a new method called editData to Admin that allows it to edit website data.

//operator

/*let num=prompt("enter the number");
if(num%5===0){
    console.log(num,"is divided by 5 ")
}else{
    console.log(num,"is not divided by 5")
}*/

/*//ternary operator
let age=19;
let check=age>=18?"adult":"minor";
console.log(check);*/
