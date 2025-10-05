// index.js

export function testFn(chaine) {
  // Déclarez en dessous :

  const resteDuMot = chaine.slice(1).toLowerCase();
  const premiereLettre = chaine.charAt(0).toUpperCase();

  chaine = premiereLettre + resteDuMot;

  // Ne touchez pas au return :
  return chaine;
}

/* Autre solution
export function testFn(chaine) {
  // Déclarez en dessous :
  if (!chaine) {
    return "";
  }

  // Split the string into words, iterate over them, convert each to Title Case, and rejoin.
  const mots = chaine.split(" ");

  const chaineEnTitleCase = mots
    .map((mot) => {
      if (mot.length === 0) {
        return "";
      }
      // Objectif 1: Mettre la première lettre en majuscule
      const premiereLettre = mot.charAt(0).toUpperCase();

      // Objectif 2: Mettre toutes les autres lettres en minuscule
      const resteDuMot = mot.slice(1).toLowerCase();

      return premiereLettre + resteDuMot;
    })
    .join(" ");

  // Ne touchez pas au return :
  return chaineEnTitleCase;
}
*/
