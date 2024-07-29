import { useEffect, useState } from "react";
import { failedToast, successToast } from "../../utils/toastNotifications";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CreateEvent() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [eventType, setEventType] = useState('Virtual')
    const [address, setAdress] = useState('')
    const [joiningLink, setJoiningLink] = useState('')
    const token = useSelector(state => state.profile.jwt);
    const Navigate = useNavigate();
    const [eventsData, setEventsData] = useState([]);

    const submitEvent = async () => {
        await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/events`, {
            name: name,
            description: description,
            startDate: startDate,
            endDate: endDate,
            eventType: eventType,
            address: address,
            joiningLink: joiningLink
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(() => {
            successToast("Event Created Successfully")
            Navigate('/dashboard/events')
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
        getNewEvents();
    }, [])

    return (
        <div className="flex flex-col px-5 mb-20">
            <div className="mt-14 w-full text-4xl font-bold text-neutral-700 max-md:mt-10 max-md:max-w-full">
                Create a New Event
            </div>
            <div className="mt-4 w-full text-base text-neutral-500 max-md:max-w-full">
                Fill the given fields.
            </div>
            <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col py-px text-base font-medium text-neutral-800 max-md:mt-10">
                            <div className="tracking-wider">Name </div>
                            <input onChange={(e) => { setName(e.target.value) }} value={name} className="px-5 py-3.5 mt-5 text-base tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-black outline-none" type="text" name="" id="" placeholder="i.e. Basics of HTML" />
                            <div className="mt-5 tracking-wider">Description</div>
                            <textarea onChange={(e) => { setDescription(e.target.value) }} value={description} rows={2} className="px-5 pt-3.5 pb-16 mt-3.5 text-base tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-neutral-400 outline-none" name="" id="" placeholder="Type here."></textarea>
                            <div className="mt-5 tracking-wider">Start Date/Time</div>
                            <input onChange={(e) => { setStartDate(e.target.value) }} value={startDate} className="px-5 py-3.5 mt-5 text-base tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-black outline-none" type="date" name="" id="" placeholder="DD MM YYYY" />
                            <div className="mt-5 tracking-wider">End Date/Time</div>
                            <input onChange={(e) => { setEndDate(e.target.value) }} value={endDate} className="px-5 py-3.5 mt-5 text-base tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-black outline-none" type="date" name="" id="" placeholder="DD MM YYYY" />
                            <div className="mt-6 tracking-wider">Event Type</div>
                            <select onChange={(e) => { setEventType(e.target.value) }} className="px-5 py-3.5 mt-3.5 text-base tracking-wider whitespace-nowrap rounded-xl border border-solid bg-zinc-300 border-stone-300 text-black outline-none" name="" id="">
                                <option value="Virtual">Virtual</option>
                                <option value="InPerson">InPerson</option>
                            </select>
                            <div className="mt-5 tracking-wider">Address (If In Person)</div>
                            <input onChange={(e) => { setAdress(e.target.value) }} value={address} className="px-5 py-3.5 mt-5 text-base tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-black outline-none" type="text" name="" id="" placeholder="Anywhere" />
                            <div className="mt-5 tracking-wider">
                                Joining Link (If Virtually)
                            </div>
                            <input onChange={(e) => { setJoiningLink(e.target.value) }} value={joiningLink} className="px-5 py-3.5 mt-5 text-base tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-black outline-none" type="text" name="" id="" placeholder="https://" />
                            <div onClick={submitEvent} className="px-6 py-2 mt-7 text-lg text-white bg-violet-800 rounded-2xl text-center cursor-pointer hover:opacity-55 max-md:px-5 w-[200px]">
                                Add Event
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[60%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-14 py-9 w-full rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                            <div className="mt-12 text-2xl font-semibold text-zinc-500 max-md:mt-10 max-md:max-w-full">
                                Recent Events
                            </div>
                            {
                                eventsData?.map((Item) => (
                                    <div key={Item.endDate} className="flex gap-5 justify-between px-6 py-5 mt-7 w-full rounded-2xl border border-solid bg-neutral-200 border-neutral-400 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                        <div className="flex gap-3.5">
                                            <div className="flex flex-col py-1 my-auto rounded-none">
                                                <div className="text-sm font-medium text-zinc-800">
                                                    {Item.name}
                                                </div>
                                                <div className="mt-2 text-xs text-neutral-500">
                                                    {Item.description.length > 30 ? Item.description.slice(0, 30) + '...' : Item.description}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-5 justify-between my-auto">
                                            <div className="flex gap-2.5 justify-between my-auto text-xs whitespace-nowrap text-neutral-400">
                                                <div className="my-auto">{Item.attendingPeoples.length} {"Attending"}</div>
                                            </div>
                                            <div className="px-5 py-1 text-md text-white bg-violet-800 rounded-lg border border-solid border-neutral-400">
                                                Attend event
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

