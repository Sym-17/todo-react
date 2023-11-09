import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

type TodoOutputProps = {
  checkTodo: (id: string) => void;
  Todo: {
    id: string;
    todo: string;
    wantToEdit: boolean;
    checkedOrNot: boolean;
  };
  setEditedTodo: (value: React.SetStateAction<string>) => void;
  setError: (value: React.SetStateAction<string>) => void;
  deleteTodo: (id: string) => void;
};

export default function TodoOutput(props: TodoOutputProps) {
  return (
    <div className="flex justify-center align-middle items-center mt-6">
      <input
        type="checkbox"
        checked={props.Todo.checkedOrNot}
        className="w-8 h-8 text-[#3f3d56] mr-2 md:mr-4 cursor-pointer accent-[#DDF2FD]"
        onClick={() => props.checkTodo(props.Todo.id)}
      />
      <p
        className={`w-full p-2 rounded-md outline-none overflow-hidden border-2
            ${
              props.Todo.checkedOrNot === false
                ? "bg-white  text-[#3f3d56] border-[#3A4D39]"
                : "bg-[#DDF2FD] text-[#116A7B] line-through"
            }`}
      >
        {props.Todo.todo}
      </p>
      <PencilSquareIcon
        className="w-8 h-8 text-[#3f3d56] ml-2 md:ml-4 cursor-pointer"
        onClick={() => {
          props.Todo.wantToEdit = true;
          props.setEditedTodo(props.Todo.todo);
          props.setError("");
        }}
      />
      <TrashIcon
        className="w-8 h-8 text-[#3f3d56] ml-2 md:ml-4 cursor-pointer"
        onClick={() => props.deleteTodo(props.Todo.id)}
      />
    </div>
  );
}
