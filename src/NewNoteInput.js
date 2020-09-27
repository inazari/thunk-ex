import React, {useState} from "react";

const NewNoteInput = ({addNote}) => {
    const [note, setNote] = useState('')

    const onAddNoteClick = () => {
        addNote(note);
        setNote('');
    }

    const updateNote = (e) =>{
        setNote(e.target.value);
    }

    return (<>
        <input
            onChange={updateNote}
            value={note}
            type="text"
            name='note'
            placeholder='Note'
        />
        <button onClick={onAddNoteClick} type={"button"}>Add note</button>
        </>)
}
export default NewNoteInput;
