// src/Notes.js

import { useEffect, useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Typography,
    Container,
    Paper,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import { ArrowDownFromLine } from 'lucide-react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { failedToast, successToast } from '../../utils/toastNotifications';

const Notes = () => {
    const token = useSelector(state => state.profile.jwt);
    const [notesList, setNotesList] = useState([
        { title: 'First Note', notes: 'This is the content of the first note.' },
        { title: 'Second Note', notes: 'This is the content of the second note.' },
    ]);
    const [open, setOpen] = useState(false);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddNote = async () => {
        await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/notes`, {
            title: noteTitle,
            notes: noteContent
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((res) => {
            setNotesList(res.data)
            successToast("Note Added Successfully")
            handleClose();
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    };


    async function getNotes() {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/notes`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setNotesList(Item.data);
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }
    useEffect(() => {
        getNotes();
    }, [])

    return (
        <Container className='mt-10'>
            <div className="flex justify-between items-center">
                <div>
                    <div className="mt-14 w-full text-4xl font-bold text-neutral-700 max-md:mt-10 max-md:max-w-full">
                        Notes
                    </div>
                    <div className="mt-4 w-full text-xl text-zinc-500 max-md:max-w-full">
                        Add New Note and keep updated{" "}
                    </div>
                </div>
                <button
                    onClick={handleClickOpen}
                    className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-violet-800 border border-transparent hover:bg-violet-700 focus:outline-none focus:ring-offset-2 focus:ring-violet-700 rounded-2xl"
                >
                    Add Note
                </button>
            </div>
            <Paper style={{ marginTop: '20px' }}>
                {notesList.length > 0 ? (
                    notesList.map((note, index) => (
                        <Accordion key={index}>
                            <AccordionSummary expandIcon={<ArrowDownFromLine />}>
                                <Typography variant="h6">{note.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{note.notes}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))
                ) : (
                    <div className="flex justify-center items-center text-xl font-light pb-10 mt-20">
                        No notes available.
                    </div>
                )}
            </Paper>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add a New Note</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={noteTitle}
                        onChange={(e) => setNoteTitle(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Note"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={noteContent}
                        onChange={(e) => setNoteContent(e.target.value)}
                        multiline
                        rows={4}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAddNote} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </Container >
    );
};

export default Notes;