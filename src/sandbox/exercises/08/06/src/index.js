// index.js

export function obtenirMediane(tabTabIn) {
  return tabTabIn.map((tabIn) => {
    // 1. Pour chaque sous-tableau
    const tabInSorted = tabIn.slice().sort((a, b) => a - b);
    const size = tabInSorted.length;
    const middleIdx = Math.floor(size / 2);
    if (size % 2 !== 0) {
      return tabInSorted[middleIdx];
    } else {
      const v1 = tabInSorted[middleIdx - 1];
      const v2 = tabInSorted[middleIdx];
      return (v1 + v2) / 2;
    }
  });
}
