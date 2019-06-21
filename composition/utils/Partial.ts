// Partial allows us to make all properties on an object optional
interface IMyGreatInterface {
  name: string
  age: number
}

type MayHaveInfo = Partial<IMyGreatInterface>
const me: MayHaveInfo = {}


// Example in use
// https://medium.com/@ole.ersoy/typescript-partial-of-what-9a557200b147
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
};

const todo2 = updateTodo(todo1, {
  description: 'throw out trash',
});

