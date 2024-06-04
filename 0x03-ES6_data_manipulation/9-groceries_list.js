export default function groceriesList() {
  const arr = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const mAp = new Map();

  for (const el of arr) {
    mAp.set(el[0], el[1]);
  }
  return mAp;
}
