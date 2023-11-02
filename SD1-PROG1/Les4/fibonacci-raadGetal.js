let fn1 = 0, fn2 = 1, nextFibonacci;


for (let i = 1; i <= 32; i++) {
   console.log(fn1);
   nextFibonacci = fn1 + fn2;
   fn1 = fn2;
   fn2 = nextFibonacci;
}




const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const randomGetal = Math.floor(Math.random() * 101);
console.log(randomGetal);

function raadGetal() {
  rl.question('Wat is het getal? ', (getal) => {
    if (getal == randomGetal ){ 
      console.log("je hebt het goed");
    } else if (getal > randomGetal) { 
      console.log("je moet lager");
      raadGetal();
    }
    else if(getal < randomGetal){
      console.log("je moet hoger");
      raadGetal();
    }
  });
}
raadGetal();