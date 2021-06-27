import { useObserver } from "mobx-react";

const AddNote = ({ handleAddNote, note, handleNoteChange }) => {
    return useObserver(() => (
        <>
            <h2>Insert note</h2>
            <input type="text" value={note} onChange={handleNoteChange} />
            <button type="button" onClick={handleAddNote}>
                Add note
            </button>
        </>
    ))
}

export default AddNote;