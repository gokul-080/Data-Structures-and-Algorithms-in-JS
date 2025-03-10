// Insertion Sort...
/*
Virtually split the array into a sorted and an unsorted part
Assume that the first element is already sorted and remaining elements are unsorted
Select an unsorted element and compare with all elements in the sorted part
If the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. Else, shift larger elements in the sorted part towards the right. Insert the selected element at the right index
Repeat till all the unsorted elements are placed in the right order
*/

// Ascending order insertion sort...
function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let numToInsert = arr[i];
        let j = i - 1;
        while(j >=0 && arr[j] > numToInsert){
            arr[j+1] = arr[j]
            j = j - 1
        }
        arr[j+1] = numToInsert;
    }
}

let arr = [4,-5,7,3,5,0,2,9,6];
insertionSort(arr);
console.log(arr);


// Descending order insertion sort...
function insertionSort1(arr1){
    for(let i=1; i<arr1.length; i++){
        let numToInsert = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] < numToInsert){
            arr1[j+1] = arr1[j]
            j = j - 1;
        }
        arr1[j+1] = numToInsert
    }
}

let arr1 = [-2,5,9,3,6,8];
insertionSort1(arr1);
console.log(arr1);

// Here, the Big(o) - o(n^2). If the array size increases loop run also increase..