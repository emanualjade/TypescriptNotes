class Jiggy {
  doIt() {
    return ""
  }
}

const xx: Jiggy = new Jiggy()
const yy: InstanceType<typeof Jiggy> = new Jiggy()

// Pick<T,K>
// Constructs a type by picking the set of properties K from T.

interface TodoThing {
  title: string;
  description: string;
  completed: boolean;
}

type TodoThingPreview = Pick<TodoThing, 'title' | 'completed'>;

const todo: TodoThingPreview = {
  title: 'Clean room',
  completed: false,
};
