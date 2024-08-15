// create a toggle button that changes the screen to dark-mode when clicked &light-mode when clicked again.

/*let modebtn=document.querySelector("#mode");
let currmode="light";
modebtn.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currmode);
})*/

//using css class

let modebtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currmode= "light";
modebtn.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currmode="light";
        body.classList.add("light");
        body.classList.remove("dark")
    }
    console.log(currmode);
})