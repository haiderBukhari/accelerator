import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import professionalPicture from '../../assets/professionalPicture.jpeg';
import { useSelector } from 'react-redux';
import { SendHorizonal } from 'lucide-react';
import { socket } from '../../socket'; 
import { failedToast } from '../../utils/toastNotifications';
import axios from 'axios';

export default function SendPost({ open, setOpen, id }) {
    const [selectedUser, setSelectedUser] = React.useState([]);
    const [isConnected, setIsConnected] = React.useState(socket.connected);
    const token = useSelector(state => state.profile.jwt);
    const [userList, setUserList] = React.useState([])

    async function getFriends() {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/chat/friends`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setUserList(Item.data);
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }
    React.useEffect(() => {
        getFriends();
    }, [])

    React.useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }
        socket.on('connect', onConnect);
        return () => {
            socket.disconnect()
        }
    }, [])

    const handleClose = () => {
        setOpen(false);
    };

    const sendMessage = () => {
        selectedUser.map((user) => {
            socket.emit('send_message', { message: `/dashboard/shared/post?id=${id}`, id: user })
        })
        handleClose();
    }
   
    const handleSelectUser = (userId) => {
        setSelectedUser((prevSelectedUsers) => {
            if (prevSelectedUsers.includes(userId)) {
                return prevSelectedUsers.filter(id => id !== userId);
            } else {
                return [...prevSelectedUsers, userId];
            }
        });
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
                    <p className='font-semibold mb-3'>
                        {`Send Post ot Your Friends`}
                    </p>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div className='flex flex-col'>
                            {
                                userList?.map((Item) => (
                                    <div className='flex items-center gap-5' key={Item.friendId}>
                                        <input 
                                            type="checkbox" 
                                            checked={selectedUser.includes(Item.friendId)} 
                                            onChange={() => handleSelectUser(Item.friendId)} 
                                        />
                                        <img className='w-[40px] h-[40px] rounded-full mr-5' src={Item.profilePicture ? Item.profilePicture : professionalPicture} alt="" />
                                        <div className="w-full mr-5 font-semibold">{Item.firstName} {Item.lastName}</div>
                                    </div>
                                ))
                            }
                        </div>

                        <div onClick={sendMessage} className='mt-7 flex justify-end cursor-pointer'>
                            <SendHorizonal className='text-blue'/>
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
