let array = ["hallo", false, 40, " geweldig", "goeiemorgen"];

array.splice(2, 0, "Lemon", "Kiwi");
let poppedItem = array.pop();
let ShiftedItem = array.shift();

array.push("ETEN");
console.log(ShiftedItem, poppedItem, array);
console.log("Array length:", array.length);
console.log("Array als string:", array.toString());
array.unshift("Morning");
console.log("Array joined met '-' separator:", array.join('-'));
console.log("Na splicing:", array);
