/*16)Q 8. Write a JavaScript Program to Move all Zero to End of the Array
// Example usage:
const numbers = [0, 5, 0, 3, 8, 0, 9];
const result = moveZerosToEnd(numbers);
console.log(result); // Output: [5, 3, 8, 9, 0, 0, 0]*/
let array=[0, 5, 0, 3, 8, 0, 9,6,0,2,0,0,2,4,7,0,0,0,0,0,0,3,4,6,8,0,6,0,5,0,40,0,0];
var i=0;
var start=0;
var end=array.length-1;
while(start<end){
    if(array[start]===0){
        if(array[end]!=0){
            var temp=array[start];
            array[start]=array[end];
            array[end]=temp;
        }
        else{
            end--;//if array[end]===0 then decrease the end by 1
        }
    }else{
        start++; //if array[start]!=0 then increase start by 1
    }
}
console.log(array);