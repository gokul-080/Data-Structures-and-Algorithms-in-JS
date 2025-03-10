
// Fibonacci sequence is a sequence where a number is equals to sum of two preceeding ones...
// 0,1,1,2,3,5,8...
let n = 6;  // 
let arr = [0,1];

for(let i=2; i<n; i++){
    arr[i] = arr[i-1] + arr[i-2];
}

console.log(arr);

// Here, the big(o) is - o(n) linear - time complexity is o(n) linear... because if the size(n) increases then the time also increses to solve the problem...