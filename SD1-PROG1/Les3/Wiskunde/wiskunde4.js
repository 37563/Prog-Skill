function berekenGemiddelde(num1, num2, num3, num4, num5, num6) {
    const som = num1 + num2 + num3 + num4 + num5 + num6;
    const gemiddelde = som / 6;
    
    return gemiddelde;
  }
  
  const gemiddeldeResultaat = berekenGemiddelde(7, 18, 24, 29, 31, 38);
  console.log(gemiddeldeResultaat);