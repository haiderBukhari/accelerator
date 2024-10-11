import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { failedToast } from "../../utils/toastNotifications";
import AddModerator from "./moderatorDialog";

export default function Moderators() {
    const [data, setData] = useState([])
    const token = useSelector(state => state.profile.jwt);
    const [open, setOpen] = useState(false)

    async function getLeaderBoardData() {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/auth/moderator`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setData(Item.data.moderators)
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    async function removeModerator(id) {
        await axios.delete(`${import.meta.env.VITE_APP_BACKEND_URL}/auth/moderator?id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(() => {
            setData([])
            getLeaderBoardData()
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }


    useEffect(() => {
        getLeaderBoardData();
    }, [])

    return (
        <div className="flex overflow-hidden flex-col mx-7">
            <div className="flex justify-between w-full mt-9 items-center">
                <div className="flex gap-5 self-start text-4xl font-bold whitespace-nowrap text-neutral-700 mb-10">
                    <div className="grow">Moderators</div>
                </div>
                <div onClick={()=>{setOpen(!open)}} className="self-start px-6 py-3 text-xl font-medium cursor-pointer leading-5 text-white bg-violet-800 rounded-2xl max-md:px-5 hover:opacity-75">
                    Add Moderator
                </div>
            </div>
            <div className="self-start mt-5 text-2xl font-bold text-zinc-600">
                Moderators
            </div>
            <div className="flex overflow-x-auto flex-col pt-6 pb-20 mt-7 w-full rounded-2xl border border-solid bg-neutral-200 mb-5 border-neutral-400 max-md:max-w-full">
                <div className="flex flex-col px-7 w-full text-lg max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-wrap gap-10 justify-between items-start w-full font-bold text-neutral-700 max-md:max-w-full">
                        <div className="flex justify-between w-full gap-10 items-start whitespace-nowrap">
                            <div className="w-1/8 w-full">No</div>
                            <div className="w-2/8 w-full">Name</div>
                            <div className="w-2/8 w-full text-center">Email</div>
                            <div className="w-1/8 w-full text-center">Recovery Email</div>
                            <div className="w-1/8 w-full text-center">Type</div>
                            <div className="w-1/8 w-full text-center">Settings</div>
                        </div>
                    </div>
                    {
                        data?.map((Item, index) => (
                            <div key={Item._id} className="flex justify-between w-full gap-10 items-start self-start mt-6">
                                <div className="w-1/8 w-full font-bold text-violet-800">{index + 1}</div>
                                <div className="w-2/8 w-full text-neutral-500">{Item.firstName} {Item.lastName}</div>
                                <div className="w-2/8 text-center w-full text-neutral-500">{Item.email}</div>
                                <div className="w-1/8 text-center w-full text-neutral-500">{Item.recoveryEmail}</div>
                                <div className="w-1/8 text-center w-full text-neutral-500">{Item.isAdmin? "Admin" : "Manager"}</div>
                                <button onClick={()=>{removeModerator(Item._id)}} className="w-1/8 self-center px-4 py-2 text-md font-medium cursor-pointer leading-5 text-white bg-red-500 rounded-2xl max-md:px-5 hover:opacity-75">
                                    Remove
                                </button>

                                {/* <div className="w-1/8 text-center w-full text-neutral-500">{Item.totalSum}</div> */}
                            </div>
                        ))
                    }
                </div>
            </div>
            <AddModerator open={open} setOpen={setOpen}/>
        </div>
    );
}