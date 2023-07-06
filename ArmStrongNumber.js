//Write a program to find the given number is armstrong or not
/*The sum of cubes of digits of a number is equal to given number 
Then it is called  armstrong number*/
let number=153;
let temp=number //store the number in temp variable for further usage
let sum=0;
if(number<=0){
    console.log("Please Enter a valid number")
}
else{
while(number>0){
    sum=sum+Math.pow(number%10,3);//num%10 leaves the remainder and cube that remainder and add to sum
    number=Math.floor(number/10)//round the number to an integer
    }
if(temp===sum){ //chek the sum and temp are equal or not
    // === is strictly type checking it checks both the type and content.
    //if both are true then only it returns true other wise it returns false.
    console.log(temp+" is armstrong")
}
else{
    console.log(temp+" is not armstrong")
}
}