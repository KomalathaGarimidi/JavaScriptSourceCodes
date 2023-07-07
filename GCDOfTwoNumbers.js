// Write a JavaScript Program to find GCD of two given numbers.
/*
 * Find GCD of two numbers
 * GCD :: Greatest Common Divisor
 * The HCF or GCD of two numbers is the largest number
 * that can divide both numbers without reminder.
 *
 * Number a = 45 = 3 * 3 * 5
 * Number b = 75 = 3 * 5 * 5
 * GCD is = 3 * 5 = 15
 */
let number1=20;
let number2=5;
let result=Math.min(number1,number2);
function GCD(){
// while(true){
//     if(result%number1==0&&result%number2==0){
//         return result;
//     }
//     result++;
// }
for(i=result;i>=1;i--){
    if(number1%i==0&&number2%i==0){
        return i;
    }
}
}
console.log(GCD());