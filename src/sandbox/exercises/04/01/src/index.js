// index.js

export function testFn(nombre) {
  // Déclarez en dessous :
  // 1. Structure de contrôle avec typeof et isNaN() pour vérifier si 'nombre' est un nombre valide
  if (typeof nombre !== "number" || isNaN(nombre)) {
    // 2. Si ce n'est pas un nombre, assignez-lui 'Pas un nombre'
    nombre = "Pas un nombre";
  } else if (Number.isInteger(nombre)) {
    // 3. Si nombre est un entier, on ne fait rien (pas de modification)
    // Le nombre reste tel quel
  } else {
    // 4. Si nombre est un nombre à virgule flottante

    // Arronndi à 3 chiffres après la virgule (retourne une CHAÎNE de caractères)
    let nombreArrondi = nombre.toFixed(3);

    // Convertissez la chaîne en NOMBRE (en utilisant l'indice +var)
    nombre = +nombreArrondi;
  }

  // Ne touchez pas au return :
  return nombre;
}
