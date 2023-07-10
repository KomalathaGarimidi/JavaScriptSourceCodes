// Find the second maximum number in the given array.
let array=[26,24,1,2,4,5,6,23,4,7,6,9];
let Fmax=-Infinity;
let Smax=-Infinity;
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
