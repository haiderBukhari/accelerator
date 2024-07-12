import { useEffect, useState } from "react";
import CommentsDialog from "../../components/comments";
import { useNavigate } from "react-router-dom";
import CreatePostDialog from "../../components/CreatePost";
import axios from "axios";
import ReactPlayer from 'react-player/youtube'

export default function Posts() {
    const [open, setOpen] = useState(false);
    const [createPost, setCreatePost] = useState(false);
    const Navigate = useNavigate();
    const [data, setData] = useState([])
    const [fetched, setFetched] = useState(false);
    const [fetchAgain, setFetchAgain] = useState(false);

    async function getPosts() {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/post`, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        }).then((Item) => {
            setData(Item.data);
            setFetched(Item.data.length ? false : true)
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }
    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div className="flex flex-col max-w-[97%] mx-7 mt-5">
            <div onClick={() => { setCreatePost(!createPost) }} className="flex flex-col md:flex-row gap-5 justify-between pl-5 mt-10 w-full rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:flex-wrap max-md:max-w-full h-[200px] md:h-auto">
                <div  className="flex gap-4 my-auto text-base font-medium text-zinc-500">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&"
                        className="shrink-0 w-10 border-4 border-violet-800 border-solid aspect-square hidden md:block"
                    />
                    <div className="flex-auto my-auto cursor-pointer bg-opacity-80">Let’s make something new!</div>
                </div>
                <div className="flex flex-col justify-center self-end md:self-auto mr-4 px-9 py-4 bg-violet-800 rounded-3xl border border-solid border-neutral-400 max-md:px-5 h-[50px] w-[170px] mb-4 mt-0 md:mt-4 pl-5">
                    <div className="flex gap-5 justify-between">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c6a5bfa10bfc829411928f0545a1d2f4e7be548a242a2f03a64730f289bb110?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 aspect-square w-[30px]"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9928e221ff81dcf989ef8b7146178be0ddd02598d4bac98b3ccafb8a5bc31b37?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 aspect-square w-[30px]"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/99a946cab8c72acff3b6467ffde7e90e4ede4b672a22273cb1a6a2a56cc84de5?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 aspect-square w-[30px]"
                        />
                    </div>
                </div>
            </div>
            {
                fetched && <div className="flex flex-col px-6 pt-5 pb-7 mt-8 w-full rounded-3xl text-2xl text-center max-md:pl-5 max-md:max-w-full">
                    No New Posts Yet
                </div>
            }
            {
                data?.map((Item) => (
                    <div className="flex flex-col px-6 pt-5 pb-7 mt-8 w-full rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pl-5 max-md:max-w-full">
                        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                            <div className="flex gap-4">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 border-4 border-violet-800 border-solid aspect-square w-[60px]"
                                />
                                <div className="flex flex-col py-1 my-auto">
                                    <div className="text-base font-medium text-zinc-800">
                                        Michael William{" "}
                                    </div>
                                    <div className="mt-2 text-xs text-neutral-500">20 mins. ago</div>
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
                                srcSet={Item.imageUrl}
                                className="self-center mt-6 w-full border border-solid aspect-[2.63] border-neutral-400 max-w-[784px] max-md:max-w-full"
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
            <CommentsDialog open={open} setOpen={setOpen} />
            <CreatePostDialog open={createPost} setOpen={setCreatePost} fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>
        </div>
    );
}

