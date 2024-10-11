import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { failedToast, successToast } from '../../utils/toastNotifications';
import { Fragment, useState } from 'react';

export default function AddModerator({ open, setOpen }) {
    const token = useSelector(state => state.profile.jwt);
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [recoveryEmail, setRecoveryEmail] = useState("");
    const [isAdmin, setIsAdmin] = useState(true)

    const handleClose = () => {
        setOpen(false);
        setFName('')
        setLName('')
        setEmail('')
        setPassword('')
        setRecoveryEmail('')
        setIsAdmin(true)
    };

    const addModerator = async () => {
        await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/auth/moderator`, {
            firstName: fname,
            lastName: lname,
            email: email,
            password: password,
            recoveryEmail: recoveryEmail,
            isAdmin: isAdmin
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(() => {
            successToast("Moderator Added Successfully")
            handleClose();
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    return (
        <Fragment>
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
                        {"Add New Moderator"}
                    </p>
                    {/* <div className='mx-3 my-2' style={{ borderBottom: "2px solid #ccc" }}></div> */}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div className="w-full font-semibold">First Name</div>
                        <input onChange={(event) => { setFName(event.target.value) }} value={fname} style={{ border: "1px solid #AAAAAA" }} type="text" name="" id="" className="justify-center items-start px-5 py-2 mt-3 w-full text-base tracking-wider rounded-xl border border-solid outline-none text-black bg-zinc-300 border-stone-300" placeholder='i.e. John' />
                        <div className="w-full font-semibold mt-4">Last Name</div>
                        <input onChange={(event) => { setLName(event.target.value) }} value={lname} style={{ border: "1px solid #AAAAAA" }} type="text" name="" id="" className="justify-center items-start px-5 py-2 mt-3 w-full text-base tracking-wider rounded-xl border border-solid outline-none text-black bg-zinc-300 border-stone-300" placeholder='i.e. John' />
                        <div className="w-full font-semibold mt-4">Email</div>
                        <input onChange={(event) => { setEmail(event.target.value) }} value={email} style={{ border: "1px solid #AAAAAA" }} type="text" name="" id="" className="justify-center items-start px-5 py-2 mt-3 w-full text-base tracking-wider rounded-xl border border-solid outline-none text-black bg-zinc-300 border-stone-300" placeholder='i.e. John' />
                        <div className="w-full font-semibold mt-4">Password</div>
                        <input onChange={(event) => { setPassword(event.target.value) }} value={password} style={{ border: "1px solid #AAAAAA" }} type="password" name="" id="" className="justify-center items-start px-5 py-2 mt-3 w-full text-base tracking-wider rounded-xl border border-solid outline-none text-black bg-zinc-300 border-stone-300" placeholder='i.e. John' />
                        <div className="w-full font-semibold mt-4">Recovery Email</div>
                        <input onChange={(event) => { setRecoveryEmail(event.target.value) }} value={recoveryEmail} style={{ border: "1px solid #AAAAAA" }} type="text" name="" id="" className="justify-center items-start px-5 py-2 mt-3 w-full text-base tracking-wider rounded-xl border border-solid outline-none text-black bg-zinc-300 border-stone-300" placeholder='i.e. John' />
                        <div className="w-full font-semibold mt-4">Type</div>
                        <select onChange={(e) => {
                            if (e.target.value == 'Admin') {
                                setIsAdmin(true)
                            } else {
                                setIsAdmin(false)
                            }
                        }} style={{ border: "1px solid #AAAAAA" }} type="text" name="" id="" className="justify-center items-start px-5 py-2 mt-3 w-full text-base tracking-wider rounded-xl border border-solid outline-none text-black bg-zinc-300 border-stone-300">
                            <option value="Admin">Admin</option>
                            <option value="Manager">Manager</option>
                        </select>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <div className='w-[290px] md:w-[400px] mb-3'>
                        <div className='mx-4'>
                            <div className="flex w-full justify-between">
                                <button onClick={addModerator} className='w-[170px] px-5 py-2 rounded-xl text-center text-white bg-[#4C1DBE]'>Add Moderator</button>
                                <button onClick={handleClose} className='w-[160px] px-10 py-2 rounded-xl text-center text-black bg-[#CCCCCC]'>Cancel</button>
                            </div>
                        </div>
                    </div>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}