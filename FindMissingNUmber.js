// Find the missing Number in the given array of 1 to N
let array=[1,2,3,4,5,6,7,8,9,10,11,12,14,15,16]
let n=array.length+1; //array length+1=>15+1;
let sum=0;
function missingNumber(){
    sum=n*(n+1)/2;// sum of n number from 1 to n
    console.log(sum); //print the sum of the n numbers
    for(i=0;i<array.length;i++){
        sum=sum-array[i]; // subtract the array elements from sum every time to find the missing number
    }
    console.log(sum);// printing finally the remaining sum
}
missingNumber()