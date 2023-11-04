import {
  PlusCircleIcon,
  TrashIcon,
  PencilSquareIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import {
  checkCircleIcon,
  eachTodoDiv,
  editIcon,
  errorText,
  headerH1,
  inputCheckbox,
  inputWithButton,
  mainDiv,
  mainInput,
  plusCircleIcon,
  todoDiv,
  todoHeading,
} from "./styles/TodoCSS";
import { Link } from "react-router-dom";

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
      <div className={mainDiv}>
        <div>
          <header>
            <h1 className={headerH1}>Todo</h1>
          </header>
          <div className={inputWithButton}>
            <input
              type="text"
              placeholder="Add your todo"
              className={mainInput}
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
              className={plusCircleIcon}
              onClick={todo === "" ? showError : addOneTodoToAllTodos}
            />
          </div>
          {error ? (
            <p className={errorText}>{error}</p>
          ) : (
            <p className={errorText}></p>
          )}
        </div>

        <div className={todoDiv}>
          <div className="flex justify-between">
            <h1 className={todoHeading}>My Todos</h1>
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
                    <div className={eachTodoDiv}>
                      <input
                        type="checkbox"
                        className={inputCheckbox}
                        onClick={() => checkTodo(Todo.id)}
                      />
                      <p className={mainInput}> {Todo.todo} </p>
                      <PencilSquareIcon
                        className={editIcon}
                        onClick={() => {
                          Todo.wantToEdit = true;
                          setEditedTodo(Todo.todo);
                          setError("");
                        }}
                      />
                      <TrashIcon
                        className={editIcon}
                        onClick={() => deleteTodo(Todo.id)}
                      />{" "}
                    </div>
                  ) : (
                    <div className={eachTodoDiv}>
                      <input
                        type="checkbox"
                        className={inputCheckbox}
                        onClick={() => checkTodo(Todo.id)}
                      />
                      <p className="border-2 bg-[#DDF2FD] rounded-md p-2 w-full text-[#116A7B] outline-none line-through overflow-hidden">
                        {" "}
                        {Todo.todo}{" "}
                      </p>
                      <PencilSquareIcon
                        className={editIcon}
                        onClick={() => {
                          Todo.wantToEdit = true;
                          setEditedTodo(Todo.todo);
                          setError("");
                        }}
                      />
                      <TrashIcon
                        className={editIcon}
                        onClick={() => deleteTodo(Todo.id)}
                      />{" "}
                    </div>
                  )
                ) : (
                  <div className={eachTodoDiv}>
                    <input
                      type="text"
                      className={mainInput}
                      value={editedTodo}
                      onChange={(e) => {
                        setEditedTodo(e.target.value);
                      }}
                    />
                    <CheckCircleIcon
                      className={checkCircleIcon}
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
