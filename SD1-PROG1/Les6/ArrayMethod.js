let array = ["hallo", false, 40, " geweldig", "goeiemorgen"];

array.splice(2, 0, "Lemon", "Kiwi");
let poppedItem = array.pop();
let ShiftedItem = array.shift();
array.push("ETEN");

console.log(ShiftedItem, poppedItem, array);
