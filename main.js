function levelHero(name, xp) {
    let level = "Ferro";
  
    if (xp >= 1001) level = "Bronze";
    if (xp >= 2001) level = "Prata";
    if (xp >= 5001) level = "Ouro";
    if (xp >= 7001) level = "Platina";
    if (xp >= 8001) level = "Ascendente";
    if (xp >= 9001) level = "Imortal";
    if (xp >= 10001) level = "Radiante";
  
    return `O Herói chamado ${name} está no nível ${level}`;
  }
  
  const name = "Legolas";
  const xp = 1100;
  
  const resultado = levelHero(name, xp);
  
  console.log(resultado);