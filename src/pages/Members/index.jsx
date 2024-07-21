import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { failedToast, successToast } from '../../utils/toastNotifications';
import professionalPicture from '../../assets/professionalPicture.jpeg'


export default function Members() {
    const token = useSelector(state => state.profile.jwt);
    const [data, setData] = useState([])
    const [totalList, setTotalList] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [fetchAgain, setFetchAgain] = useState(false)
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const handlePageChange = (event, value) => {
        if (page === value) return;
        setData([])
        setPage(value);
        getNonFriendsList(value);
    };

    async function getNonFriendsList(pageNum) {
        setLoading(true);
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/friends?currentPage=${pageNum}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setData(Item.data.nonFriends);
            setTotalList(Item.data.total)
            setLoading(false);
        }).catch((err) => {
            setLoading(false);
            return failedToast(err.response.data.error);
        });
    }
    useEffect(() => {
        getNonFriendsList(1);
    }, [fetchAgain])

    const addFriend = async (id) => {
        await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/friends`, {
            id: id
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(() => {
            setFetchAgain(!fetchAgain);
            successToast("Friend Added")
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    return (
        <div className="flex flex-col px-5 mt-5 pb-20">
            <div className="mt-12 w-full text-4xl font-bold text-neutral-700 max-md:mt-10 max-md:max-w-full">
                Find Friends
            </div>
            <div className="mt-4 w-full text-xl text-zinc-500 max-md:max-w-full">
                Lets make a community online
            </div>
            <div className="flex items-center gap-5 pr-20 mt-10 font-medium leading-[95%] max-md:flex-wrap max-md:pr-5">
                <div className="flex flex-col w-full md:w-auto justify-center">
                    <div className="text-base tracking-wider text-neutral-800">
                        Name / Keyword
                    </div>
                    <input type='text' className="justify-center items-start px-5 py-3 mt-3.5 text-base tracking-wider rounded-xl border border-solid outline-none bg-zinc-300 border-stone-300 text-neutral-400 w-full md:w-auto" placeholder="i.e. jhon_e,abc@example.com" />
                </div>
                <div className="flex flex-col justify-center py-px w-full md:w-auto">
                    <div className="text-base tracking-wider text-neutral-800">
                        Location
                    </div>
                    <input type='text' className="justify-center items-start px-5 py-3 mt-5 text-base tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-neutral-400 outline-none w-full md:w-auto" placeholder="i.e. jhon_e,abc@example.com" />
                </div>
                <div className="justify-center self-end px-12 py-2.5 text-xl leading-5 text-white bg-violet-800 rounded-2xl max-md:px-5 cursor-pointer mt-5 md:mt-0">
                    Search People
                </div>
            </div>
            <div className="mt-4 md:mt-14 w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex justify-between gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col items-center w-6/12 max-md:ml-0">
                        <div className="flex flex-col flex-wrap grow content-start max-md:mt-10 max-md:max-w-full w-full">
                            {
                                !loading && totalList === 0 && <p className='w-full  text-center mx-auto'>Not New Members Yet..</p>
                            }
                            {
                                loading && <p className='w-full  text-center mx-auto'>loading..</p>
                            }
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 mx-auto">
                                {
                                    data?.map((Item, Index) => (
                                        <div key={Item.firstName} className={`flex flex-col w-full mb-5 max-md:ml-0 gap-5 ${Index % 2 != 0 ? 'ml-4' : 'mr-4'}`}>
                                            <div className="flex flex-col grow justify-center font-medium max-md:mt-8">
                                                <div className="flex flex-row md:flex-col justify-between px-4 py-5 w-full rounded-2xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                                    <div className="flex gap-4 justify-between leading-[95%]">
                                                        <div className="flex items-center">
                                                            <img
                                                                loading="lazy"
                                                                src={Item.profilePicture ? Item.profilePicture : professionalPicture}
                                                                className="shrink-0 w-14 border-solid aspect-square border-[3px] border-neutral-400"
                                                            />
                                                            <div className="text-md tracking-wider text-neutral-800 block md:hidden ml-4">
                                                                {Item.firstName} {Item.lastName}
                                                            </div>
                                                        </div>
                                                        <div className="hidden md:flex flex-col py-px my-auto">
                                                            <div className="text-lg tracking-wider text-neutral-800">
                                                                {Item.firstName} {Item.lastName}
                                                            </div>
                                                            {/* <div className="flex gap-1 mt-1.5 text-base tracking-wider text-neutral-500">
                                                                <img
                                                                    loading="lazy"
                                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e45fecabc39e1c9254fb3584535e2d938fb9709899cd2dda93932871e6bfac82?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                                    className="shrink-0 w-5 aspect-square"
                                                                />
                                                                <div className="my-auto">Paris, France</div>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                    <div className="mt-3.5 text-base tracking-wider leading-4 text-zinc-500 hidden md:block">
                                                        {Item.aboutMe}
                                                    </div>
                                                    <div onClick={() => { setData([]); setPage(1); addFriend(Item._id) }} className="md:mt-3 justify-center self-end px-8 py-2 text-base leading-4 text-white bg-violet-800 hover:bg-opacity-55 cursor-pointer rounded-xl max-md:px-5">
                                                        Add Friend
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <Stack className='mt-6 mx-auto' spacing={2}>
                                <Pagination
                                    count={Math.ceil(totalList / 8) < 1 ? 1 : Math.ceil(totalList / 8)}
                                    color="primary"
                                    page={page}
                                    onChange={handlePageChange}
                                />
                            </Stack>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/699407e23c6276357260fcdd9605f5e8af4a4137de6898699b7bf902d3e1c70d?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/699407e23c6276357260fcdd9605f5e8af4a4137de6898699b7bf902d3e1c70d?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/699407e23c6276357260fcdd9605f5e8af4a4137de6898699b7bf902d3e1c70d?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/699407e23c6276357260fcdd9605f5e8af4a4137de6898699b7bf902d3e1c70d?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/699407e23c6276357260fcdd9605f5e8af4a4137de6898699b7bf902d3e1c70d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/699407e23c6276357260fcdd9605f5e8af4a4137de6898699b7bf902d3e1c70d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/699407e23c6276357260fcdd9605f5e8af4a4137de6898699b7bf902d3e1c70d?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/699407e23c6276357260fcdd9605f5e8af4a4137de6898699b7bf902d3e1c70d?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="w-full border border-solid aspect-[0.83] border-neutral-400 max-md:mt-10 max-md:max-w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

