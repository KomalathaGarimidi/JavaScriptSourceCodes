
/*17)Write a program to find the Most Frequent Element in an given array.
let arr = [40, 50, 30, 40, 50, 30, 30];
let n = arr.length;
console.log(mostFrequent(arr, n)); //30*/
let arr = [40, 50, 30, 40, 50, 30, 30,40,60,40,60,20,40,30,50,70,90];
map =new Map();
arr.forEach(element => {
    if(map.has(element)){
        map.set(element,map.get(element)+1);
    }
    else{
        map.set(element,1);
    }
});
console.log(map);
let maxKey;
let maxValue = -1;
for (let [key, value] of map) {
    if (value > maxValue) {
        maxValue = value;
        maxKey = key;
    }
}
console.log(maxKey)