import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ArrowRight } from 'lucide-react';

export default function NotificationsDialog({ open, setOpen, notifications }) {
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
                        {"Notifications"}
                    </p>
                    <div className='mx-3 my-2' style={{ borderBottom: "2px solid #ccc" }}></div>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div className="flex flex-col text-sm leading-4 w-full text-neutral-500">
                            {
                                notifications.map((Item) => (
                                    <div key={Item.message} className="flex gap-2 px-3 cursor-pointer hover:text-black">
                                        <ArrowRight />
                                        <div className="my-auto">{Item.message}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <div className='w-[290px] md:w-[400px] mb-3'>
                        <div className='mx-3 my-2 mb-5' style={{ borderBottom: "2px solid #ccc" }}></div>
                    </div>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
