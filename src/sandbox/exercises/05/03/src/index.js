// index.js

export function testFn(cb) {
  // Déclarez en dessous :
  if (typeof cb !== "string" || cb.length < 4) {
    return cb;
  }
  const lastsFour = cb.slice(-4);
  const totalLength = cb.length;
  let reponse = lastsFour.padStart(totalLength, "*");

  // Ne touchez pas au return :
  return reponse;
}
