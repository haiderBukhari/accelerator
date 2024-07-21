import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { failedToast } from "../../utils/toastNotifications";
import professionalPicture from '../../assets/professionalPicture.jpeg'

export default function Messages() {
    const Navigate = useNavigate();
    const token = useSelector(state => state.profile.jwt);
    const [userList, setUserList] = useState([])
    
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
    useEffect(() => {
        getFriends();
    }, [])

    return (
        <div>
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 h-full">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow px-6 md:pt-11 pb-20 w-full text-base bg-[#f2f2f2] md:bg-transparent max-md:px-5 max-md:mt-10 max-md:max-w-full h-full">
                        <div className="flex gap-5 items-start px-5 py-3 rounded-xl border border-solid bg-neutral-200 border-stone-300 text-neutral-500 max-md:pr-5">
                            <input className="flex-auto my-auto bg-transparent outline-none" type='text' placeholder="Search Friends" />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e30962ab32bdd75648fa143798e896d0b14004c96254bf8aa5f3aa42c5e9269?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 self-start aspect-square w-[23px] cursor-pointer"
                            />
                        </div>
                        {
                            userList?.map((Item, index) => (
                                <>
                                    <div onClick={()=>{Navigate(`/dashboard/messages/${Item.friendId}`)}} className="flex cursor-pointer gap-5 pr-2 mt-7">
                                        <img
                                            loading="lazy"
                                            src={Item.photo ? Item.photo : professionalPicture}
                                            className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[50px] h-[50px]"
                                        />
                                        <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                                            <div className="font-medium text-zinc-800">{Item.firstName} {Item.lastName}</div>
                                            <div className="whitespace-nowrap text-ellipsis text-neutral-500">
                                                {Item.latestMessage.length > 60 ? Item.latestMessage.slice(0, 30) + '...' : Item.latestMessage}
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        index !== userList.length-1 && <div className="shrink-0 mt-5 h-px border border-solid bg-neutral-400 border-neutral-400" />
                                    }
                                </>
                            ))
                        }
                        <div style={{ height: '2px' }} className="self-center mt-10 mb-2 w-60 bg-neutral-400"></div>
                        <div className="self-center font-bold text-neutral-400">End</div>
                    </div>
                </div>
                <div className="flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full hidden md:flex">
                    <div className="flex flex-col items-center self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/06171275e00513b1f5de60649faaf46b4584b1a1ec7a42adefe7b765adb63b4e?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/06171275e00513b1f5de60649faaf46b4584b1a1ec7a42adefe7b765adb63b4e?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/06171275e00513b1f5de60649faaf46b4584b1a1ec7a42adefe7b765adb63b4e?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/06171275e00513b1f5de60649faaf46b4584b1a1ec7a42adefe7b765adb63b4e?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/06171275e00513b1f5de60649faaf46b4584b1a1ec7a42adefe7b765adb63b4e?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/06171275e00513b1f5de60649faaf46b4584b1a1ec7a42adefe7b765adb63b4e?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/06171275e00513b1f5de60649faaf46b4584b1a1ec7a42adefe7b765adb63b4e?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/06171275e00513b1f5de60649faaf46b4584b1a1ec7a42adefe7b765adb63b4e?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="max-w-full aspect-square w-[186px]"
                        />
                        <div className="mt-2.5 text-4xl font-bold text-neutral-700">
                            Chat With Friends
                        </div>
                        <div className="self-stretch mt-8 text-lg text-center text-neutral-500 max-md:max-w-full">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industrys standard dummy text
                            ever since the 1500s
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
