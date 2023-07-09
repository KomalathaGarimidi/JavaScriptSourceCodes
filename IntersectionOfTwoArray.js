//Write a program to find the intersection of two arrays
let array=[1,4,5,6,7,3,2,10,11,12,1,13,15];
let array2=[5,6,4,8,9,15,14,11];
// array=array.sort();
// array2=array2.sort();
for(var i=0;i<array.length;i++){
    for(var j=0;j<array2.length;j++){
        if(array[i]===array2[j]){
            console.log(array[i])
        }
    }
}



