export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const newV = new DataView(buffer, 0, length);
  const arry = new Int8Array(buffer);
  arry[position] = value;
  return newV;
}
