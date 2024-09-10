import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { failedToast } from "../../utils/toastNotifications";
import { useSelector } from "react-redux";
import professionalPicture from '../../assets/professionalPicture.jpeg'
import { useNavigate } from "react-router-dom";
import { socket } from "../../socket";
import { useParams } from 'react-router-dom';
import moment from "moment";
import ScrollToBottom from 'react-scroll-to-bottom';
import { css } from '@emotion/react';

export default function Messages() {
    const token = useSelector(state => state.profile.jwt);
    const [userList, setUserList] = useState([])
    const [tempUserList, setTempUserList] = useState([])
    const [message, setMessage] = useState('')
    const [userData, setUserData] = useState({})
    const [messagesList, setMessagesList] = useState([]);
    const Navigate = useNavigate();
    const [isConnected, setIsConnected] = useState(socket.connected);
    const { id } = useParams();

    const ROOT_CSS = css({
        height: 500,
        width: 400
    });

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
        socket.on('recieve_message', getMessages)
    }, [])

    const sendMessage = () => {
        socket.emit('send_message', { message: message, id: id })
        setMessage('')
    }

    async function getFriends() {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/chat/friends`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setUserList(Item.data);
            setTempUserList(Item.data);
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

    async function getMessages() {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/messages?secondPersonId=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setMessagesList(Item.data);
            console.log(Item.data)
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    useEffect(() => {
        getFriends();
        getUserInformation();
        getMessages();
    }, [id])

    return (
        <div className="w-full">
            <div className="flex max-md:flex-col max-md:gap-0 h-full w-full min-h-[100vh]">
                <div className="flex-col w-6/12 max-md:ml-0 max-md:w-full hidden md:flex">
                    <div className="flex flex-col grow px-6 pt-11 pb-20 w-full text-base bg-[#F1F1F1] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 items-start px-5 py-3 rounded-xl border border-solid bg-neutral-200 border-stone-300 text-neutral-500 max-md:pr-5">
                            <input onChange={(e) => {
                                const filteredList = userList.filter((Item) => Item.firstName.toLowerCase().includes(e.target.value.toLowerCase()) || Item.lastName.toLowerCase().includes(e.target.value.toLowerCase()))
                                setTempUserList(filteredList)
                            }} className="flex-auto my-auto bg-transparent outline-none" type='text' placeholder="Search Friends" />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e30962ab32bdd75648fa143798e896d0b14004c96254bf8aa5f3aa42c5e9269?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 self-start aspect-square w-[23px] cursor-pointer"
                            />
                        </div>
                        {
                            tempUserList.map((Item, Index) => (
                                <>
                                    <div onClick={() => { Navigate(`/dashboard/messages/${Item.friendId}`) }} className="flex gap-5 pr-2 mt-5 cursor-pointer">
                                        <img
                                            loading="lazy"
                                            src={Item.photo ? Item.photo : professionalPicture}
                                            className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[50px] h-[50px]"
                                        />
                                        <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                                            <div className="font-medium text-zinc-800">{Item.firstName} {Item.lastName}</div>
                                            <div className="whitespace-nowrap text-ellipsis text-neutral-500">
                                                {Item.latestMessage.length > 40 ? Item.latestMessage.slice(0, 24) + '...' : Item.latestMessage}
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        Index !== userList.length - 1 && <div className="shrink-0 mt-5 h-px border border-solid bg-neutral-400 border-neutral-400" />
                                    }
                                </>
                            ))
                        }
                        <div style={{ height: '2px' }} className="self-center mt-10 w-60 bg-neutral-400 hidden"></div>
                        <div className="self-center font-bold text-neutral-400 hidden">End</div>
                    </div>
                </div>
                <div className="flex flex-col w-full ">
                    <div className="flex flex-col max-md:max-w-full justify-between">
                        <div className="">
                            <div className="flex gap-5 justify-between px-12 py-6 w-full bg-[#F1F1F1] rounded-2xl md:rounded-none max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                <div className="flex gap-5 text-lg">
                                    <img
                                        loading="lazy"
                                        src={userData.profilePicture ? userData.profilePicture : professionalPicture}
                                        className="shrink-0 border-4 border-solid aspect-[1.02] border-neutral-400 w-[60px] h-[60px]"
                                    />
                                    <div className="flex flex-col md:py-1.5 my-auto">
                                        <div className="font-medium text-zinc-800">{userData?.firstName} {userData?.lastName}</div>
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-between my-auto">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0875e08c910b2ca80c6353466fd26d849803614b91b12ed0f6c0755eb0f7f694?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 aspect-square w-[25px] md:w-[35px]"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/791b92829cb2704be8ebe8c7af937be2f83b1c99aa55482a7d4ffbe2df299e8f?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 aspect-square w-[25px] md:w-[35px]"
                                    />
                                    <div className="shrink-0 self-start h-[33px] w-[7px]" />
                                </div>
                            </div>
                        </div>
                        <ScrollToBottom className={ROOT_CSS}>
                            <div className="flex flex-col px-12 pt-[12px] md:pt-[122px] max-md:px-5 h-[600px] max-md:mt-10 max-md:max-w-full bg-transparent">
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
                        <div className="flex gap-5 self-center pt-5 md:pt-20 md:max-md:flex-wrap max-md:mt-10 w-full px-5 pb-5 bg-transparent">
                            <div className="flex flex-auto gap-5 justify-between py-3.5 rounded-xl border border-solid bg-[#e9e9e9] border-stone-300 md:max-md:flex-wrap w-full pr-10 pl-5">
                                <input value={message} onChange={(e) => { setMessage(e.target.value) }} className="my-auto text-lg text-neutral-500 w-full bg-[#e9e9e9] outline-none" type="text" name="" id="" placeholder="Type Here" />
                                <div className="flex gap-2.5 justify-between">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ddfcc9b84d86a41700fda54352c1076c20ed5ff21004f6c63a60947ab4dd937?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 w-6 aspect-square cursor-pointer"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/da329a985978015750535007642553b587703e072af3c1b5e86da2d0bfc23447?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 w-6 aspect-square cursor-pointer"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3994a18ed97f75af9bd494ec21dfed3503d640428250ae088db060749297cce5?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 w-6 aspect-square cursor-pointer"
                                    />
                                </div>
                            </div>
                            <img
                                onClick={sendMessage}
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/39f6a830627c4724d4e4b9a1c842273a5c29224950ceb40bbb983f57c759b036?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 w-16 aspect-[1.28] cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
