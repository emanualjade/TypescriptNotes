// ====== strictPropertyInitialization
class Library {
  public jiggy: string[] | undefined
  public wiggy: string[] = []
  public piggy!: string[]
  public tiggy: string[]
  constructor(tiggy: string[]) {
    this.tiggy = tiggy
  }
}
const lib = new Library(["for tiggy"])
lib.piggy = []
if(lib.jiggy){
  console.log(lib.jiggy.map((item: string)=> item))
}
console.log(lib.wiggy.map((item: string)=> item))
console.log(lib.piggy.map((item: string)=> item))
console.log(lib.tiggy.map((item: string)=> item))
