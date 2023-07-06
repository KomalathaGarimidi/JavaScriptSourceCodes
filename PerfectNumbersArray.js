// Write a JavaScript Program to print Perfect Numbers between 1 to 1000.
/*
 * Perfect Number
 * ---------------
 * Perfect number is a positive integer that is
 * equal to the sum of its proper positive divisors,
 * that is, the sum of its positive divisors excluding
 * the number itself.
 *
 * Following are the examples of perfect number.
 * 6 = 1+2+3
 * 28= 1+2+4+7+14
 * 496= 1+2+4+8+16+31+62+124+248
 *
 */
let array=[];
let sum=0;
let perfectNumbersarray=[];
function perfectNumbersList(){
    for(i=1;i<=1000;i++){
        array=[];// re assign the array every time as an empty array
        sum=0;// re assign the sum to 0 every time
        for(j=1;j<i;j++){
            if(i%j===0){ // check the factors of i
                array.push(j);//push the factors into an array
            }
        }
        for(k=0;k<array.length;k++){
            sum=sum+array[k];// adding the elements of an array every time to find sum
        }
        if(sum===i){// if the factors sum and i will be equal then push the number to an array
            perfectNumbersarray.push(i);// push the perfect numbers into an array
        }
    }
}
perfectNumbersList()
console.log(perfectNumbersarray)//finally print the perfect numbers as a list