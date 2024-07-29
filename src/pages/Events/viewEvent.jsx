import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { failedToast, successToast } from '../../utils/toastNotifications';

export default function ViewEvent({ open, setOpen, details }) {
    const token = useSelector(state => state.profile.jwt);

    const eventDetails = [
        {
            title: 'Event Name',
            value: details.name
        },
        {
            title: 'Event Description',
            value: details.description
        },
        {
            title: 'Start Date',
            value: details.startDate
        },
        {
            title: 'End Date',
            value: details.endDate
        },
        {
            title: 'Event Type',
            value: details.eventType
        },
    ]

    const handleClose = () => {
        setOpen(false);
    };

    const attendEvent = async () => {
        await axios.patch(`${import.meta.env.VITE_APP_BACKEND_URL}/events?id=${details._id}`, {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(() => {
            successToast("You are Marked as Attendee");
            setOpen(!open)
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
                        {"Event Details"}
                    </p>
                    {
                        details.attending && <p className='text-sm'>{"You are already attending this event"}</p>
                    }
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div>
                            {
                                eventDetails.map((Item) => (
                                    <div key={Item.value}>
                                        <div className="w-full mt-5 font-semibold">{Item.title}</div>
                                        <p style={{ border: "1px solid #AAAAAA" }} className="justify-center items-start px-5 py-2 mt-3 w-full text-base tracking-wider rounded-xl border border-solid outline-none text-black bg-zinc-300 border-stone-300" placeholder='i.e. Mobile App Development'>{Item.value}</p>
                                    </div>
                                ))
                            }
                            {
                                details.eventType === 'InPerson' ? <>
                                    <div className="w-full mt-5 font-semibold">Address</div>
                                    <p style={{ border: "1px solid #AAAAAA" }} className="justify-center items-start px-5 py-2 mt-3 w-full text-base tracking-wider rounded-xl border border-solid outline-none text-black bg-zinc-300 border-stone-300" placeholder='i.e. Mobile App Development'>{details.address}</p>
                                </> : <>
                                    <div className="w-full mt-5 font-semibold">Joining Link</div>
                                    <p style={{ border: "1px solid #AAAAAA" }} className="justify-center items-start px-5 py-2 mt-3 w-full text-base tracking-wider rounded-xl border border-solid outline-none text-black bg-zinc-300 border-stone-300" placeholder='i.e. Mobile App Development'>{details.joiningLink}</p>
                                </>
                            } </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <div className='w-[290px] md:w-[400px] mb-3'>
                        <div className='mx-4'>
                            <div className="flex w-full justify-between">
                                <button onClick={attendEvent} className={`w-[170px] px-5 py-2 rounded-xl text-center text-white bg-[#4C1DBE] ${details.attending ? 'cursor-not-allowed opacity-30' : 'pointer'}`} disabled={details.attending}>Attend Events</button>
                                <button onClick={handleClose} className='w-[160px] px-10 py-2 rounded-xl text-center text-black bg-[#CCCCCC]'>Cancel</button>
                            </div>
                        </div>
                    </div>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
