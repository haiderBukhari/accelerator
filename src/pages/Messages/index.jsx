import { useNavigate } from "react-router-dom";

export default function Messages() {
    const Navigate = useNavigate();
    const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
    return (
        <div>
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 h-full">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow px-6 md:pt-11 pb-20 w-full text-base bg-[#f2f2f2] md:bg-transparent max-md:px-5 max-md:mt-10 max-md:max-w-full h-full">
                        <div className="flex gap-5 items-start px-5 py-3 rounded-xl border border-solid bg-neutral-200 border-stone-300 text-neutral-500 max-md:pr-5">
                            <input className="flex-auto my-auto bg-transparent outline-none" type='text' placeholder="Search Friends"/>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e30962ab32bdd75648fa143798e896d0b14004c96254bf8aa5f3aa42c5e9269?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 self-start aspect-square w-[23px] cursor-pointer"
                            />
                        </div>
                        <div onClick={()=>{Navigate('/dashboard/messages/1')}} className="flex cursor-pointer gap-5 pr-2 mt-7">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/979d721c6cbe22df2c2ff22187abbee383449297d50e7184f77237d22830103b?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/979d721c6cbe22df2c2ff22187abbee383449297d50e7184f77237d22830103b?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/979d721c6cbe22df2c2ff22187abbee383449297d50e7184f77237d22830103b?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/979d721c6cbe22df2c2ff22187abbee383449297d50e7184f77237d22830103b?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/979d721c6cbe22df2c2ff22187abbee383449297d50e7184f77237d22830103b?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/979d721c6cbe22df2c2ff22187abbee383449297d50e7184f77237d22830103b?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/979d721c6cbe22df2c2ff22187abbee383449297d50e7184f77237d22830103b?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/979d721c6cbe22df2c2ff22187abbee383449297d50e7184f77237d22830103b?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[50px] h-[50px]"
                            />
                            <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                                <div className="font-medium text-zinc-800">John Smith</div>
                                <div className="whitespace-nowrap text-ellipsis text-neutral-500">
                                    {text.length > 60 ? text.slice(0, 30) + '...' : text}
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 mt-5 h-px border border-solid bg-neutral-400 border-neutral-400" />
                        <div onClick={()=>{Navigate('/dashboard/messages/1')}} className="flex cursor-pointer gap-5 pr-2 mt-5">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cca925130ea0dd784a9ecf6b36ae3b4f12a0f082ff27f7ae22e187c703405542?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cca925130ea0dd784a9ecf6b36ae3b4f12a0f082ff27f7ae22e187c703405542?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cca925130ea0dd784a9ecf6b36ae3b4f12a0f082ff27f7ae22e187c703405542?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cca925130ea0dd784a9ecf6b36ae3b4f12a0f082ff27f7ae22e187c703405542?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cca925130ea0dd784a9ecf6b36ae3b4f12a0f082ff27f7ae22e187c703405542?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cca925130ea0dd784a9ecf6b36ae3b4f12a0f082ff27f7ae22e187c703405542?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cca925130ea0dd784a9ecf6b36ae3b4f12a0f082ff27f7ae22e187c703405542?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cca925130ea0dd784a9ecf6b36ae3b4f12a0f082ff27f7ae22e187c703405542?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[50px] h-[50px]"
                            />
                            <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                                <div className="font-medium text-zinc-800">James Johnson</div>
                                <div className="whitespace-nowrap text-ellipsis text-neutral-500">
                                    {text.length > 60 ? text.slice(0, 30) + '...' : text}                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 mt-5 h-0.5 border border-solid bg-neutral-400 border-neutral-400" />
                        <div onClick={()=>{Navigate('/dashboard/messages/1')}} className="flex cursor-pointer gap-5 pr-2 mt-5">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1260e6377d5a1bef2506cdcb26fa8db360b7e0742f229275cce195d21fe8a80a?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1260e6377d5a1bef2506cdcb26fa8db360b7e0742f229275cce195d21fe8a80a?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1260e6377d5a1bef2506cdcb26fa8db360b7e0742f229275cce195d21fe8a80a?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1260e6377d5a1bef2506cdcb26fa8db360b7e0742f229275cce195d21fe8a80a?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1260e6377d5a1bef2506cdcb26fa8db360b7e0742f229275cce195d21fe8a80a?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1260e6377d5a1bef2506cdcb26fa8db360b7e0742f229275cce195d21fe8a80a?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1260e6377d5a1bef2506cdcb26fa8db360b7e0742f229275cce195d21fe8a80a?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1260e6377d5a1bef2506cdcb26fa8db360b7e0742f229275cce195d21fe8a80a?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[50px] h-[50px]"
                            />
                            <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                                <div className="font-medium text-zinc-800">Michael Brown</div>
                                <div className="whitespace-nowrap text-ellipsis text-neutral-500">
                                    {text.length > 60 ? text.slice(0, 30) + '...' : text}                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 mt-5 h-px border border-solid bg-neutral-400 border-neutral-400" />
                        <div onClick={()=>{Navigate('/dashboard/messages/1')}} className="flex cursor-pointer gap-5 pr-2 mt-5">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/792c97025bc6c2efb98bbc0f0ecc4ac453ba10afcec09d7dd22608efd32b677d?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/792c97025bc6c2efb98bbc0f0ecc4ac453ba10afcec09d7dd22608efd32b677d?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/792c97025bc6c2efb98bbc0f0ecc4ac453ba10afcec09d7dd22608efd32b677d?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/792c97025bc6c2efb98bbc0f0ecc4ac453ba10afcec09d7dd22608efd32b677d?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/792c97025bc6c2efb98bbc0f0ecc4ac453ba10afcec09d7dd22608efd32b677d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/792c97025bc6c2efb98bbc0f0ecc4ac453ba10afcec09d7dd22608efd32b677d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/792c97025bc6c2efb98bbc0f0ecc4ac453ba10afcec09d7dd22608efd32b677d?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/792c97025bc6c2efb98bbc0f0ecc4ac453ba10afcec09d7dd22608efd32b677d?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[50px] h-[50px]"
                            />
                            <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                                <div className="font-medium text-zinc-800">
                                    William Williams
                                </div>
                                <div className="whitespace-nowrap text-ellipsis text-neutral-500">
                                    {text.length > 60 ? text.slice(0, 30) + '...' : text}                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 mt-5 h-px border border-solid bg-neutral-400 border-neutral-400" />
                        <div onClick={()=>{Navigate('/dashboard/messages/1')}} className="flex cursor-pointer gap-5 pr-2 mt-5">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca2a70c57a51979456d0babbab7e94efe3873d31b58297a2f28489e1647d1eff?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca2a70c57a51979456d0babbab7e94efe3873d31b58297a2f28489e1647d1eff?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca2a70c57a51979456d0babbab7e94efe3873d31b58297a2f28489e1647d1eff?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca2a70c57a51979456d0babbab7e94efe3873d31b58297a2f28489e1647d1eff?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca2a70c57a51979456d0babbab7e94efe3873d31b58297a2f28489e1647d1eff?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca2a70c57a51979456d0babbab7e94efe3873d31b58297a2f28489e1647d1eff?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca2a70c57a51979456d0babbab7e94efe3873d31b58297a2f28489e1647d1eff?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca2a70c57a51979456d0babbab7e94efe3873d31b58297a2f28489e1647d1eff?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[50px] h-[50px]"
                            />
                            <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                                <div className="font-medium text-zinc-800">David Jones</div>
                                <div className="whitespace-nowrap text-ellipsis text-neutral-500">
                                    {text.length > 60 ? text.slice(0, 30) + '...' : text}                                </div>
                            </div>
                        </div>
                        <div style={{ height: '2px' }} className="self-center mt-10 mb-2 w-60 bg-neutral-400"></div>
                        <div className="self-center font-bold text-neutral-400">End</div>
                    </div>
                </div>
                <div className="flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full hidden md:flex">
                    <div className="flex flex-col items-center self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/06171275e00513b1f5de60649faaf46b4584b1a1ec7a42adefe7b765adb63b4e?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/06171275e00513b1f5de60649faaf46b4584b1a1ec7a42adefe7b765adb63b4e?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/06171275e00513b1f5de60649faaf46b4584b1a1ec7a42adefe7b765adb63b4e?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/06171275e00513b1f5de60649faaf46b4584b1a1ec7a42adefe7b765adb63b4e?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/06171275e00513b1f5de60649faaf46b4584b1a1ec7a42adefe7b765adb63b4e?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/06171275e00513b1f5de60649faaf46b4584b1a1ec7a42adefe7b765adb63b4e?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/06171275e00513b1f5de60649faaf46b4584b1a1ec7a42adefe7b765adb63b4e?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/06171275e00513b1f5de60649faaf46b4584b1a1ec7a42adefe7b765adb63b4e?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="max-w-full aspect-square w-[186px]"
                        />
                        <div className="mt-2.5 text-4xl font-bold text-neutral-700">
                            Chat With Friends
                        </div>
                        <div className="self-stretch mt-8 text-lg text-center text-neutral-500 max-md:max-w-full">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industrys standard dummy text
                            ever since the 1500s
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
