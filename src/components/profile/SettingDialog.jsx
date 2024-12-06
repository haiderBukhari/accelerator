import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditProfile from './EditProfile';
import { CircularProgress } from '@mui/material';
import NotificationSettings from './NotificationSetting';
import { AppearanceSettings } from './Appearance';
import { FeedbackSettings } from './Feedback';
import { LogOut } from 'lucide-react';
import { removeUserDetails } from '../../features/profile';
import { successToast } from '../../utils/toastNotifications';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function SettingDialog({ open, setOpen }) {
    const [loading, setLoading] = React.useState(false);
    const [clickedSave, setClickedSave] = React.useState(false);
    const [selectedContent, setSelectedContent] = React.useState(-1);
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleClose = () => {
        setSelectedContent(-1)
        setClickedSave(false)
        setOpen(false);
    };
    
    const handleSubComponentClose = () => {
        setSelectedContent(-1)
        setClickedSave(false)
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
                        {"Settings"}
                    </p>
                    <div className='mx-3 my-2' style={{ borderBottom: "2px solid #ccc" }}></div>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {
                            selectedContent === -1 && <div className="flex flex-col text-sm leading-4 max-w-[236px] text-neutral-500">
                                <div className="flex gap-5 px-3 cursor-pointer hover:text-black">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4d49297033fbc0aa63265a233278315ae2eface712f9079efb8786f479ab406?"
                                        className="shrink-0 aspect-square w-[20px]"
                                    />
                                    <div className="my-auto">Personal Settings</div>
                                </div>
                                <div onClick={() => { setSelectedContent(2) }} className="flex gap-5 px-3 cursor-pointer hover:text-black mt-7">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/48ef1bf1c37ac3d59ebe2ed055fccb8f7bf4e053dea0d61d4e5ca32c00aad5c6?"
                                        className="shrink-0 aspect-square w-[20px]"
                                    />
                                    <div className="my-auto">Edit Profile</div>
                                </div>
                                <div onClick={() => { setSelectedContent(3) }} className="flex gap-5 px-3 cursor-pointer hover:text-black mt-7 whitespace-nowrap">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7539e379e610842937703fd2a7241d8573c557bb8002614fdc9ae897120ac117?"
                                        className="shrink-0 aspect-square w-[20px]"
                                    />
                                    <div className="my-auto">Notifications</div>
                                </div>
                                <div onClick={() => { setSelectedContent(4) }} className="flex gap-5 px-3 cursor-pointer hover:text-black mt-7">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d1ed8ad1a558aee4cc3fa462bdea2f769416110e414bb49d8af84c1cde9575f?"
                                        className="shrink-0 aspect-square w-[20px]"
                                    />
                                    <div>Appearance & Sounds</div>
                                </div>
                                <div onClick={()=>{setSelectedContent(5)}} className="flex gap-5 px-3 cursor-pointer hover:text-black mt-7">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f794a07e758ad271661c0ba41f6e318af16842e9b2bc7776bd454b18dfa34ef3?"
                                        className="shrink-0 aspect-square w-[20px]"
                                    />
                                    <div className="my-auto">Feedback & Info</div>
                                </div>
                                <div className="flex gap-5 px-3 cursor-pointer hover:text-black mt-7">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/207fe98eb48912463505a98e26010a5d895a7b8932265a153eefd37668ed5eb9?"
                                        className="shrink-0 aspect-square w-[20px]"
                                    />
                                    <div className="my-auto">Download The App</div>
                                </div>
                                {/* <div className="flex gap-5 px-3 cursor-pointer hover:text-black mt-7">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d99d0758f6245e670a1d318928ec2b7eb005e78b4d7e0f74716dd96e96524e7?"
                                        className="shrink-0 aspect-square w-[20px]"
                                    />
                                    <div className="my-auto">Invite Friends</div>
                                </div> */}
                                <div onClick={() => { dispatch(removeUserDetails()); Navigate('/'); successToast("Successfully Loged out") }} className="flex gap-5 px-3 cursor-pointer hover:text-black mt-7">
                                <LogOut  className="w-[20px]" />
                                <div className="my-auto">LogOut</div>
                                </div>
                            </div>
                        }
                        {
                            selectedContent === 2 && <EditProfile open={open} handleClose={handleSubComponentClose} loading={loading} setLoading={setLoading} clickedSave={clickedSave} setSelectedContent={setSelectedContent}/>
                        }
                        {
                            selectedContent === 4 && <AppearanceSettings open={open} handleClose={handleSubComponentClose} loading={loading} setLoading={setLoading} clickedSave={clickedSave} setSelectedContent={setSelectedContent}/>
                        }
                        {
                            selectedContent === 5 && <FeedbackSettings open={open} handleClose={handleSubComponentClose} loading={loading} setLoading={setLoading} clickedSave={clickedSave} setSelectedContent={setSelectedContent}/>
                        }
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <div className='w-[290px] md:w-[400px] mb-3'>
                        <div className='mx-3 my-2 mb-5' style={{ borderBottom: "2px solid #ccc" }}></div>
                        {
                            selectedContent === 2 &&  <div className='mx-4'>
                            <div className="flex w-full justify-between">
                                <button onClick={handleClose} className='w-[140px] px-10 py-2 rounded-xl text-center text-black bg-[#CCCCCC]'>Cancel</button>
                                <button onClick={()=>{setClickedSave(true);}} className='w-[140px] px-10 py-2 rounded-xl text-center text-white bg-[#4C1DBE]'>Save</button>
                            </div>
                        </div>
                        }
                    </div>
                </DialogActions>
            </Dialog>
            {
                loading && <CircularProgress className='absolute' style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
            }
        </React.Fragment>
    );
}
