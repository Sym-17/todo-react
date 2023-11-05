import {
  PlusCircleIcon,
  TrashIcon,
  PencilSquareIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import EditIcon from "./EditIcon";

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
        }
      }
    });
    setEditedTodo("");
  };

  const checkTodo = (id: string) => {
    allTodos.map((Todo) => {
      if (Todo.id === id) {
        if (Todo.checkedOrNot === false) {
          Todo.checkedOrNot = true;
        } else {
          Todo.checkedOrNot = false;
        }
      }
    });
    check === false ? setCheck(true) : setCheck(false);
  };

  const showError = () => {
    setError("You cannot add an empty todo! Write something.");
  };

  return (
    <main className="w-3/4">
      <div className="flex-col justify-center items-center align-middle mt-14 md:mt-20 lg:ml-60 md:ml-30 lg:mr-60 md:mr-30 pb-10 ">
        <div>
          <header>
            <h1 className="font-medium text-center text-5xl md:text-7xl text-[#164863]">
              Todo
            </h1>
          </header>
          <div className="flex justify-center align-middle items-center mt-12 w-full gap-1 ">
            <input
              type="text"
              placeholder="Add your todo"
              className=" bg-white rounded-md p-2 w-full text-[#164863] outline-none overflow-hidden border-2 border-[#3A4D39]"
              value={todo}
              onChange={addTodo}
              ref={inputRef}
              //   controlling by pressing enter key
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  todo === "" ? showError() : addOneTodoToAllTodos();
                }
              }}
            />
            <PlusCircleIcon
              className="w-10 h-10 text-[#164863] ml-4 cursor-pointer"
              onClick={todo === "" ? showError : addOneTodoToAllTodos}
            />
          </div>
          {error ? (
            <p className="flex justify-center text-[#164863] font-normal p-2 text-2xl">
              {error}
            </p>
          ) : (
            <p className="flex justify-center text-[#164863] font-normal p-2 text-2xl"></p>
          )}
        </div>

        <div className="flex-col justify-center align-middle w-full gap-1 items-center mt-12">
          <div className="flex justify-between">
            <h1 className="text-[#164863] font-normal text-3xl md:text-4xl">
              My Todos
            </h1>
            <Link to="/notes">
              <h1 className="text-[#164863] font-normal text-3xl md:text-4xl">
                Add Notes
              </h1>
            </Link>
          </div>

          {allTodos.map((Todo) => {
            return (
              <div key={Todo.id}>
                {Todo.wantToEdit === false ? (
                  Todo.checkedOrNot === false ? (
                    <div className="flex justify-center align-middle items-center mt-6">
                      <input
                        type="checkbox"
                        className="w-8 h-8 text-[#164863] mr-2 md:mr-4 cursor-pointer accent-[#DDF2FD]"
                        onClick={() => checkTodo(Todo.id)}
                      />
                      <p className=" bg-white rounded-md p-2 w-full text-[#164863] outline-none overflow-hidden border-2 border-[#3A4D39]">
                        {" "}
                        {Todo.todo}{" "}
                      </p>
                      <PencilSquareIcon
                        className="w-8 h-8 text-[#164863] ml-2 md:ml-4 cursor-pointer"
                        onClick={() => {
                          Todo.wantToEdit = true;
                          setEditedTodo(Todo.todo);
                          setError("");
                        }}
                      />
                      <TrashIcon
                        className="w-8 h-8 text-[#164863] ml-2 md:ml-4 cursor-pointer"
                        onClick={() => deleteTodo(Todo.id)}
                      />{" "}
                    </div>
                  ) : (
                    <div className="flex justify-center align-middle items-center mt-6">
                      <input
                        type="checkbox"
                        className="w-8 h-8 text-[#164863] mr-2 md:mr-4 cursor-pointer accent-[#DDF2FD]"
                        onClick={() => checkTodo(Todo.id)}
                      />
                      <p className="border-2 bg-[#DDF2FD] rounded-md p-2 w-full text-[#116A7B] outline-none line-through overflow-hidden">
                        {" "}
                        {Todo.todo}{" "}
                      </p>
                      <PencilSquareIcon
                        className="w-8 h-8 text-[#164863] ml-2 md:ml-4 cursor-pointer"
                        onClick={() => {
                          Todo.wantToEdit = true;
                          setEditedTodo(Todo.todo);
                          setError("");
                        }}
                      />
                      <TrashIcon
                        className="w-8 h-8 text-[#164863] ml-2 md:ml-4 cursor-pointer"
                        onClick={() => deleteTodo(Todo.id)}
                      />{" "}
                    </div>
                  )
                ) : (
                  <div className="flex justify-center align-middle items-center mt-6">
                    <input
                      type="text"
                      className=" bg-white rounded-md p-2 w-full text-[#164863] outline-none overflow-hidden border-2 border-[#3A4D39]"
                      value={editedTodo}
                      onChange={(e) => {
                        setEditedTodo(e.target.value);
                      }}
                    />
                    <CheckCircleIcon
                      className="w-8 h-8 text-[#164863] ml-4 cursor-pointer"
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
