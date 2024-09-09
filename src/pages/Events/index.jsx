import { useEffect, useState } from "react";
import { failedToast } from "../../utils/toastNotifications";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ViewEvent from "./viewEvent";

export default function Events() {
    const [userData, setUserData] = useState({});
    const token = useSelector(state => state.profile.jwt);
    const Navigate = useNavigate();
    const [eventsData, setEventsData] = useState([]);
    const [details, setDetails] = useState({})
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(true)

    async function getUserData() {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/auth/userData`, {
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
        getUserData();
    }, [])

    async function getNewEvents() {
        setLoading(true)
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/events`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setEventsData(Item.data.events);
            setLoading(Item.data.events.length ? true : false)
        }).catch((err) => {
            setLoading(false)
            return failedToast(err.response.data.error);
        });
    }
    useEffect(() => {
        getNewEvents();
    }, [open])

    return (
        <div className="flex flex-col px-5 w-full pt-6 pb-10">
            <div className="flex justify-between items-center">
                <div className="mt-12 w-full text-4xl font-bold text-neutral-700 max-md:mt-10 max-md:max-w-full">
                    Event Calendar
                </div>
                {
                    userData.isAdmin && <button
                        onClick={() => Navigate('/dashboard/events/create')}
                        className="inline-flex items-center justify-center w-[170px] px-6 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-violet-800 border border-transparent hover:bg-violet-700 focus:outline-none focus:ring-offset-2 focus:ring-violet-700 rounded-2xl"
                    >
                        Add New Event
                    </button>
                }
            </div>
            <div className="flex items-center gap-5 w-full max-md:flex-wrap max-md:max-w-full mb-5">
                <div className="flex-auto self-start mt-5 text-xl text-zinc-500">
                    Click The Event To See Their Details.
                </div>
                <div className="flex gap-5 justify-between">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cc554df695616b71dd24e06a5ac3b0ececb2631a199787a554f1ebdab0ce1d7?apiKey=cf358c329e0d49a792d02d32277323ef&"
                        className="shrink-0 w-10 aspect-square"
                    />
                </div>
            </div>
            <div className="flex flex-col px-7 py-7 mt-9 w-full text-lg rounded-2xl border border-solid bg-neutral-200 border-neutral-400 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between w-full font-bold text-neutral-700 max-md:flex-wrap max-md:mr-0.5 max-md:max-w-full">
                    <div className="flex gap-5 justify-between">
                        <div className="flex items-center gap-2 whitespace-nowrap">
                            <div>Date</div>
                        </div>
                        <div className="pl-[67px]">Event Name</div>
                    </div>
                    <div className="flex gap-5 justify-center max-md:flex-wrap max-md:max-w-full">
                        <div>People Attending</div>
                        <div className="pr-9">InPerson/Virtual</div>
                        <div>Action</div>
                    </div>
                </div>
                {
                    eventsData?.map((Item, index) => (
                        <div key={Item._id}>
                            <div className="flex gap-5 justify-between mt-6 w-full max-md:flex-wrap max-md:max-w-full">
                                <div className="flex gap-5 w-[600px]">
                                    <div className="font-bold text-violet-800 w-[110px]">{Item.startDate.slice(0, 10)}</div>
                                    <div className="text-neutral-500 ">{Item.name}</div>
                                </div>
                                <div className="flex gap-5 justify-between px-0.5 py-px max-md:flex-wrap max-md:max-w-full">
                                    <div className="my-auto text-neutral-500 pr-20">{Item.attendingPeoples.length}</div>
                                    <div className="flex gap-5 justify-between text-violet-800 max-md:flex-wrap max-md:max-w-full">
                                        <div className="text-neutral-500 pr-7">{Item.eventType}</div>
                                        <div onClick={() => { setDetails(Item); setOpen(!open) }} className="my-auto font-bold cursor-pointer">See Details</div>
                                    </div>
                                </div>
                            </div>
                            {
                                eventsData.length - 1 !== index && <div className="shrink-0 mt-2 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
                            }
                        </div>
                    ))
                }

            </div>
            {
                !loading && eventsData.length === 0 && <div className="text-center mt-10 text-2xl">No New Event Yet</div>
            }
            {
                loading && <div className="text-center mt-10 text-2xl">Loading...</div>
            }
            <ViewEvent open={open} setOpen={setOpen} details={details} />
        </div>
    );
}

