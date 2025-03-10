
// Prime number - A number that can only multiplied with 1 to give that number
// Eg-1:
function prime(n){
    if(n<2){
        return false;
    }
    for(let i=2; i<n; i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
}

console.log(prime(9));  // This contains o(n) linear complexity...


// Eg-2:
function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i=2; i<= Math.sqrt(n); i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(31));  // Here, the complexity is Big(o) - o(sqrt(n))