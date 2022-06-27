import { useState, useEffect } from 'react';
import '../../styles/custom_colors.scss';
import "../../styles/notes.scss";
import List from "../notes/list";
import NoteService from '../../services/notes';
import Editor from "../notes/editor";
import Search from "../notes/search";
import { Column } from 'rbx';

const Notes = (props) => {

    const [notes, setNotes] = useState([]);
    const [current_note, setCurrentNote] = useState({ title: "", body: "", id: "" });

    useEffect(() => {
        fetchNotes();
    }, []);

    async function fetchNotes() {
        const response = await NoteService.index();
        if (response.data.length >= 1) {
            setNotes(response.data.reverse())
            setCurrentNote(response.data[0])
        } else {
            setNotes([]);
        }
    }

    const selectNote = (id) => {
        const note = notes.find((note) => {
            return note._id == id;
        })
        setCurrentNote(note);
    }

    const createNote = async () => {
        await NoteService.create();
        fetchNotes();
    }

    const deleteNote = async (notes) => {
        await NoteService.delete(notes._id);
        fetchNotes();
    }

    const updateNote = async (oldNote, params) => {
        const updatedNote = await NoteService.update(oldNote._id, params);
        const index = notes.indexOf(oldNote);
        const newNotes = notes;
        newNotes[index] = updatedNote.data;
        setNotes(newNotes);
        setCurrentNote(updatedNote.data);
    }

    const searchNotes = async (query) => {
        const response = await NoteService.search(query);
        setNotes(response.data);
    }

    return (
        <>
            <div id='notes-body'>
                <div className={props.openMenu ? 'nav-menu active' : 'nav-menu'}>
                    <div>
                        <Search searchNotes={searchNotes} fetchNotes={fetchNotes}/>
                    </div>
                    <List
                        openMenu={props.openMenu}
                        notes={notes}
                        selectNote={selectNote}
                        createNote={createNote}
                        deleteNote={deleteNote}
                        current_note={current_note} />
                </div>
                <div className={props.openMenu ? 'notes-content active' : 'notes-content'}>
                    <Column className='notes-editor'>
                        <Editor
                            note={current_note}
                            updateNote={updateNote}
                        />
                    </Column>

                </div>
            </div>
        </>
    );
}

export default Notes;