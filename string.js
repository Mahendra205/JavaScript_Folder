/*let obj={
    item:"pen",
    price:10,
};
let output=`the cost of ${obj.item} is ${obj.price}`;
console.log(`the cost of ${obj.item} is ${1+2+3}`);

console.log(output);
console.log(`the cost of ${obj.item} is ${obj.price}`);
console.log("the cost of",obj.item,"is",obj.price);
*/


//prompt the user to enter their full name.Genarate a user name based on the input.Start user name with @,followed by their username and ending with full name length.

let fullname=prompt("enter tour name without spacing");
let userName="@"+fullname+fullname.length;
console.log(userName);