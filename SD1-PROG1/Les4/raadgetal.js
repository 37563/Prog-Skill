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