const fib = (n, memo={})=>{
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}

console.log(fib(4))
console.log(fib(10))
console.log(fib(8))
console.log(fib(40))
console.log(fib(100))
