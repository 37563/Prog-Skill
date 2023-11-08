let fn1 = 0, fn2 = 1, nextFibonacci;


for (let i = 1; i <= 32; i++) {
   console.log(fn1);
   nextFibonacci = fn1 + fn2;
   fn1 = fn2;
   fn2 = nextFibonacci;
}




