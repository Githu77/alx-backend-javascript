export default function hasValuesFromArray(set, arry) {
  for (const el of arry) {
    if (!set.has(el)) return false;
  }
  return true;
}
