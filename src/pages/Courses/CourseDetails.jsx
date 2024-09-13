import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { failedToast } from "../../utils/toastNotifications";
import { useParams, useNavigate } from 'react-router-dom';

export default function CourseDetails() {
    const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

    const Navigate = useNavigate();
    const token = useSelector(state => state.profile.jwt);
    const { id } = useParams(); // Access path parameter
    const [data, setData] = useState({})
    const [asideData, setAsideData] = useState([])
    const [userData, setUserData] = useState({});


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

    const getModuleDetails = async () => {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/courses/modules/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((res) => {
            setData(res.data.module);
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    useEffect(() => {
        getModuleDetails();
    }, [id]);

    useEffect(() => {
        if (data.courseId) {
            getCourses();
        }
    }, [data]);

    const getCourses = async () => {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/courses/modules?id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((res) => {
            setAsideData(res.data.module)
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    return (
        <div className="flex flex-col px-5 mb-20">
            <div className="mt-12 w-full text-4xl font-bold text-neutral-700 max-md:mt-10 max-md:max-w-full">
                {data?.name}
            </div>
            <div className="mt-2 w-full text-base text-neutral-500 max-md:max-w-full">
                {data?.descriptionShort}
            </div>
            <div className="mt-10 w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 justify-center">
                    <div className="flex flex-col max-md:ml-0 max-w-[800px] w-full max-md:w-full">
                        <div className="flex flex-col grow max-md:mt-7 max-md:max-w-full">
                            {
                                data?.videoLink && <video className="mt-6" src={data?.videoLink} controls />
                            }
                            <div className="flex gap-5 mt-7 w-full text-sm text-violet-800 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                                <div className="flex gap-2.5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/20aad50a5cff051f05769958fdcb7f595b06c00e216e73a7d2fb33271ac2655a?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 aspect-square w-[35px]"
                                    />
                                    <div className="my-auto">
                                        {data?.views} People have attended this session
                                    </div>
                                </div>
                            </div>
                            <div className="mt-11 text-2xl font-bold text-neutral-700 max-md:mt-10 max-md:max-w-full">
                                More About This Session
                            </div>
                            <div className="mt-5 text-base text-neutral-500 max-md:max-w-full">
                                {data?.descriptionLong}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[400px] max-md:ml-0 max-md:w-full">
                        {
                            userData.isAdmin && <button
                                onClick={() => { Navigate(`/dashboard/video?id=${id}`) }}
                                className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-violet-800 border border-transparent hover:bg-violet-700 focus:outline-none focus:ring-offset-2 focus:ring-violet-700 rounded-2xl w-[200px] mb-5 mx-auto"
                            >
                                Trip in video
                            </button>
                        }
                        <div className="flex flex-col items-start py-8 pl-10 w-[400px] rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:mt-7 ">

                            <div className="text-xl font-bold text-neutral-700 max-md:max-w-full">
                                Other Videos
                            </div>
                            {
                                asideData?.map((AsideItems) => {
                                    if (AsideItems.id !== id) {
                                        return (
                                            <div onClick={() => { Navigate(`/dashboard/course/details/${AsideItems._id}`) }} key={AsideItems.id} className="flex gap-5 mt-10 max-md:flex-wrap max-md:mt-10 cursor-pointer">
                                                <img
                                                    loading="lazy"
                                                    src={AsideItems.imageLink}
                                                    className="shrink-0 my-auto border-violet-800 border-solid aspect-[1.16] border-[3px] w-[70px]"
                                                />
                                                <div className="flex flex-col py-1 max-md:max-w-full">
                                                    <div className="text-lg font-semibold text-violet-800 max-md:max-w-full">
                                                        {AsideItems.name}
                                                    </div>
                                                    <div className="mt-2.5 text-base whitespace-nowrap text-ellipsis text-neutral-500 max-md:max-w-full">
                                                        {AsideItems.descriptionShort > 30 ? AsideItems.descriptionShort.slice(0, 30) + '...' : AsideItems.descriptionShort}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}