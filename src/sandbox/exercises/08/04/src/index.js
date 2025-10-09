// index.js

/**
 * Compte les occurrences de chaque chaîne de caractères dans un tableau.
 *
 * @param {Array<string>} tableau - Le tableau de chaînes de caractères à analyser.
 * @returns {Object} Un objet où les clés sont les éléments du tableau et les valeurs leur nombre d'occurrences.
 */
export function compterElements(tableau) {
  // 1. Utilisation de la méthode reduce pour parcourir le tableau
  return tableau.reduce((compteur, element) => {
    // 2. Vérifie si l'élément (la clé) existe déjà dans l'objet compteur.
    // Si oui, on incrémente sa valeur de 1.
    // Si non, on l'initialise à 1.
    compteur[element] = (compteur[element] || 0) + 1;

    // 3. Retourne l'objet accumulateur pour la prochaine itération.
    return compteur;
  }, {}); // Le second argument {} est l'objet initial (l'accumulateur 'compteur')
}
