// index.js

export function testFn(nombre) {
  // Déclarez en dessous :
  let texte = "";
  // not a number
  // if (isNaN(nombre)) { // doesn't work with example checker ! Holy Crap !
  if (typeof nombre !== "number") {
    texte = "Pas un nombre";
  } else {
    for (let i = nombre; i <= nombre + 4; i++) {
      if (i === nombre + 2) {
        continue;
      }
      texte += i;
    }
    texte = texte.trim();
  }

  // Ne touchez pas au return.
  return texte;
}
