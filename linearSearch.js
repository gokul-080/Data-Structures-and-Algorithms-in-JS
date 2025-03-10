
// Linear search it is a method which sort the array or find an element in a linear way like checks from start to end.
// Find the index of t... if not then return -1...
// Eg-1...
let arr = ['w', 'y', 't', 'x', 'q', 't', 'e'];

function linearSearch(n){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === n){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch('t'));
// Here, the Big(o) - 0(n) linear...

