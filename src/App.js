import React from 'react';

import NewNoteInput from "./NewNoteInput";
import {useSelector, useDispatch} from 'react-redux';
import {addNote} from './actions'
import './App.css';
import {loadNotes, saveNotes} from "./notesReducer";

function App() {

    const notes = useSelector(
        state => state.notes
    )

    const dispatch = useDispatch();

    const onAddNote = note => {
        dispatch(addNote(note));
    }

    const onSave = () => {
        dispatch(saveNotes())
    }
    const onLoad = () => {
        dispatch(loadNotes())
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>header</h1>
            </header>
            <main>
                <NewNoteInput addNote={onAddNote}/>
                <ul>
                    {notes.map((note, index) => {
                        return <li key={index}>{note}</li>
                    })}
                </ul>
                <button type='button' onClick={onSave}>save</button>
                <button onClick={onLoad}>load</button>
            </main>
        </div>
    );
}

export default App;
