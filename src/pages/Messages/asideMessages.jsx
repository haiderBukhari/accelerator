import { useEffect, useState } from "react";
import { failedToast } from "../../utils/toastNotifications";
import axios from "axios";
import { useSelector } from "react-redux";
import professionalPicture from '../../assets/professionalPicture.jpeg'
import { socket } from "../../socket";
import ScrollToBottom from "react-scroll-to-bottom";
import { css } from "@emotion/react";
import moment from "moment";

const AsideMessages = () => {
    const [messagePopUpOpen, setMessagePopUpOpen] = useState(false);
    const [messageDetailsOpen, setMessageDetailsOpen] = useState(false);
    const [userList, setUserList] = useState([])
    const [tempUserList, setTempUserList] = useState([])
    const token = useSelector(state => state.profile.jwt);
    const [id, setId] = useState('')
    const [messagesList, setMessagesList] = useState([]);
    const [message, setMessage] = useState('')
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [userData, setUserData] = useState({})
    const [isFetching, setIsFetching] = useState(true);

    const ROOT_CSS = css({
        height: 500,
        width: '100%'
    });

    async function getFriends() {
        setIsFetching(true)
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/chat/friends`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setIsFetching(false)
            setUserList(Item.data);
            setTempUserList(Item.data);
        }).catch((err) => {
            setIsFetching(false)
            return failedToast(err.response.data.error);
        });
    }
    useEffect(() => {
        getFriends();
    }, [])


    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }
        socket.on('connect', onConnect);
        return () => {
            socket.disconnect()
        }
    }, [])

    useEffect(() => {
        if (id) {
            socket.on('recieve_message', getMessages)
        }
    }, [id])

    const sendMessage = () => {
        socket.emit('send_message', { message: message, id: id })
        setMessage('')
    }

    async function getMessages() {
        setMessagesList([])
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/messages?secondPersonId=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setMessagesList(Item.data);
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }
    async function getUserInformation() {
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

    useEffect(() => {
        if (id !== '') {
            getFriends();
            getUserInformation();
            getMessages();
        }
    }, [id])

    return (
        <div style={{ zIndex: 10 }} className="relative hidden md:block">
            <div onClick={() => { setMessagePopUpOpen(!messagePopUpOpen); setMessageDetailsOpen(false) }} className={`justify-center fixed ${messagePopUpOpen ? 'bottom-[440px] h-[60px]' : 'bottom-0'} right-[20px] cursor-pointer items-start px-8 py-2 text-lg text-white bg-violet-800 w-[320px]`} style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}>
                Messages
            </div>
            {
                messagePopUpOpen && <>
                    <div className="flex flex-col px-2.5 pt-5 pb-14 text-sm bg-zinc-300 w-[320px] h-[450px] fixed bottom-0 right-[20px] overflow-auto">
                        <div style={{ zIndex: 100 }} className="flex gap-5 justify-between items-start px-4 py-2.5 rounded-xl border border-solid bg-neutral-200 border-stone-300 text-neutral-500">
                            <input onChange={(e) => {
                                if(tempUserList?.length){
                                    const data = tempUserList.filter((name) => {
                                        const names = name.firstName.toLowerCase() + " " + name.lastName.toLowerCase(); 
                                        if (names.includes(e.target.value.trim())) {
                                            return name;
                                        }
                                    })
                                    setUserList(data)
                                }
                            }} type='text' placeholder="Search Friends" className="my-auto outline-none bg-transparent" />
                        </div>
                        {
                            !isFetching && userList?.length === 0 && <div className="text-xl font-medium text-zinc-800 h-full flex justify-center items-center">
                            No Message Found
                        </div>
                        }
                        {
                            userList?.map((Item) => (
                                <div onClick={() => { setId(Item.friendId); setMessageDetailsOpen(!messageDetailsOpen) }} key={Item.friendId} >
                                    <div className="flex cursor-pointer gap-4 pr-1.5 mt-6">
                                        <img
                                            loading="lazy"
                                            src={Item.photo ? Item.photo : professionalPicture}
                                            className="shrink-0 w-10 border-solid aspect-square border-[3px] border-neutral-400"
                                        />
                                        <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                                            <div className="font-medium text-zinc-800">{Item.firstName} {Item.lastName}</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </>
            }
            {
                messageDetailsOpen && <div className="flex flex-col w-[360px] h-[504px] fixed bottom-0 right-[390px] overflow-auto">
                    <div style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} className="flex gap-5 justify-between cursor-pointer items-start px-7 py-5 w-full text-lg text-white bg-violet-800">
                        <div className="my-auto">{userData?.firstName} {userData?.lastName}</div>
                        <img
                            onClick={() => { setMessageDetailsOpen(false) }}
                            loading="lazy"
                            src={userData.profilePicture ? userData.profilePicture : professionalPicture}
                            className="shrink-0 self-start w-6 aspect-square"
                        />
                    </div>
                    <div className="flex flex-col px-2.5 pt-7 pb-8 w-full bg-zinc-300">
                        <img
                            loading="lazy"
                            src={userData.profilePicture ? userData.profilePicture : professionalPicture}
                            className="self-center max-w-full border-4 border-solid aspect-square border-neutral-400 w-[100px]"
                        />
                        <div className="self-center mt-3 text-base font-medium text-zinc-800">
                            {userData?.firstName} {userData?.lastName}
                        </div>
                        <div className="self-center text-base text-ellipsis text-neutral-500">
                            Friend
                        </div>
                        <div className={{ height: "200px" }}>
                            <ScrollToBottom className={ROOT_CSS}>
                                <div className="flex flex-col px-12 pt-[12px] md:pt-[122px] max-md:px-5 h-auto max-md:mt-10 max-md:max-w-full bg-transparent">
                                    {
                                        messagesList.map((message, index) => (
                                            <div
                                                key={index}
                                                className={`flex flex-col my-3 py-2.5 max-w-[400px] pr-8 pl-4 ${message.senderId == id ? "border-blue-700 border-opacity-10 self-start items-start rounded-xl bg-orange-600 bg-opacity-10 max-md:pr-5" : "border-opacity-10 items-end rounded-xl max-md:pr-5 bg-blue-700 self-end bg-opacity-10"
                                                    }`}
                                            >
                                                <div className="text-xs text-zinc-600">
                                                    {moment(message.createdAt).format("hh:mm A")}
                                                </div>
                                                <div className="mt-1.5 text-xl text-black">
                                                    {message.message}
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </ScrollToBottom>
                        </div>

                        <div className="flex gap-3 mt-4 text-sm text-neutral-500">
                            <input value={message} onChange={(e) => { setMessage(e.target.value) }} className="grow justify-center items-start px-3 py-3.5 rounded-xl border border-solid bg-neutral-200 border-stone-300 w-fit" type="text" name="" id="" placeholder="Type Here" />
                            <img
                                loading="lazy"
                                onClick={sendMessage}
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c674ace3de69631be955fbcccb70e52f71567d3ac9a71ecb5ee40fd361d66209?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 w-16 aspect-[1.59] cursor-pointer"
                            />
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default AsideMessages