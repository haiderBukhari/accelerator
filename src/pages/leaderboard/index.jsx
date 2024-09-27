export default function Leaderboard() {
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
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d3dc32e87551ae78e1cf1fe687e2976c4d55d0d1af03412e3ff33de4e114ab5e?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3dc32e87551ae78e1cf1fe687e2976c4d55d0d1af03412e3ff33de4e114ab5e?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3dc32e87551ae78e1cf1fe687e2976c4d55d0d1af03412e3ff33de4e114ab5e?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3dc32e87551ae78e1cf1fe687e2976c4d55d0d1af03412e3ff33de4e114ab5e?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3dc32e87551ae78e1cf1fe687e2976c4d55d0d1af03412e3ff33de4e114ab5e?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3dc32e87551ae78e1cf1fe687e2976c4d55d0d1af03412e3ff33de4e114ab5e?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3dc32e87551ae78e1cf1fe687e2976c4d55d0d1af03412e3ff33de4e114ab5e?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3dc32e87551ae78e1cf1fe687e2976c4d55d0d1af03412e3ff33de4e114ab5e?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef"
                                    className="object-contain shrink-0 rounded-2xl aspect-[0.99] w-[77px]"
                                />
                                <div className="flex flex-col my-auto">
                                    <div className="self-start text-lg text-neutral-500">
                                        Jhon Smith
                                    </div>
                                    <div className="flex items-center whitespace-nowrap text-zinc-800">
                                        <div className="self-stretch my-auto text-3xl font-medium">
                                            5,000
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
                                        <div className="text-2xl font-bold text-violet-800">35</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col rounded-none w-[110px]">
                                <div className="flex flex-col items-start px-3 pt-3.5 pb-1 rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-neutral-400 max-md:pr-5">
                                    <div className="flex flex-col">
                                        <div className="text-xs text-black">Quiz Score</div>
                                        <div className="text-2xl font-bold text-violet-800">
                                            145
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col whitespace-nowrap rounded-none w-[70px]">
                                <div className="flex flex-col items-start px-3 pt-3.5 pb-1 rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-neutral-400 max-md:pr-5">
                                    <div className="flex flex-col">
                                        <div className="text-xs text-black">Activity</div>
                                        <div className="text-2xl font-bold text-violet-800">
                                            425
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
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/89762d7e26edd729f525b7675496f4db160ddc6fe54c7b6947286057b2cb4906?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/89762d7e26edd729f525b7675496f4db160ddc6fe54c7b6947286057b2cb4906?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/89762d7e26edd729f525b7675496f4db160ddc6fe54c7b6947286057b2cb4906?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/89762d7e26edd729f525b7675496f4db160ddc6fe54c7b6947286057b2cb4906?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/89762d7e26edd729f525b7675496f4db160ddc6fe54c7b6947286057b2cb4906?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/89762d7e26edd729f525b7675496f4db160ddc6fe54c7b6947286057b2cb4906?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/89762d7e26edd729f525b7675496f4db160ddc6fe54c7b6947286057b2cb4906?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/89762d7e26edd729f525b7675496f4db160ddc6fe54c7b6947286057b2cb4906?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef"
                                    className="object-contain shrink-0 rounded-2xl aspect-square w-[78px]"
                                />
                                <div className="flex flex-col my-auto">
                                    <div className="self-start text-lg text-neutral-500">
                                        Jhon Smith
                                    </div>
                                    <div className="flex items-center whitespace-nowrap text-zinc-800">
                                        <div className="self-stretch my-auto text-3xl font-medium">
                                            5,000
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
                                        <div className="text-2xl font-bold text-violet-800">35</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col rounded-none w-[110px]">
                                <div className="flex flex-col items-start px-3 pt-3.5 pb-1 rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-neutral-400 max-md:pr-5">
                                    <div className="flex flex-col">
                                        <div className="text-xs text-black">Quiz Score</div>
                                        <div className="text-2xl font-bold text-violet-800">
                                            145
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col whitespace-nowrap rounded-none w-[70px]">
                                <div className="flex flex-col items-start px-3 pt-3.5 pb-1 rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-neutral-400 max-md:pr-5">
                                    <div className="flex flex-col">
                                        <div className="text-xs text-black">Activity</div>
                                        <div className="text-2xl font-bold text-violet-800">
                                            425
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
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/16fe3ddcf1226d1a2d04641c172df8d33e6a72fdaa4c67b8ceeeb726514f5106?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/16fe3ddcf1226d1a2d04641c172df8d33e6a72fdaa4c67b8ceeeb726514f5106?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/16fe3ddcf1226d1a2d04641c172df8d33e6a72fdaa4c67b8ceeeb726514f5106?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/16fe3ddcf1226d1a2d04641c172df8d33e6a72fdaa4c67b8ceeeb726514f5106?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/16fe3ddcf1226d1a2d04641c172df8d33e6a72fdaa4c67b8ceeeb726514f5106?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/16fe3ddcf1226d1a2d04641c172df8d33e6a72fdaa4c67b8ceeeb726514f5106?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/16fe3ddcf1226d1a2d04641c172df8d33e6a72fdaa4c67b8ceeeb726514f5106?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/16fe3ddcf1226d1a2d04641c172df8d33e6a72fdaa4c67b8ceeeb726514f5106?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef"
                                    className="object-contain shrink-0 rounded-2xl aspect-square w-[78px]"
                                />
                                <div className="flex flex-col my-auto">
                                    <div className="self-start text-lg text-neutral-500">
                                        Jhon Smith
                                    </div>
                                    <div className="flex items-center whitespace-nowrap text-zinc-800">
                                        <div className="self-stretch my-auto text-3xl font-medium">
                                            5,000
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
                                        <div className="text-2xl font-bold text-violet-800">35</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col rounded-none w-[110px]">
                                <div className="flex flex-col items-start px-3 pt-3.5 pb-1 rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-neutral-400 max-md:pr-5">
                                    <div className="flex flex-col">
                                        <div className="text-xs text-black">Quiz Score</div>
                                        <div className="text-2xl font-bold text-violet-800">
                                            145
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col whitespace-nowrap rounded-none w-[70px]">
                                <div className="flex flex-col items-start px-3 pt-3.5 pb-1 rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-neutral-400 max-md:pr-5">
                                    <div className="flex flex-col">
                                        <div className="text-xs text-black">Activity</div>
                                        <div className="text-2xl font-bold text-violet-800">
                                            425
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
                            <div className="w-1/8 w-full">Quiz Scroe</div>
                            <div className="w-1/8 w-full">Activity</div>
                            <div className="w-1/8 w-full">Total Points</div>
                        </div>
                    </div>
                    <div className="flex justify-between w-full gap-10 items-start self-start mt-6">
                        <div className="w-1/8 w-full font-bold text-violet-800">01</div>
                        <div className="w-3/8 w-full text-neutral-500">Jhon Smith</div>
                        <div className="w-1/8 text-center w-full text-neutral-500">120</div>
                        <div className="w-1/8 text-center w-full text-neutral-500">65</div>
                        <div className="w-1/8 text-center w-full text-neutral-500">250</div>
                        <div className="w-1/8 text-center w-full text-neutral-500">600</div>
                    </div>
                    <div className="flex justify-between w-full gap-10 items-start self-start mt-6">
                        <div className="w-1/8 w-full font-bold text-violet-800">01</div>
                        <div className="w-3/8 w-full text-neutral-500">Jhon Smith</div>
                        <div className="w-1/8 text-center w-full text-neutral-500">120</div>
                        <div className="w-1/8 text-center w-full text-neutral-500">65</div>
                        <div className="w-1/8 text-center w-full text-neutral-500">250</div>
                        <div className="w-1/8 text-center w-full text-neutral-500">600</div>
                    </div>
                    <div className="flex justify-between w-full gap-10 items-start self-start mt-6">
                        <div className="w-1/8 w-full font-bold text-violet-800">01</div>
                        <div className="w-3/8 w-full text-neutral-500">Jhon Smith</div>
                        <div className="w-1/8 text-center w-full text-neutral-500">120</div>
                        <div className="w-1/8 text-center w-full text-neutral-500">65</div>
                        <div className="w-1/8 text-center w-full text-neutral-500">250</div>
                        <div className="w-1/8 text-center w-full text-neutral-500">600</div>
                    </div>
                </div>
            </div>
        </div>
    );
}