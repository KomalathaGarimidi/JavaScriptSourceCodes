// 4)Write a JavaScript Program to find the smallest of 3 numbers (a,b,c)
function smallestOfThree(a,b,c){
    if(a<b && a<c){
        console.log(a);
    }
    else if(b<c){
        console.log(b);
    }
    else{
        console.log(c)
    }
}
smallestOfThree(2,1,6)