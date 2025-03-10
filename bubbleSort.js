
// Bubble sort is a algorithm that sorts the array it sorts in the original array...

function bubbelSort(arr){
    let swapped;
    do {
        swapped = false;
        for(let i=0; i<arr.length-1; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while(swapped)
}

let arr = [7,0,6,5,3,-3,-8,-4,9,5,2];
bubbelSort(arr)
console.log(arr);
// Here the big-o is o(n^2) - Quadratic time complexity if the array size increases loop run also increase.. 
