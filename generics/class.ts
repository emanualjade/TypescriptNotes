// ======================================
// ==== Generic class example
// ======================================
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue: T;
  multiplyValue: U;
  constructor(baseValue: T, multiplyValue: U) {
    this.baseValue = baseValue
    this.multiplyValue = multiplyValue
  }
  calculate(): number {
    // explicity cast these values to a number with the + symbol
    return +this.baseValue * +this.multiplyValue
  }
}
const simpleMath = new SimpleMath<string, number>("10", 20)
simpleMath.calculate()

// ======================================
// ==== Generic map class example
// ======================================
class MyMap<T> {
  private map: {[key: string]: T} = {}
  setItem(key: string, item: T){
    this.map[key] = item
  }
  getItem(key: string) {
    return this.map[key]
  }
  clear() {
    this.map = {}
  }
  printMap() {
    for(let key in this.map) {
      console.log(key, this.map[key])
    }
  }
}
const numberMap = new MyMap<number>()
numberMap.setItem("apples", 10)
numberMap.setItem("oranges", 5)

const stringMap = new MyMap<string>()
stringMap.setItem("apples", "10")
stringMap.setItem("oranges", "5")