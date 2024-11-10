import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import SettingDialog from './profile/SettingDialog';
import { useSelector } from 'react-redux';
import { failedToast } from '../utils/toastNotifications';
import axios from 'axios';
import ViewEvent from '../pages/Events/viewEvent';
import defaultPerson from '../assets/professionalPicture.jpeg'
import NotificationsDialog from './profile/NotificationsDialog';
import { useNavigate } from 'react-router-dom';

export default function AsideSettings() {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open1, setOpen1] = useState(false);
    const firstName = useSelector(state => state.profile.firstName);
    const lastName = useSelector(state => state.profile.lastName);
    const profilePicture = useSelector(state => state.profile.profilePicture);
    const token = useSelector(state => state.profile.jwt);
    const userId = useSelector(state => state.profile.id);
    const [eventsData, setEventsData] = useState([]);
    const [details, setDetails] = useState({})
    const [notifications, setNotifications] = useState([])
    const [unreadNotifications, setUnReadNotifications] = useState(0)
    const Navigate = useNavigate();

    async function getNotifications() {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/notification`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setUnReadNotifications(Item.data.unreadNotifications)
            setNotifications(Item.data.notifications)
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    async function getNewEvents() {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/events`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setEventsData(Item.data.events);
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    useEffect(() => {
        getNotifications();
    }, [open2])
    
    useEffect(() => {
        getNewEvents();
    }, [])


    return (
        <div className="hidden flex-col px-4 xl:px-9 py-10 w-full bg-neutral-200 max-w-[300px] xl:max-w-[450px] lg:flex">
            <div className="flex gap-5">
                <div className="flex gap-2 w-full max-w-[30%] justify-between">
                    <div onClick={()=>{setOpen2(!open2)}} className='relative cursor-pointer'>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/547142d9a722297aa5375ffeec2ac51228e396ace65520fe4c323cc9dc9cdc56?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 aspect-square w-[35px] xl:w-[45px]"
                        />
                        <div className='bg-red-500 absolute top-[-10px] max-md:top-[0px] right-[-3px] rounded-full flex justify-center items-center h-7 w-7 font-bold text-white text-center'>{unreadNotifications}</div>
                    </div>
                    <img
                        onClick={() => { setOpen(!open) }} 
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/44bac1ef3fcf5c5c8e6360efc056bd45ccc33e5414f6fdcb3d5a1a4d354909b9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                        className="shrink-0 aspect-square w-[35px] xl:w-[45px] cursor-pointer"
                    />
                </div>
                <div onClick={()=>{Navigate(`/dashboard/profile/${userId}`)}} className="flex gap-2 xl:gap-4 text-base font-medium rounded-lg xl:rounded-2xl border border-solid bg-neutral-200 border-neutral-400 text-zinc-800 cursor-pointer w-full max-w-[70%]">
                    <img
                        loading="lazy"
                        src={profilePicture || defaultPerson}
                        className="shrink-0 border-2 border-violet-800 border-solid aspect-square w-[35px] h-[35px] xl:w-[45px] xl:h-[45px] rounded-lg object-cover"
                    />
                    <div  className="flex items-center gap-2 xl:gap-4 pr-3 my-auto max-lg:text-xs">
                        <p className='text-xs xl:text-sm'>{firstName} {lastName} </p>
                        {/* <ChevronDown /> */}
                    </div>
                </div>
            </div>
            <div className="shrink-0 mt-4 h-px border border-solid bg-stone-300 border-stone-300" />
            <div className="mt-4  text-xl font-semibold text-zinc-500">
                Upcoming Event
            </div>
            {
                eventsData?.slice(0, 2)?.map((Item) => (
                    <div key={Item.startDate} style={{
                        backgroundImage: `url('${Item.backgroundImage ? Item.backgroundImage : 'https://cdn.builder.io/api/v1/image/assets/TEMP/403a90de513ea495029061c20fbfa2a9993fbc03768aa00cec53af7fce98cb94?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/403a90de513ea495029061c20fbfa2a9993fbc03768aa00cec53af7fce98cb94?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/403a90de513ea495029061c20fbfa2a9993fbc03768aa00cec53af7fce98cb94?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/403a90de513ea495029061c20fbfa2a9993fbc03768aa00cec53af7fce98cb94?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/403a90de513ea495029061c20fbfa2a9993fbc03768aa00cec53af7fce98cb94?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/403a90de513ea495029061c20fbfa2a9993fbc03768aa00cec53af7fce98cb94?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/403a90de513ea495029061c20fbfa2a9993fbc03768aa00cec53af7fce98cb94?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/403a90de513ea495029061c20fbfa2a9993fbc03768aa00cec53af7fce98cb94?apiKey=cf358c329e0d49a792d02d32277323ef&'}')`,
                        backgroundSize: "cover",          // Ensures the image covers the whole div
                        backgroundPosition: "center",     // Centers the image
                        backgroundRepeat: "no-repeat",     // Prevents the image from repeating                    
                    
                    }} className="flex relative flex-col pt-2.5 pr-2.5 pb-6 pl-8 mt-5 w-full h-auto text-white border border-solid xl:aspect-[1.52] border-neutral-400 rounded-2xl">
                        {/* <img
                            loading="lazy"
                            srcSet=""
                            className="object-cover absolute inset-0 size-full h-full"
                        /> */}
                        <div className="flex relative gap-5 items-start">
                            <div className="flex-auto self-end mt-18 text-xl xl:text-2xl font-semibold">
                                {Item.name}
                            </div>
                            <div className="flex flex-col self-start px-2 py-2 xl:px-2 xl:py-4 rounded-2xl border border-solid shadow-sm backdrop-blur-[2px] bg-white bg-opacity-30 border-stone-300 h-[70px] xl:h-[93px] leading-[105%] w-[137px]">
                                <div className="text-2xl xl:text-4xl font-semibold text-center">{Item.startDate.slice(8, 10)}</div>
                                <div className="mt-1 text-base xl:text-md font-medium text-center">{Item.startDate.slice(5, 7)} {Item.startDate.slice(0, 4)}</div>
                            </div>
                        </div>
                        <div className="relative mt-3.5 text-sm xl:text-base">
                            {Item.description}
                        </div>
                        <div onClick={() => { setDetails(Item); setOpen1(!open1) }} className="relative justify-center self-start px-8 py-1.5 mt-3 text-base font-medium leading-4 bg-violet-800 rounded-lg cursor-pointer">
                            RSVP Now
                        </div>
                    </div>
                ))
            }
            <a href="/dashboard/events" className="relative justify-center self-start px-8 text-base font-medium leading-4 bg-violet-800 rounded-lg cursor-pointer text-white py-3 mx-auto mt-6">Show More</a>
            <SettingDialog open={open} setOpen={setOpen} />
            <NotificationsDialog open={open2} setOpen={setOpen2} notifications={notifications} />
            <ViewEvent open={open1} setOpen={setOpen1} details={details} />
        </div>
    );
}

