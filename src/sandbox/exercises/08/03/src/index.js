// index.js

/**
 * Filtre un tableau de personnes pour ne garder que le genre féminin,
 * puis ajoute une propriété 'nomComplet' à chaque objet.
 *
 * @param {Array<Object>} personnes - Tableau d'objets avec les propriétés { prenom, nom, genre }.
 * @returns {Array<Object>} Le nouveau tableau filtré et enrichi.
 */
export function filtreFemmesEtAjouteNomComplet(personnes) {
  return (
    personnes
      // 1. Filtrage : On ne garde que les personnes dont le genre est 'féminin'.
      .filter((personne) => personne.genre === "féminin")

      // 2. Mapping : On ajoute la propriété 'nomComplet' aux objets restants.
      .map((personne) => ({
        ...personne, // Garde toutes les propriétés existantes (prenom, nom, genre)
        nomComplet: `${personne.prenom} ${personne.nom}`, // Ajoute la nouvelle propriété
      }))
  );
}
