import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { nanoid } from "nanoid";

// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT";

// interface Todo {
//   id: string,
//   todo: string
// }

//with extra facility of 'interface'
type Todo = {
  id: string;
  todo: string;
};

function App() {
  const [todo, setTodo] = useState<string>("");
  const [allTodos, setAllTodos] = useState<Todo[]>([]);

  const addTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const addOneTodo = () => {
    const newTodo = {
      id: nanoid(4),
      todo: todo, //only todo can be written
    };
    setAllTodos([...allTodos, newTodo]);
    setTodo("");
  };

  return (
    <main>
      <header>
        <h1 className="font-bold text-7xl">Todo</h1>
      </header>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Add your todo"
          className="border-2 border-sky-300"
          value={todo}
          onChange={(e) => addTodo(e)}
        />
        <PlusCircleIcon className="w-6 h-6" onClick={addOneTodo} />
      </div>
      <div className="">
        {allTodos.map((todo) => {
          return <p key={todo.id}>{todo.todo}</p>;
        })}
      </div>
    </main>
  );
}

export default App;
