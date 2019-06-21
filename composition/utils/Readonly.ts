// Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.

interface TodoItem {
  title: string;
}

const todo: Readonly<TodoItem> = {
  title: 'Delete inactive users',
};

todo.title = 'Hello'; // Error: cannot reassign a readonly property


// Freeze an object
function freeze<T>(obj: T): Readonly<T> {
  return Object.freeze(obj)
}

interface IunfrozenObject {
  name: string
}
let unfrozenObject = {
  name: "john"
}
unfrozenObject.name = "marry"

const frozenObject = freeze(unfrozenObject)
frozenObject.name = "Jack" // Cannot assign to 'name' because it is a read-only property