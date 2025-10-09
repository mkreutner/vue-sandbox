// index.js

/**
 * Trie un tableau d'objets : d'abord par 'prix', puis par 'quantite' si les prix sont égaux.
 * * @param {Array<Object>} tableauObjets - Le tableau d'objets à trier. Chaque objet doit avoir les propriétés 'prix' et 'quantite'.
 * @returns {Array<Object>} Le tableau d'objets trié.
 */
export function trierTableaux(tableauObjets) {
  // Utilise la méthode sort() qui trie le tableau sur place.
  return tableauObjets.sort((a, b) => {
    // --- 1. Tri primaire par 'prix' ---
    // La soustraction (a.prix - b.prix) donne un tri ascendant.
    const comparaisonPrix = b.prix - a.prix;

    // Si les prix sont différents, on retourne immédiatement le résultat de cette comparaison.
    if (comparaisonPrix !== 0) {
      return comparaisonPrix;
    }

    // --- 2. Tri secondaire par 'quantite' (uniquement si les prix sont égaux) ---
    // Si comparaisonPrix est 0, les objets ont le même prix.
    // On trie alors par 'quantite' (tri ascendant).
    return b.quantite - a.quantite;
  });
}
