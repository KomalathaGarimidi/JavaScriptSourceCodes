//Write a javaScript program to LCM of TWO given number
let num1=18;
let num2=240;
let res=Math.max(num1,num2);
function LCM(){
while(true){
    if(res%num1===0&&res%num2===0){
        return res;
    }
    res++;
}
}
console.log(LCM())