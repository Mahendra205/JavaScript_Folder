// let head=document.getElementById("heading");
// console.dir(head)
 

/*let element=document.querySelector("p");
console.dir(element);*/

/*let h2=document.querySelector("h2");
 h2.innerText=h2.innerText+" from apna collage students";//concatenate

let divs =document.querySelectorAll(".box");
// divs[0].innerText="new value 1";
// divs[1].innerText="new value 2";
// divs[2].innerText="new value 3";
let idx=1;
for(div of divs){
div.innerText=`new unique text ${idx}`
idx++;
}*/

/*let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>hi, i am new<i>";

document.querySelector("body").prepend(newHeading);*/

//create a new button element.give it a text"click me",background color of red & text color of white.
//insert the button as the first element inside the bvody tag.

/*let newBtn=document.createElement("button");
newBtn.innerText="click me";
newBtn.style.backgroundColor="red";
newBtn.style.Color="white";
document.querySelector("body").prepend(newBtn);*/

//create a <p> tag in html, give it a class &some styling .                                                     now create a new class in CSS and try to append thos class to the <p> element .                              did you notice ,how you overwrite the class name when you add a new one?                                   solve this problem using classList. 

let para=document.querySelector("p");
para.classList.add("class","newClass");