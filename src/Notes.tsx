import { useState } from "react";
import { nanoid } from "nanoid";
import {
  TrashIcon,
  PencilSquareIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

type Notes = {
  id: string;
  title: string;
  description: string;
  date: string;
};

const allChecks: Map<string, boolean> = new Map();
const wantToEdit: Map<string, boolean> = new Map();

function Notes() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [editedTitle, setEditedTitle] = useState<string>("");
  const [editedDescription, setEditedDescription] = useState<string>("");
  const [allNotes, setAllNotes] = useState<Notes[]>([]);
  const [error, setError] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);

  const addTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setTitle(e.target.value);
  };

  const addDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setError("");
    setDescription(e.target.value);
  };

  const editTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setEditedTitle(e.target.value);
  };

  const editDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setError("");
    setEditedDescription(e.target.value);
  };

  const addNotes = () => {
    if (title.length > 21)
      setError("Please enter your 'Title' within 20 charecter");
    else if (title.length === 0) setError("Title cannot empty!");
    else if (description.length === 0) setError("Description cannot empty!");
    else {
      const d = new Date();
      const dt = d.toISOString().split("T")[0];
      const id = nanoid(4);
      const newNote = {
        id,
        title,
        description,
        date: dt,
      };
      allChecks.set(id, false);
      wantToEdit.set(id, false);
      setAllNotes([...allNotes, newNote]);
      setTitle("");
      setDescription("");
      setError("");
    }
  };

  const deleteNote = (id: string) => {
    const newNotes = allNotes.filter((note) => {
      return note.id != id;
    });
    setAllNotes([...newNotes]);
  };

  const editNote = (id: string) => {
    if (editedTitle.length > 21)
      setError("Please enter your 'Title' within 20 charecter");
    else if (editedTitle.length === 0) setError("Title cannot empty!");
    else if (editedDescription.length === 0)
      setError("Description cannot empty!");
    else {
      const d = new Date();
      const dt = d.toISOString().split("T")[0];
      allNotes.map((Note) => {
        if (Note.id === id) {
          Note.title = editedTitle;
          Note.description = editedDescription;
          Note.date = dt;
        }
      });

      wantToEdit.set(id, false);
      setEditedTitle("");
      setEditedDescription("");
      setError("");
    }
  };

  return (
    <main className="w-full">
      <div className="flex-col justify-center items-center align-middle mt-14 md:mt-20 ml-8 2xl:ml-60 md:ml-36 mr-8 2xl:mr-60 md:mr-36 pb-10">
        <header className="flex justify-between items-center">
          <h1 className="text-start font-medium text-5xl md:text-7xl text-[#164863]">
            Notes
          </h1>
          <p className="text-red-600 font-semibold text-2xl">{error}</p>
        </header>

        <div className="mt-10 ">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Show all notes */}
            {allNotes.map((Note) => {
              const id = Note.id;
              if (wantToEdit.get(id) === false)
                //without edit (checks also)
                return (
                  <div
                    className={
                      // Checked or not
                      allChecks.get(id) === false
                        ? "w-40 2xl:w-56 h-44 bg-[#FFFFDD] border-4 border-[#3A4D39] rounded-lg"
                        : "w-40 2xl:w-56 h-44 bg-slate-300 border-4 border-[#3A4D39] rounded-lg"
                    }
                    key={id}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <p className="h-10 w-full p-2  bg-transparent text-left font-semibold text-[#164863] italic outline-none">
                        {Note.title}
                      </p>
                      <CheckCircleIcon
                        className="h-10 w-8 p-1 bg-transparent cursor-pointer"
                        onClick={() => {
                          if (allChecks.get(id) === false)
                            allChecks.set(id, true);
                          else allChecks.set(id, false);

                          check === false ? setCheck(true) : setCheck(false);
                        }}
                      />
                    </div>
                    <p className="h-[89px] lg:h-[92px] w-full p-2 bg-transparent text-left text-clip overflow-auto align-top text-[#164863] outline-none ">
                      {Note.description}
                    </p>
                    <div className="flex justify-between">
                      <p className="p-2 lg:p-2 text-[#164863] font-thin text-xs">
                        {Note.date}
                      </p>
                      <div className="flex gap-1">
                        <PencilSquareIcon
                          className="flex justify-center items-center text-white p-2 w-10 h-8 rounded-md bg-[#186F65] cursor-pointer"
                          onClick={() => {
                            wantToEdit.set(id, true);
                            setEditedTitle(Note.title);
                            setEditedDescription(Note.description);
                          }}
                        />
                        <TrashIcon
                          className="flex justify-center items-center p-2 w-10 h-8 rounded-sm text-white bg-[#79155B] cursor-pointer"
                          onClick={() => deleteNote(Note.id)}
                        />
                      </div>
                    </div>
                  </div>
                );
              //with edit
              else
                return (
                  <div className="w-40 2xl:w-56 h-44 border-4 border-[#3A4D39] rounded-lg">
                    <input
                      type="text"
                      className="p-2 w-full h-9 bg-transparent outline-none border-b-2 border-[#427D9D] text-[#164863] font-semibold "
                      value={editedTitle}
                      placeholder="Title"
                      onChange={editTitle}
                    />
                    <textarea
                      className="h-24 w-full p-2  bg-transparent resize-none text-[#164863] outline-none"
                      value={editedDescription}
                      placeholder="Description"
                      onChange={editDescription}
                    />
                    <div className="float-right">
                      <button
                        className="flex justify-center items-center p-2 w-16 h-8 rounded-md bg-[#9BBEC8]"
                        onClick={() => editNote(Note.id)}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                );
            })}
            {/*  Input field*/}
            <div className="w-40 2xl:w-56 h-44 border-4 border-[#3A4D39] rounded-lg">
              <input
                type="text"
                className="p-2 w-full h-9 bg-transparent outline-none border-b-2 border-[#427D9D] text-[#164863] font-semibold "
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
