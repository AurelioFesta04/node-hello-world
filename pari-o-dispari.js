const numero = parseInt(process.argv[2]);

if (isNaN(numero)) {
  console.log("inserisci un numero");
} else {
  if (numero % 2 === 0) {
    console.log("Pari");
  } else {
    console.log("Dispari");
  }
}