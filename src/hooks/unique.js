export function unique(arr, val) {
  let result = [];
  let unique = [];
  for (let str of arr) {
    if (!unique.includes(str)) {
      unique.push(str);
    }
  }
  if (val) {
    for (let str of unique) {
      if (!val.includes(str)) {
        result.push(str);
      }
    }
  }
  return result.length !== 0 ? result : unique;
}
