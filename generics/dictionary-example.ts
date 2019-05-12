type Dict<T> = {
  [key: string] : T | undefined
}

function mapDict<T, S>(
  dict: Dict<T>, 
  fn: (arg: T, idx: number) => S): Dict<S> {
    const out: Dict<S> = {};

    Object.keys(dict).forEach((dKey, idx) => {
      const thisItem = dict[dKey]
      if(typeof thisItem !== undefined){
        out[dKey] = fn(thisItem, idx);
      }
    })
    

    return out;
}