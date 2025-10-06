// index.js

export function testFn(personne) {
  // Déclarez en dessous :
  const { prenom, nom } = {
    prenom: personne.familly.father.firstname,
    nom: personne.familly.father.lastname,
  };

  // Ne touchez pas au return :
  return { prenom, nom };
}
