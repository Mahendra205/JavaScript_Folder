// event handler
// html=
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <button id="btn1">click me!</button>
//     <div>this is a box</div>
//     <script src="script.js"></script>   
// </body>
// </html>


// css=

// div{
//     height: 100px;
//     width: 100px;
//     color: blue;
//     background-color: aqua;
//     border: 1 px solid black;

//  }
//  let button2=document.querySelector("#btn1");
//  button2.onclick=()=>{
//     console.log("btn1 was pressed");
//     let a=25;
//     a++
//     console.log(a);
//  };
//  let div=document.querySelector("div");
//  div.onmouseover=()=>{
//     console.log("you are inside div");
//  };
// let div=document.querySelector("div");
// div.onmouseover=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);

// };

//using event listener
//for adding
// let btn1=document.querySelector("#btn1");
// btn1.addEventListener("click",()=>{
//     console.log("button was clicked");
// });
// btn1.addEventListener("click",()=>{
//     console.log("button 2was clicked");
// });
// btn1.addEventListener("click",()=>{
//     console.log("button 3was clicked");
// });
// btn1.addEventListener("click",()=>{
//     console.log("button 4was clicked");
// });
// btn1.addEventListener("click",(evt)=>{
//     console.log("button was clicked");
//     console.log(evt);
//     console.log(evt.type);
// });

// //for remove event
// let btn1=document.querySelector("#btn1");
// btn1.addEventListener("click",()=>{
//     console.log("button was clicked");
// });
// btn1.addEventListener("click",()=>{
//     console.log("button 2was clicked");
// });
// //we store handler3 in a variable 
// const handler3=()=>{
//     console.log("button 3was clicked");
// }
// btn1.addEventListener("click",handler3);
     
// btn1.addEventListener("click",()=>{
//     console.log("button 4was clicked");
// });
// //we want to remove handler3
// btn1.removeEventListener("click",handler3);
// //benefit of using event listener is there we can avoid overwrite. 
// //we can do multiple work in same event.

//create a toggle button that changes the screen to dark-mode when clicked & light mode when clicked again.

// let modebtn=document.querySelector("#mode");
// let currMode="light";
// let body=document.querySelector("body");
// modebtn.addEventListener("click",()=>{
//     if(currMode==="light"){
//         currMode="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }else{
//         currMode="light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// });