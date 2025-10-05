// index.js

export function testFn() {
  // Déclarez en dessous :

  /*
   * Math.random() génère un nombre entre 0 (inclus) et 1 (exclus).
   * Pour obtenir un nombre entre 0 et 10 inclus :
   * 1. On multiplie par (max - min + 1), soit (10 - 0 + 1) = 11.
   * -> Math.random() * 11 donnera un nombre entre 0 (inclus) et 11 (exclus).
   * 2. Math.floor() tronque ce résultat pour obtenir un entier.
   * -> Math.floor(Math.random() * 11) donnera un entier entre 0 et 10.
   */
  const aleatoire = Math.floor(Math.random() * 11);

  // Ne touchez pas au return :
  return aleatoire;
}
