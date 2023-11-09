import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import TodoInput from "../components/TodoInput";
import TodoOutput from "../components/TodoOutput";

// interface Todo {
//   id: string,
//   todo: string
// }

//with extra facility of 'interface'
type Todo = {
  id: string;
  todo: string;
  wantToEdit: boolean;
  checkedOrNot: boolean;
};

function Todo() {
  const [todo, setTodo] = useState<string>("");
  const [editedTodo, setEditedTodo] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);
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

  const addOneTodoToAllTodos = () => {
    const newTodo = {
      id: nanoid(4),
      todo: todo, //only todo can be written
      wantToEdit: false,
      checkedOrNot: false,
    };
    setAllTodos([...allTodos, newTodo]);
    setTodo("");
  };

  const deleteTodo = (id: string) => {
    const newAllTodos: Todo[] = allTodos.filter((Todo) => {
      return Todo.id != id;
    });
    setAllTodos([...newAllTodos]);
    setError("");
  };

  const editTodo = (id: string) => {
    allTodos.map((Todo) => {
      if (Todo.id === id) {
        if (editedTodo === "") showError();
        else {
          setError("");
          Todo.todo = editedTodo;
          Todo.wantToEdit = false;
          Todo.checkedOrNot === false
            ? (Todo.checkedOrNot = false)
            : (Todo.checkedOrNot = true);
        }
      }
    });
    setEditedTodo("");
  };

  const checkTodo = (id: string) => {
    allTodos.map((Todo) => {
      if (Todo.id === id) {
        Todo.checkedOrNot === false
          ? (Todo.checkedOrNot = true)
          : (Todo.checkedOrNot = false);
      }
    });
    setCheck(!check);
  };

  const showError = () => {
    setError("You cannot add an empty todo! Write something.");
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      todo === "" ? showError() : addOneTodoToAllTodos();
    }
  };

  return (
    <main className="w-full">
      <div className="flex-col justify-center items-center align-middle mt-14 md:mt-20 md:ml-20 lg:ml-30 2xl:ml-60 lg:mr-30 2xl:mr-60 md:mr-20 pb-10 ">
        <TodoInput
          todo={todo}
          addTodo={addTodo}
          inputRef={inputRef}
          onKeyPress={(e) => onKeyPress(e)}
          showError={showError}
          addOneTodoToAllTodos={addOneTodoToAllTodos}
          error={error}
        />

        <div className="flex-col justify-center align-middle pr-6 md:pr-20 lg:pr-56 pl-6 md:pl-20 lg:pl-56 gap-1 items-center mt-12">
          <div className="flex justify-between">
            <h1 className="text-[#3f3d56] font-normal text-3xl md:text-4xl">
              My Todos
            </h1>
          </div>

          {allTodos.map((Todo) => {
            return (
              <div key={Todo.id}>
                {Todo.wantToEdit === false ? (
                  <TodoOutput
                    Todo={Todo}
                    setEditedTodo={setEditedTodo}
                    setError={setError}
                    checkTodo={() => checkTodo(Todo.id)}
                    deleteTodo={deleteTodo}
                  />
                ) : (
                  <div className="flex justify-center align-middle items-center mt-6">
                    <input
                      type="text"
                      className=" bg-white rounded-md p-2 w-full text-[#3f3d56] outline-none overflow-hidden border-2 border-[#3A4D39]"
                      value={editedTodo}
                      onChange={(e) => {
                        setEditedTodo(e.target.value);
                      }}
                    />
                    <CheckCircleIcon
                      className="w-8 h-8 text-[#3f3d56] ml-4 cursor-pointer"
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
