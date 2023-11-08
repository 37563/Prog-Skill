let presentTime = new Date();
var now = presentTime;
console.log(now.getHours());
if(presentTime.getHours() >= 9 && presentTime.getHours() <= 17){
     console.log("Need to be at school");
} else {
    console.log("Still have time");
}

// let presentTime = new Date();
// var now = presentTime;
// var hours = presentTime.getHours();
// var minutes = presentTime.getMinutes();
// var ampm = hours >= 12 ? 'PM' : 'AM';

// if (hours > 12) {
//   hours -= 12;
// }

// console.log(`The current time is ${hours}:${minutes} ${ampm}`);
// if (hours >= 13) {
//   console.log("It's time to be at school.");
// } else {
//   console.log("You still have time before school.");
// }
