import { useState } from "react";

const AsideMessages = () => {
    const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
    const [messagePopUpOpen, setMessagePopUpOpen] = useState(false);
    const [messageDetailsOpen, setMessageDetailsOpen] = useState(false);
    return (
        <div style={{zIndex: 10}} className="relative">
            <div onClick={() => setMessagePopUpOpen(!messagePopUpOpen)} className={`justify-center fixed ${messagePopUpOpen ? 'bottom-[440px] h-[60px]' : 'bottom-0'} right-[20px] cursor-pointer items-start px-8 py-2 text-lg text-white bg-violet-800 w-[320px]`} style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}>
                Messages ( 05 )
            </div>
            {
                messagePopUpOpen && (
                    <div className="flex flex-col px-2.5 pt-5 pb-14 text-sm bg-zinc-300 max-w-[320px] fixed bottom-0 right-[20px]">
                        <div className="flex gap-5 justify-between items-start px-4 py-2.5 rounded-xl border border-solid bg-neutral-200 border-stone-300 text-neutral-500">
                            <input type='' placeholder="Search Friends" className="my-auto outline-none bg-transparent" />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/07d0b9a128fa47ea8483d4dd53c23fb0616ef458f297a9fbdb4a62d7bc38c248?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 self-start w-5 aspect-square"
                            />
                        </div>
                        <div onClick={() => setMessageDetailsOpen(!messageDetailsOpen)} className="flex cursor-pointer gap-4 pr-1.5 mt-6">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 w-10 border-solid aspect-square border-[3px] border-neutral-400"
                            />
                            <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                                <div className="font-medium text-zinc-800">John Smith</div>
                                <div className="mt-2 whitespace-nowrap text-ellipsis text-neutral-500">
                                    {text.length > 36 ? text.slice(0, 36) + '...' : text}
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 mt-4 h-px border border-solid bg-neutral-400 border-neutral-400" />
                        <div onClick={() => setMessageDetailsOpen(!messageDetailsOpen)} className="flex cursor-pointer gap-4 pr-1.5 mt-5">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 w-10 border-solid aspect-square border-[3px] border-neutral-400"
                            />
                            <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                                <div className="font-medium text-zinc-800">James Johnson</div>
                                <div className="mt-2 whitespace-nowrap text-ellipsis text-neutral-500">
                                    {text.length > 36 ? text.slice(0, 36) + '...' : text}

                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 mt-4 h-px border border-solid bg-neutral-400 border-neutral-400" />
                        <div onClick={() => setMessageDetailsOpen(!messageDetailsOpen)} className="flex cursor-pointer gap-4 pr-1.5 mt-5">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 w-10 border-solid aspect-square border-[3px] border-neutral-400"
                            />
                            <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                                <div className="font-medium text-zinc-800">Michael Brown</div>
                                <div className="mt-2 whitespace-nowrap text-ellipsis text-neutral-500">
                                    {text.length > 36 ? text.slice(0, 36) + '...' : text}
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 mt-4 h-px border border-solid bg-neutral-400 border-neutral-400" />
                        <div onClick={() => setMessageDetailsOpen(!messageDetailsOpen)} className="flex cursor-pointer gap-4 pr-1.5 mt-5">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff10dfc2062d558e572ea74e1197805274b1e116157496b3d1e83ccd1164a49d?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 w-10 border-solid aspect-square border-[3px] border-neutral-400"
                            />
                            <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                                <div className="font-medium text-zinc-800">David Jones</div>
                                <div className="mt-2 whitespace-nowrap text-ellipsis text-neutral-500">
                                    {text.length > 36 ? text.slice(0, 36) + '...' : text}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                messageDetailsOpen && <div className="flex flex-col w-[360px] h-[501px] fixed bottom-0 right-[390px]">
                    <div style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} className="flex gap-5 justify-between cursor-pointer items-start px-7 py-5 w-full text-lg text-white bg-violet-800">
                        <div className="my-auto">Jhon Smith</div>
                        <img
                            onClick={()=>{setMessageDetailsOpen(false)}}
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dbbc7bb6b2c2dd0ffd142e9579053a832d7e51363813cd91df16faf6f0444c3?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 self-start w-6 aspect-square"
                        />
                    </div>
                    <div className="flex flex-col px-2.5 pt-7 pb-8 w-full bg-zinc-300">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6171712d723a158dce52ea5cac1eb5248541f105e85ed40004fc6b8952a01881?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6171712d723a158dce52ea5cac1eb5248541f105e85ed40004fc6b8952a01881?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6171712d723a158dce52ea5cac1eb5248541f105e85ed40004fc6b8952a01881?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6171712d723a158dce52ea5cac1eb5248541f105e85ed40004fc6b8952a01881?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6171712d723a158dce52ea5cac1eb5248541f105e85ed40004fc6b8952a01881?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6171712d723a158dce52ea5cac1eb5248541f105e85ed40004fc6b8952a01881?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6171712d723a158dce52ea5cac1eb5248541f105e85ed40004fc6b8952a01881?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6171712d723a158dce52ea5cac1eb5248541f105e85ed40004fc6b8952a01881?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="self-center max-w-full border-4 border-solid aspect-square border-neutral-400 w-[100px]"
                        />
                        <div className="self-center mt-3 text-base font-medium text-zinc-800">
                            John Smith
                        </div>
                        <div className="self-center text-base text-ellipsis text-neutral-500">
                            Friends
                        </div>
                        <div className="flex flex-col items-start px-3 py-3 mt-4 rounded-xl border border-solid bg-orange-600 bg-opacity-10 border-neutral-400 w-[70px]">
                            <div className="text-xs text-zinc-600">2:30 PM</div>
                            <div className="mt-2.5 text-base text-black">Hi</div>
                        </div>
                        <div className="flex flex-col self-end px-3.5 py-3 mt-2 rounded-xl border border-solid bg-blue-700 bg-opacity-10 border-neutral-400">
                            <div className="text-xs text-zinc-600">2:30 PM</div>
                            <div className="mt-2.5 text-base text-black">Hello</div>
                        </div>
                        <div className="flex gap-3 mt-4 text-sm text-neutral-500">
                            <div className="grow justify-center items-start px-3 py-3.5 rounded-xl border border-solid bg-neutral-200 border-stone-300 w-fit">
                                Type Here
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c674ace3de69631be955fbcccb70e52f71567d3ac9a71ecb5ee40fd361d66209?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 w-16 aspect-[1.59]"
                            />
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default AsideMessages