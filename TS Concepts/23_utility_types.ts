interface ToDo {
  title: string;
  description: string;
}

// Rather updating old interface as optianal use partial
const updateToDo = (toDo: Partial<ToDo>) => {
  toDo.title = "Learn";
};

// Readonly
const myTodo: Readonly<ToDo> = { title: "Learn!", description: "Learn!!" };

// Record
interface PageInfo {
  title: string;
}

const pages: Record<string, PageInfo> = {
  home: { title: "home" },
  about: { title: "about" },
  contact: { title: "contact" },
};

// Pick
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

type ToDoPreview = Pick<Todo, "title" | "completed">;
const toDoPreview: ToDoPreview = {
  completed: true,
  title: "Title",
};

// Omit
type ToDoPreview2 = Omit<Todo, "title" | "completed">;
const toDoPreview2: ToDoPreview2 = {
  id: 123,
};
