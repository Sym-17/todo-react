import { PlusCircleIcon } from "@heroicons/react/24/outline";

type TodoInputProps = {
  todo: string;
  addTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  showError: () => void;
  addOneTodoToAllTodos: () => void;
  error: string;
};

export default function TodoInput(props: TodoInputProps) {
  return (
    <div>
      <div className="flex justify-center align-middle items-center pr-6 md:pr-20 lg:pr-56 pl-6 md:pl-20 lg:pl-56 w-full gap-1 ">
        <input
          type="text"
          placeholder="Add your todo"
          className=" bg-white rounded-md p-2 w-full text-[#3f3d56] outline-none overflow-hidden border-2 border-[#3A4D39]"
          value={props.todo}
          onChange={props.addTodo}
          ref={props.inputRef}
          //   controlling by pressing enter key
          onKeyPress={props.onKeyPress}
        />
        <PlusCircleIcon
          className="w-10 h-10 text-[#3f3d56] ml-4 cursor-pointer"
          onClick={
            props.todo === "" ? props.showError : props.addOneTodoToAllTodos
          }
        />
      </div>
      <p className="flex justify-center text-[#3f3d56] font-normal p-2 text-2xl">
        {props.error ? props.error : <></>}
      </p>
    </div>
  );
}
