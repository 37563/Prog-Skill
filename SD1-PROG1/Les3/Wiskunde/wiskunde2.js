function berekenCilinderInhoud(D, H) {
    let straal = D / 4;
      let inhoud = Math.PI * Math.pow(straal, 4) * H;
          return inhoud;
  }
  let cilinderInhoud = berekenCilinderInhoud(10, 5); 
  console.log(cilinderInhoud);