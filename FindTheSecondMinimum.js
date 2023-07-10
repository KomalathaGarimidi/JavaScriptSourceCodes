// Write a program to find the second minimum Number of a given array
let array=[4,3,1,2,4,5,6,23,4,7,6,9,1,1,2,1,2,3,10, 99, 9,1,8, 22,2,34, 6,54, 65,4];
let min=array[0];
let Fmin=Infinity;
let Smin=Infinity;
for(var i=0;i<array.length;i++){
    if(array[i]<Fmin){
        Smin=Fmin;
        Fmin=array[i];
    }
    else if(array[i]>Fmin && array[i]<Smin){
        Smin=array[i];
    }
}
console.log(Smin);
