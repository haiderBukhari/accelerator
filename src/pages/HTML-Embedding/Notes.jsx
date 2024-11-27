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
    IconButton,
} from '@mui/material';
import { ArrowDownFromLine, Edit, Trash } from 'lucide-react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { failedToast, successToast } from '../../utils/toastNotifications';

const Notes = ({ fetch, setFetch }) => {
    const token = useSelector(state => state.profile.jwt);
    const [htmlList, setHtmlList] = useState([]);
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [descriptionHtml, setDescriptionHtml] = useState('');
    const [routeName, setRouteName] = useState('');
    const [editMode, setEditMode] = useState(null); // Store the ID of the item being edited

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setTitle('');
        setDescriptionHtml('');
        setRouteName('');
        setEditMode(null); // Exit edit mode
    };

    const handleAddHtml = async () => {
        // Validate routeName for no spaces
        if (/\s/.test(routeName)) {
            return failedToast('Route name cannot contain spaces.');
        }

        await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/embedded-html`, {
            title,
            descriptionHtml,
            routeName,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }).then((res) => {
            setHtmlList(res.data);
            successToast('HTML Content Added Successfully');
            setFetch(!fetch);
            handleClose();
        }).catch((err) => {
            console.log(err);
            return failedToast(err.response?.data?.error || 'Failed to add content.');
        });
    };

    const handleEditHtml = async (id) => {
        // Validate routeName for no spaces
        if (/\s/.test(routeName)) {
            return failedToast('Route name cannot contain spaces.');
        }

        await axios.put(`${import.meta.env.VITE_APP_BACKEND_URL}/embedded-html/${id}`, {
            title,
            descriptionHtml,
            routeName,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }).then(() => {
            successToast('Content updated successfully.');
            setEditMode(null); // Exit edit mode
            getEmbeddedHtml(); // Refresh list
        }).catch((err) => {
            failedToast(err.response?.data?.error || 'Failed to update content.');
        });
    };

    const handleDeleteHtml = async (id) => {
        await axios.delete(`${import.meta.env.VITE_APP_BACKEND_URL}/embedded-html/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        }).then(() => {
            successToast('Content deleted successfully.');
            setHtmlList(htmlList.filter(html => html._id !== id));
            setFetch(!fetch);
        }).catch((err) => {
            failedToast(err.response?.data?.error || 'Failed to delete content.');
        });
    };

    const handleToggleVisibility = async (id, isPublic) => {
        const newStatus = isPublic ? 'private' : 'public';

        await axios.put(`${import.meta.env.VITE_APP_BACKEND_URL}/embedded-html/visibility/${id}`, {
            isPublic: newStatus,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }).then(() => {
            successToast(`Content is now ${newStatus}`);
            getEmbeddedHtml(); // Refresh list
        }).catch((err) => {
            failedToast(err.response?.data?.error || 'Failed to change visibility.');
        });
    };

    async function getEmbeddedHtml() {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/embedded-html`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }).then((res) => {
            setHtmlList(res.data);
        }).catch((err) => {
            failedToast(err.response?.data?.error || 'Failed to fetch content.');
        });
    }

    useEffect(() => {
        getEmbeddedHtml();
    }, [fetch]);

    return (
        <Container className="mt-10">
            <div className="flex justify-between items-center">
                <div>
                    <div className="mt-14 w-full text-4xl font-bold text-neutral-700 max-md:mt-10 max-md:max-w-full">
                        Embedded HTML Content
                    </div>
                    <div className="mt-4 w-full text-xl text-zinc-500 max-md:max-w-full">
                        Add and manage your embedded HTML content
                    </div>
                </div>
                <button
                    onClick={handleClickOpen}
                    className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-violet-800 border border-transparent hover:bg-violet-700 focus:outline-none focus:ring-offset-2 focus:ring-violet-700 rounded-2xl"
                >
                    Add HTML Content
                </button>
            </div>
            <Paper style={{ marginTop: '20px' }}>
                {htmlList.length > 0 ? (
                    htmlList?.map((html) => (
                        <Accordion key={html._id}>
                            <AccordionSummary expandIcon={<ArrowDownFromLine />}>
                                <Typography variant="h6">{html.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {editMode === html._id ? (
                                    <>
                                        <TextField
                                            margin="dense"
                                            label="Title"
                                            type="text"
                                            fullWidth
                                            variant="outlined"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                        <TextField
                                            margin="dense"
                                            label="HTML Content"
                                            type="text"
                                            fullWidth
                                            variant="outlined"
                                            value={descriptionHtml}
                                            onChange={(e) => setDescriptionHtml(e.target.value)}
                                            multiline
                                            rows={4}
                                        />
                                        <TextField
                                            margin="dense"
                                            label="Route Name"
                                            type="text"
                                            fullWidth
                                            variant="outlined"
                                            value={routeName}
                                            onChange={(e) => setRouteName(e.target.value)}
                                        />
                                        <div className="flex justify-end mt-4">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => handleEditHtml(html._id)}
                                            >
                                                Save
                                            </Button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <Typography dangerouslySetInnerHTML={{ __html: html.descriptionHtml }} />
                                        <Typography variant="caption" className="block mt-2">
                                            Route: {html.routeName}
                                        </Typography>
                                    </>
                                )}
                                <div className="flex justify-end mt-4">
                                    <IconButton
                                        color="primary"
                                        onClick={() => {
                                            setEditMode(html._id);
                                            setTitle(html.title);
                                            setDescriptionHtml(html.descriptionHtml);
                                            setRouteName(html.routeName);
                                        }}
                                    >
                                        <Edit />
                                    </IconButton>
                                    <IconButton
                                        color="secondary"
                                        onClick={() => handleDeleteHtml(html._id)}
                                    >
                                        <Trash />
                                    </IconButton>
                                    <Button
                                        variant="outlined"
                                        color={html.isPublic === 'public' ? 'success' : 'error'}
                                        onClick={() => handleToggleVisibility(html._id, html.isPublic)}
                                    >
                                        {!html.isPrivate ? 'Make Private' : 'Make Public'}
                                    </Button>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    ))
                ) : (
                    <div className="flex justify-center items-center text-xl font-light pb-10 mt-20">
                        No embedded HTML content available.
                    </div>
                )}
            </Paper>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add New HTML Content</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="HTML Content"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={descriptionHtml}
                        onChange={(e) => setDescriptionHtml(e.target.value)}
                        multiline
                        rows={4}
                    />
                    <TextField
                        margin="dense"
                        label="Route Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={routeName}
                        onChange={(e) => setRouteName(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAddHtml} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Notes;
