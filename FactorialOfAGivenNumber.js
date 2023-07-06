// Q Write a JavaScript Program to find the Factorial of given number
num=10
fact=1;
function factorial(num){
    if(num===1||num===0){
    return 1;
    }
    return num*factorial(num-1); 
}
console.log(factorial(num))