// Partial allows us to make all properties on an object optional
interface IMyGreatInterface {
  name: string
  age: number
}

type MayHaveInfo = Partial<IMyGreatInterface>
const me: MayHaveInfo = {}
