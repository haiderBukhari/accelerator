import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import professionalPicture from '../../assets/professionalPicture.jpeg'

export default function Attendees({ open, setOpen, attendees, name }) {
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
                        {`${name} Attendees Deatils`}
                    </p>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div className='flex flex-col'>
                            {
                                attendees?.map((Item, index) => (
                                    <div className='flex items-center gap-5' key={Item.value}>
                                        <p className='mr-3'>{index+1}</p>
                                        <img className='w-[40px] h-[40px] rounded-full mr-5' src={Item.profilePicture ? Item.profilePicture : professionalPicture} alt="" />
                                        <div className="w-full mr-5 font-semibold">{Item.firstName} {Item.lastName}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
