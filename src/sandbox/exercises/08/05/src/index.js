// index.js

/**
 * Calcule la moyenne de l'ensemble des notes (regroupées dans des sous-tableaux),
 * et retourne le résultat arrondi à une décimale.
 *
 * @param {Array<Array<number>>} tabTabNotes - Un tableau de sous-tableaux de notes.
 * @returns {Array<number>} La moyenne de chaque tableau de notes arrondie à une décimale.
 */
export function obtenirMoyenne(tabTabNotes) {
  // 1. Calculer les sommes et la taille totale
  return tabTabNotes.map((notes) => {
    // Pour chaque sous-tableau de notes:
    // a. Utiliser reduce() pour calculer la somme des notes
    const sommeNotes = notes.reduce((acc, note) => acc + note, 0);
    // b. Calcul et retourne la moyenne arondie à une dec. après la virgule
    return Math.round((10 * sommeNotes) / notes.length) / 10;
  });
}
