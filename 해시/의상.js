/**
 * programmers
 * level 2
 *
 * Map 자료 구조 만들때 array.reduce() 편함
 */
function solution(clothes) {
  const clothes_map = clothes.reduce((acc, [_, key]) => {
    acc.has(key) ? acc.set(key, acc.get(key) + 1) : acc.set(key, 2);
    return acc;
  }, new Map());

  return Array.from(clothes_map).reduce((acc, [_, val]) => acc * val, 1) - 1;
}
