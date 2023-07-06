//write a program to reverse every element of an integerarray
function reverseArrayValues(array){
    let reverse=0;
    var number;
    var newArray=[];
    for( i=0;i<array.length;i++){// traversing through an array
        var num=array[i];
    if(num<0){ // check whether the given number is +ve or -ve
        number=num*-1; // if the numbr is -ve then multiply with -1 to get +ve
    }
    else{
    number=num;
    }
    while(number!==0){
        reverse=(reverse*10)+number%10;//number%10 leaves the remainder and that remaindeer will be added to reverse
        number=Math.floor(number/10);// round the decimal to integer
        }
    
    newArray.push(num<0 ? reverse*-1:reverse)
    reverse=0;
    }
    return newArray
}
console.log(reverseArrayValues([-765,324,678,890,546432,-4356]))