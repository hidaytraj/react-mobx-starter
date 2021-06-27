import { useObserver } from "mobx-react";
import { useState } from "react";
import { useStores } from "../../stores";

import AddNote from "./AddNote";
import NoteList from "./NoteList";

const Note = () => {
    // here you can access all of the stores registered on the root store
    const { noteStore } = useStores();

    const [note, setNote] = useState("");
    // tracking the note change
    const handleNoteChange = (e) => {
        e.preventDefault();
        const {
            target: { value }
        } = e;

        setNote(value);
    };

    const handleAddNote = () => {
        // access the note store action adding note to the notes array
        noteStore.addNote(note);
    };


    return useObserver(() => (
        <section className="note-wrapper">
            <h1>Note</h1>

            <AddNote
                note={note}
                handleNoteChange={handleNoteChange}
                handleAddNote={handleAddNote}
            />

            <NoteList noteStore={noteStore} />
        </section>
    ))
}

export default Note;