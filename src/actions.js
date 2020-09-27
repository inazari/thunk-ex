export const ADD_NOTE = 'ADD_NOTE';
export const LOAD_NOTES = 'LOAD_NOTES';
export const addNote = note => ({type: ADD_NOTE, payload: note})
export const setNotes = notes => ({type: LOAD_NOTES, payload: notes})
