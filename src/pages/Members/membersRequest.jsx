import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { failedToast, successToast } from '../../utils/toastNotifications';
import professionalPicture from '../../assets/professionalPicture.jpeg'
import { useNavigate } from 'react-router-dom';

export default function MembersRequests() {
    const Navigate = useNavigate();
    const token = useSelector(state => state.profile.jwt);
    const [data, setData] = useState([])
    const [fetchAgain, setFetchAgain] = useState(false)
    const [loading, setLoading] = useState(true);

    async function getPendingFriendsList() {
        setLoading(true);
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/friends/not-accepted`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setData(Item.data.friends);
            console.log(Item.data.friends);
            setLoading(false);
        }).catch((err) => {
            setLoading(false);
            return failedToast(err.response.data.error);
        });
    }
    useEffect(() => {
        getPendingFriendsList();
    }, [fetchAgain])

    const addFriend = async (owner, friendId) => {
        await axios.patch(`${import.meta.env.VITE_APP_BACKEND_URL}/friends`, {
            owner: owner,
            friendId: friendId
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(() => {
            setFetchAgain(!fetchAgain);
            successToast("Friend Request Accepted")
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    const declineFriendRequest = async (owner, friendId) => {
        await axios.delete(`${import.meta.env.VITE_APP_BACKEND_URL}/friends?owner=${owner}&friendId=${friendId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(() => {
            setFetchAgain(!fetchAgain);
            successToast("Friend Request Rejected")
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    return (
        <div className="flex flex-col px-5 mt-5 pb-20">
            <div className="mt-12 w-full text-4xl font-bold text-neutral-700 max-md:mt-10 max-md:max-w-full">
                Friend Request
            </div>
            <div className="mt-4 w-full text-xl text-zinc-500 max-md:max-w-full">
                See Who wanna Be Your Friend
            </div>
            <div>
                <div className='flex justify-center flex-wrap mt-5'>
                    {
                        loading && <div className='w-full'>
                            <p className='text-center'>Loading...</p>
                        </div>
                    }
                    {(!loading && !data.length) && <div className='w-full'>
                        <p className='text-center'>No New request Yet...</p>
                    </div>}
                    {
                        data?.map((Item) => (
                            <div key={Item.friendId} className="flex m-3  gap-5 justify-between items-center self-stretch p-2.5 rounded-2xl bg-neutral-200 min-w-[240px] w-[370px] h-[100px]">
                                <div onClick={()=>{Navigate(`/dashboard/profile/${Item.owner}`)}} className="flex gap-2.5 items-center self-stretch my-auto cursor-pointer">
                                    <img
                                        loading="lazy"
                                        src={Item.friendDetails.profilePicture ? Item.friendDetails.profilePicture : professionalPicture}
                                        className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[55px] w-[50px]"
                                    />
                                    <div className="flex flex-col self-stretch my-auto rounded-none w-[111px]">
                                        <div className="text-base leading-none text-zinc-800">
                                            {Item.friendDetails.firstName} {Item.friendDetails.lastName}
                                        </div>
                                        <div className="self-start text-xs text-violet-800">@{Item.friendDetails.firstName.toLowerCase().split(" ".slice(""))}</div>
                                    </div>
                                    <div className="flex gap-3.5 items-start self-stretch my-auto text-sm font-medium leading-none whitespace-nowrap">
                                        <div onClick={(e) => { 
                                            e.stopPropagation();
                                            addFriend(Item.owner, Item.friendId) 
                                        }} className="overflow-hidden hover:opacity-65 gap-3.5 self-stretch px-3.5 py-2.5 cursor-pointer text-white bg-violet-800 rounded-lg">
                                            Accept
                                        </div>
                                        <div onClick={(e) => { 
                                            e.stopPropagation();
                                            declineFriendRequest(Item.owner, Item.friendId) 
                                        }} className="overflow-hidden cursor-pointer hover:opacity-65 gap-3.5 self-stretch px-3.5 py-2.5 rounded-lg bg-stone-300 text-zinc-500">
                                            Decline
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

