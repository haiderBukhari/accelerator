import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import { failedToast } from "../../utils/toastNotifications";
import professionalPicture from '../../assets/professionalPicture.jpeg'
import { formatDistanceToNow } from "date-fns";
import { Bookmark, Heart } from "lucide-react";
import CommentsDialog from "../../components/comments";

const SinglePost = () => {
    const Navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [post, setPost] = useState([])
    const token = useSelector(state => state.profile.jwt);
    const [selectedPostId, setSelectedPostId] = useState('')

    async function getPosts() {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/post/${id}`, {

            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            console.log([Item.data])
            setPost([Item.data])
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    useEffect(() => {
        getPosts();
    }, [])

    const timeElapsed = (dateString) => {
        const date = new Date(dateString);
        return formatDistanceToNow(date, { addSuffix: true });
    };
    async function handleSave(id) {
        await axios.put(`${import.meta.env.VITE_APP_BACKEND_URL}/post`, {
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
        <div className="max-w-[600px] justify-center mx-auto">
            {
                post?.map((Item) => (
                    <div key={Item._id ?? ''} className="flex flex-col px-5 md:px-6 pt-5 pb-7 mt-8 w-full rounded-3xl border border-solid bg-neutral-200 border-neutral-400  max-md:max-w-full">
                        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                            <div onClick={() => { Navigate(`/dashboard/profile/${Item.owner}`) }} className="flex gap-2 md:gap-4 cursor-pointer">
                                <img
                                    loading="lazy"
                                    src={Item.userInfo.profilePicture ? Item.userInfo.profilePicture : professionalPicture}
                                    className="shrink-0 border-4 border-violet-800 border-solid aspect-square w-[45px] max-md:h-[45px] md:w-[60px] rounded-xl"
                                />
                                <div className="flex flex-col py-1 my-auto">
                                    {
                                        Item?.groupInfo?.name &&
                                        <div onClick={(e) => {
                                            e.stopPropagation();
                                            Navigate(`/dashboard/details/groups?id=${Item.group}`)
                                        }} className="text-sm md:text-base text-zinc-800 font-bold">
                                            {Item.groupInfo.name}
                                        </div>
                                    }
                                    <div className="text-sm md:text-base font-medium text-zinc-800">
                                        {Item.userInfo.firstName} {Item.userInfo.lastName}
                                    </div>
                                    <div className="mt-0 md:mt-2 text-xs text-neutral-500">{timeElapsed(Item.createdAt)}</div>
                                </div>
                            </div>
                            {
                                Item.savedBy?.includes(id) ? <Bookmark
                                    onClick={() => {
                                        setPost(
                                            post.map((post) => {
                                                if (post._id === Item._id) {
                                                    post.savedBy = post.savedBy.filter((like) => like !== id);
                                                }
                                                return post;
                                            })
                                        )
                                        handleSave(Item._id)
                                    }}
                                    className="cursor-pointer text-black" /> :
                                    <Bookmark onClick={() => {
                                        setPost(
                                            post.map((post) => {
                                                if (post._id === Item._id) {
                                                    console.log(post)
                                                    post.savedBy.push(id);
                                                }
                                                return post;
                                            })
                                        )
                                        handleSave(Item._id)
                                    }} className="cursor-pointer text-gray-500" />
                            }
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
                                    className="w-full 3xl:max-h-[300px] h-auto max-md:max-h-[120px] "
                                // style={{ aspectRatio: '1.63' }}
                                />
                            }
                            {
                                Item.videoUrl && <video className="mt-6" src={Item.videoUrl} controls />
                            }
                        </div>
                        <div className="flex gap-5 justify-between px-px mt-6 w-full text-sm max-md:flex-wrap max-md:max-w-full">
                            <div className="flex w-full flex-col justify-center text-neutral-400 max-md:max-w-full">
                                <button onClick={() => { setSelectedPostId(Item._id); setOpen(!open) }} className="justify-center text-start items-start px-3.5 py-3.5 rounded-xl border border-solid bg-neutral-300 border-neutral-400 max-md:pr-5 hidden md:block outline-none w-full">
                                    Write a comment
                                </button>
                            </div>
                            <div className="flex max-w-[100px] md:max-w-[140px] justify-between w-full my-auto whitespace-nowrap text-neutral-400">
                                {
                                    Item.likeBy?.includes(id) ? <Heart onClick={() => {
                                        setPost(
                                            post.map((post) => {
                                                if (post._id === Item._id) {
                                                    post.likes -= 1;
                                                    post.likeBy = post.likeBy.filter((like) => like !== id);
                                                }
                                                return post;
                                            })
                                        )
                                        handleLike(Item._id)
                                    }} className="cursor-pointer text-red-600" /> : <Heart onClick={() => {
                                        setPost(
                                            post.map((post) => {
                                                if (post._id === Item._id) {
                                                    post.likes += 1;
                                                    post.likeBy.push(id);
                                                }
                                                return post;
                                            })
                                        )
                                        handleLike(Item._id)
                                    }} className="cursor-pointer" />
                                }
                                <div className="my-auto ml-[-10px]">{Item.likes}</div>
                                <img
                                    onClick={() => { setSelectedPostId(Item._id); setOpen(!open) }}
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/81b3988206ae45b69d451692ab183825d130156ed8d4f79341e2ae1d2c11b2ce?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 aspect-square w-[25px] cursor-pointer"
                                />
                                <img
                                    onClick={() => { Navigate(`/dashboard/shared/post?id=${Item._id}`) }}
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc32947d0dc0dffaf5b54937d22a080004ed72c715c0b2d4d6a6def7314ff0f6?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 aspect-square w-[25px] cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>
                ))
            }
            <CommentsDialog open={open} setOpen={setOpen} selectedPostId={selectedPostId} setSelectedPostId={setSelectedPostId} />
        </div>
    )
}

export default SinglePost
