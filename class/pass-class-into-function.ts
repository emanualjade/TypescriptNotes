// ========= INTERFACE FOR CLASS USING new
// passing a static class into a function
interface Kettle {
  volume: number;
}
interface KettleConstructor {
  new (volume: number): Kettle
}
class TeaKettle implements Kettle {
  public volume: number;
  constructor(volume: number) {
    this.volume = volume
  }
}
class ElectricKettle implements Kettle {
  public volume: number;
  constructor(volume: number) {
    this.volume = volume
  }
}

function kettleFactory(KettleClass: KettleConstructor) {
  const kettle = new KettleClass(2)
  // tested and packed and whatever else you want to do to the instance
  return kettle
}
const teaKettle = kettleFactory(TeaKettle)
const electricKettle = kettleFactory(ElectricKettle)