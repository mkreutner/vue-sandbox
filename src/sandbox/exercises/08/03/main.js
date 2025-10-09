// main.js

// Importation nommée
import { filtreFemmesEtAjouteNomComplet } from "./src/index.js";

const personnesCelebres = [
  { prenom: "Albert", nom: "Einstein", genre: "masculin" },
  { prenom: "Isaac", nom: "Newton", genre: "masculin" },
  { prenom: "Marie", nom: "Curie", genre: "féminin" },
  { prenom: "Max", nom: "Planck", genre: "masculin" },
  { prenom: "Simone", nom: "de Beauvoir", genre: "féminin" },
  { prenom: "Rosalind", nom: "Franklin", genre: "féminin" },
];

console.log(filtreFemmesEtAjouteNomComplet(personnesCelebres));
