import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { failedToast } from "../../utils/toastNotifications";
import CreateCourseDialog from "../../components/courses/createCourse";
export default function Courses() {
    const Navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const token = useSelector(state => state.profile.jwt);
    const [open, setOpen] = useState(false)
    const [data, setData] = useState([])

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


    const getCourses = async () => {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/courses`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((res) => {
            setData(res.data.courses)
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    useEffect(() => {
        getCourses();
    }, [])

    return (
        <div className="flex flex-col px-5 pb-10 pt-3 bg-neutral-100 min-h-screen">
            <div className="flex justify-between">
                <div>
                    <div className="mt-14 w-full text-4xl font-bold text-neutral-700 max-md:mt-10 max-md:max-w-full">
                        Course
                    </div>
                    <div className="mt-4 w-full text-xl text-zinc-500 max-md:max-w-full">
                        Are you ready to learn something new?{" "}
                    </div>
                </div>
                {
                    userData.isAdmin && <div>
                        <button
                            onClick={() => setOpen(!open)}
                            className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-violet-800 border border-transparent hover:bg-violet-700 focus:outline-none focus:ring-offset-2 focus:ring-violet-700 rounded-2xl"
                        >
                            Add New Course
                        </button>
                    </div>
                }
            </div>
            {
                data?.map((Item) => (
                    <div key={Item.name}>
                        <div className="mt-14 text-3xl font-bold text-violet-800 max-md:mt-10 max-md:max-w-full">
                            {Item.name}
                        </div>
                        <div className="w-full flex justify-between my-5">
                            <button onClick={() => { Navigate('/dashboard/modules') }} className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-red-800 border border-transparent hover:bg-red-700 focus:outline-none focus:ring-offset-2 focus:ring-red-700 rounded-2xl mx-auto">Add New Module</button>
                        </div>
                        {
                            Item.modules.map((ItemDetails) => (
                                <div key={ItemDetails.id}>
                                    <div className="flex gap-5 justify-between items-center px-px mt-6 w-full max-md:flex-wrap max-md:max-w-full">
                                        <div className="self-stretch w-full">
                                            <div className="flex w-full items-center gap-5 max-md:flex-col max-md:gap-0">
                                                <div className="flex items-center flex-col w-[28%] max-md:ml-0 max-md:w-full">
                                                    <img
                                                        loading="lazy"
                                                        src={ItemDetails.imageLink}
                                                        className="grow shrink-0 max-w-full border-solid aspect-[1.49] border-[3px] border-neutral-400 w-[150px] max-md:mt-5"
                                                    />
                                                </div>
                                                <div className="flex flex-col ml-1 w-full max-md:ml-0 max-md:w-full">
                                                    <div className="flex flex-col self-stretch my-auto max-md:mt-9 max-md:max-w-full">
                                                        <div className="text-lg font-semibold text-zinc-600 max-md:max-w-full">
                                                            {ItemDetails.name}
                                                        </div>
                                                        <div className="mt-1 text-sm text-neutral-500 max-md:max-w-full">
                                                            {ItemDetails.descriptionShort}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex w-6/12 md:w-2/12 items-center gap-5 self-stretch my-auto text-base">
                                            <div className="flex gap-2.5 text-neutral-500">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0614512d2c2e5ed7dc6284c81281b6935599b48676637384b139251f7567543d?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                    className="shrink-0 w-6 aspect-square"
                                                />
                                                <div className="my-auto">{ItemDetails.views} Attendies</div>
                                            </div>
                                        </div>
                                        <img
                                            onClick={() => { Navigate(`/dashboard/course/details?id=${ItemDetails.id}`) }}
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7c99789c18d7823e75d0ea2e0789fa546a117a0f4744c541ab08390c619b505?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 self-stretch my-auto aspect-[1.25] w-[75px] cursor-pointer"
                                        />
                                    </div>
                                    <div className="shrink-0 self-center mt-7 h-[1px] border border-solid bg-neutral-400 border-neutral-400 max-w-[80%] w-full mx-auto" />
                                </div>
                            ))
                        }
                    </div>
                ))
            }
            {/* <div className="mt-14 text-3xl font-bold text-violet-800 max-md:mt-10 max-md:max-w-full">
                Mobile App Development
            </div>
            {
                new Array(10).fill(1).map((item) => (
                    
                ))
            } */}
            <CreateCourseDialog open={open} setOpen={setOpen} />
        </div>
    );
}

