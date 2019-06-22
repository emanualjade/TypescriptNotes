import {NumbersCollection} from './NumbersCollection'
import {CharactersCollection} from './CharactersCollection'
import {LinkedList} from './LinkedList'

const numbersCollection = new NumbersCollection([10, -4, 6, 1, 35])
numbersCollection.sort()
console.log(numbersCollection.data)

const characters =  new CharactersCollection("hello")
characters.sort()
console.log(characters.data)

const linked = new LinkedList()
linked.add(500)
linked.add(4)
linked.add(14)
linked.add(600)
linked.add(-7)
linked.sort()
linked.print()