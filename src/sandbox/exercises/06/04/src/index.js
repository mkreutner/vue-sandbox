// index.js

export function testFn(objet1, objet2, objet3) {
  // Déclarez en dessous :
  const objet = { ...objet1, ...objet2, ...objet3 };

  // Ne touchez pas au return :
  return objet;
}
