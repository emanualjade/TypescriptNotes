// ========= INTERFACE FOR CLASS
interface NamedPerson {
  firstName: string;
  greet(name: string): void;
}

class Person implements NamedPerson {
  constructor(public firstName: string) {}
  greet(name: string) {
    console.log(`Hello ${name}`);
  }
}

const person: Person = new Person("Johnny");
