import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import defaultPic from '../../assets/professionalPicture.jpeg'
import { useSelector } from "react-redux";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { failedToast, successToast } from "../../utils/toastNotifications";
import { ChevronLeft, ThumbsUp } from 'lucide-react';
import CreateFolderDialog from "../../components/groups/createFolder";
import CreateFolderImageDialog from "../../components/groups/uploadImage";
import CreatePostDialog from "../../components/CreatePost";
import { Heart } from 'lucide-react';
import Courses from "../Courses";
import CommentsDialog from "../../components/comments";

export default function GroupsDetails() {
    const [selected, setSelected] = useState(1);
    const Navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [userData, setUserData] = useState({})
    const [userData1, setUserData1] = useState({})
    const token = useSelector(state => state.profile.jwt);
    const userId = useSelector(state => state.profile.id);
    const [posts, setPosts] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [selectedPostId, setSelectedPostId] = useState('')
    const [groupFolders, setGroupFolders] = useState([])
    const [displayFolder, setDisplayFolder] = useState(true)
    const [folderId, setFolderId] = useState("")
    const [folderImages, setFolderImage] = useState([])
    const [fetchAgain, setFetchAgain] = useState(false);
    const [joinedUsers, setJoinedUsers] = useState([])
    const [pendingUsers, setPendingUsers] = useState([])
    const [createPost, setCreatePost] = useState(false);
    const [data, setData] = useState([])

    const timeElapsed = (dateString) => {
        const date = new Date(dateString);
        return formatDistanceToNow(date, { addSuffix: true });
    };

    async function getGroupUsersData() {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/groups/allusers?groupId=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setJoinedUsers(Item.data.joinedUsers)
            setPendingUsers(Item.data.pendingUsers)
            // setUserData(Item.data.user);
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    const getGroupsFolders = async () => {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/groups-folders?groupId=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setGroupFolders(Item.data.folders);
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    useEffect(() => {
        if (fetchAgain) {
            getGroupsFolders();
            if (folderId) {
                getFolderImages(folderId);
            }
            setFetchAgain(false);
        }
    }, [fetchAgain])

    const getFolderImages = async (id) => {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/groups-folders/images?folderId=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setFolderImage(Item.data.folders);
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    async function getUserData() {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/auth/userData`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setUserData1(Item.data.user);
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    const handleGroupJoin = async () => {
        await axios.patch(`${import.meta.env.VITE_APP_BACKEND_URL}/groups`, {
            id: id
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            successToast(Item.data.message)
            setUserData(Item.data.group)
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    const togleGroup = async () => {
        await axios.patch(`${import.meta.env.VITE_APP_BACKEND_URL}/groups/joined-groups`, {
            groupId: id
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            successToast("Group Privacy Changed")
            getGroupData();
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    const joinGroup = async (userId) => {
        await axios.put(`${import.meta.env.VITE_APP_BACKEND_URL}/groups/joined-groups`, {
            groupId: id,
            userId: userId
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            getGroupUsersData();
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    const removeFromGroup = async (userId) => {
        await axios.delete(`${import.meta.env.VITE_APP_BACKEND_URL}/groups/joined-groups?groupId=${id}&userId=${userId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(() => {
            getGroupUsersData();
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    async function getGroupData() {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/groups/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setUserData(Item.data.details);
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    async function getPosts() {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/post?groupId=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setPosts(Item.data);
            setFetched(Item.data.length ? false : true)
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    useEffect(() => {
        getUserData();
        getGroupData();
        getPosts();
        getGroupsFolders();
        getGroupUsersData()
    }, [id])

    async function handleLike(id) {
        await axios.patch(`${import.meta.env.VITE_APP_BACKEND_URL}/post`, {
            id: id
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(() => {
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    return (
        <div className="flex flex-col mx-3">
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&"
                className="w-full max-w-auto mt-7"
            />
            <div className="flex z-10 flex-col pr-6 pl-16 mt-0 relative w-full max-md:px-5 max-md:max-w-full">
                <div className="relative">

                    <div style={{ top: "-90px", left: "0", transform: "translate(0, -10%" }} className="max-w-full w-[580px] absolute">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0 w-full">
                            <div className="flex flex-col w-full max-md:ml-0 max-md:w-full max-w-[229px]">
                                <img
                                    loading="lazy"
                                    src={userData?.groupImage}
                                    className="w-full rounded-full border-4 border-violet-800 border-solid aspect-square max-md:mt-7"
                                />
                            </div>
                            <div className="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow mt-36 max-md:mt-10 w-full">
                                    <div className="text-3xl font-bold text-neutral-700 w-full ">
                                        {userData?.name}
                                    </div>
                                    <div className="flex gap-5 mt-3.5 text-lg items-center">
                                        {
                                            !userData1.isAdmin && <ThumbsUp className="cursor-pointer" />
                                        }
                                        <div className="justify-center px-2.5 py-1.5 font-medium text-violet-800 rounded-md border border-violet-800 border-solid bg-blue-700 bg-opacity-20 w-[100px]">
                                            {userData?.likes} Likes
                                        </div>
                                        {
                                            !userData1?.isAdmin && (!userData?.joinedUsers?.includes(userId) && !userData?.pendingUsers?.includes(userId)) ? <div onClick={handleGroupJoin} className="justify-center px-5 py-1.5 text-white bg-violet-800 rounded-md border border-solid border-neutral-400 max-md:px-5 cursor-pointer ">
                                                Join Now
                                            </div> : !userData1?.isAdmin && (userData?.joinedUsers?.includes(userId)) ? <div onClick={handleGroupJoin} className="justify-center px-5 py-1.5 text-white bg-red-500 rounded-md border border-solid border-neutral-400 max-md:px-5 cursor-pointer ">
                                                Leave Group
                                            </div> : !userData1?.isAdmin && (userData?.pendingUsers?.includes(userId)) && <div onClick={handleGroupJoin} className="justify-center px-5 py-1.5 text-white bg-green-500 rounded-md border border-solid border-neutral-400 max-md:px-5 cursor-pointer">
                                                Request Sent To Admin
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-32"></div>
                <div className="flex gap-4 self-start mt-12 text-lg font-medium whitespace-nowrap text-neutral-500 max-md:flex-wrap max-md:mt-10">
                    <div onClick={() => setSelected(1)} className={`justify-center px-5 py-2 ${selected === 1 ? 'bg-violet-800 text-zinc-100' : 'bg-stone-300 text-black'} rounded-xl cursor-pointer`}>
                        Dashboard
                    </div>
                    <div onClick={() => setSelected(2)} className={`justify-center px-5 py-2 ${selected === 2 ? 'bg-violet-800 text-zinc-100' : 'bg-stone-300 text-black'} rounded-xl cursor-pointer`}>
                        Photos
                    </div>
                    <div onClick={() => setSelected(3)} className={`justify-center px-5 py-2 ${selected === 3 ? 'bg-violet-800 text-zinc-100' : 'bg-stone-300 text-black'} rounded-xl cursor-pointer`}>
                        Members
                    </div>
                    <div onClick={() => setSelected(4)} className={`justify-center px-5 py-2 ${selected === 4 ? 'bg-violet-800 text-zinc-100' : 'bg-stone-300 text-black'} rounded-xl cursor-pointer`}>
                        Courses
                    </div>
                </div>
                <div className="shrink-0 mt-5 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
                {
                    selected === 1 && <div className="my-10 max-md:max-w-full">

                        <div className="flex gap-5 max-md:flex-col max-md:gap-0 w-full">
                            <div className="flex flex-col max-md:ml-0 max-w-full md:max-w-[300px] w-full">
                                <div className="flex flex-col grow max-md:mt-5">
                                    <div className="flex flex-col px-5 py-9 text-base font-medium rounded-3xl border border-solid bg-neutral-200 border-neutral-400 text-neutral-500 w-full">
                                        <div className="text-xl font-semibold text-neutral-700">
                                            General Information
                                        </div>
                                        <div className="mt-6">Contact Info: {userData?.contactNumber}</div>
                                        <div className="mt-3">Email Address: {userData?.email}</div>
                                        <div className="mt-3">
                                            Talks About: {userData?.talksAbout || 'NA'}{" "}
                                        </div>
                                        <div className="mt-7 text-base font-semibold text-neutral-700">
                                            Description
                                        </div>
                                        <div className="mt-2 text-zinc-500">
                                            {userData?.description || 'NA'}
                                        </div>
                                        {
                                            userData1.isAdmin && <div onClick={togleGroup} className="justify-center px-5 py-1.5 text-white bg-red-500 rounded-md border border-solid border-neutral-400 max-md:px-5 cursor-pointer my-4 w-[180px]">
                                                {userData?.isPrivate ? 'Change to Public' : 'Change to Private'}
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col px-6 w-full rounded-3xl text-2xl text-center max-md:pl-5 max-md:max-w-full">
                                {
                                    userData?.joinedUsers?.includes(userId) && <div onClick={() => { setCreatePost(!createPost) }} className="flex flex-col md:flex-row gap-5 justify-between pl-5 w-full rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:flex-wrap max-md:max-w-full h-[200px] max-md:h-[170px] md:h-auto">
                                        <div className="flex gap-4 max-md:mt-5 my-auto text-base font-medium text-zinc-500">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 w-10 border-4 rounded-xl border-violet-800 border-solid aspect-square hidden md:block"
                                            />
                                            <div className="flex-auto my-auto cursor-pointer bg-opacity-80 text-[#8A8A8A]">Let’s make something new!</div>
                                        </div>
                                        <div className="flex flex-col justify-center self-end md:self-auto m-0 h-auto p-0 w-full max-w-[160px] max-md:max-w-[150px] py-2 md:py-4 mb-3 mr-2 md:mr-0 md:mb-0 bg-[#4C1DBE] rounded-xl md:rounded-3xl border border-solid border-[#AAAAAA]">
                                            <div className="flex gap-0.5 justify-between px-4">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c6a5bfa10bfc829411928f0545a1d2f4e7be548a242a2f03a64730f289bb110?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                    className="shrink-0 aspect-square w-[20px]"
                                                />
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9928e221ff81dcf989ef8b7146178be0ddd02598d4bac98b3ccafb8a5bc31b37?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                    className="shrink-0 aspect-square w-[20px]"
                                                />
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/99a946cab8c72acff3b6467ffde7e90e4ede4b672a22273cb1a6a2a56cc84de5?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                    className="shrink-0 aspect-square w-[20px]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    fetched && <div className="flex flex-col px-6 pt-5 pb-7 mt-8 w-full rounded-3xl text-2xl text-center max-md:pl-5 max-md:max-w-full">
                                        No New Posts Yet
                                    </div>
                                }
                                {
                                    posts?.map((Item, index) => (
                                        <div key={Item.text ?? ''} className="flex flex-col px-5 md:px-6 pt-5 pb-7 mt-8 w-full rounded-3xl border border-solid bg-neutral-200 border-neutral-400  max-md:max-w-full">
                                            <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                                                <div onClick={() => { Navigate(`/dashboard/profile/${Item.userInfo._id}`) }} className="flex gap-2 md:gap-4 cursor-pointer">
                                                    <img
                                                        loading="lazy"
                                                        src={Item.userInfo.profilePicture ? Item.userInfo.profilePicture : defaultPic}
                                                        className="shrink-0 border-4 border-violet-800 border-solid aspect-square w-[45px] max-md:h-[45px] md:w-[60px] rounded-xl"
                                                    />
                                                    <div className="flex flex-col py-1 my-auto">
                                                        <div className="text-sm md:text-base font-medium text-zinc-800">
                                                            {Item.userInfo.firstName} {Item.userInfo.lastName}
                                                        </div>
                                                        <div className="mt-0 md:mt-2 text-xs text-neutral-500">{timeElapsed(Item.createdAt)}</div>
                                                    </div>
                                                </div>
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/17fb2d504a4a46adf611331825b24e3490f3ff0a7aa1ff0f0783d4da246b0be9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                    className="shrink-0 my-auto aspect-square w-[20px] md:w-[25px]"
                                                />
                                            </div>

                                            {
                                                Item.text && <div className="self-start mt-6 text-base text-[#2A2A2A] max-md:max-w-full">
                                                    {Item.text}
                                                </div>
                                            }
                                            <div className="mt-6 w-full border border-solid border-neutral-400 overflow-hidden rounded-xl">
                                                {
                                                    Item.imageUrl && <img
                                                        loading="lazy"
                                                        src={Item.imageUrl}
                                                        className="w-full h-full md:max-h-[300px] max-h-[120px]"
                                                    // style={{ aspectRatio: '1.63' }}
                                                    />
                                                }
                                                {
                                                    Item.videoUrl && <video className="mt-6" src={Item.videoUrl} controls />
                                                }
                                            </div>
                                            <div className="flex gap-5 justify-between px-px mt-6 w-full text-sm max-md:flex-wrap max-md:max-w-full">
                                                <div className="flex w-full flex-col justify-center text-neutral-400 max-md:max-w-full">
                                                    <button onClick={() => { setSelectedPostId(Item._id); setOpen2(!open2) }} className="justify-center text-start items-start px-3.5 py-3.5 rounded-xl border border-solid bg-neutral-300 border-neutral-400 max-md:pr-5 w-full hidden md:block">
                                                        Write a comment
                                                    </button>
                                                </div>
                                                <div className="flex max-w-[150px] md:max-w-[200px] justify-between w-full my-auto whitespace-nowrap text-neutral-400">
                                                    {
                                                        Item.likeBy?.includes(userId) ? <Heart onClick={() => {
                                                            setPosts(
                                                                posts.map((post) => {
                                                                    if (post._id === Item._id) {
                                                                        post.likes -= 1;
                                                                        post.likeBy = post.likeBy.filter((like) => like !== userId);
                                                                    }
                                                                    return post;
                                                                })
                                                            )
                                                            handleLike(Item._id)
                                                        }} className="cursor-pointer text-red-600" /> : <Heart onClick={() => {
                                                            setPosts(
                                                                posts.map((post) => {
                                                                    if (post._id === Item._id) {
                                                                        post.likes += 1;
                                                                        post.likeBy.push(userId);
                                                                    }
                                                                    return post;
                                                                })
                                                            )
                                                            handleLike(Item._id)
                                                        }} className="cursor-pointer" />
                                                    }
                                                    <div className="my-auto ml-[-10px]">{Item.likes}</div>
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/81b3988206ae45b69d451692ab183825d130156ed8d4f79341e2ae1d2c11b2ce?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                        className="shrink-0 aspect-square w-[25px]"
                                                    />
                                                    <div className="my-auto">{Item.comments}</div>
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc32947d0dc0dffaf5b54937d22a080004ed72c715c0b2d4d6a6def7314ff0f6?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                        className="shrink-0 aspect-square w-[25px]"
                                                    />
                                                    <div className="my-auto">{Item.shares}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                }
                {
                    selected === 2 && displayFolder && <div className="my-10 flex flex-col px-5 pt-8 text-xl rounded-3xl border border-solid bg-neutral-200 border-neutral-400 text-neutral-700">
                        <div className="flex justify-between items-center">
                            <div>
                                <div className="font-semibold max-md:max-w-full">Folder</div>
                                <div className="mt-4 text-base font-medium text-neutral-500 max-md:max-w-full">
                                    Folders Created by the members present in this Groups.
                                </div>
                            </div>
                            {
                                (userData1.isAdmin || userData.joinedUsers.includes(userId)) && <div onClick={() => { setOpen(true) }} className="justify-center px-5 py-1.5 text-white bg-red-500 rounded-md border border-solid border-neutral-400 max-md:px-5 cursor-pointer w-[180px] text-center">
                                    Create Folder
                                </div>
                            }
                        </div>
                        <div className="flex gap-2.5 self-center mt-9 max-md:flex-wrap">
                            {
                                groupFolders?.map((Item) => (
                                    <div onClick={() => { setDisplayFolder(false); setFolderId(Item._id); getFolderImages(Item._id) }} key={Item.folderImage} className="flex flex-col justify-center items-center my-4 w-[150px] cursor-pointer">
                                        <img
                                            loading="lazy"
                                            style={{ border: "1px solid #000" }}
                                            src={Item.folderImage}
                                            className="self-center border-2 border-solid aspect-square border-neutral-400 w-[150px]"
                                        />
                                        <div className="mt-1">{Item.name}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                }
                {
                    selected === 2 && !displayFolder && <div className="my-10 flex flex-col px-5 pt-8 text-xl rounded-3xl border border-solid bg-neutral-200 border-neutral-400 text-neutral-700">
                        <div className="mb-5 text-md cursor-pointer flex items-center" onClick={() => { setDisplayFolder(true) }}>
                            <ChevronLeft />
                            Go Back
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <div className="font-semibold max-md:max-w-full">Photos</div>
                                <div className="mt-4 text-base font-medium text-neutral-500 max-md:max-w-full">
                                    Photos uploading by the members present in this Groups.
                                </div>
                            </div>
                            {
                                userData.joinedUsers.includes(userId) && <div onClick={() => { setOpen1(true) }} className="justify-center px-5 py-1.5 text-white bg-red-500 rounded-md border border-solid border-neutral-400 max-md:px-5 cursor-pointer w-[180px] text-center">
                                    Upload Image
                                </div>
                            }
                        </div>
                        <div className="flex gap-2.5 self-center mt-9 max-md:flex-wrap">
                            {
                                folderImages?.map((Item) => (
                                    <div key={Item.image} className="flex flex-col justify-center items-center my-4 w-[150px] cursor-pointer">
                                        <img
                                            loading="lazy"
                                            style={{ border: "1px solid #000" }}
                                            src={Item.image}
                                            className="self-center border-2 border-solid aspect-square border-neutral-400 w-[150px]"
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                }
                {
                    selected === 3 && <div className="my-10 flex flex-col flex-wrap content-start">
                        <div className="px-5 w-full max-md:max-w-full">
                            {
                                (userData1.isAdmin || (userData1.isManager && userData?.joinedUsers?.includes(userId))) && <>
                                    <h1 className="text-2xl font-semibold">Pending Users</h1>
                                    <div className="flex gap-2 mt-4 max-md:flex-col max-md:gap-0 flex-wrap">
                                        {
                                            pendingUsers?.map((Item) => (
                                                <div onClick={() => { Navigate(`/dashboard/profile/${Item._id}`) }} key={Item._id} className="flex flex-col max-md:ml-0 max-md:w-full cursor-pointer relative my-10">
                                                    <div onClick={(e) => {
                                                        joinGroup(Item._id)
                                                        e.stopPropagation();
                                                    }} className="w-[100px] px-5 py-1.5 text-white bg-green-500 rounded-md border border-solid border-neutral-400 max-md:px-5 cursor-pointer absolute top-[-20px] right-[-20px]">Approve</div>
                                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                                            <img
                                                                loading="lazy"
                                                                src={Item.profilePicture ? Item.profilePicture : defaultPic}
                                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                                            />
                                                            <div className="flex flex-col my-auto">
                                                                <div className="text-lg text-neutral-900">{Item.name}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            ))
                                        }
                                    </div>
                                    {
                                        !pendingUsers.length && <div className="text-center">
                                            <h1>There are no pending Users in this Group</h1>
                                        </div>
                                    }
                                </>
                            }
                            <h1 className="text-2xl font-semibold mt-10">Joined Users</h1>
                            <div className="flex gap-2 mt-4 max-md:flex-col max-md:gap-0 flex-wrap">
                                {
                                    joinedUsers?.map((Item) => (
                                        <div onClick={() => { Navigate(`/dashboard/profile/${Item._id}`) }} key={Item._id} className="flex flex-col max-md:ml-0 max-md:w-full cursor-pointer relative mt-5 mr-5">
                                            {
                                                (userData1.isAdmin || (userData1.isManager && userData?.joinedUsers?.includes(userId))) && <div onClick={(e) => {
                                                    removeFromGroup(Item._id)
                                                    e.stopPropagation();
                                                }} className="w-[100px] px-5 py-1.5 text-white bg-red-500 rounded-md border border-solid border-neutral-400 max-md:px-5 cursor-pointer absolute top-[-20px] right-[-20px]">Restrict</div>
                                            }
                                            <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                                <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                                    <img
                                                        loading="lazy"
                                                        src={Item.profilePicture ? Item.profilePicture : defaultPic}
                                                        className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                                    />
                                                    <div className="flex flex-col my-auto">
                                                        <div className="text-lg text-neutral-900">{Item.name}</div>
                                                        {/* <div className="mt-3 text-xs text-neutral-500">
                                                            Member Since: 23-Dec-23024
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }
                            </div>
                            {
                                !joinedUsers.length && <div className="text-center">
                                    <h1>There are no joined Users in this Group</h1>
                                </div>
                            }
                        </div>
                    </div>
                }
                {
                    selected === 4 && <>
                        <Courses groupId={id} />
                    </>
                }
            </div>
            <CreateFolderDialog open={open} setOpen={setOpen} groupId={id} setFetchAgain={setFetchAgain} />
            <CreateFolderImageDialog open={open1} setOpen={setOpen1} folderId={folderId} setFetchAgain={setFetchAgain} />
            <CreatePostDialog open={createPost} setOpen={setCreatePost} fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} groupPost={true} groupId={id} />
            <CommentsDialog open={open2} setOpen={setOpen2} selectedPostId={selectedPostId} setSelectedPostId={setSelectedPostId} />
            {/* <CreateFolderDialog open={open} setOpen={setOpen} groupId={id} /> */}
        </div>
    );
}
