import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { successToast } from '../../utils/toastNotifications';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function CreateFolderImageDialog({ open, setOpen, folderId, setFetchAgain }) {
    const [name, setName] = React.useState('');
    const [profilePhoto, setProfilePhoto] = React.useState(null);
    const token = useSelector(state => state.profile.jwt);
    const fileInputRef = React.useRef(null);

    const handlePhotoChange = (event) => {
        setProfilePhoto(event.target.files[0]);
    };

    const handlePhotoClick = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('file', profilePhoto);
        formData.append('folderId', folderId);
        try {
            await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/groups-folders/images`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            }).then(() => {
                successToast("Folder Created Successfully");
                setFetchAgain(true)
                handleClose();
            })
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };



    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    sx: {
                        backgroundColor: '#E0E0E0'
                    }
                }}
            >
                <DialogTitle id="alert-dialog-title">
                    <p className='font-semibold'>
                        {"Create Folder"}
                    </p>
                    <div className='mx-3 my-2' style={{ borderBottom: "2px solid #ccc" }}></div>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div className="flex flex-col text-sm leading-4 w-full text-neutral-500">
                        </div>
                    </DialogContentText>
                    <div
                        className="w-full border border-solid aspect-[9.09] max-w-[447px] stroke-[1px] bg-[#AAAAAA] bg-opacity-40 rounded-2xl px-3 py-3 cursor-pointer"
                        onClick={handlePhotoClick}
                    >
                        <div className="flex gap-2 text-lg font-bold leading-4 text-violet-800 whitespace-nowrap">
                            <img
                                loading="lazy"
                                src={profilePhoto ? URL.createObjectURL(profilePhoto) : "https://cdn.builder.io/api/v1/image/assets/TEMP/92a2157aee4e429aae8e4dbeb9e67d66034defda4c489409e9a2e3627dc8db0e?"}
                                className="shrink-0 aspect-square w-[23px]"
                                alt="Profile"
                            />
                            <div className="my-auto text-[17px] ml-0">Images</div>
                        </div>
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className="hidden"
                        ref={fileInputRef}
                    />
                </DialogContent>
                <DialogActions>
                    <div className='w-[290px] md:w-[400px] mb-3'>
                        <div className='mx-3 my-2 mb-5' style={{ borderBottom: "2px solid #ccc" }}></div>
                        <div className='mx-4'>
                            <div className="flex w-full justify-between">
                                <button onClick={handleClose} className='w-[140px] px-10 py-2 rounded-xl text-center text-black bg-[#CCCCCC]'>Cancel</button>
                                <button onClick={handleSubmit} className='w-[140px] px-10 py-2 rounded-xl text-center text-white bg-[#4C1DBE]'>Save</button>
                            </div>
                        </div>
                    </div>
                </DialogActions>

            </Dialog>
        </React.Fragment>
    );
}
