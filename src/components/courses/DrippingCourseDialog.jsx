import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { failedToast, successToast } from '../../utils/toastNotifications';

export default function DrippingCourseDialog({ open, setOpen, module, setSelectedModules }) {
    const token = useSelector(state=>state.profile.jwt);
    const [modules, setModules] = React.useState([])

    const handleClose = () => {
        setOpen(false);
    };

    React.useEffect(()=> {
        const modulesTimeLine = module.map((Item) => {
            return {...Item, unLockDays: Item.unLockDays ? Item.unLockDays : 0}
        })
        setModules(modulesTimeLine)
    }, [module])

    const addCourse = async () => {
        await axios.patch(`${import.meta.env.VITE_APP_BACKEND_URL}/courses/modules`, {
            updates: modules
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(() => {
            successToast("Dripping Timeline Updated!")
            handleClose();
            setSelectedModules([])
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
                        {"Update Dripping"}
                    </p>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div className="w-full font-semibold">Course Title</div>
                        <div className='flex flex-col gap-1'>
                            {
                                modules.length && modules.map((module, index) => (
                                    <div className='flex w-full items-center' key={module?.name}>
                                        <label className='w-[200px]' htmlFor={module.id}>{module?.name}</label>
                                        <input onChange={(event) => {
                                             setModules(prevState => {
                                                 const newModules = [...prevState];
                                                 newModules[index].unLockDays = event.target.value;
                                                 return newModules;
                                             })
                                        }} value={module.unLockDays} style={{ border: "1px solid #AAAAAA" }} type="number" name="" id="" className="justify-center items-start px-5 py-2 mt-3 w-full text-base tracking-wider rounded-xl border border-solid outline-none text-black bg-zinc-300 border-stone-300" placeholder={module.unLockDays} />
                                    </div>
                                ))
                            }
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <div className='w-[290px] md:w-[400px] mb-3'>
                        <div className='mx-4'>
                            <div className="flex w-full justify-between">
                                <button onClick={addCourse} className='w-[170px] px-5 py-2 rounded-xl text-center text-white bg-[#4C1DBE]'>Update Dripping</button>
                                <button onClick={handleClose} className='w-[160px] px-10 py-2 rounded-xl text-center text-black bg-[#CCCCCC]'>Cancel</button>
                            </div>
                        </div>
                    </div>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
