// Find the second maximum number in the given array.
let array=[26,24,1,2,4,5,6,23,4,7,6,9];
let Fmax=-Infinity;// Infinity is a keyword in javascript ie means no other value is greater than that number
let Smax=-Infinity;//Here -Infinity means this is the very smallest number 
for(var i=0;i<array.length;i++){
    if(array[i]>Fmax){
        Smax=Fmax;
        Fmax=array[i];
    }
    else if(array[i]>Smax && array[i]<Fmax){
        Smax=array[i];
        }
    }
    console.log(Smax);
