//create a function using function keyword and accept a string and return the vowels;

/*function countvowel(str){
    let count=0;
    for(let char of str){
        if(char==="a"|| char==="e"||char==="i"||char==="o"||char==="u")
        {console.log(char);
            count++;
        }
    }
    console.log(`number of vowels present in string is = ${count}`);
}*/

/*let countvowel=(str)=>{
    let count=0;
    for(let char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            console.log(`vowels are ${char}`);
            count++;
        }
    }
    // console.log(`number of vowels present in string is = ${count}`);
    return count;
}
*/
//for a given array of numbers, print the squar of each value using the for each loop.
//FOREACH METHOD
/*let arr=[2,4,5,8];

arr.forEach((num)=>{
    console.log(num*num);
});*/


//map method
//it is basically return a array with the result

/*let number=[2,3,4,5];

let newarr=number.map((val)=>{
    return val*2;
})
console.log(newarr);*/

//filter method
//it create a new array of element that give a true for a condition/filter.

//example
//print even numbers from the given array

/*let arr=[2,3,4,50,6,7,89];

let evennum =arr.filter((val)=>{
    return val%2 === 0;
});

console.log(evennum);*/

//reduce method

//perform some operation and reduce the array to single value.it return the single value.

//example

/*let arr=[2,4,9,23,2,4,5,34,5,65,4, 4];

let final=arr.reduce((pre,curr)=>{
    return pre > curr ? pre : curr ;
});
console.log(final);*/

//find the mark of student who scored mark 90+;

//let mark=[89,45,90,39,98,96,94];

//using filter method
/*let final=mark.filter((val)=>{
    return val>=90;
})

console.log(final);*/

//using foreach method

/*mark.forEach((val)=>{
    if(val>=90){
    console.log(val)};
});*/


/* //take a number n as a input from user.create an array of numbers from 1 to n.
//use the reduce method to calculate sum of all numbers in the array.
//use the reduce method to calculate product of all numbers in the array.

let n=prompt("eneter the numbers");
//print the array
let arr=[];
for(i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);
//for sum
let sum=arr.reduce((pre,curr)=>{
    return pre+curr;
})
console.log(sum);
//for factorial
let fact=arr.reduce((pre,curr)=>{
    return pre*curr;
})
console.log(fact);*/

