import {
  PlusCircleIcon,
  TrashIcon,
  PencilSquareIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { useState, useRef, useEffect } from "react";
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
  wantToEdit: boolean;
};

function Todo() {
  const [todo, setTodo] = useState<string>("");
  const [editedTodo, setEditedTodo] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [allTodos, setAllTodos] = useState<Todo[]>([]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [todo, error, allTodos]);

  const addTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setTodo(e.target.value);
  };

  const addOneTodo = () => {
    const newTodo = {
      id: nanoid(4),
      todo: todo, //only todo can be written
      wantToEdit: false,
    };
    setAllTodos([...allTodos, newTodo]);
    setTodo("");
  };

  const deleteTodo = (id: string) => {
    const newAllTodos: Todo[] = allTodos.filter((Todo) => {
      return Todo.id != id;
    });
    setAllTodos([...newAllTodos]);
  };

  const editTodo = (id: string) => {
    allTodos.map((Todo) => {
      if (Todo.id === id) {
        Todo.todo = editedTodo;
        Todo.wantToEdit = false;
      }
    });
    setEditedTodo("");
  };

  const showError = () => {
    setError("Undefined Value!");
  };

  return (
    <main className="w-3/4">
      <div className="mt-20 ml-60 mr-60 pb-10 flex-col justify-center items-center align-middle">
        <div>
          <header>
            <h1 className="font-bold text-center text-7xl text-white ">Todo</h1>
          </header>
          <div className="flex justify-center align-middle mt-12 w-full gap-1 items-center">
            <input
              type="text"
              placeholder="Add your todo"
              className="border-2 rounded-md p-2 w-full text-indigo-900 outline-none"
              value={todo}
              onChange={addTodo}
              ref={inputRef}
              //   controlling by pressing enter key
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  todo === "" ? showError() : addOneTodo();
                }
              }}
            />
            <PlusCircleIcon
              className="w-10 h-10 text-white ml-4 cursor-pointer"
              onClick={todo === "" ? showError : addOneTodo}
            />
          </div>
          {error && (
            <p className="text-white font-semibold p-2 text-2xl">{error}</p>
          )}
        </div>

        <div className="flex-col justify-center align-middle w-full gap-1 items-center mt-12">
          <h1 className="text-white font-semibold text-4xl">My Todos</h1>

          {allTodos.map((Todo) => {
            return (
              <div key={Todo.id}>
                {Todo.wantToEdit === false ? (
                  <div className="flex justify-center align-middle items-center mt-6">
                    <p className="border-2 bg-white rounded-md p-2 w-full text-indigo-900">
                      {" "}
                      {Todo.todo}{" "}
                    </p>
                    <PencilSquareIcon
                      className="w-8 h-8 text-white ml-4 cursor-pointer"
                      onClick={() => {
                        Todo.wantToEdit = true;
                        setEditedTodo(Todo.todo);
                      }}
                    />
                    <TrashIcon
                      className="w-8 h-8 text-white ml-4 cursor-pointer"
                      onClick={() => deleteTodo(Todo.id)}
                    />{" "}
                  </div>
                ) : (
                  <div className="flex justify-center align-middle items-center mt-6">
                    <input
                      type="text"
                      className="border-2 bg-white rounded-md p-2 w-full text-indigo-900 outline-none"
                      value={editedTodo}
                      onChange={(e) => {
                        setEditedTodo(e.target.value);
                      }}
                    />
                    <CheckCircleIcon
                      className="w-8 h-8 text-white ml-4 cursor-pointer"
                      onClick={() => editTodo(Todo.id)}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Todo;
