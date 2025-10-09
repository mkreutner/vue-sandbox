// index.js

/**
 * Trouve le plus grand nombre parmi un ensemble d'arguments.
 * @param {...number} nombres - Un nombre indéfini d'arguments numériques.
 * @returns {number | null} Le plus grand nombre, ou null si aucun argument n'est fourni.
 */
export function plusGrandNombre(...nombres) {
  // 1. Vérifie si des arguments ont été passés
  if (nombres.length === 0) {
    return null; // Retourne null si la liste est vide
  }

  // 2. Initialise la variable pour stocker le nombre maximal
  // On utilise le premier élément comme point de départ.
  let max = nombres[0];

  // 3. Boucle sur les arguments restants
  // On commence à l'index 1 car le premier élément (index 0) est déjà dans 'max'.
  for (let i = 1; i < nombres.length; i++) {
    const nombreActuel = nombres[i];

    // 4. Compare le nombre actuel avec le maximum trouvé jusqu'à présent
    if (nombreActuel > max) {
      max = nombreActuel; // Met à jour le maximum
    }
  }

  return max;
}
