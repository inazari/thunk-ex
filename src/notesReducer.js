import {ADD_NOTE, LOAD_NOTES, setNotes} from './actions'

const initialState = {
    notes: []
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE: {
            return {...state, notes: [...state.notes, action.payload]}
        }
        case LOAD_NOTES: {
            return {...state, notes: action.payload}
        }
        default:
            return state
    }
}


export const saveNotes = () => {
    return async (dispatch, getStore) => {
        const {notes} = getStore();
        const res = await fetch("http://localhost:4000/notes", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(notes)
        })
        console.log(res.json());
    }
}

export const loadNotes = () => {
    return async dispatch => {
        const notes = await fetch("http://localhost:4000/notes").then(res => res.json());
        dispatch(setNotes(notes))
    }
}
