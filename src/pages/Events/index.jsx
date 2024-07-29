import { useEffect, useState } from "react";
import { failedToast } from "../../utils/toastNotifications";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';

export default function Events() {
    const [userData, setUserData] = useState({});
    const token = useSelector(state => state.profile.jwt);
    const Navigate = useNavigate();

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

    const columns = [
        { field: 'id', headerName: 'Date', width: 100 },
        { field: 'eventName', headerName: 'Event Name', width: 400 },
        { field: 'peoples', headerName: 'People Attending', width: 130 },
        {
            field: 'about',
            headerName: 'Talks About',
            width: 120,
        },
        {
            field: 'likes',
            headerName: 'Likes',
            width: 100,
        },
        {
            field: '',
            headerName: 'Action',
            width: 130,
        },
    ];

    const rows = [
        { id: 1, eventName: 'Snow', peoples: 'Jon', about:'World', likes: 35 },
        { id: 2, eventName: 'Lannister', peoples: 'Cersei', about:'World', likes: 42 },
        { id: 3, eventName: 'Lannister', peoples: 'Jaime', about:'World', likes: 45 },
        { id: 4, eventName: 'Stark', peoples: 'Arya', about:'World', likes: 16 },
        { id: 5, eventName: 'Targaryen', peoples: 'Daenerys', about:'World', likes: null },
        { id: 6, eventName: 'Melisandre', peoples: null, about:'World', likes: 150 },
        { id: 7, eventName: 'Clifford', peoples: 'Ferrara', about:'World', likes: 44 },
        { id: 8, eventName: 'Frances', peoples: 'Rossini', about:'World', likes: 36 },
        { id: 9, eventName: 'Roxie', peoples: 'Harvey', about:'World', likes: 65 },
    ];

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
            <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full mb-10">
                <div className="flex-auto self-start mt-5 text-xl text-zinc-500">
                    Click The Event To See Their Details.
                </div>
                <div className="flex gap-5 justify-between">
                    <div className="flex gap-5 justify-between">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cc554df695616b71dd24e06a5ac3b0ececb2631a199787a554f1ebdab0ce1d7?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 w-10 aspect-square"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/80ba1a97898f4901cbe0ef2248f2f8c5cd258774958a32136bf19be70d6dfe5f?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 w-10 aspect-square"
                        />
                    </div>
                    <div className="flex gap-5 text-xl font-medium text-black">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d3bf2b4ea8840d0e9675e0f135f176dca393aa77f7ab502e16f8c707b8a8151?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 w-10 aspect-square"
                        />
                        <div className="my-auto">May 2024</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce361cabbc0ca7ada7fef2bcc3a7abba2f2fe25b40afa001bf3b9900924265f4?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 w-10 aspect-square"
                        />
                    </div>
                </div>
            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                />
            </div>
            <div className="flex flex-col px-7 py-7 mt-9 w-full text-lg rounded-2xl border border-solid bg-neutral-200 border-neutral-400 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between w-full font-bold text-neutral-700 max-md:flex-wrap max-md:mr-0.5 max-md:max-w-full">
                    <div className="flex gap-5 justify-between">
                        <div className="flex items-center gap-2 py-2 whitespace-nowrap">
                            <div>Date</div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc6cdcc8413008d42f7f6bc32cff9cb4bc794328719cda1e8924ed11aeaf0900?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 self-start mt-1 w-1 border-2 border-solid aspect-[0.57] border-neutral-700 stroke-[1.5px] stroke-neutral-700"
                            />
                        </div>
                        <div>Event Name</div>
                    </div>
                    <div className="flex gap-5 justify-center max-md:flex-wrap max-md:max-w-full">
                        <div>People Attending</div>
                        <div>Talks About</div>
                        <div>Likes</div>
                        <div>Action</div>
                    </div>
                </div>
                <div className="flex gap-5 justify-between mt-6 w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between">
                        <div className="font-bold text-violet-800">01 May 2024</div>
                        <div className="text-neutral-500">World Tech Competition</div>
                    </div>
                    <div className="flex gap-5 justify-between px-0.5 py-px max-md:flex-wrap max-md:max-w-full">
                        <div className="my-auto text-neutral-500">120</div>
                        <div className="flex gap-5 justify-between text-violet-800 max-md:flex-wrap max-md:max-w-full">
                            <div className="text-neutral-500">Mobile App</div>
                            <div className="flex gap-1.5 justify-between text-sm whitespace-nowrap">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2765833d46c9c82a0283f8bae8c9a7a420f0c6e24d0f8e69af26dd0c60e178c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 aspect-square w-[25px]"
                                />
                                <div className="my-auto">27k</div>
                            </div>
                            <div className="my-auto font-bold">See Details</div>
                        </div>
                    </div>
                </div>
                <div className="shrink-0 mt-2 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
                <div className="flex gap-5 justify-between mt-3.5 w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between">
                        <div className="font-bold text-violet-800">01 May 2024</div>
                        <div className="text-neutral-500">World Tech Competition</div>
                    </div>
                    <div className="flex gap-5 justify-between px-0.5 py-px max-md:flex-wrap max-md:max-w-full">
                        <div className="my-auto text-neutral-500">120</div>
                        <div className="flex gap-5 justify-between text-violet-800 max-md:flex-wrap max-md:max-w-full">
                            <div className="text-neutral-500">Mobile App</div>
                            <div className="flex gap-1.5 justify-between text-sm whitespace-nowrap">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/724b6c8474070117503a8a5202a480c040be5037d0b776d822ba6b5ff19870e0?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 aspect-square w-[25px]"
                                />
                                <div className="my-auto">27k</div>
                            </div>
                            <div className="my-auto font-bold">See Details</div>
                        </div>
                    </div>
                </div>
                <div className="shrink-0 mt-2 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
                <div className="flex gap-5 justify-between mt-3 w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between">
                        <div className="font-bold text-violet-800">01 May 2024</div>
                        <div className="text-neutral-500">World Tech Competition</div>
                    </div>
                    <div className="flex gap-5 justify-between px-0.5 py-px max-md:flex-wrap max-md:max-w-full">
                        <div className="my-auto text-neutral-500">120</div>
                        <div className="flex gap-5 justify-between text-violet-800 max-md:flex-wrap max-md:max-w-full">
                            <div className="text-neutral-500">Mobile App</div>
                            <div className="flex gap-1.5 justify-between text-sm whitespace-nowrap">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2765833d46c9c82a0283f8bae8c9a7a420f0c6e24d0f8e69af26dd0c60e178c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 aspect-square w-[25px]"
                                />
                                <div className="my-auto">27k</div>
                            </div>
                            <div className="my-auto font-bold">See Details</div>
                        </div>
                    </div>
                </div>
                <div className="shrink-0 mt-2 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
                <div className="flex gap-5 justify-between mt-3 w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between">
                        <div className="font-bold text-violet-800">01 May 2024</div>
                        <div className="text-neutral-500">World Tech Competition</div>
                    </div>
                    <div className="flex gap-5 justify-between px-0.5 py-px max-md:flex-wrap max-md:max-w-full">
                        <div className="my-auto text-neutral-500">120</div>
                        <div className="flex gap-5 justify-between text-violet-800 max-md:flex-wrap max-md:max-w-full">
                            <div className="text-neutral-500">Mobile App</div>
                            <div className="flex gap-1.5 justify-between text-sm whitespace-nowrap">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/724b6c8474070117503a8a5202a480c040be5037d0b776d822ba6b5ff19870e0?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 aspect-square w-[25px]"
                                />
                                <div className="my-auto">27k</div>
                            </div>
                            <div className="my-auto font-bold">See Details</div>
                        </div>
                    </div>
                </div>
                <div className="shrink-0 mt-2 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
                <div className="flex gap-5 justify-between mt-3 w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between">
                        <div className="font-bold text-violet-800">01 May 2024</div>
                        <div className="text-neutral-500">World Tech Competition</div>
                    </div>
                    <div className="flex gap-5 justify-between px-0.5 py-px max-md:flex-wrap max-md:max-w-full">
                        <div className="my-auto text-neutral-500">120</div>
                        <div className="flex gap-5 justify-between text-violet-800 max-md:flex-wrap max-md:max-w-full">
                            <div className="text-neutral-500">Mobile App</div>
                            <div className="flex gap-1.5 justify-between text-sm whitespace-nowrap">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2765833d46c9c82a0283f8bae8c9a7a420f0c6e24d0f8e69af26dd0c60e178c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 aspect-square w-[25px]"
                                />
                                <div className="my-auto">27k</div>
                            </div>
                            <div className="my-auto font-bold">See Details</div>
                        </div>
                    </div>
                </div>
                <div className="shrink-0 mt-2.5 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
                <div className="flex gap-5 justify-between mt-3 w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between">
                        <div className="font-bold text-violet-800">01 May 2024</div>
                        <div className="text-neutral-500">World Tech Competition</div>
                    </div>
                    <div className="flex gap-5 justify-between px-0.5 py-px max-md:flex-wrap max-md:max-w-full">
                        <div className="my-auto text-neutral-500">120</div>
                        <div className="flex gap-5 justify-between text-violet-800 max-md:flex-wrap max-md:max-w-full">
                            <div className="text-neutral-500">Mobile App</div>
                            <div className="flex gap-1.5 justify-between text-sm whitespace-nowrap">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/724b6c8474070117503a8a5202a480c040be5037d0b776d822ba6b5ff19870e0?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 aspect-square w-[25px]"
                                />
                                <div className="my-auto">27k</div>
                            </div>
                            <div className="my-auto font-bold">See Details</div>
                        </div>
                    </div>
                </div>
                <div className="shrink-0 mt-2.5 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
                <div className="flex gap-5 justify-between mt-2.5 w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between">
                        <div className="font-bold text-violet-800">01 May 2024</div>
                        <div className="text-neutral-500">World Tech Competition</div>
                    </div>
                    <div className="flex gap-5 justify-between px-0.5 py-px max-md:flex-wrap max-md:max-w-full">
                        <div className="my-auto text-neutral-500">120</div>
                        <div className="flex gap-5 justify-between text-violet-800 max-md:flex-wrap max-md:max-w-full">
                            <div className="text-neutral-500">Mobile App</div>
                            <div className="flex gap-1.5 justify-between text-sm whitespace-nowrap">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2765833d46c9c82a0283f8bae8c9a7a420f0c6e24d0f8e69af26dd0c60e178c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 aspect-square w-[25px]"
                                />
                                <div className="my-auto">27k</div>
                            </div>
                            <div className="my-auto font-bold">See Details</div>
                        </div>
                    </div>
                </div>
                <div className="shrink-0 mt-2.5 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
                <div className="flex gap-5 justify-between mt-2.5 w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between">
                        <div className="font-bold text-violet-800">01 May 2024</div>
                        <div className="text-neutral-500">World Tech Competition</div>
                    </div>
                    <div className="flex gap-5 justify-between px-0.5 py-px max-md:flex-wrap max-md:max-w-full">
                        <div className="my-auto text-neutral-500">120</div>
                        <div className="flex gap-5 justify-between text-violet-800 max-md:flex-wrap max-md:max-w-full">
                            <div className="text-neutral-500">Mobile App</div>
                            <div className="flex gap-1.5 justify-between text-sm whitespace-nowrap">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/724b6c8474070117503a8a5202a480c040be5037d0b776d822ba6b5ff19870e0?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 aspect-square w-[25px]"
                                />
                                <div className="my-auto">27k</div>
                            </div>
                            <div className="my-auto font-bold">See Details</div>
                        </div>
                    </div>
                </div>
                <div className="shrink-0 mt-2.5 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
                <div className="flex gap-5 justify-between mt-2.5 w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between">
                        <div className="font-bold text-violet-800">01 May 2024</div>
                        <div className="text-neutral-500">World Tech Competition</div>
                    </div>
                    <div className="flex gap-5 justify-between px-0.5 py-px max-md:flex-wrap max-md:max-w-full">
                        <div className="my-auto text-neutral-500">120</div>
                        <div className="flex gap-5 justify-between text-violet-800 max-md:flex-wrap max-md:max-w-full">
                            <div className="text-neutral-500">Mobile App</div>
                            <div className="flex gap-1.5 justify-between text-sm whitespace-nowrap">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2765833d46c9c82a0283f8bae8c9a7a420f0c6e24d0f8e69af26dd0c60e178c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 aspect-square w-[25px]"
                                />
                                <div className="my-auto">27k</div>
                            </div>
                            <div className="my-auto font-bold">See Details</div>
                        </div>
                    </div>
                </div>
                <div className="shrink-0 mt-3 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
                <div className="flex gap-5 justify-between mt-2.5 w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between">
                        <div className="font-bold text-violet-800">01 May 2024</div>
                        <div className="text-neutral-500">World Tech Competition</div>
                    </div>
                    <div className="flex gap-5 justify-between px-0.5 py-px max-md:flex-wrap max-md:max-w-full">
                        <div className="my-auto text-neutral-500">120</div>
                        <div className="flex gap-5 justify-between text-violet-800 max-md:flex-wrap max-md:max-w-full">
                            <div className="text-neutral-500">Mobile App</div>
                            <div className="flex gap-1.5 justify-between text-sm whitespace-nowrap">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/724b6c8474070117503a8a5202a480c040be5037d0b776d822ba6b5ff19870e0?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 aspect-square w-[25px]"
                                />
                                <div className="my-auto">27k</div>
                            </div>
                            <div className="my-auto font-bold">See Details</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

