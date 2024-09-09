import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { failedToast } from "../../utils/toastNotifications";
import axios from "axios";
import { useSelector } from "react-redux";
import defaultPic from '../../assets/professionalPicture.jpeg'
import { useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { Heart } from "lucide-react";

export default function ProfilePage() {
    const [selected, setSelected] = useState(1);
    const Navigate = useNavigate();
    const [userData, setUserData] = useState({})
    const token = useSelector(state => state.profile.jwt);
    const userId = useSelector(state => state.profile.id);
    const { id } = useParams();
    const [posts, setPosts] = useState([]);
    const [fetched, setFetched] = useState(false);

    const timeElapsed = (dateString) => {
        const date = new Date(dateString);
        return formatDistanceToNow(date, { addSuffix: true });
    };
    async function getUserData() {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/auth/userData?id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setUserData(Item.data.user);
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    async function getPosts() {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/post/individual?id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setFetched(Item.data.length == 0 ? true : false)
            console.log(Item.data)
            setPosts(Item.data);
        }).catch((err) => {
            setFetched(true)
            return failedToast(err.response.data.error);
        });
    }
    useEffect(() => {
        getUserData();
        getPosts();
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
                    <div style={{ top: "-90px", left: "0", transform: "translate(0, -10%" }} className={`max-w-full w-[529px] absolute`}>
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
                                {
                                    userData?.profilePicture ? <img
                                        src={userData?.profilePicture}
                                        loading="lazy"
                                        className="w-full rounded-full border-4 border-violet-800 border-solid aspect-square max-md:mt-7 bg-white"
                                    /> : <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/695af9864d34d110a423c64f2d30f87a6ad638dd664584bfc4fbaea5da3067d2?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/695af9864d34d110a423c64f2d30f87a6ad638dd664584bfc4fbaea5da3067d2?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/695af9864d34d110a423c64f2d30f87a6ad638dd664584bfc4fbaea5da3067d2?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/695af9864d34d110a423c64f2d30f87a6ad638dd664584bfc4fbaea5da3067d2?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/695af9864d34d110a423c64f2d30f87a6ad638dd664584bfc4fbaea5da3067d2?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/695af9864d34d110a423c64f2d30f87a6ad638dd664584bfc4fbaea5da3067d2?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/695af9864d34d110a423c64f2d30f87a6ad638dd664584bfc4fbaea5da3067d2?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/695af9864d34d110a423c64f2d30f87a6ad638dd664584bfc4fbaea5da3067d2?apiKey=cf358c329e0d49a792d02d32277323ef&"

                                        className="w-full rounded-full border-4 border-violet-800 border-solid aspect-square max-md:mt-7"
                                    />
                                }
                            </div>
                            <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow mt-36 max-md:mt-10">
                                    <div className="text-3xl font-bold text-neutral-700">
                                        {userData?.firstName} {" "} {userData?.lastName}
                                    </div>
                                    <div className="flex gap-5 mt-3.5 text-lg">
                                        <div onClick={() => { Navigate('/dashboard/messages') }} className="justify-center px-5 py-1.5 text-white bg-violet-800 rounded-md border border-solid border-neutral-400 max-md:px-5 cursor-pointer">
                                            Message
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-32"></div>
                <div className="flex gap-4 self-start mt-12 text-lg font-medium whitespace-nowrap text-neutral-500 max-md:flex-wrap max-md:mt-10">
                    <div onClick={() => setSelected(1)} className={`justify-center px-5 py-2 ${selected === 1 ? 'bg-violet-800 text-zinc-100' : 'bg-stone-300 text-black'} rounded-xl cursor-pointer`}>
                        Profile
                    </div>
                </div>
                <div className="shrink-0 mt-5 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
                {
                    selected === 1 && <div className="my-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0 flex-wrap md:flex-nowrap">
                            <div className="flex flex-col w-auto max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow max-md:mt-5">
                                    <div className="flex flex-col px-5 py-9 text-base font-medium rounded-3xl border border-solid bg-neutral-200 border-neutral-400 text-neutral-500">
                                        <div className="text-xl font-semibold text-neutral-700">
                                            General Information
                                        </div>
                                        <div className="mt-6">Contact Info: {userData?.phoneNumber}</div>
                                        <div className="mt-3">Email Address: {userData?.email}</div>
                                        <div className="mt-3">
                                            Talks About: {userData?.bio || 'NA'}{" "}
                                        </div>
                                        <div className="mt-7 text-base font-semibold text-neutral-700">
                                            Description
                                        </div>
                                        <div className="mt-2 text-zinc-500">
                                            {userData?.aboutMe || 'NA'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                fetched && <div className="flex flex-col px-6 pt-5 pb-7 mt-8 w-full rounded-3xl text-2xl text-center max-md:pl-5 max-md:max-w-full">
                                    No New Posts Yet
                                </div>
                            }
                            <div className="flex flex-col w-full">
                                {
                                    posts?.map((Item, index) => (
                                        <div key={Item.text ?? ''} className={`flex flex-col px-6 pb-7 pt-5 ${!index == 0 && 'mt-8'} w-full rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pl-5 max-md:max-w-full`}>
                                            <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                                                <div className="flex gap-4">
                                                    <img
                                                        loading="lazy"
                                                        src={userData?.profilePicture || defaultPic}
                                                        className="shrink-0 border-4 border-violet-800 border-solid aspect-square w-[60px]"
                                                    />
                                                    <div className="flex flex-col py-1 my-auto">
                                                        <div className="text-base font-medium text-zinc-800">
                                                            {userData.firstName} {userData.lastName}
                                                        </div>
                                                        <div className="mt-2 text-xs text-neutral-500">{timeElapsed(Item.createdAt)}</div>
                                                    </div>
                                                </div>
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/17fb2d504a4a46adf611331825b24e3490f3ff0a7aa1ff0f0783d4da246b0be9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                    className="shrink-0 my-auto aspect-square w-[25px]"
                                                />
                                            </div>
                                            {
                                                Item.text && <div className="self-start mt-6 text-base text-zinc-800 max-md:max-w-full">
                                                    {Item.text}
                                                </div>
                                            }
                                            {
                                                Item.imageUrl && <img
                                                    loading="lazy"
                                                    src={Item.imageUrl}
                                                    className="self-center mt-6 w-full border border-solid border-neutral-400 max-w-[784px] h-auto max-md:max-w-full"
                                                    style={{ aspectRatio: '2.63' }}
                                                />
                                            }
                                            {
                                                Item.videoUrl && <video className="mt-6" src={Item.videoUrl} controls />
                                            }
                                            <div className="flex gap-5 justify-between px-px mt-6 w-full text-sm max-md:flex-wrap max-md:max-w-full">
                                                <div className="flex w-full flex-col justify-center text-neutral-400 max-md:max-w-full">
                                                    <button onClick={() => { setOpen(!open) }} className="justify-center text-start items-start px-3.5 py-3.5 rounded-xl border border-solid bg-neutral-300 border-neutral-400 max-md:pr-5 w-full hidden md:block">
                                                        Write a comment
                                                    </button>
                                                </div>
                                                <div className="flex max-w-[150px] md:max-w-[200px] justify-between w-full my-auto whitespace-nowrap text-neutral-400">
                                                    {
                                                        Item.likeBy?.includes(id) ? <Heart onClick={() => {
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
                    selected === 2 && <div className="my-10 flex flex-col px-5 pt-8 text-xl rounded-3xl border border-solid bg-neutral-200 border-neutral-400 text-neutral-700">
                        <div className="font-semibold max-md:max-w-full">Photos</div>
                        <div className="mt-4 text-base font-medium text-neutral-500 max-md:max-w-full">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industrys standard dummy text ever
                            since the 1500s.
                        </div>
                        <div className="flex gap-2.5 self-center mt-9 max-md:flex-wrap">
                            <div className="flex flex-col pb-2">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="self-center border-2 border-solid aspect-square border-neutral-400 w-[150px]"
                                />
                                <div className="mt-4">Folder Name</div>
                            </div>
                            <div className="flex flex-col pb-2">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="self-center border-2 border-solid aspect-square border-neutral-400 w-[150px]"
                                />
                                <div className="mt-4">Folder Name</div>
                            </div>
                            <div className="flex flex-col pb-2">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="self-center border-2 border-solid aspect-square border-neutral-400 w-[150px]"
                                />
                                <div className="mt-4">Folder Name</div>
                            </div>
                            <div className="flex flex-col pb-2">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="self-center border-2 border-solid aspect-square border-neutral-400 w-[150px]"
                                />
                                <div className="mt-4">Folder Name</div>
                            </div>
                            <div className="flex flex-col pb-2">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="self-center border-2 border-solid aspect-square border-neutral-400 w-[150px]"
                                />
                                <div className="mt-4">Folder Name</div>
                            </div>
                            <div className="flex flex-col pb-2">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="self-center border-2 border-solid aspect-square border-neutral-400 w-[150px]"
                                />
                                <div className="mt-4">Folder Name</div>
                            </div>
                            <div className="flex flex-col pb-2">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="self-center border-2 border-solid aspect-square border-neutral-400 w-[150px]"
                                />
                                <div className="mt-4">Folder Name</div>
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c105853b8eaf0871077678e7a53c25ade5c92ff5e4c22abf82903a1375818311?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c105853b8eaf0871077678e7a53c25ade5c92ff5e4c22abf82903a1375818311?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c105853b8eaf0871077678e7a53c25ade5c92ff5e4c22abf82903a1375818311?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c105853b8eaf0871077678e7a53c25ade5c92ff5e4c22abf82903a1375818311?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c105853b8eaf0871077678e7a53c25ade5c92ff5e4c22abf82903a1375818311?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c105853b8eaf0871077678e7a53c25ade5c92ff5e4c22abf82903a1375818311?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c105853b8eaf0871077678e7a53c25ade5c92ff5e4c22abf82903a1375818311?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c105853b8eaf0871077678e7a53c25ade5c92ff5e4c22abf82903a1375818311?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="mt-2.5 max-w-full border-2 border-solid aspect-[1.08] border-neutral-400 w-[150px]"
                        />
                    </div>
                }
            </div>
        </div>
    );
}
