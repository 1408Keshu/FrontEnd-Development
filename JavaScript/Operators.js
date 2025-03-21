// //check isValidUser
// function isValidUser(username,password){
//     if(username=="" || password==""){
//         return false;
//     }
//     else{
//         return true
//     }
// }
// console.log(isValidUser("admin","1234"));
// console.log(isValidUser("","1234"));
// console.log(isValidUser("admin",""));
// console.log(isValidUser("",""));
// console.log("Hello ");

//check Eligibility for Discount

// function isEligibleForDiscount(age,isMember){
//     // if(isMember || age>=60){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
//     return (isMember || age>=60);
// }
// console.log(isEligibleForDiscount(65,false))
// console.log(isEligibleForDiscount(35,true))
// console.log(isEligibleForDiscount(45,false))
// console.log(isEligibleForDiscount(75,false))

// check if a Number is between Range;
// function inbetween(x,min,max){
//     if(x>min && x<max){
//         return true;
//     }
//     return false;
// }
// console.log(inbetween(5,1,10));
// console.log(inbetween(22,1,10));
// console.log(inbetween(8,1,10));
// console.log(inbetween(7,1,9));

console.log("Arithmetic Operations");
let a=10;
let b=3;
console.log("a + b=",a+b);
console.log("a - b=",a-b);
console.log("a * b=",a*b);
console.log("a / b=",a/b);
console.log("a % b=",a%b);
console.log("a ** b=",a**b);
a++;
b--;
console.log("Assignmen Operations");
let x=10;
x+=5;console.log("x+=5=",x)
x-=5;console.log("x-=5=",x)

console.log("Comparision Operations");
console.log(" 10 == '10' =>",10== "10");
console.log(" 10 === '10' =>",10 === "10");
console.log(" 10 !== '10' =>",10!== "10");

console.log("Logical Operations");
console.log(" true && true =>",true && true);
console.log(" true && true =>",true || false);

console.log("Bitwise Operations");
console.log(5<<1);
console.log(5>>1);
console.log(5 ^ 1);

console.log("ternary Operations");
let age=20;
let status = (age >= 18) ? "Adult" :"MInor";
console.log("Status",status);
console.log("\n");

console.log("type Operations");
console.log("type of 43 ->", typeof 43);
console.log("type of 'hello' ->", typeof "hello");
console.log("type of true ->", typeof true);
console.log("type of {} ->", typeof {});
console.log("type of [] ->", typeof []);

console.log("Instance of Operations");
let arr=[1,2,3];
console.log("arr instanceof Array => ",arr instanceof Array);
console.log("arr instanceof Object => ",arr instanceof Object);


 





