import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { failedToast, successToast } from '../../utils/toastNotifications';

export default function CreateCourseDialog({ open, setOpen, groupId }) {
    const [courseTitle, setCourseTitle] = React.useState('')
    const token = useSelector(state=>state.profile.jwt);

    const handleClose = () => {
        setOpen(false);
    };

    const addCourse = async () => {
        await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/courses?groupId=${groupId}`, {
            title: courseTitle
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(() => {
            successToast("Course Created Successfully")
            handleClose();
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

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
                        {"Add New Course"}
                    </p>
                    {/* <div className='mx-3 my-2' style={{ borderBottom: "2px solid #ccc" }}></div> */}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div className="w-full font-semibold">Course Title</div>
                        <input onChange={(event) => { setCourseTitle(event.target.value) }} value={courseTitle} style={{ border: "1px solid #AAAAAA" }} type="text" name="" id="" className="justify-center items-start px-5 py-2 mt-3 w-full text-base tracking-wider rounded-xl border border-solid outline-none text-black bg-zinc-300 border-stone-300" placeholder='i.e. Mobile App Development' />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <div className='w-[290px] md:w-[400px] mb-3'>
                        <div className='mx-4'>
                            <div className="flex w-full justify-between">
                                <button onClick={addCourse} className='w-[170px] px-5 py-2 rounded-xl text-center text-white bg-[#4C1DBE]'>Add Course</button>
                                <button onClick={handleClose} className='w-[160px] px-10 py-2 rounded-xl text-center text-black bg-[#CCCCCC]'>Cancel</button>
                            </div>
                        </div>
                    </div>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
