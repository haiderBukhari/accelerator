import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import defaultPic from '../../assets/professionalPicture.jpeg'
import { useSelector } from "react-redux";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { failedToast } from "../../utils/toastNotifications";

export default function GroupsDetails() {
    const [selected, setSelected] = useState(1);
    const Navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [userData, setUserData] = useState({})
    const token = useSelector(state => state.profile.jwt);
    const [posts, setPosts] = useState([]);
    const [fetched, setFetched] = useState(false);

    const timeElapsed = (dateString) => {
        const date = new Date(dateString);
        return formatDistanceToNow(date, { addSuffix: true });
    };
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
        getGroupData();
        getPosts();
    }, [id])



    return (
        <div className="flex flex-col mx-3">
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&"
                className="w-full max-w-auto mt-7"
            />
            <div className="flex z-10 flex-col pr-6 pl-16 mt-0 relative w-full max-md:px-5 max-md:max-w-full">
                <div className={`max-w-full w-auto absolute ${selected === 1 ? 'top-[-18%]' : selected === 2 ? 'top-[-14%]' : selected === 3 ? 'top-[-14%]' : 'top-[-6%]'}`}>
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
                                <div className="flex gap-5 mt-3.5 text-lg">
                                    <div className="justify-center px-2.5 py-1.5 font-medium text-violet-800 rounded-md border border-violet-800 border-solid bg-blue-700 bg-opacity-20">
                                        {userData?.likes} Likes
                                    </div>
                                    <div className="justify-center px-5 py-1.5 text-white bg-violet-800 rounded-md border border-solid border-neutral-400 max-md:px-5">
                                        Join Now
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
                                    </div>
                                </div>
                            </div>
                            {
                                fetched && <div className="flex flex-col px-6 pt-5 pb-7 mt-8 w-full rounded-3xl text-2xl text-center max-md:pl-5 max-md:max-w-full">
                                    No New Posts Yet
                                </div>
                            }
                            {
                                posts?.map((Item) => (
                                    <div key={Item.text ?? ''} className="flex flex-col px-6 pt-5 pb-7 mt-8 w-full rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pl-5 max-md:max-w-full">
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
                                            <div className="flex max-w-[200px] justify-between w-full my-auto whitespace-nowrap text-neutral-400">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/057f6797c1a65234653a3b14b6904c6026c5676f9bba3f9afe3213ffb0ea12d6?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                    className="shrink-0 aspect-square w-[25px]"
                                                />
                                                <div className="my-auto">{Item.likes}</div>
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
                {
                    selected === 3 && <div className="my-10 flex flex-col flex-wrap content-start">
                        <div className="px-5 w-full max-md:max-w-full">
                            <div className="flex gap-2 mt-4 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 w-full max-md:max-w-full">
                            <div className="flex gap-2 mt-4 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 w-full max-md:max-w-full">
                            <div className="flex gap-2 mt-4 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    selected === 4 && <>
                        <div className="my-10 text-2xl font-bold text-violet-800 max-md:mt-10 max-md:max-w-full">
                            Mobile App Development
                        </div>
                        {
                            new Array(10).fill(1).map((item) => (
                                <div key={`${item}%487j`}>
                                    <div className="flex gap-5 justify-between items-center px-px mt-6 w-full max-md:flex-wrap max-md:max-w-full">
                                        <div className="self-stretch w-full">
                                            <div className="flex w-full items-center gap-5 max-md:flex-col max-md:gap-0">
                                                <div className="flex items-center flex-col w-[22%] max-md:ml-0 max-md:w-full">
                                                    <img
                                                        loading="lazy"
                                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                        className="grow shrink-0 max-w-full border-solid aspect-[1.49] border-[3px] border-neutral-400 w-[150px] max-md:mt-5"
                                                    />
                                                </div>
                                                <div className="flex flex-col ml-1 w-full max-md:ml-0 max-md:w-full">
                                                    <div className="flex flex-col self-stretch my-auto max-md:mt-9 max-md:max-w-full">
                                                        <div className="text-lg font-semibold text-zinc-600 max-md:max-w-full">
                                                            Module 01 : Intro
                                                        </div>
                                                        <div className="mt-1 text-sm text-neutral-500 max-md:max-w-full">
                                                            Lorem Ipsum is simply dummy text of the printing and
                                                            typesetting industry. Lorem Ipsum has been the industrys
                                                            standard dummy text ever since the 1500s.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex w-5/12 items-center gap-5 self-stretch my-auto text-base">
                                            <div className="flex items-center gap-2.5 text-violet-800">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/99de8a4805a38816bf21f6dc05e7c9f9b8e2ee99c22a05da867efaf55b45bc94?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                    className="shrink-0 w-6 aspect-square"
                                                />
                                                <div className="my-auto text-sm">12 Sessions</div>
                                            </div>
                                            <div className="flex gap-2.5 text-neutral-500">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0614512d2c2e5ed7dc6284c81281b6935599b48676637384b139251f7567543d?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                    className="shrink-0 w-6 aspect-square"
                                                />
                                                <div className="my-auto">35k Atendies</div>
                                            </div>
                                        </div>
                                        <img
                                            onClick={() => { Navigate('/dashboard/course/details') }}
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7c99789c18d7823e75d0ea2e0789fa546a117a0f4744c541ab08390c619b505?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 self-stretch my-auto aspect-[1.25] w-[75px] cursor-pointer"
                                        />
                                    </div>
                                    <div className="shrink-0 self-center mt-7 h-[1px] border border-solid bg-neutral-400 border-neutral-400 max-w-[80%] w-full mx-auto" />
                                </div>
                            ))
                        }
                    </>
                }
            </div>
        </div>
    );
}
