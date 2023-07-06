// Swap two numbers without using third variable.
function swap(a,b){
    console.log("Print the values before swapping")
    console.log(a,b)
    a=a+b;//3+2==5
    b=a-b;//5-3=2
    a=a-b;//5-2=3
    console.log("Print a,b values after swapping")
    console.log(a,b)
    }
swap(2,3)