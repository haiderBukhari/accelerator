import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { failedToast, successToast } from "../../utils/toastNotifications";
import CreateCourseDialog from "../../components/courses/createCourse";
import { BookOpenCheck, Trash2 } from 'lucide-react';
import DrippingCourseDialog from "../../components/courses/DrippingCourseDialog";

export default function Courses({ groupId }) {
    const Navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const token = useSelector(state => state.profile.jwt);
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [data, setData] = useState([])
    const [fetchAgain, setFetchAgain] = useState(false);
    const [selectedModules, setSelectedModules] = useState([])

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

    const tripVideo = async (moduleId) => {
        await axios.put(`${import.meta.env.VITE_APP_BACKEND_URL}/courses/modules/${moduleId}`, {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(() => {
            successToast("Module Triped")
            getCourses();
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    useEffect(() => {
        getUserData();
    }, [])


    const getCourses = async () => {
        setData([])
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/courses?${groupId ? `groupId=${groupId}` : ''}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((res) => {
            console.log(res.data.courses)
            setData(res.data.courses)
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    const DeleteCourses = async (id) => {
        await axios.delete(`${import.meta.env.VITE_APP_BACKEND_URL}/courses?id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(() => {
            setFetchAgain(!fetchAgain)
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    useEffect(() => {
        getCourses();
    }, [fetchAgain])

    const isUnlockable = (unLockDays, userCreatedAt) => {
        if (!userCreatedAt) {
            return 1;
        }

        // Parse the user's joining date and normalize it to remove time
        const userJoinDate = new Date(userCreatedAt);
        userJoinDate.setHours(0, 0, 0, 0);

        // Get the current date and normalize it
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);

        // Calculate the number of days since the user's joining date
        const daysSinceJoining = Math.floor((currentDate - userJoinDate) / (1000 * 60 * 60 * 24));

        return daysSinceJoining >= unLockDays;
    };

    return (
        <div className={`flex flex-col px-5 pb-10 ${!groupId ? 'bg-neutral-100' : 'pt-3'} min-h-screen`}>
            <div className="flex justify-between items-center">
                <div>
                    <div className="mt-10 w-full text-4xl font-bold text-neutral-700 max-md:mt-10 max-md:max-w-full">
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
                        <div className="flex flex-row justify-between w-full items-center  cursor-pointer">
                            <div className="w-full">
                                <div className="mt-8 text-3xl font-bold text-violet-800 max-md:mt-10 max-md:max-w-full">
                                    {Item.name}
                                </div>
                                {
                                    userData.isAdmin &&
                                    <div className="w-full mx-auto flex justify-center items-center my-9">
                                        <button onClick={() => { Navigate(`/dashboard/modules?title=${Item.name}&${groupId ? `groupId=${groupId ?? ''}` : ''}`) }} className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-red-800 border border-transparent hover:bg-red-700 focus:outline-none focus:ring-offset-2 focus:ring-red-700 rounded-2xl hover:opacity-80">Add New Module</button>

                                        <button onClick={() => { Navigate(`/dashboard/quiz?title=${Item.name}&${groupId ? `groupId=${groupId ?? ''}` : ''}`) }} className="inline-flex items-center justify-center px-6 py-2 text-sm ml-5 font-medium leading-5 text-white transition duration-150 ease-in-out bg-red-800 border border-transparent hover:bg-red-700 focus:outline-none focus:ring-offset-2 focus:ring-red-700 rounded-2xl hover:opacity-80">Add New Quiz</button>

                                        <button onClick={() => {
                                            console.log(Item.modules)
                                            setOpen1(!open1)
                                            setSelectedModules(Item.modules)
                                        }} className="inline-flex items-center justify-center px-6 py-2 text-sm ml-5 font-medium leading-5 text-white transition duration-150 ease-in-out bg-red-800 border border-transparent hover:bg-red-700 focus:outline-none focus:ring-offset-2 focus:ring-red-700 rounded-2xl hover:opacity-80">Driping Time</button>
                                    </div>
                                }
                            </div>
                            <Trash2 onClick={() => { DeleteCourses(Item.id) }} className="text-red-900 text-5xl" />
                        </div>
                        {
                            Item.modules?.map((ItemDetails) => {
                                return (
                                    <>
                                        {(userData.isAdmin || (!userData.isAdmin && ItemDetails.isTrip)) &&
                                            <div key={ItemDetails.id}>
                                                <div className="flex gap-5 justify-between items-center mt-6 w-full max-lg:flex-wrap max-lg:max-w-full">
                                                    <div className="self-stretch w-full">
                                                        <div className="flex w-full items-center gap-5 max-lg:flex-col max-md:gap-0">
                                                            <div className="flex items-center flex-col max-lg:ml-0 max-lg:w-full">
                                                                <img
                                                                    loading="lazy"
                                                                    src={ItemDetails.imageLink}
                                                                    className="grow shrink-0 w-full min-w-[150px] object-cover max-w-[160px] border-solid aspect-[1.49] border-[3px] border-neutral-400  max-md:mt-5 rounded-xl max-lg:object-cover max-lg:max-w-[600px]"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col ml-1 w-full max-md:ml-0 max-md:w-full">
                                                                <div className="flex flex-col self-stretch my-auto max-md:mt-9 max-md:max-w-full">
                                                                    <div className="text-lg font-semibold text-zinc-600 max-md:max-w-full max-w-[500px]">
                                                                        {ItemDetails.name}
                                                                    </div>
                                                                    <div className="mt-1 text-base max-md:text-sm text-neutral-500 max-md:max-w-full max-w-[700px] line-clamp-3">
                                                                        {ItemDetails.descriptionShort}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {
                                                        (userData.isAdmin && !ItemDetails.isTrip) && <button onClick={(e) => {
                                                            e.stopPropagation();
                                                            tripVideo(ItemDetails.id)
                                                        }}
                                                            className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-violet-800 border border-transparent hover:bg-violet-700 focus:outline-none focus:ring-offset-2 focus:ring-violet-700 rounded-2xl w-[200px] mb-5 mx-auto"
                                                        >
                                                            Trip video
                                                        </button>
                                                    }
                                                    <div className="flex w-full max-w-[130px] items-center gap-5 self-stretch my-auto text-base">
                                                        <div className="flex gap-2.5 text-neutral-500">
                                                            <img
                                                                loading="lazy"
                                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0614512d2c2e5ed7dc6284c81281b6935599b48676637384b139251f7567543d?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                                className="shrink-0 w-6 aspect-square"
                                                            />
                                                            <div className="my-auto">{ItemDetails.views} Attendies</div>
                                                        </div>
                                                    </div>
                                                    {
                                                        isUnlockable(ItemDetails.unLockDays, userData?.createdAt) ? <img
                                                            onClick={() => { Navigate(`/dashboard/course/details/${ItemDetails.id}`) }}
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7c99789c18d7823e75d0ea2e0789fa546a117a0f4744c541ab08390c619b505?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                            className="shrink-0 self-stretch my-auto aspect-[1.25] w-full max-w-[60px] max-md:max-w-[50px] cursor-pointer"
                                                        /> : <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7c99789c18d7823e75d0ea2e0789fa546a117a0f4744c541ab08390c619b505?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                            className="shrink-0 self-stretch my-auto aspect-[1.25] w-full max-w-[60px] max-md:max-w-[50px] cursor-pointer"
                                                        />
                                                    }
                                                </div>
                                                <div className="shrink-0 self-center mt-7 h-[1px] border border-solid border-[#AAAAAA] max-w-[90%] w-full mx-auto" />
                                            </div>

                                        }
                                    </>

                                )
                            })
                        }
                        {
                            Item.quizzes?.map((ItemDetails1) => (
                                <div key={ItemDetails1._id}>
                                    <div className="flex gap-5 justify-between items-center mt-6 w-full max-lg:flex-wrap max-lg:max-w-full pl-2">
                                        <div className="self-stretch w-full">
                                            <div className="flex w-full items-center gap-5 max-lg:flex-col max-md:gap-0">
                                                <div className="flex items-center flex-row max-lg:ml-0 max-lg:w-full">
                                                    <BookOpenCheck className="mr-3" />
                                                    <h1 className="font-semibold">Quiz</h1>
                                                </div>
                                                <div className="flex flex-col ml-1 w-full max-md:ml-0 max-md:w-full">
                                                    <div className="flex flex-col self-stretch my-auto max-md:mt-9 max-md:max-w-full">
                                                        <div className="text-lg font-semibold text-zinc-600 max-md:max-w-full max-w-[500px]">
                                                            {ItemDetails1.title}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <img
                                            onClick={() => { Navigate(`/dashboard/quiz/attempt?id=${ItemDetails1._id}`) }}
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7c99789c18d7823e75d0ea2e0789fa546a117a0f4744c541ab08390c619b505?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 self-stretch my-auto aspect-[1.25] w-full max-w-[60px] max-md:max-w-[50px] cursor-pointer"
                                        />
                                    </div>
                                    <div className="shrink-0 self-center mt-7 h-[1px] border border-solid border-[#AAAAAA] max-w-[90%] w-full mx-auto" />
                                </div>
                            ))
                        }
                    </div>
                ))
            }
            <CreateCourseDialog open={open} setOpen={setOpen} groupId={groupId} />
            <DrippingCourseDialog open={open1} setOpen={setOpen1} module={selectedModules} setSelectedModules={setSelectedModules} />
        </div>
    );
}

