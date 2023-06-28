export default function appendToEachArrayValue(array, appendString) {
  const retArr = [];
  for (const idx of array) {
    retArr.push(appendString + idx);
  }
  return retArr;
}
