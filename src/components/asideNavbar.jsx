import { Link, useLocation } from "react-router-dom";
import { LogOut, X } from "lucide-react";
import { removeCookie } from "../utils/Cookies";
import { useNavigate } from "react-router-dom";
import { failedToast } from "../utils/toastNotifications";

const AsideNavbar = ({ navbarOpen, setNavbarOpen }) => {
    const Location = useLocation();
    const Navigate = useNavigate();
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
    ];
    return (
        <div
            style={{ zIndex: 10 }}
            className={`flex-col py-5 w-full bg-neutral-200 max-w-[290px]  ${location.pathname === "/home"
                    ? "flex"
                    : `${navbarOpen ? "fixed overflow-auto top-0 left-0" : "hidden md:flex"
                    } `
                }`}
        >
            <div className="flex flex-col items-start pl-9 w-full text-2xl font-bold whitespace-nowrap text-zinc-500">
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
                            className="flex items-center h-[35px] my-1"
                            key={hyperLink.icon}
                        >
                            {(Location.pathname === hyperLink.link ||
                                location.pathname.includes(hyperLink.link)) && (
                                    <div className="shrink-0 w-1.5 bg-violet-800 h-[35px]" />
                                )}
                            <div
                                className={`flex gap-2.5 pr-5 ml-8 ${Location.pathname === hyperLink.link
                                        ? "text-violet-800"
                                        : "text-neutral-500 w-18.5"
                                    }`}
                            >
                                <img
                                    loading="lazy"
                                    src={hyperLink.icon}
                                    className="shrink-0 aspect-square w-[20px]"
                                />
                                <Link to={hyperLink.link} className="text-sm">
                                    {hyperLink.text}
                                </Link>
                            </div>
                        </div>
                    ))}
                    <div className="flex cursor-pointer items-center h-[35px] my-1">
                        <div onClick={()=>{removeCookie('token'); Navigate('/'); failedToast("Successfully Loged out")}}
                            className={`flex gap-2.5 pr-5 ml-8 text-neutral-500 w-18.5 `}
                        >
                            <LogOut className="w-[20px]"/>
                            <p className="text-sm">
                                LogOut
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start pl-9 mt-5 w-full">
                <div className="shrink-0 h-px border border-solid bg-stone-300 border-stone-300" />
                <div className="z-10 shrink-0 h-px border border-solid bg-stone-300 border-stone-300" />
                <div className="mt-5 text-lg font-semibold text-zinc-500">
                    Your Groups
                </div>
                <div className="flex gap-5 justify-between mt-6">
                    <div className="flex flex-col justify-center">
                        <div className="flex gap-3">
                            <div className="flex overflow-hidden relative flex-col justify-center items-center border-2 border-solid aspect-square border-neutral-400 w-[59px]">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4677522fa7d0223d897b2057a59c811ad78cc88d6419a738c238bf8c22b5dac2?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4677522fa7d0223d897b2057a59c811ad78cc88d6419a738c238bf8c22b5dac2?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4677522fa7d0223d897b2057a59c811ad78cc88d6419a738c238bf8c22b5dac2?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4677522fa7d0223d897b2057a59c811ad78cc88d6419a738c238bf8c22b5dac2?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4677522fa7d0223d897b2057a59c811ad78cc88d6419a738c238bf8c22b5dac2?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4677522fa7d0223d897b2057a59c811ad78cc88d6419a738c238bf8c22b5dac2?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4677522fa7d0223d897b2057a59c811ad78cc88d6419a738c238bf8c22b5dac2?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4677522fa7d0223d897b2057a59c811ad78cc88d6419a738c238bf8c22b5dac2?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="object-cover absolute inset-0 size-full"
                                />
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4677522fa7d0223d897b2057a59c811ad78cc88d6419a738c238bf8c22b5dac2?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4677522fa7d0223d897b2057a59c811ad78cc88d6419a738c238bf8c22b5dac2?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4677522fa7d0223d897b2057a59c811ad78cc88d6419a738c238bf8c22b5dac2?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4677522fa7d0223d897b2057a59c811ad78cc88d6419a738c238bf8c22b5dac2?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4677522fa7d0223d897b2057a59c811ad78cc88d6419a738c238bf8c22b5dac2?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4677522fa7d0223d897b2057a59c811ad78cc88d6419a738c238bf8c22b5dac2?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4677522fa7d0223d897b2057a59c811ad78cc88d6419a738c238bf8c22b5dac2?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4677522fa7d0223d897b2057a59c811ad78cc88d6419a738c238bf8c22b5dac2?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="w-full border-2 border-solid aspect-square border-neutral-400"
                                />
                            </div>
                            <div className="flex flex-col my-auto">
                                <div className="text-sm font-semibold text-zinc-800">
                                    Ideation Station
                                </div>
                                <div className="mt-1.5 text-xs text-ellipsis text-zinc-600">
                                    The hub of groundbreaking ideas and concepts.
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shrink-0 my-auto w-1 h-4" />
                </div>
                <div className="z-10 shrink-0 mt-2.5 max-w-full p-0 border-solid bg-neutral-400 w-[311px]" />
                <div className="shrink-0 max-w-full h-px border border-solid bg-neutral-400 border-neutral-400 w-[311px]" />
                <div className="flex gap-5 justify-between mt-3">
                    <div className="flex flex-col justify-center">
                        <div className="flex gap-3">
                            <div className="flex overflow-hidden relative flex-col justify-center items-center border-2 border-solid aspect-square border-neutral-400 w-[59px]">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/13c5486537e351ed03d6fb1f99cd7b7d2a7608dd7679e4b3c2343d8a3e3c3c32?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/13c5486537e351ed03d6fb1f99cd7b7d2a7608dd7679e4b3c2343d8a3e3c3c32?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/13c5486537e351ed03d6fb1f99cd7b7d2a7608dd7679e4b3c2343d8a3e3c3c32?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/13c5486537e351ed03d6fb1f99cd7b7d2a7608dd7679e4b3c2343d8a3e3c3c32?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/13c5486537e351ed03d6fb1f99cd7b7d2a7608dd7679e4b3c2343d8a3e3c3c32?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/13c5486537e351ed03d6fb1f99cd7b7d2a7608dd7679e4b3c2343d8a3e3c3c32?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/13c5486537e351ed03d6fb1f99cd7b7d2a7608dd7679e4b3c2343d8a3e3c3c32?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/13c5486537e351ed03d6fb1f99cd7b7d2a7608dd7679e4b3c2343d8a3e3c3c32?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="object-cover absolute inset-0 size-full"
                                />
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/13c5486537e351ed03d6fb1f99cd7b7d2a7608dd7679e4b3c2343d8a3e3c3c32?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/13c5486537e351ed03d6fb1f99cd7b7d2a7608dd7679e4b3c2343d8a3e3c3c32?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/13c5486537e351ed03d6fb1f99cd7b7d2a7608dd7679e4b3c2343d8a3e3c3c32?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/13c5486537e351ed03d6fb1f99cd7b7d2a7608dd7679e4b3c2343d8a3e3c3c32?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/13c5486537e351ed03d6fb1f99cd7b7d2a7608dd7679e4b3c2343d8a3e3c3c32?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/13c5486537e351ed03d6fb1f99cd7b7d2a7608dd7679e4b3c2343d8a3e3c3c32?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/13c5486537e351ed03d6fb1f99cd7b7d2a7608dd7679e4b3c2343d8a3e3c3c32?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/13c5486537e351ed03d6fb1f99cd7b7d2a7608dd7679e4b3c2343d8a3e3c3c32?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="w-full border-2 border-solid aspect-square border-neutral-400"
                                />
                            </div>
                            <div className="flex flex-col my-auto">
                                <div className="text-sm font-semibold text-zinc-800">
                                    Build Masters
                                </div>
                                <div className="mt-1.5 text-xs text-ellipsis text-zinc-600">
                                    Mastering the art of seamless software construction.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shrink-0 my-auto w-1 h-4" />
                </div>
                <div className="mt-2 shrink-0 max-w-full h-px border border-solid bg-neutral-400 border-neutral-400 w-[311px]" />
                <div className="flex gap-5 justify-between mt-3">
                    <div className="flex flex-col justify-center">
                        <div className="flex gap-3">
                            <div className="flex overflow-hidden relative flex-col justify-center items-center border-2 border-solid aspect-square border-neutral-400 w-[59px]">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0e5f995540e72d5a50e0559797afd14bdab8a2edb02b8704d17ef3f7e94bc51c?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5f995540e72d5a50e0559797afd14bdab8a2edb02b8704d17ef3f7e94bc51c?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5f995540e72d5a50e0559797afd14bdab8a2edb02b8704d17ef3f7e94bc51c?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5f995540e72d5a50e0559797afd14bdab8a2edb02b8704d17ef3f7e94bc51c?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5f995540e72d5a50e0559797afd14bdab8a2edb02b8704d17ef3f7e94bc51c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5f995540e72d5a50e0559797afd14bdab8a2edb02b8704d17ef3f7e94bc51c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5f995540e72d5a50e0559797afd14bdab8a2edb02b8704d17ef3f7e94bc51c?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5f995540e72d5a50e0559797afd14bdab8a2edb02b8704d17ef3f7e94bc51c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="object-cover absolute inset-0 size-full"
                                />
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0e5f995540e72d5a50e0559797afd14bdab8a2edb02b8704d17ef3f7e94bc51c?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5f995540e72d5a50e0559797afd14bdab8a2edb02b8704d17ef3f7e94bc51c?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5f995540e72d5a50e0559797afd14bdab8a2edb02b8704d17ef3f7e94bc51c?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5f995540e72d5a50e0559797afd14bdab8a2edb02b8704d17ef3f7e94bc51c?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5f995540e72d5a50e0559797afd14bdab8a2edb02b8704d17ef3f7e94bc51c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5f995540e72d5a50e0559797afd14bdab8a2edb02b8704d17ef3f7e94bc51c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5f995540e72d5a50e0559797afd14bdab8a2edb02b8704d17ef3f7e94bc51c?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5f995540e72d5a50e0559797afd14bdab8a2edb02b8704d17ef3f7e94bc51c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="w-full border-2 border-solid aspect-square border-neutral-400"
                                />
                            </div>
                            <div className="flex flex-col my-auto">
                                <div className="text-sm font-semibold text-zinc-800">
                                    Concept Creators
                                </div>
                                <div className="text-xs text-ellipsis text-zinc-600">
                                    Transforming thoughts into impactful concepts.
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shrink-0 my-auto w-1 h-[15px]" />
                </div>
                <div className="mt-2 shrink-0 max-w-full h-px border border-solid bg-neutral-400 border-neutral-400 w-[311px]" />
                <div className="flex gap-5 justify-between mt-3">
                    <div className="flex flex-col justify-center">
                        <div className="flex gap-3">
                            <div className="flex overflow-hidden relative flex-col justify-center items-center border-2 border-solid aspect-square border-neutral-400 w-[59px]">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/46f2ff31d2f5dd7419f908c1c5f8294fa02c42fabc150f69b2121b29aea93b7e?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f2ff31d2f5dd7419f908c1c5f8294fa02c42fabc150f69b2121b29aea93b7e?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f2ff31d2f5dd7419f908c1c5f8294fa02c42fabc150f69b2121b29aea93b7e?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f2ff31d2f5dd7419f908c1c5f8294fa02c42fabc150f69b2121b29aea93b7e?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f2ff31d2f5dd7419f908c1c5f8294fa02c42fabc150f69b2121b29aea93b7e?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f2ff31d2f5dd7419f908c1c5f8294fa02c42fabc150f69b2121b29aea93b7e?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f2ff31d2f5dd7419f908c1c5f8294fa02c42fabc150f69b2121b29aea93b7e?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f2ff31d2f5dd7419f908c1c5f8294fa02c42fabc150f69b2121b29aea93b7e?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="object-cover absolute inset-0 size-full"
                                />
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/46f2ff31d2f5dd7419f908c1c5f8294fa02c42fabc150f69b2121b29aea93b7e?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f2ff31d2f5dd7419f908c1c5f8294fa02c42fabc150f69b2121b29aea93b7e?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f2ff31d2f5dd7419f908c1c5f8294fa02c42fabc150f69b2121b29aea93b7e?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f2ff31d2f5dd7419f908c1c5f8294fa02c42fabc150f69b2121b29aea93b7e?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f2ff31d2f5dd7419f908c1c5f8294fa02c42fabc150f69b2121b29aea93b7e?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f2ff31d2f5dd7419f908c1c5f8294fa02c42fabc150f69b2121b29aea93b7e?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f2ff31d2f5dd7419f908c1c5f8294fa02c42fabc150f69b2121b29aea93b7e?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f2ff31d2f5dd7419f908c1c5f8294fa02c42fabc150f69b2121b29aea93b7e?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="w-full border-2 border-solid aspect-square border-neutral-400"
                                />
                            </div>
                            <div className="flex flex-col my-auto">
                                <div className="text-sm font-semibold text-zinc-800">
                                    Deploy Doyens
                                </div>
                                <div className="text-xs text-ellipsis text-zinc-600">
                                    Experts in deploying flawless applications.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shrink-0 my-auto w-1 h-[15px]" />
                </div>
            </div>
        </div>
    );
};

export default AsideNavbar;
