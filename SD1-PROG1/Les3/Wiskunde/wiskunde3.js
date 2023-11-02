function berekenLangeZijde(L, H) {
    const langeZijde = Math.sqrt(Math.pow(L, 2) + Math.pow(H, 2));
    
    return langeZijde;
  }
  const lengteLangeZijde = berekenLangeZijde(5, 7); 
  console.log(lengteLangeZijde);