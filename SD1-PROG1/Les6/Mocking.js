function randomCapitalize(word) {
    let result = '';
    for (let i = 0; i < word.length; i++) {
        if (Math.random() < 0.5) {
            result += word[i].toUpperCase();
        } else {
            result += word[i];
        }
    }
    return result;
}


let word = 'Ik heb erg veel honger!';
let randomizedWord = randomCapitalize(word);
console.log(randomizedWord);
