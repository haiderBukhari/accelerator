import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MoveRight } from 'lucide-react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { failedToast, successToast } from '../../utils/toastNotifications';
import professionalPicture from '../../assets/professionalPicture.jpeg'
import { formatDistanceToNow } from 'date-fns';

export default function CommentsDialog({ open, setOpen, selectedPostId, setSelectedPostId }) {
    const [comment, setComment] = React.useState('')
    const [allComment, setAllComments] = React.useState([])
    const token = useSelector(state => state.profile.jwt);
    const userData = useSelector(state => state.profile);
    const [fetchAgain, setFetchAgain] = React.useState(false)
    const [commentId, setCommentId] = React.useState('')
    const [replierName, setReplierName] = React.useState('')

    const timeElapsed = (dateString) => {
        const date = new Date(dateString);
        return formatDistanceToNow(date, { addSuffix: true });
    };

    async function getComments() {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/comments?id=${selectedPostId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setAllComments(Item.data.comments)
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    async function createComment() {
        await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/comments`, {
            postId: selectedPostId,
            comment: comment,
            owner: userData.id,
            name: userData.firstName + ' ' + userData.lastName,
            userImage: userData.profilePicture
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(() => {
            successToast("Comment Added Successfully")
            handleClose();
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }


    async function createReply(comment1) {
        await axios.patch(`${import.meta.env.VITE_APP_BACKEND_URL}/comments`, {
            commentId: commentId,
            comment: comment1,
            owner: userData.id,
            name: userData.firstName + ' ' + userData.lastName,
            userImage: userData.profilePicture
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(() => {
            successToast("Reply Added Successfully")
            setComment('')
            setReplierName('')
            handleClose();
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }


    React.useEffect(() => {
        if (selectedPostId) {
            getComments();
        }
    }, [selectedPostId])


    const handleClose = () => {
        setComment('');
        setAllComments([]);
        setOpen(false);
        setSelectedPostId('');
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
                    {"Comments"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div className="flex flex-col w-full ">
                            {
                                allComment?.map((Item) => (
                                    <div key={Item._id} className='mb-10'>
                                        <div className="flex gap-5 justify-between w-full">
                                            <div className="flex gap-3.5 justify-between">
                                                <img
                                                    loading="lazy"
                                                    src={Item.userImage ? Item.userImage : professionalPicture}
                                                    className="shrink-0 border-violet-800 border-solid aspect-square border-[3px] w-full max-w-[52px] max-md:max-w-[45px] max-md:max-h-[45px] rounded-xl "
                                                />
                                                <div className="flex flex-col py-1 my-auto">
                                                    <div className="text-sm font-medium text-zinc-800">
                                                        {Item.name}
                                                    </div>
                                                    <div className="mt-2 text-xs text-neutral-500">{timeElapsed(Item.createdAt)}</div>
                                                </div>
                                            </div>
                                            <div className="flex gap-2.5 justify-between my-auto">
                                                <img
                                                    onClick={() => {
                                                        setComment('')
                                                        setReplierName('@' + Item.name.split(' ')[0].toLowerCase() + ' ')
                                                        setComment('@' + Item.name.split(' ')[0].toLowerCase() + ' ')
                                                        setCommentId(Item._id)
                                                    }}
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e16ed1c94157a98618f34bd1679fd26114c350e59399e218b67a768b69834d60?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                    className="shrink-0 aspect-square w-[25px] cursor-pointer"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-4 w-full text-sm text-zinc-800">
                                            {Item.comment}
                                        </div>
                                        {
                                            Item.replies.length !== 0 ? <div>
                                                <div className="flex gap-3 items-start mt-3">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f8842a9918c48d8583165e8a02e00179c91029dbeb0d742db0b78724b679f55?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                        className="shrink-0 self-start aspect-[0.36] w-[17px]"
                                                    />
                                                    <div>
                                                        {
                                                            Item.replies.map((reply) => (
                                                                <div key={reply._id}>
                                                                    <div className="flex flex-auto gap-5 justify-between self-end px-px mt-6">
                                                                        <div className="flex gap-2.5">
                                                                            <img
                                                                                loading="lazy"
                                                                                src={reply.userImage ? reply.userImage : professionalPicture}
                                                                                className="shrink-0 border-violet-800 border-solid aspect-square border-[3px] w-full max-w-[42px] max-md:max-w-[40px] max-md:max-h-[40px] rounded-xl"
                                                                            />
                                                                            <div className="flex flex-col py-1 my-auto">
                                                                                <div className="text-xs font-medium text-zinc-800">
                                                                                    {reply.name}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex gap-2.5 justify-between my-auto">
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-4 w-full text-sm text-zinc-800">
                                                                        {reply.comment}
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div> : <div></div>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <div className="flex gap-5 py-4 pr-6 pl-3 rounded-xl border border-solid bg-neutral-200 border-stone-300 w-full">
                        <input onChange={(e) => {
                            if (e.target.value == replierName.trim()) {
                                setComment('')
                                setReplierName('')
                                setCommentId('')
                            } else {
                                setComment(e.target.value)
                            }
                        }} className="flex-auto my-auto text-sm text-neutral-500 bg-transparent outline-none" value={comment} type="text" name="" id="" placeholder="Write a comment" />
                    </div>
                    <div className="flex flex-col justify-center max-w-[75px]">
                        <div onClick={() => {
                            if (replierName) {
                                const newComment = comment.replace(replierName, '');
                                createReply(newComment)
                            } else {
                                createComment();
                            }
                        }} className="flex justify-center items-center px-6 py-3 w-full bg-violet-800 rounded-xl border border-solid border-stone-300 hover:bg-[#FA5300] cursor-pointer">
                            <MoveRight className="text-white" />
                        </div>
                    </div>

                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
