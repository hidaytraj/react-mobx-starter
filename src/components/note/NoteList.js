import { observer } from "mobx-react";


const NoteList = ({ noteStore }) => {
    return (
        <>
            <h2>Note list</h2>
            {noteStore?.notes?.length ? (
                noteStore.notes.map((note, idx) => (
                    <div key={idx}>
                        <h3>from {note.username}</h3>
                        <code>{note.note}</code>
                    </div>
                ))
            ) : (
                <p>No note on the list</p>
            )}
        </>
    )
}

export default observer(NoteList);