
// Binary search will always works on sorted array...
// It usually splits the array into two part by set middle element and solves the sorting...
let arr = [-3,0,2,4,5,6,7,8];

function binarySearch(n){
    let leftIndex = 0;
    let lastIndex = arr.length - 1;

    while(leftIndex <= lastIndex){
        let middleIndex = Math.floor((leftIndex + lastIndex)/2);
        if(arr[middleIndex] === n){
            return middleIndex;
        }
        else if(n < arr[middleIndex]){
            lastIndex = middleIndex - 1;
        }
        else{
            leftIndex = middleIndex + 1;
        }
    }
    return -1
}

console.log(binarySearch(7))
// Here, the big(o) - o(logn) because the size is reduced to half...



// Recursive binary search problem...
function recursiveBinarySearch(arr, n){
    return search(arr, n, 0, arr.length - 1)
}

function search(arr, n, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex)/2);
    if(n === arr[middleIndex]){
        return middleIndex;
    } 

    if(n < arr[middleIndex]){
        return search(arr, n, leftIndex, middleIndex - 1)
    }

    else{
        return search(arr, n, middleIndex + 1, rightIndex)
    }
}

console.log(recursiveBinarySearch([-3,4,5,6,8,9], 8));  
// Here, the big(o) - o(logn) because the size is reduced to half...