import { Link, useLocation } from "react-router-dom";
import { BookHeart, LogOut, X, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { failedToast, successToast } from "../utils/toastNotifications";
import { useDispatch, useSelector } from "react-redux";
import { removeUserDetails } from "../features/profile";
import { useEffect, useState } from "react";
import axios from "axios";

const AsideNavbar = ({ navbarOpen, setNavbarOpen }) => {
    const Location = useLocation();
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const [joinedGroups, setJoinedGroups] = useState([]);
    const token = useSelector(state => state.profile.jwt);
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

    async function getGroupUsersData() {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/groups/joined-groups`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setJoinedGroups(Item.data)
            // setUserData(Item.data.user);
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    useEffect(() => {
        getUserData();
        getGroupUsersData();
    }, [])

    const hyperLinks = [
        {
            text: "Home",
            link: "/dashboard/home",
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/31fe732474b3cd470e51cd33867b7dd63b11bf99464a8de81beb7e9c779bb5d0?apiKey=cf358c329e0d49a792d02d32277323ef&",
        },
        {
            text: "Groups",
            link: "/dashboard/groups",
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/22346df9410844a3bd4e8ea70908c2a569b5dc0bf59f09742d8133fb6c6d91f8?apiKey=cf358c329e0d49a792d02d32277323ef&",
        },
        {
            text: "Messages",
            link: "/dashboard/messages",
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/01f27ec46e9f68e38e9897a84c01423867ec50985c1e86d04cce1d8c91b19dbd?apiKey=cf358c329e0d49a792d02d32277323ef&",
        },
        {
            text: "Members",
            link: "/dashboard/members",
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9dab5ce4cf73118bdb1f9345dedbf48125aeca7d659c66d8adfea466b40d9289?apiKey=cf358c329e0d49a792d02d32277323ef&",
        },
        {
            text: "Events",
            link: "/dashboard/events",
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac9437bfc447e96f03d542ae576d5cf16f7c5892d38597d1c0ec762192292eef?apiKey=cf358c329e0d49a792d02d32277323ef&",
        },
        {
            text: "Course",
            link: "/dashboard/course",
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/69ee2651fa910b81e6536f5ef03e9c310ce37a97a8805c988adeb3f7401d07d3?apiKey=cf358c329e0d49a792d02d32277323ef&",
        },
        {
            text: "Leaderboard",
            link: "/dashboard/leaderboard",
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9dab5ce4cf73118bdb1f9345dedbf48125aeca7d659c66d8adfea466b40d9289?apiKey=cf358c329e0d49a792d02d32277323ef&",
        },
    ];
    return (
        <div
            style={{ zIndex: 10 }}
            className={`flex-col py-5 w-full bg-neutral-200 max-w-[290px] md:max-w-[250px] lg:max-w-[240px]  max-md:h-full ${location.pathname === "/home"
                ? "flex"
                : `${navbarOpen ? "fixed overflow-auto top-0 left-0" : "hidden md:flex"
                } `
                }`}
        >
            <div className="flex flex-col items-start pl-9 md:pl-5 lg:pl-9 w-full text-2xl font-bold whitespace-nowrap text-zinc-500">
                <div
                    onClick={() => setNavbarOpen(false)}
                    className="flex justify-between w-full items-center pr-4"
                >
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f0ad6f027ff0eeb3bac787ac9569d03c2884dd446eab26215d7954c3e71f7f74?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0ad6f027ff0eeb3bac787ac9569d03c2884dd446eab26215d7954c3e71f7f74?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0ad6f027ff0eeb3bac787ac9569d03c2884dd446eab26215d7954c3e71f7f74?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0ad6f027ff0eeb3bac787ac9569d03c2884dd446eab26215d7954c3e71f7f74?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0ad6f027ff0eeb3bac787ac9569d03c2884dd446eab26215d7954c3e71f7f74?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0ad6f027ff0eeb3bac787ac9569d03c2884dd446eab26215d7954c3e71f7f74?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0ad6f027ff0eeb3bac787ac9569d03c2884dd446eab26215d7954c3e71f7f74?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0ad6f027ff0eeb3bac787ac9569d03c2884dd446eab26215d7954c3e71f7f74?apiKey=cf358c329e0d49a792d02d32277323ef&"
                        className="max-w-full aspect-[2.27] w-[115px]"
                    />
                    <X />
                </div>
                <div style={{ border: "1px solid #000", width: "full" }}></div>
                {/* <div className="shrink-0 mt-6 h-px border border-solid bg-black border-stone-300" /> */}
                <div className="mt-6 text-lg">Menu</div>
            </div>
            <div className="flex gap-5 items-start mt-5 text-base font-medium whitespace-nowrap text-zinc-600">
                <div className="flex flex-col grow shrink-0 mt-1 basis-0 w-fit">
                    {hyperLinks.map((hyperLink) => (
                        <div
                            className="flex items-center h-[35px] my-1 relative"
                            key={hyperLink.icon}
                        >
                            {(Location.pathname === hyperLink.link ||
                                location.pathname.includes(hyperLink.link)) && (
                                    <div className="shrink-0 w-1.5 bg-violet-800 h-[35px] absolute left-0 top-0" />
                                )}
                            <div
                                className={`flex gap-2.5 pr-5 ml-8 md:ml-5 ${Location.pathname === hyperLink.link
                                    ? "text-violet-800"
                                    : "text-neutral-500 w-18.5"
                                    }`}
                            >
                                <img
                                    loading="lazy"
                                    src={hyperLink.icon}
                                    className="shrink-0 aspect-square w-[20px]"
                                />
                                {
                                    hyperLink.text === 'Messages' ?
                                        <a href={hyperLink.link} className="text-sm">
                                            {hyperLink.text}
                                        </a> :
                                        <Link to={hyperLink.link} className="text-sm">
                                            {hyperLink.text}
                                        </Link>
                                }
                            </div>
                        </div>
                    ))}
                    {
                        userData.isAdmin &&
                        <div className="flex cursor-pointer items-center h-[35px] my-1">
                            <div onClick={() => { Navigate('/personal-section'); }}
                                className={`flex gap-2.5 pr-5 ml-8 md:ml-5 text-neutral-500 w-18.5 `}
                            >
                                <BookHeart className="w-[20px]" />
                                <p className="text-sm">
                                    Personal Section
                                </p>
                            </div>
                        </div>
                    }
                    {
                        (userData.isAdmin) &&
                        <div className="flex cursor-pointer items-center h-[35px] my-1">
                            <div onClick={() => { Navigate('/moderator'); }}
                                className={`flex gap-2.5 pr-5 ml-8 md:ml-5 text-neutral-500 w-18.5 `}
                            >
                                <Crown className="w-[20px]" />
                                <p className="text-sm">
                                    Moderators
                                </p>
                            </div>
                        </div>
                    }

                    {/* <div className="flex cursor-pointer items-center h-[35px] my-1">
                        <div
                            className={`flex gap-2.5 pr-5 ml-8 md:ml-5 text-neutral-500 w-18.5 `}
                        >
                            <LogOut className="w-[20px]" />
                            <p className="text-sm">
                                LogOut
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="flex flex-col items-start pl-9 md:pl-5 mt-5 w-full">
                <div className="shrink-0 h-px border border-solid bg-stone-300 border-stone-300" />
                <div className="z-10 shrink-0 h-px border border-solid bg-stone-300 border-stone-300" />
                <div className="mt-5 text-lg font-semibold text-zinc-500">
                    Your Groups
                </div>
                {
                    joinedGroups.map((Item, index) => (
                        <div className="cursor-pointer" onClick={() => { Navigate(`/dashboard/details/groups?id=${Item._id}`) }} key={Item.groupImage}>
                            <div className="flex gap-5 justify-between mt-6">
                                <div className="flex flex-col justify-center">
                                    <div className="flex gap-3 items-center">
                                        <div className="flex-1 relative flex-col justify-center items-center border-2 border-solid aspect-square w-[30%] ">
                                            <img
                                                loading="lazy"
                                                src={Item.groupImage}
                                                className="object-cover absolute inset-0 h-auto w-[100px]"
                                            />
                                        </div>
                                        <div className="w-[70%] flex-col my-auto">
                                            <div className="text-sm font-semibold text-zinc-800">
                                                {Item.name}
                                            </div>
                                            <div className="mt-1.5 text-xs text-ellipsis text-zinc-600">
                                                {Item.talksAbout.slice(0, 140)}
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="shrink-0 my-auto w-1 h-4" />
                            </div>
                            {
                                joinedGroups.length !== index + 1 && <>
                                    <div className="z-10 shrink-0 mt-2.5 max-w-full p-0 border-solid bg-neutral-400 w-full" />
                                    <div className="shrink-0 max-w-full h-px border border-solid bg-neutral-400 border-neutral-400 w-full" />
                                </>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AsideNavbar;
