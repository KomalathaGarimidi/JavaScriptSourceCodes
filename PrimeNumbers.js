let number=100
let flag=true;
function prime(){
    for(i=1;i<=number;i++){
        flag=true;
        // console.log(i+"is i value")
        for(j=2;j<i;j++){
            // console.log(j+"is j value")
            if(i%j===0){
                // console.log(result+"is result")
                flag=false;
                break;
            }
        }
        if(flag===true){
            console.log(i);
        }
        // else{
        //     console.log(i+"is not a primeNumber")
        // }
    }
}
prime()