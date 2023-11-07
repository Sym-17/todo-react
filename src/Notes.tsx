import { useState } from "react";
import { nanoid } from "nanoid";

import NoteInput from "./NoteInput";
import NoteOutput from "./NoteOutput";

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
    if (title.length > 21) setError("Title can be max 20 charecters");
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

  const checkANote = (id: string) => {
    if (allChecks.get(id) === false) allChecks.set(id, true);
    else allChecks.set(id, false);

    check === false ? setCheck(true) : setCheck(false);
  };

  const editIconClick = (id: string, title: string, description: string) => {
    wantToEdit.set(id, true);
    setEditedTitle(title);
    setEditedDescription(description);
  };

  return (
    <main className="flex-col w-full">
      <div className="flex-col justify-center items-center align-middle mt-6 md:mt-8 ml-8 2xl:ml-56 md:ml-20 mr-8 2xl:mr-56 md:mr-20 pb-10">
        <NoteInput
          title={title}
          description={description}
          addTitle={addTitle}
          addDescription={addDescription}
          addNotes={addNotes}
        />

        <header className="flex justify-between items-center">
          <h1 className="text-start font-medium text-4xl md:text-5xl text-[#3f3d56]">
            Your Notes
          </h1>
          <p className="text-red-600 font-semibold text-base md:text-2xl text-right">
            {error}
          </p>
        </header>

        <div className="mt-10">
          {allNotes.length === 0 ? (
            <p className="text-2xl font-medium text-[#64CCC5]">
              No saved notes!
            </p>
          ) : (
            <p></p>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
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
                        ? "w-36 2xl:w-52 h-44 bg-white border-2 border-[#3A4D39] rounded-lg"
                        : "w-36 2xl:w-52 h-44 bg-[#DDF2FD] border-none rounded-lg contrast-less"
                    }
                    key={id}
                  >
                    <NoteOutput
                      title={Note.title}
                      description={Note.description}
                      date={Note.date}
                      checkANote={() => checkANote(id)}
                      editIconClick={() =>
                        editIconClick(id, Note.title, Note.description)
                      }
                      deleteNote={() => deleteNote(id)}
                    />
                  </div>
                );
              //with edit
              else
                return (
                  // Input for Edit
                  <NoteInput
                    title={editedTitle}
                    description={editedDescription}
                    addTitle={editTitle}
                    addDescription={editDescription}
                    addNotes={() => editNote(id)}
                  />
                );
            })}
            {/* Main Input*/}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Notes;
