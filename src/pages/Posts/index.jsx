import { useEffect, useState } from "react";
import CommentsDialog from "../../components/comments";
import CreatePostDialog from "../../components/CreatePost";
import axios from "axios";
import { useSelector } from "react-redux";
import { failedToast } from "../../utils/toastNotifications";
import professionalPicture from '../../assets/professionalPicture.jpeg'
import { formatDistanceToNow } from 'date-fns';
import { useNavigate } from "react-router-dom";
import { Bookmark, Heart } from 'lucide-react';

export default function Posts() {
    const Navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [createPost, setCreatePost] = useState(false);
    const [data, setData] = useState([])
    const [fetched, setFetched] = useState(false);
    const [fetchAgain, setFetchAgain] = useState(false);
    const token = useSelector(state => state.profile.jwt);
    const id = useSelector(state => state.profile.id);
    const profilePicture = useSelector(state => state.profile.profilePicture);
    const [selectedPostId, setSelectedPostId] = useState('')
    const [isOnlySavedPost, setIsOnlySavedPost] = useState(false)
    const [loading, setLoading] = useState(true);
    let [currentPage, setCurrentPage] = useState(1)

    const timeElapsed = (dateString) => {
        const date = new Date(dateString);
        return formatDistanceToNow(date, { addSuffix: true });
    };

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            if((data.length%10<=9 && data.length%10!==0)){
                return;
            }else{
                const nextPage= currentPage + 1;
                setCurrentPage(nextPage)
                getPosts(nextPage);
            }
        }
    };

    // Add scroll event listener
    useEffect(() => {
        if(!loading){
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
        }
    }, [loading]);


    async function getPosts(nextPage) {
        setLoading(true)
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/post?isOnlySavedPost=${isOnlySavedPost}&currentPage=${nextPage}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setLoading(false)
            if(data.length){
                setData([...data, ...Item.data])
            }else{
                setData(Item.data)
            }
            setFetched(Item.data.length ? false : true)
        }).catch((err) => {
            setLoading(false)
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

    useEffect(() => {
        setCurrentPage(1)
        getPosts(1);
    }, [fetchAgain, isOnlySavedPost])

    return (
        <div className="flex flex-col w-full max-w-[100%] px-5 mx-auto mt-5">
            <div onClick={() => { setCreatePost(!createPost) }} className="flex flex-col md:flex-row gap-5 justify-between pl-5 mt-10 w-full rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:flex-wrap max-md:max-w-full h-[200px] max-md:h-[170px] md:h-auto cursor-pointer">
                <div className="flex gap-4 max-md:mt-5 my-auto text-base font-medium text-zinc-500">
                    <img
                        loading="lazy"
                        src={profilePicture ? profilePicture : professionalPicture}
                        className="shrink-0 w-10 border-4 rounded-xl border-violet-800 border-solid aspect-square hidden md:block"
                    />
                    <div className="flex-auto my-auto cursor-pointer bg-opacity-80 text-[#8A8A8A]">Let’s make something new!</div>
                </div>
                <div className="flex flex-col justify-center self-end md:self-auto m-0 h-auto p-0 w-full max-w-[100px] py-2 md:py-4 mb-3 mr-2 md:mr-0 md:mb-0 bg-[#4C1DBE] rounded-xl md:rounded-3xl border border-solid border-[#AAAAAA]">
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
                            className="shrink-0 aspect-square w-[20px] hidden"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-end items-center">
                <h1 className="mr-4">Filter By</h1>
                <select onChange={(e)=>{
                    setData([])
                    setIsOnlySavedPost(e.target.value ==='saved')
                }} className="justify-center text-start items-start py-3.5 rounded-xl border border-solid bg-neutral-300 border-neutral-400 max-md:pr-5 hidden md:block outline-none px-3" name="" id="">
                    <option value="all">All Posts</option>
                    <option value="saved">Saved Posts</option>
                </select>
            </div>
            {
                fetched && <div className="flex flex-col px-6 pt-5 pb-7 mt-3 w-full rounded-3xl text-2xl text-center max-md:pl-5 max-md:max-w-full">
                    No New Posts Yet
                </div>
            }
            {
                data?.map((Item, index) => (
                    <div key={Item._id ?? ''} className="flex flex-col px-5 md:px-6 pt-5 pb-7 mt-8 w-full rounded-3xl border border-solid bg-neutral-200 border-neutral-400  max-md:max-w-full">
                        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                            <div onClick={() => { Navigate(`/dashboard/profile/${Item.owner}`) }} className="flex gap-2 md:gap-4 cursor-pointer">
                                <img
                                    loading="lazy"
                                    src={Item.userInfo.profilePicture ? Item.userInfo.profilePicture : professionalPicture}
                                    className="shrink-0 border-4 border-violet-800 border-solid aspect-square w-[45px] max-md:h-[45px] md:w-[60px] rounded-xl"
                                />
                                <div className="flex flex-col py-1 my-auto">
                                    <div className="text-sm md:text-base font-medium text-zinc-800">
                                        {Item.userInfo.firstName} {Item.userInfo.lastName}
                                    </div>
                                    <div className="mt-0 md:mt-2 text-xs text-neutral-500">{timeElapsed(Item.createdAt)}</div>
                                </div>
                            </div>
                            {
                                Item.savedBy?.includes(id) ? <Bookmark
                                    onClick={() => {
                                        setData(
                                            data.map((post) => {
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
                                        setData(
                                            data.map((post) => {
                                                if (post._id === Item._id) {
                                                    console.log(post)
                                                    post.savedBy.push(id);
                                                }
                                                return post;
                                            })
                                        )
                                        handleSave(Item._id)
                                    }}
                                    className="cursor-pointer text-gray-500" />
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
                                        setData(
                                            data.map((post) => {
                                                if (post._id === Item._id) {
                                                    post.likes -= 1;
                                                    post.likeBy = post.likeBy.filter((like) => like !== id);
                                                }
                                                return post;
                                            })
                                        )
                                        handleLike(Item._id)
                                    }} className="cursor-pointer text-red-600" /> : <Heart onClick={() => {
                                        setData(
                                            data.map((post) => {
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
            <CreatePostDialog open={createPost} setOpen={setCreatePost} fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        </div>
    );
}

