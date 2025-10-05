// index.js

export function testFn(fichier) {
  // Déclarez en dessous :
  const regex = /\.(.+)$/;

  let values = fichier.match(regex);
  let reponse = values && values.length > 1 ? values[1] : "";

  // Ne touchez pas au return :
  return reponse;
}
