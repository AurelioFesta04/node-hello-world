const frase = process.argv[2];

if (!frase) {
  console.log("Inserisci una parola o una frase.");
} else {
  const vocali = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let contatore = 0;
  
  for (let i = 0; i < frase.length; i++) {
    let lettera = frase[i];
    if (vocali.includes(lettera)) {
      contatore++;
    }
  }

  console.log(`Numero di vocali: ${contatore}`);
}