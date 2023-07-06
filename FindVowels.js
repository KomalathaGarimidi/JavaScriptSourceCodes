//write a program to find the  vowles of a every element of a stringArray

let array=['java','javaScript','python','dotNet','Html','education','business','Komalatha','Ramadevi','vyshnavi'];
let newArray=[];
let ch;
let S1="";
for( i=0;i<array.length;i++){
    S1="";
    for(j=0;j<array[i].length;j++){
    ch=array[i].charAt(j);
    
    if(ch==='a'||ch==='A'||ch==='e'||ch==='E'||ch==='i'||ch==='I'||ch==='O'||ch==='o'||ch==='U'||ch==='u'){  
    
    S1=S1+ch;
    }
}
newArray.push(S1)
}
console.log(newArray)