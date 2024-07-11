import { useNavigate } from "react-router-dom";
export default function Courses() {
    const Navigate = useNavigate();
    return (
        <div className="flex flex-col px-5 pb-10 pt-10 bg-neutral-100">
            <div className="mt-14 w-full text-4xl font-bold text-neutral-700 max-md:mt-10 max-md:max-w-full">
                Course
            </div>
            <div className="mt-4 w-full text-xl text-zinc-500 max-md:max-w-full">
                Are you ready to learn something new?{" "}
            </div>
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
                            onClick={()=>{Navigate('/dashboard/course/details')}}
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7c99789c18d7823e75d0ea2e0789fa546a117a0f4744c541ab08390c619b505?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 self-stretch my-auto aspect-[1.25] w-[75px] cursor-pointer"
                        />
                    </div>
                    <div className="shrink-0 self-center mt-7 h-[1px] border border-solid bg-neutral-400 border-neutral-400 max-w-[80%] w-full mx-auto" />
                    </div>
                ))
            }
            {/* <div className="flex gap-5 justify-between items-center px-px mt-7 w-full max-md:flex-wrap max-md:max-w-full">
                <div className="self-stretch max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="grow shrink-0 max-w-full border-solid aspect-[1.49] border-[3px] border-neutral-400 w-[150px] max-md:mt-5"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto max-md:mt-9 max-md:max-w-full">
                                <div className="text-lg font-semibold text-zinc-600 max-md:max-w-full">
                                    Module 01 : Intro
                                </div>
                                <div className="mt-1 text-base text-neutral-500 max-md:max-w-full">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industrys
                                    standard dummy text ever since the 1500s.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 self-stretch my-auto text-base">
                    <div className="flex gap-2.5 text-violet-800">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/99de8a4805a38816bf21f6dc05e7c9f9b8e2ee99c22a05da867efaf55b45bc94?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 w-6 aspect-square"
                        />
                        <div className="my-auto">12 Sessions</div>
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
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7c99789c18d7823e75d0ea2e0789fa546a117a0f4744c541ab08390c619b505?apiKey=cf358c329e0d49a792d02d32277323ef&"
                    className="shrink-0 self-stretch my-auto aspect-[1.25] w-[75px]"
                />
            </div> */}
            {/* <div className="shrink-0 self-center mt-7 max-w-full h-px border border-solid bg-neutral-400 border-neutral-400 w-[1084px]" /> */}
            {/* <div className="flex gap-5 justify-between items-center px-px mt-7 w-full max-md:flex-wrap max-md:max-w-full">
                <div className="self-stretch max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="grow shrink-0 max-w-full border-solid aspect-[1.49] border-[3px] border-neutral-400 w-[150px] max-md:mt-5"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto max-md:mt-9 max-md:max-w-full">
                                <div className="text-lg font-semibold text-zinc-600 max-md:max-w-full">
                                    Module 01 : Intro
                                </div>
                                <div className="mt-1 text-base text-neutral-500 max-md:max-w-full">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industrys
                                    standard dummy text ever since the 1500s.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 self-stretch my-auto text-base">
                    <div className="flex gap-2.5 text-violet-800">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/99de8a4805a38816bf21f6dc05e7c9f9b8e2ee99c22a05da867efaf55b45bc94?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 w-6 aspect-square"
                        />
                        <div className="my-auto">12 Sessions</div>
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
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7c99789c18d7823e75d0ea2e0789fa546a117a0f4744c541ab08390c619b505?apiKey=cf358c329e0d49a792d02d32277323ef&"
                    className="shrink-0 self-stretch my-auto aspect-[1.25] w-[75px]"
                />
            </div> */}
            {/* <div className="shrink-0 self-center mt-7 max-w-full h-px border border-solid bg-neutral-400 border-neutral-400 w-[1084px]" /> */}
            {/* <div className="flex gap-5 justify-between items-center px-px mt-7 w-full max-md:flex-wrap max-md:max-w-full">
                <div className="self-stretch max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="grow shrink-0 max-w-full border-solid aspect-[1.49] border-[3px] border-neutral-400 w-[150px] max-md:mt-5"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto max-md:mt-9 max-md:max-w-full">
                                <div className="text-lg font-semibold text-zinc-600 max-md:max-w-full">
                                    Module 01 : Intro
                                </div>
                                <div className="mt-1 text-base text-neutral-500 max-md:max-w-full">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industrys
                                    standard dummy text ever since the 1500s.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 self-stretch my-auto text-base">
                    <div className="flex gap-2.5 text-violet-800">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/99de8a4805a38816bf21f6dc05e7c9f9b8e2ee99c22a05da867efaf55b45bc94?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 w-6 aspect-square"
                        />
                        <div className="my-auto">12 Sessions</div>
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
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7c99789c18d7823e75d0ea2e0789fa546a117a0f4744c541ab08390c619b505?apiKey=cf358c329e0d49a792d02d32277323ef&"
                    className="shrink-0 self-stretch my-auto aspect-[1.25] w-[75px]"
                />
            </div>
            <div className="shrink-0 self-center mt-7 max-w-full h-px border border-solid bg-neutral-400 border-neutral-400 w-[1084px]" /> */}
            {/* <div className="flex gap-5 justify-between items-center px-px mt-7 w-full max-md:flex-wrap max-md:max-w-full">
                <div className="self-stretch max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/918e69b3a4d512ef551c645e245475e626022466eb963d244874a9f925313455?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="grow shrink-0 max-w-full border-solid aspect-[1.49] border-[3px] border-neutral-400 w-[150px] max-md:mt-5"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto max-md:mt-9 max-md:max-w-full">
                                <div className="text-lg font-semibold text-zinc-600 max-md:max-w-full">
                                    Module 01 : Intro
                                </div>
                                <div className="mt-1 text-base text-neutral-500 max-md:max-w-full">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industrys
                                    standard dummy text ever since the 1500s.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 self-stretch my-auto text-base">
                    <div className="flex gap-2.5 text-violet-800">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/99de8a4805a38816bf21f6dc05e7c9f9b8e2ee99c22a05da867efaf55b45bc94?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 w-6 aspect-square"
                        />
                        <div className="my-auto">12 Sessions</div>
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
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7c99789c18d7823e75d0ea2e0789fa546a117a0f4744c541ab08390c619b505?apiKey=cf358c329e0d49a792d02d32277323ef&"
                    className="shrink-0 self-stretch my-auto aspect-[1.25] w-[75px]"
                />
            </div>
            <div className="shrink-0 self-center mt-7 max-w-full h-px border border-solid bg-neutral-400 border-neutral-400 w-[1084px]" /> */}
            {/* <div className="flex gap-5 justify-between px-px mt-7 w-full max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-wrap">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c287028a2e031b2172f69d1a6a270c5cc15cc210a845c29f83ef5eeab719c651?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c287028a2e031b2172f69d1a6a270c5cc15cc210a845c29f83ef5eeab719c651?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c287028a2e031b2172f69d1a6a270c5cc15cc210a845c29f83ef5eeab719c651?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c287028a2e031b2172f69d1a6a270c5cc15cc210a845c29f83ef5eeab719c651?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c287028a2e031b2172f69d1a6a270c5cc15cc210a845c29f83ef5eeab719c651?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c287028a2e031b2172f69d1a6a270c5cc15cc210a845c29f83ef5eeab719c651?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c287028a2e031b2172f69d1a6a270c5cc15cc210a845c29f83ef5eeab719c651?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c287028a2e031b2172f69d1a6a270c5cc15cc210a845c29f83ef5eeab719c651?apiKey=cf358c329e0d49a792d02d32277323ef&"
                        className="shrink-0 max-w-full border-solid aspect-[2.7] border-[3px] border-neutral-400 w-[150px]"
                    />
                    <div className="flex flex-col self-start mt-4 max-md:max-w-full">
                        <div className="text-lg font-semibold text-zinc-600 max-md:max-w-full">
                            Module 01 : Intro
                        </div>
                        <div className="mt-1 text-base text-neutral-500 max-md:max-w-full">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industrys standard dummy text
                            ever since the 1500s.
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 self-end mt-10 text-base">
                    <div className="flex gap-2.5 text-violet-800">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6702ea47c4739c2d55c9ae08c0355c3de2ae7ca2c0c8a341a093c68467bb1758?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 w-6 aspect-[1.41]"
                        />
                        <div>12 Sessions</div>
                    </div>
                    <div className="flex gap-2.5 text-neutral-500">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8368dea1f21cd87a6de13156bd68f030c9fb0392131a92723f0db324eb393c7e?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 w-6 aspect-[1.41]"
                        />
                        <div>35k Atendies</div>
                    </div>
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cab5cd576b85ebb298d6093bbf7d8cdebc0565c4a868f61f0e8caa5455eec7e?apiKey=cf358c329e0d49a792d02d32277323ef&"
                    className="shrink-0 self-start mt-5 aspect-[2.13] w-[75px]"
                />
            </div> */}
        </div>
    );
}

