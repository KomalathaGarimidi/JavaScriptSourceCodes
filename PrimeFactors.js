// 7)Write a JavaScript Program to print all the Prime Factors of the Given Number.
var array=[];
var PrimeFactArray=[];
flag=true;
function primeFactors(Number){
    for(i=1;i<=Number;i++){ //iterating from 1 to that particular given number
        if(Number%i===0){ // find the factors of given number 
            array.push(i);
        }
    }
    console.log(array);
    primes()
}
primeFactors(66) // calling the prime factors function
function primes(){
for(j=0;j<array.length;j++){
    // console.log(array[j])
    flag=true;
    for(k=2;k<array[j];k++){
        if(array[j]%k===0){
            flag=false;
            break;
        }
    }
    if(flag===true){
        PrimeFactArray.push(array[j]);
    }
}
console.log("Prime factors of a given number is==>"+PrimeFactArray);
}
