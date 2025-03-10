
// Power of two - n === 2**x;
// Eg-1
function isPowerOfTwo(n){
    if(n < 1){
        return false;
    }
    while(n > 1){
        if(n%2 !== 0){
            return false;
        }
        n = n/2;
    }
    return true;
}

console.log(isPowerOfTwo(25));   // Here the Big 0 = o(logn) because the input 'n' is reduced half of the input value in while loop...

// Eg-2 By using bitwise operator...
function isPowerOfTwoBitwise(n){
    if(n < 1){
        return false;
    }
    return (n & (n-1)) === 0;
}

console.log(isPowerOfTwoBitwise(5));   // Here, the Big(o) = o(1), Because whatever input we give but the program will run once... So the complexity is constant - o(1) here...