import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MoveRight } from 'lucide-react';
import { Image } from 'lucide-react';
import { Video } from 'lucide-react';
import { X } from 'lucide-react';
import axios from 'axios';
import { failedToast, successToast } from '../../utils/toastNotifications';
import { CircularProgress } from '@mui/material';

export default function CreatePostDialog({ open, setOpen, fetchAgain, setFetchAgain }) {
    const fileInputRef = React.useRef(null);
    const [uploadType, setUploadType] = React.useState(null);
    const [file, setFile] = React.useState(null)
    const [text, setText] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setUploadType(null);
        setText('');
        setFile(null);
        setLoading(false);
    };

    const handleUploadClick = (type) => {
        setUploadType(type);
        setFile(null);
        setTimeout(() => {
            fileInputRef.current.click(); // Trigger the file input click
        }, 240)
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFile(file)
            event.target.value = null;
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('text', text);
            formData.append('isImage', uploadType === 'image' ? 'true' : 'false');
            formData.append('isVideo', uploadType !== 'image' ? 'true' : 'false');

            try {
                await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/post/upload`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true,
                });
                successToast("Post Uploaded Successfully");
                setFetchAgain(!fetchAgain)
                handleClose();
            } catch (error) {
                console.error('Error uploading file:', error);
                alert('Error uploading file');
                setLoading(false);
            }
        } else {
            if (!text) {
                return failedToast("Post Cant be empty");
            }
            try {
                await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/post`, {
                    text: text
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                });
                successToast("Post Uploaded Successfully");
                setFetchAgain(!fetchAgain)
                handleClose();
            } catch (error) {
                console.error('Error uploading file:', error);
                alert('Error uploading file');
                setLoading(false);
            }
        }
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Create New Post"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div className="flex flex-col w-[300px] md:w-[460px] mx-auto">
                            <div className="w-full">
                                <textarea
                                    style={{ border: "2px solid #ccc" }}
                                    onChange={(e) => { setText(e.target.value) }}
                                    value={text}
                                    className="outline-none rounded-md text-black px-3 py-4 text-md max-w-[460px] w-full resize-none"
                                    rows={10}
                                ></textarea>
                            </div>
                        </div>
                        <input
                            type="file"
                            accept={uploadType === 'image' ? 'image/*' : 'video/*'}
                            ref={fileInputRef}
                            style={{ display: 'none' }} // Hide the input
                            onChange={handleFileChange}
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <div className='w-full flex justify-between ml-4 items-center'>
                        <div className='flex rounded-2xl w-full'>
                            {
                                !file ? <>
                                    <Image
                                        className='cursor-pointer mr-6'
                                        onClick={() => handleUploadClick('image')}
                                    />
                                    <Video
                                        className='cursor-pointer'
                                        onClick={() => handleUploadClick('video')}
                                    />
                                </> : <>
                                    <div className='flex'>
                                        <p>{file.name.slice(0, 20)}</p>
                                        <X className='p-1 ml-2 cursor-pointer' onClick={() => { setFile(null) }} />
                                    </div>
                                </>
                            }
                        </div>
                        <div className="flex flex-col justify-center max-w-[135px] w-full">
                            <div className="flex justify-center items-center px-4 py-4 w-full bg-violet-800 rounded-xl border border-solid border-stone-300 cursor-pointer hover:bg-opacity-70">
                                <p onClick={handleSubmit} className="text-white font-semibold text-md inline text-lg">Post <MoveRight className="text-white inline ml-2 w-[20px]" /></p>
                            </div>
                        </div>
                    </div>
                </DialogActions>
                {
                    loading && <CircularProgress className='absolute' style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
                }
            </Dialog>
        </React.Fragment>
    );
}
