function shuffleWord(word) {
    const characters = word.split('');
    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    return characters.join('');
  }
  
  function shakeFunction() {
    const words = ["Bookcase", "Castle", "Sheet"];
    const shuffledWord = shuffleWord(words[Math.floor(Math.random() * words.length)]);
    console.log(shuffledWord);
  }
  
  // Call the function to display a shuffled word
  shakeFunction();
  