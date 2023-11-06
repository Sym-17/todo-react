import {
  TrashIcon,
  PencilSquareIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

interface NoteOutputProps {
  title: string;
  description: string;
  date: string;
  checkANote: () => void;
  editIconClick: () => void;
  deleteNote: () => void;
}

export default function NoteOutput(props: NoteOutputProps): JSX.Element {
  return (
    <div>
      <div className="flex justify-between items-center mb-2 border-black-100 border-b-[1px]">
        <p className="h-10 w-full p-2  bg-transparent text-left font-semibold text-[#164863] italic outline-none">
          {props.title}
        </p>
        <CheckCircleIcon
          className="h-10 w-8 p-1 bg-transparent cursor-pointer"
          onClick={props.checkANote}
        />
      </div>
      <p className="h-[89px] lg:h-[92px] w-full p-2 bg-transparent text-left text-clip overflow-auto align-top text-[#164863] outline-none ">
        {props.description}
      </p>
      <div className="flex justify-between">
        <p className="p-1 lg:p-2 text-[#164863] font-semibold text-xs">
          {props.date}
        </p>
        <div className="flex">
          <PencilSquareIcon
            className="flex justify-center items-center text-[#164863] p-1 w-10 h-[30px] rounded-md bg-transparent cursor-pointer"
            onClick={props.editIconClick}
          />
          <TrashIcon
            className="flex justify-center items-center p-1 w-10 h-[30px] rounded-sm text-[#164863] bg-transparent cursor-pointer"
            onClick={props.deleteNote}
          />
        </div>
      </div>
    </div>
  );
}
