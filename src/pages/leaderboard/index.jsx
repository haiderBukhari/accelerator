import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { failedToast } from "../../utils/toastNotifications";
import defaultPerson from '../../assets/professionalPicture.jpeg'

export default function Leaderboard() {
    const [data, setData] = useState([])
    const token = useSelector(state => state.profile.jwt);

    async function getLeaderBoardData() {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/auth/ranking`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setData(Item.data.users)
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    useEffect(() => {
        getLeaderBoardData();
    }, [])

    return (
        <div className="flex overflow-hidden flex-col mx-7">
            <div className="flex gap-5 self-start mt-9 text-4xl font-bold whitespace-nowrap text-neutral-700 mb-10">
                <div className="grow">Leaderboard</div>
            </div>
            <div className="self-start text-2xl font-bold text-zinc-600 mb-3">
                Current Leaders
            </div>
            <div className="flex flex-wrap gap-9 items-start mt-3">
                <div className="flex flex-col rounded-none min-w-[200px] w-[327px]">
                    <div className="flex flex-col px-6 py-8 w-full rounded-2xl border border-solid bg-neutral-200 border-neutral-400 max-md:px-5">
                        <div className="flex gap-10 items-start">
                            <div className="flex gap-3 rounded-none w-[207px]">
                                <img
                                    loading="lazy"
                                    src={data[0]?.profilePicture ? data[0]?.profilePicture : defaultPerson}
                                    className="object-contain shrink-0 rounded-2xl aspect-[0.99] w-[77px]"
                                />
                                <div className="flex flex-col my-auto">
                                    <div className="self-start text-lg text-neutral-500">
                                        {data && data[0]?.firstName} {data && data[0]?.lastName}
                                    </div>
                                    <div className="flex items-center whitespace-nowrap text-zinc-800">
                                        <div className="self-stretch my-auto text-3xl font-medium">
                                            {data && data[0]?.totalSum}
                                        </div>
                                        <div className="self-stretch my-auto text-xs">Points</div>
                                    </div>
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/385d125fbb218eed6fa8972c00820848baa866f5433739ed4dfc1df22b6eb647?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/385d125fbb218eed6fa8972c00820848baa866f5433739ed4dfc1df22b6eb647?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/385d125fbb218eed6fa8972c00820848baa866f5433739ed4dfc1df22b6eb647?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/385d125fbb218eed6fa8972c00820848baa866f5433739ed4dfc1df22b6eb647?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/385d125fbb218eed6fa8972c00820848baa866f5433739ed4dfc1df22b6eb647?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/385d125fbb218eed6fa8972c00820848baa866f5433739ed4dfc1df22b6eb647?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/385d125fbb218eed6fa8972c00820848baa866f5433739ed4dfc1df22b6eb647?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/385d125fbb218eed6fa8972c00820848baa866f5433739ed4dfc1df22b6eb647?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef"
                                className="object-contain shrink-0 aspect-square w-[78px]"
                            />
                        </div>
                        <div className="flex gap-3 items-start mt-5">
                            <div className="flex flex-col rounded-none w-[130px]">
                                <div className="flex flex-col items-start px-3 pt-3.5 pb-1 rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-neutral-400 max-md:pr-5">
                                    <div className="flex flex-col">
                                        <div className="text-xs text-black">Course Comp.</div>
                                        <div className="text-2xl font-bold text-violet-800">{data && data[0]?.courseCompleted}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col rounded-none w-[110px]">
                                <div className="flex flex-col items-start px-3 pt-3.5 pb-1 rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-neutral-400 max-md:pr-5">
                                    <div className="flex flex-col">
                                        <div className="text-xs text-black">Quiz Score</div>
                                        <div className="text-2xl font-bold text-violet-800">
                                            {data && data[0]?.score}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col whitespace-nowrap rounded-none w-[70px]">
                                <div className="flex flex-col items-start px-3 pt-3.5 pb-1 rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-neutral-400 max-md:pr-5">
                                    <div className="flex flex-col">
                                        <div className="text-xs text-black">Activity</div>
                                        <div className="text-2xl font-bold text-violet-800">
                                            {data && data[0]?.activity}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col rounded-none min-w-[200px] w-[327px]">
                    <div className="flex flex-col px-6 py-8 w-full rounded-2xl border border-solid bg-neutral-200 border-neutral-400 max-md:px-5">
                        <div className="flex gap-10 items-start">
                            <div className="flex gap-3 rounded-none w-[207px]">
                                <img
                                    loading="lazy"
                                    src={data[1]?.profilePicture ? data[1]?.profilePicture : defaultPerson}
                                    className="object-contain shrink-0 rounded-2xl aspect-square w-[78px]"
                                />
                                <div className="flex flex-col my-auto">
                                    <div className="self-start text-lg text-neutral-500">
                                        {data && data[1]?.firstName} {data && data[1]?.lastName}
                                    </div>
                                    <div className="flex items-center whitespace-nowrap text-zinc-800">
                                        <div className="self-stretch my-auto text-3xl font-medium">
                                            {data && data[1]?.totalSum}
                                        </div>
                                        <div className="self-stretch my-auto text-xs">Points</div>
                                    </div>
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fc3632edd7459afa7cd9bf4e6b1e2e1011ed63948052b3d92f731cef3eedfd9e?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc3632edd7459afa7cd9bf4e6b1e2e1011ed63948052b3d92f731cef3eedfd9e?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc3632edd7459afa7cd9bf4e6b1e2e1011ed63948052b3d92f731cef3eedfd9e?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc3632edd7459afa7cd9bf4e6b1e2e1011ed63948052b3d92f731cef3eedfd9e?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc3632edd7459afa7cd9bf4e6b1e2e1011ed63948052b3d92f731cef3eedfd9e?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc3632edd7459afa7cd9bf4e6b1e2e1011ed63948052b3d92f731cef3eedfd9e?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc3632edd7459afa7cd9bf4e6b1e2e1011ed63948052b3d92f731cef3eedfd9e?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc3632edd7459afa7cd9bf4e6b1e2e1011ed63948052b3d92f731cef3eedfd9e?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef"
                                className="object-contain shrink-0 aspect-square w-[78px]"
                            />
                        </div>
                        <div className="flex gap-3 items-start mt-5">
                            <div className="flex flex-col rounded-none w-[130px]">
                                <div className="flex flex-col items-start px-3 pt-3.5 pb-1 rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-neutral-400 max-md:pr-5">
                                    <div className="flex flex-col">
                                        <div className="text-xs text-black">Course Comp.</div>
                                        <div className="text-2xl font-bold text-violet-800">{data && data[1]?.courseCompleted}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col rounded-none w-[110px]">
                                <div className="flex flex-col items-start px-3 pt-3.5 pb-1 rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-neutral-400 max-md:pr-5">
                                    <div className="flex flex-col">
                                        <div className="text-xs text-black">Quiz Score</div>
                                        <div className="text-2xl font-bold text-violet-800">
                                            {data && data[1]?.score}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col whitespace-nowrap rounded-none w-[70px]">
                                <div className="flex flex-col items-start px-3 pt-3.5 pb-1 rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-neutral-400 max-md:pr-5">
                                    <div className="flex flex-col">
                                        <div className="text-xs text-black">Activity</div>
                                        <div className="text-2xl font-bold text-violet-800">
                                            {data && data[1]?.activity}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col rounded-none min-w-[200px] w-[327px]">
                    <div className="flex flex-col px-6 py-8 w-full rounded-2xl border border-solid bg-neutral-200 border-neutral-400 max-md:px-5">
                        <div className="flex gap-10 items-start">
                            <div className="flex gap-3 rounded-none w-[207px]">
                                <img
                                    loading="lazy"
                                    src={data[2]?.profilePicture ? data[2]?.profilePicture : defaultPerson}
                                    className="object-contain shrink-0 rounded-2xl aspect-square w-[78px]"
                                />
                                <div className="flex flex-col my-auto">
                                    <div className="self-start text-lg text-neutral-500">
                                    {data && data[2]?.firstName} {data && data[2]?.lastName}
                                    </div>
                                    <div className="flex items-center whitespace-nowrap text-zinc-800">
                                        <div className="self-stretch my-auto text-3xl font-medium">
                                        {data && data[2]?.totalSum}
                                        </div>
                                        <div className="self-stretch my-auto text-xs">Points</div>
                                    </div>
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c0a89d514605464d2a04be0bb422771da1abbbbd70666f8b1382e4a9572061ef?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0a89d514605464d2a04be0bb422771da1abbbbd70666f8b1382e4a9572061ef?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0a89d514605464d2a04be0bb422771da1abbbbd70666f8b1382e4a9572061ef?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0a89d514605464d2a04be0bb422771da1abbbbd70666f8b1382e4a9572061ef?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0a89d514605464d2a04be0bb422771da1abbbbd70666f8b1382e4a9572061ef?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0a89d514605464d2a04be0bb422771da1abbbbd70666f8b1382e4a9572061ef?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0a89d514605464d2a04be0bb422771da1abbbbd70666f8b1382e4a9572061ef?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0a89d514605464d2a04be0bb422771da1abbbbd70666f8b1382e4a9572061ef?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef"
                                className="object-contain shrink-0 aspect-[0.99] w-[77px]"
                            />
                        </div>
                        <div className="flex gap-3 items-start mt-5">
                            <div className="flex flex-col rounded-none w-[130px]">
                                <div className="flex flex-col items-start px-3 pt-3.5 pb-1 rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-neutral-400 max-md:pr-5">
                                    <div className="flex flex-col">
                                        <div className="text-xs text-black">Course Comp.</div>
                                        <div className="text-2xl font-bold text-violet-800">{data && data[2]?.courseCompleted}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col rounded-none w-[110px]">
                                <div className="flex flex-col items-start px-3 pt-3.5 pb-1 rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-neutral-400 max-md:pr-5">
                                    <div className="flex flex-col">
                                        <div className="text-xs text-black">Quiz Score</div>
                                        <div className="text-2xl font-bold text-violet-800">
                                        {data && data[2]?.score}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col whitespace-nowrap rounded-none w-[70px]">
                                <div className="flex flex-col items-start px-3 pt-3.5 pb-1 rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-neutral-400 max-md:pr-5">
                                    <div className="flex flex-col">
                                        <div className="text-xs text-black">Activity</div>
                                        <div className="text-2xl font-bold text-violet-800">
                                        {data && data[2]?.activity}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-start mt-10 text-2xl font-bold text-zinc-600">
                Global Leaders
            </div>
            <div className="flex overflow-x-auto flex-col pt-6 pb-20 mt-7 w-full rounded-2xl border border-solid bg-neutral-200 mb-5 border-neutral-400 max-md:max-w-full">
                <div className="flex flex-col px-7 w-full text-lg max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-wrap gap-10 justify-between items-start w-full font-bold text-neutral-700 max-md:max-w-full">
                        <div className="flex justify-between w-full gap-10 items-start whitespace-nowrap">
                            <div className="w-1/8 w-full">Rank</div>
                            <div className="w-3/8 w-full">Name</div>
                            <div className="w-1/8 w-full">Course Completed</div>
                            <div className="w-1/8 w-full">Quiz Score</div>
                            <div className="w-1/8 w-full">Activity</div>
                            <div className="w-1/8 w-full">Total Points</div>
                        </div>
                    </div>
                    {
                        data?.map((Item, index) => (
                            <div key={Item._id} className="flex justify-between w-full gap-10 items-start self-start mt-6">
                                <div className="w-1/8 w-full font-bold text-violet-800">{index+1}</div>
                                <div className="w-3/8 w-full text-neutral-500">{Item.firstName} {Item.lastName}</div>
                                <div className="w-1/8 text-center w-full text-neutral-500">{Item.courseCompleted}</div>
                                <div className="w-1/8 text-center w-full text-neutral-500">{Item.score}</div>
                                <div className="w-1/8 text-center w-full text-neutral-500">{Item.activity}</div>
                                <div className="w-1/8 text-center w-full text-neutral-500">{Item.totalSum}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}