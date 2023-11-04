import { useState } from "react";
import { nanoid } from "nanoid";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

type Notes = {
  id: string;
  title: string;
  description: string;
  wantToEdit: boolean;
  date: string;
};

function Notes() {
  const [title, setTitile] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [allNotes, setAllNotes] = useState<Notes[]>([]);

  const addTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitile(e.target.value);
  };

  const addDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const addNotes = () => {
    const d = new Date();
    const dt = d.toISOString().split("T")[0];
    const newNote = {
      id: nanoid(4),
      title,
      description,
      wantToEdit: false,
      date: dt,
    };
    setAllNotes([...allNotes, newNote]);
    setTitile("");
    setDescription("");
  };

  return (
    <main className="w-full">
      <div className="flex-col justify-center items-center align-middle mt-14 md:mt-20 ml-8 2xl:ml-60 md:ml-36 mr-8 2xl:mr-60 md:mr-36 pb-10">
        <header className="">
          <h1 className="text-start font-medium text-5xl md:text-7xl text-[#164863]">
            Notes
          </h1>
        </header>

        <div className="mt-10 ">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {allNotes.map((Notes) => {
              return (
                <div
                  className="w-40 2xl:w-56 h-44 bg-[#FFFFDD] border-4 border-[#3A4D39] rounded-lg"
                  key={Notes.id}
                >
                  <p className="h-10 w-full p-2  bg-transparent text-left font-semibold text-[#164863] outline-none">
                    {Notes.title}
                  </p>
                  <p className="h-24 w-full p-2 bg-transparent text-left text-clip overflow-auto align-top text-[#164863] outline-none ">
                    {Notes.description}
                  </p>
                  <div className="flex justify-between">
                    <p className="p-2 text-[#164863 font-thin text-xs">
                      {Notes.date}
                    </p>
                    <div className="flex gap-1">
                      <PencilSquareIcon className="flex justify-center items-center text-white p-2 w-10 h-8 rounded-md bg-[#186F65]" />
                      <TrashIcon className="flex justify-center items-center p-2 w-10 h-8 rounded-sm text-white bg-[#79155B]" />
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="w-40 2xl:w-56 h-44 border-4 border-[#3A4D39] rounded-lg">
              <input
                type="text"
                className="p-2 w-full h-9 bg-transparent outline-none border-b-2 border-[#427D9D] text-[#164863] font-semibold"
                value={title}
                placeholder="Title"
                onChange={addTitle}
              />
              <textarea
                className="h-24 w-full p-2  bg-transparent resize-none text-[#164863] outline-none"
                value={description}
                placeholder="Description"
                onChange={addDescription}
              />
              <div className="float-right">
                <button
                  className="flex justify-center items-center p-2 w-16 h-8 rounded-md bg-[#9BBEC8]"
                  onClick={addNotes}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Notes;
