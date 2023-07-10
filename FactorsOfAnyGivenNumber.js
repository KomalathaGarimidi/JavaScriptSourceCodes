
let array=[]
function factors(number){
for(var i=1;i<=number;i++){
    if(number%i===0){
        array.push(i);
    }
}
console.log(array)
}

factors(6)