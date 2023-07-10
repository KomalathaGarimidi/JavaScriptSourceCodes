// 5)Write a javaScript program to Reverse a given number
function Reverse(number){
    var number1=-1;
    var revers=0;
    if(number>0){
        number1=number;
    }
    else{
        number1=number1*number;
    }
    while(number1>0){
        var revers=(revers*10)+(number1%10);
        number1=Math.floor(number1/10);
    }
    return number>0 ? revers: -1*revers;
}
console.log(Reverse(-847695))