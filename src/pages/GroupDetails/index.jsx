import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GroupsDetails() {
    const [selected, setSelected] = useState(1);
    const Navigate = useNavigate();

    return (
        <div className="flex flex-col">
            <div className="flex gap-5 justify-between px-5 w-full text-base font-bold text-zinc-800 max-md:flex-wrap max-md:max-w-full">
                <div className="my-auto">Search on The App Accelerator </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/29bd65d93c160ce9ecf4cd5ca21f38ef8a2f2558bf20fe6e04b1047ca605f809?apiKey=cf358c329e0d49a792d02d32277323ef&"
                    className="shrink-0 aspect-square w-[30px]"
                />
            </div>
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c811a66c7c5a068d0e33944711b39ea9dafd8d913a0c97a76ea9cd74028a868d?apiKey=cf358c329e0d49a792d02d32277323ef&"
                className="w-full border-2 border-solid aspect-[5] border-neutral-400 max-w-auto mt-7"
            />
            <div className="flex z-10 flex-col pr-6 pl-16 mt-0 w-full max-md:px-5 max-md:max-w-full">
                <div className="max-w-full w-[529px] absolute top-[160px]">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/695af9864d34d110a423c64f2d30f87a6ad638dd664584bfc4fbaea5da3067d2?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/695af9864d34d110a423c64f2d30f87a6ad638dd664584bfc4fbaea5da3067d2?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/695af9864d34d110a423c64f2d30f87a6ad638dd664584bfc4fbaea5da3067d2?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/695af9864d34d110a423c64f2d30f87a6ad638dd664584bfc4fbaea5da3067d2?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/695af9864d34d110a423c64f2d30f87a6ad638dd664584bfc4fbaea5da3067d2?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/695af9864d34d110a423c64f2d30f87a6ad638dd664584bfc4fbaea5da3067d2?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/695af9864d34d110a423c64f2d30f87a6ad638dd664584bfc4fbaea5da3067d2?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/695af9864d34d110a423c64f2d30f87a6ad638dd664584bfc4fbaea5da3067d2?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="w-full rounded-full border-4 border-violet-800 border-solid aspect-square max-md:mt-7"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow mt-36 max-md:mt-10">
                                <div className="text-3xl font-bold text-neutral-700">
                                    Group Name Here{" "}
                                </div>
                                <div className="flex gap-5 mt-3.5 text-lg">
                                    <div className="justify-center px-2.5 py-1.5 font-medium text-violet-800 rounded-md border border-violet-800 border-solid bg-blue-700 bg-opacity-20">
                                        21K Likes
                                    </div>
                                    <div className="justify-center px-5 py-1.5 text-white bg-violet-800 rounded-md border border-solid border-neutral-400 max-md:px-5">
                                        Join Now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-32"></div>
                <div className="flex gap-4 self-start mt-12 text-lg font-medium whitespace-nowrap text-neutral-500 max-md:flex-wrap max-md:mt-10">
                    <div onClick={() => setSelected(1)} className={`justify-center px-5 py-2 ${selected === 1 ? 'bg-violet-800 text-zinc-100' : 'bg-stone-300 text-black'} rounded-xl cursor-pointer`}>
                        Dashboard
                    </div>
                    <div onClick={() => setSelected(2)} className={`justify-center px-5 py-2 ${selected === 2 ? 'bg-violet-800 text-zinc-100' : 'bg-stone-300 text-black'} rounded-xl cursor-pointer`}>
                        Photos
                    </div>
                    <div onClick={() => setSelected(3)} className={`justify-center px-5 py-2 ${selected === 3 ? 'bg-violet-800 text-zinc-100' : 'bg-stone-300 text-black'} rounded-xl cursor-pointer`}>
                        Members
                    </div>
                    <div onClick={() => setSelected(4)} className={`justify-center px-5 py-2 ${selected === 4 ? 'bg-violet-800 text-zinc-100' : 'bg-stone-300 text-black'} rounded-xl cursor-pointer`}>
                        Courses
                    </div>
                </div>
                <div className="shrink-0 mt-5 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
                {
                    selected === 1 && <div className="my-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow max-md:mt-5">
                                    <div className="flex flex-col px-5 py-9 text-base font-medium rounded-3xl border border-solid bg-neutral-200 border-neutral-400 text-neutral-500">
                                        <div className="text-xl font-semibold text-neutral-700">
                                            General Information
                                        </div>
                                        <div className="mt-6">Contact Info: (XX) XXX XXXXXX</div>
                                        <div className="mt-3">Email Address: abc@example.com</div>
                                        <div className="mt-3">
                                            Talks About: Mobile App, Desktop Apps{" "}
                                        </div>
                                        <div className="mt-7 text-base font-semibold text-neutral-700">
                                            Description
                                        </div>
                                        <div className="mt-2 text-zinc-500">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industrys
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley.
                                        </div>
                                    </div>
                                    <div className="flex flex-col px-4 pt-7 pb-1 mt-5 w-full text-xs whitespace-nowrap rounded-3xl border border-solid bg-neutral-200 border-neutral-400 text-zinc-400 max-md:pr-5">
                                        <div className="flex gap-5 justify-between items-center pr-1.5 text-xl font-semibold text-neutral-700">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/523d72d36e7a6fd1d3041471ce6b231fcc92cad8cbd7c4eea009ccfa9003d6ad?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 self-stretch my-auto border-2 border-solid aspect-[0.5] border-neutral-700 stroke-[2px] stroke-neutral-700 w-[7px]"
                                            />
                                            <div className="self-stretch">December</div>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/28f8d74f13cb7dce80681564445186df63e7bc2c18bbc7b00f0cd4059dda0ad8?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 self-stretch my-auto border-2 border-solid aspect-[0.5] border-neutral-700 stroke-[2px] stroke-neutral-700 w-[7px]"
                                            />
                                        </div>
                                        <div className="shrink-0 mt-2.5 h-px border border-solid bg-neutral-400 border-neutral-400" />
                                        <div className="flex gap-5 justify-between px-1.5 py-1.5 mt-2.5 text-center">
                                            <div className="font-extralight text-zinc-600">05</div>
                                            <div>Mo</div>
                                            <div>Tu</div>
                                            <div>We</div>
                                            <div>Th</div>
                                            <div>Fr</div>
                                            <div className="text-violet-800">Sa</div>
                                            <div className="text-violet-800">Su</div>
                                        </div>
                                        <div className="flex gap-5 justify-between items-center mt-2.5 text-center">
                                            <div className="justify-center items-center self-stretch px-1.5 w-6 h-6 font-extralight text-white bg-violet-800 rounded">
                                                18
                                            </div>
                                            <div className="self-stretch my-auto text-stone-300">
                                                29
                                            </div>
                                            <div className="self-stretch my-auto text-stone-300">
                                                30
                                            </div>
                                            <div className="self-stretch my-auto">1</div>
                                            <div className="self-stretch my-auto">2</div>
                                            <div className="self-stretch my-auto">3</div>
                                            <div className="self-stretch my-auto text-violet-800">
                                                4
                                            </div>
                                            <div className="self-stretch my-auto text-violet-800">
                                                5
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[71%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow max-md:mt-5 max-md:max-w-full">
                                    <div className="flex flex-col px-6 pt-5 pb-7 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pl-5 max-md:max-w-full">
                                        <div className="flex gap-5 justify-between px-0.5 w-full max-md:flex-wrap max-md:max-w-full">
                                            <div className="flex gap-4">
                                                <img
                                                    loading="lazy"
                                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                    className="shrink-0 border-4 border-violet-800 border-solid aspect-square w-[60px]"
                                                />
                                                <div className="flex flex-col py-1 my-auto">
                                                    <div className="text-base font-medium text-zinc-800">
                                                        Michael William{" "}
                                                    </div>
                                                    <div className="mt-2 text-xs text-neutral-500">
                                                        20 mins. ago
                                                    </div>
                                                </div>
                                            </div>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/531e8b61d8240087ca5afa4f0b592e2a4fc8e06d8ef63f2706f6be46b3499175?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 my-auto aspect-square w-[25px]"
                                            />
                                        </div>
                                        <div className="mt-6 mr-10 text-base text-zinc-800 max-md:mr-2.5 max-md:max-w-full">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industrys
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a
                                            type specimen book.
                                        </div>
                                        <div className="flex gap-5 justify-between px-px mt-6 w-full text-sm max-md:flex-wrap max-md:max-w-full">
                                            <div className="flex flex-col justify-center text-neutral-400 max-md:max-w-full">
                                                <div className="justify-center items-start px-3.5 py-3.5 rounded-xl border border-solid bg-neutral-300 border-neutral-400 max-md:pr-5 max-md:max-w-full">
                                                    Write a comment
                                                </div>
                                            </div>
                                            <div className="flex gap-2.5 justify-between my-auto text-violet-800 whitespace-nowrap">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbf9f452b2ad0d9bc2072c788e3cdac85906c6c3a63ab0a7ec8669c8d70dc7de?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                    className="shrink-0 aspect-square w-[25px]"
                                                />
                                                <div className="my-auto">27k</div>
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/34d2f9c52330b0f178365c9a3ea4014a1a11abbca124b86269c33b778ac5c25a?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                    className="shrink-0 aspect-square w-[25px]"
                                                />
                                                <div className="my-auto">10</div>
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8abe49404d2c511cac072bc33cfd4a68430723936b61cb0bda45995064217923?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                    className="shrink-0 aspect-square w-[25px]"
                                                />
                                                <div className="my-auto">1</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col px-6 py-6 mt-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:px-5 max-md:max-w-full">
                                        <div className="flex gap-5 justify-between px-0.5 w-full max-md:flex-wrap max-md:max-w-full">
                                            <div className="flex gap-4">
                                                <img
                                                    loading="lazy"
                                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4c6ae8dbc3fef18ea072db32bab647cfa667ea4fea47a515fa9dc749875bb073?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c6ae8dbc3fef18ea072db32bab647cfa667ea4fea47a515fa9dc749875bb073?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c6ae8dbc3fef18ea072db32bab647cfa667ea4fea47a515fa9dc749875bb073?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c6ae8dbc3fef18ea072db32bab647cfa667ea4fea47a515fa9dc749875bb073?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c6ae8dbc3fef18ea072db32bab647cfa667ea4fea47a515fa9dc749875bb073?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c6ae8dbc3fef18ea072db32bab647cfa667ea4fea47a515fa9dc749875bb073?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c6ae8dbc3fef18ea072db32bab647cfa667ea4fea47a515fa9dc749875bb073?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c6ae8dbc3fef18ea072db32bab647cfa667ea4fea47a515fa9dc749875bb073?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                    className="shrink-0 border-4 border-violet-800 border-solid aspect-square w-[60px]"
                                                />
                                                <div className="flex flex-col py-1 my-auto">
                                                    <div className="text-base font-medium text-zinc-800">
                                                        Jennifer Susan
                                                    </div>
                                                    <div className="mt-2 text-xs text-neutral-500">
                                                        1 hr. ago
                                                    </div>
                                                </div>
                                            </div>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/531e8b61d8240087ca5afa4f0b592e2a4fc8e06d8ef63f2706f6be46b3499175?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 my-auto aspect-square w-[25px]"
                                            />
                                        </div>
                                        <div className="mt-6 text-base text-zinc-800 max-md:max-w-full">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industrys
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a
                                            type specimen book.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    selected === 2 && <div className="my-10 flex flex-col px-5 pt-8 text-xl rounded-3xl border border-solid bg-neutral-200 border-neutral-400 text-neutral-700">
                        <div className="font-semibold max-md:max-w-full">Photos</div>
                        <div className="mt-4 text-base font-medium text-neutral-500 max-md:max-w-full">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industrys standard dummy text ever
                            since the 1500s.
                        </div>
                        <div className="flex gap-2.5 self-center mt-9 max-md:flex-wrap">
                            <div className="flex flex-col pb-2">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="self-center border-2 border-solid aspect-square border-neutral-400 w-[150px]"
                                />
                                <div className="mt-4">Folder Name</div>
                            </div>
                            <div className="flex flex-col pb-2">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="self-center border-2 border-solid aspect-square border-neutral-400 w-[150px]"
                                />
                                <div className="mt-4">Folder Name</div>
                            </div>
                            <div className="flex flex-col pb-2">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="self-center border-2 border-solid aspect-square border-neutral-400 w-[150px]"
                                />
                                <div className="mt-4">Folder Name</div>
                            </div>
                            <div className="flex flex-col pb-2">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="self-center border-2 border-solid aspect-square border-neutral-400 w-[150px]"
                                />
                                <div className="mt-4">Folder Name</div>
                            </div>
                            <div className="flex flex-col pb-2">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="self-center border-2 border-solid aspect-square border-neutral-400 w-[150px]"
                                />
                                <div className="mt-4">Folder Name</div>
                            </div>
                            <div className="flex flex-col pb-2">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="self-center border-2 border-solid aspect-square border-neutral-400 w-[150px]"
                                />
                                <div className="mt-4">Folder Name</div>
                            </div>
                            <div className="flex flex-col pb-2">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa58ea6d6999584203c0c2ae67702ef95d85ff84971ce1671e636186ac447ad9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="self-center border-2 border-solid aspect-square border-neutral-400 w-[150px]"
                                />
                                <div className="mt-4">Folder Name</div>
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c105853b8eaf0871077678e7a53c25ade5c92ff5e4c22abf82903a1375818311?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c105853b8eaf0871077678e7a53c25ade5c92ff5e4c22abf82903a1375818311?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c105853b8eaf0871077678e7a53c25ade5c92ff5e4c22abf82903a1375818311?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c105853b8eaf0871077678e7a53c25ade5c92ff5e4c22abf82903a1375818311?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c105853b8eaf0871077678e7a53c25ade5c92ff5e4c22abf82903a1375818311?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c105853b8eaf0871077678e7a53c25ade5c92ff5e4c22abf82903a1375818311?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c105853b8eaf0871077678e7a53c25ade5c92ff5e4c22abf82903a1375818311?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c105853b8eaf0871077678e7a53c25ade5c92ff5e4c22abf82903a1375818311?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="mt-2.5 max-w-full border-2 border-solid aspect-[1.08] border-neutral-400 w-[150px]"
                        />
                    </div>
                }
                {
                    selected === 3 && <div className="my-10 flex flex-col flex-wrap content-start">
                        <div className="px-5 w-full max-md:max-w-full">
                            <div className="flex gap-2 mt-4 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 w-full max-md:max-w-full">
                            <div className="flex gap-2 mt-4 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 w-full max-md:max-w-full">
                            <div className="flex gap-2 mt-4 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center font-medium max-md:mt-5">
                                        <div className="flex gap-5 justify-between p-5 rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/675f973d3a3564101e029115f635a48c85981322c9ebe0bab8b2b4d94a6bdb51?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[75px]"
                                            />
                                            <div className="flex flex-col my-auto">
                                                <div className="text-lg text-neutral-900">Name Here</div>
                                                <div className="mt-3 text-xs text-neutral-500">
                                                    Member Since: 23-Dec-23024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    selected === 4 && <>
                        <div className="mt-14 text-2xl font-bold text-violet-800 max-md:mt-10 max-md:max-w-full">
                            Mobile App Development
                        </div>
                        {
                            new Array(10).fill(1).map((item) => (
                                <div key={`${item}%487j`}>
                                    <div className="flex gap-5 justify-between items-center px-px mt-6 w-full max-md:flex-wrap max-md:max-w-full">
                                        <div className="self-stretch w-full">
                                            <div className="flex w-full items-center gap-5 max-md:flex-col max-md:gap-0">
                                                <div className="flex items-center flex-col w-[22%] max-md:ml-0 max-md:w-full">
                                                    <img
                                                        loading="lazy"
                                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                        className="grow shrink-0 max-w-full border-solid aspect-[1.49] border-[3px] border-neutral-400 w-[150px] max-md:mt-5"
                                                    />
                                                </div>
                                                <div className="flex flex-col ml-1 w-full max-md:ml-0 max-md:w-full">
                                                    <div className="flex flex-col self-stretch my-auto max-md:mt-9 max-md:max-w-full">
                                                        <div className="text-lg font-semibold text-zinc-600 max-md:max-w-full">
                                                            Module 01 : Intro
                                                        </div>
                                                        <div className="mt-1 text-sm text-neutral-500 max-md:max-w-full">
                                                            Lorem Ipsum is simply dummy text of the printing and
                                                            typesetting industry. Lorem Ipsum has been the industrys
                                                            standard dummy text ever since the 1500s.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex w-5/12 items-center gap-5 self-stretch my-auto text-base">
                                            <div className="flex items-center gap-2.5 text-violet-800">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/99de8a4805a38816bf21f6dc05e7c9f9b8e2ee99c22a05da867efaf55b45bc94?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                    className="shrink-0 w-6 aspect-square"
                                                />
                                                <div className="my-auto text-sm">12 Sessions</div>
                                            </div>
                                            <div className="flex gap-2.5 text-neutral-500">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0614512d2c2e5ed7dc6284c81281b6935599b48676637384b139251f7567543d?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                                    className="shrink-0 w-6 aspect-square"
                                                />
                                                <div className="my-auto">35k Atendies</div>
                                            </div>
                                        </div>
                                        <img
                                            onClick={() => { Navigate('/dashboard/course/details') }}
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7c99789c18d7823e75d0ea2e0789fa546a117a0f4744c541ab08390c619b505?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 self-stretch my-auto aspect-[1.25] w-[75px] cursor-pointer"
                                        />
                                    </div>
                                    <div className="shrink-0 self-center mt-7 h-[1px] border border-solid bg-neutral-400 border-neutral-400 max-w-[80%] w-full mx-auto" />
                                </div>
                            ))
                        }

                    </>
                }
            </div>
        </div>
    );
}
