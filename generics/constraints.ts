
// Constraings using this format <T extends { id: string }>
// To reveal the motivation behind it
// Try removing this `extends { id: string }`
// So you are only left with this `function arrayToDict<T>`
function arrayToDict<T extends { id: string }>(array: T[]): { [k: string]: T } {
  const out: { [k: string]: T } = {};
  array.forEach(val => {
    out[val.id] = val;
  });
  return out;
}

