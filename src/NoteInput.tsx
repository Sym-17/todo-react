interface NoteInputProps {
  title: string;
  description: string;
  addTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addDescription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  addNotes: () => void;
}

function NoteInput(props: NoteInputProps): JSX.Element {
  return (
    <div className="flex justify-center mb-10 mt-10">
      <div className="w-[300px] md:w-[600px] h-32 rounded-lg bg-white shadow-2xl">
        <input
          type="text"
          className="p-2 w-full h-9 bg-transparent outline-none border-b-[1px] border-black-100 text-[#164863] font-semibold "
          value={props.title}
          placeholder="Title"
          onChange={props.addTitle}
        />
        <textarea
          className="h-14 w-full p-2  bg-transparent resize-none text-[#164863] outline-none"
          value={props.description}
          placeholder="Description"
          onChange={props.addDescription}
        />
        <div className="flex justify-center">
          <button
            className="flex justify-center items-center p-2 w-full h-8 bg-transparent hover:bg-slate-50 text-[#164863] hover:rounded-b-lg"
            onClick={props.addNotes}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteInput;
