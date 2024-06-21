export default function Messages() {
    const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
    return (
        <div className="w-full">
            <div className="flex max-md:flex-col max-md:gap-0 h-full w-full">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow px-6 pt-11 pb-20 w-full text-base bg-stone-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 items-start px-5 py-3 rounded-xl border border-solid bg-neutral-200 border-stone-300 text-neutral-500 max-md:pr-5">
                            <input className="flex-auto my-auto bg-transparent outline-none" type='text' placeholder="Search Friends" />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e30962ab32bdd75648fa143798e896d0b14004c96254bf8aa5f3aa42c5e9269?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 self-start aspect-square w-[23px] cursor-pointer"
                            />
                        </div>
                        <div className="flex gap-5 pr-2 mt-7">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/979d721c6cbe22df2c2ff22187abbee383449297d50e7184f77237d22830103b?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/979d721c6cbe22df2c2ff22187abbee383449297d50e7184f77237d22830103b?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/979d721c6cbe22df2c2ff22187abbee383449297d50e7184f77237d22830103b?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/979d721c6cbe22df2c2ff22187abbee383449297d50e7184f77237d22830103b?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/979d721c6cbe22df2c2ff22187abbee383449297d50e7184f77237d22830103b?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/979d721c6cbe22df2c2ff22187abbee383449297d50e7184f77237d22830103b?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/979d721c6cbe22df2c2ff22187abbee383449297d50e7184f77237d22830103b?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/979d721c6cbe22df2c2ff22187abbee383449297d50e7184f77237d22830103b?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[50px] h-[50px]"
                            />
                            <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                                <div className="font-medium text-zinc-800">John Smith</div>
                                <div className="whitespace-nowrap text-ellipsis text-neutral-500">
                                    {text.length > 40 ? text.slice(0, 24) + '...' : text}
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 mt-5 h-px border border-solid bg-neutral-400 border-neutral-400" />
                        <div className="flex gap-5 pr-2 mt-5">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cca925130ea0dd784a9ecf6b36ae3b4f12a0f082ff27f7ae22e187c703405542?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cca925130ea0dd784a9ecf6b36ae3b4f12a0f082ff27f7ae22e187c703405542?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cca925130ea0dd784a9ecf6b36ae3b4f12a0f082ff27f7ae22e187c703405542?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cca925130ea0dd784a9ecf6b36ae3b4f12a0f082ff27f7ae22e187c703405542?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cca925130ea0dd784a9ecf6b36ae3b4f12a0f082ff27f7ae22e187c703405542?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cca925130ea0dd784a9ecf6b36ae3b4f12a0f082ff27f7ae22e187c703405542?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cca925130ea0dd784a9ecf6b36ae3b4f12a0f082ff27f7ae22e187c703405542?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cca925130ea0dd784a9ecf6b36ae3b4f12a0f082ff27f7ae22e187c703405542?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[50px] h-[50px]"
                            />
                            <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                                <div className="font-medium text-zinc-800">James Johnson</div>
                                <div className="whitespace-nowrap text-ellipsis text-neutral-500">
                                    {text.length > 40 ? text.slice(0, 24) + '...' : text}                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 mt-5 h-0.5 border border-solid bg-neutral-400 border-neutral-400" />
                        <div className="flex gap-5 pr-2 mt-5">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1260e6377d5a1bef2506cdcb26fa8db360b7e0742f229275cce195d21fe8a80a?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1260e6377d5a1bef2506cdcb26fa8db360b7e0742f229275cce195d21fe8a80a?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1260e6377d5a1bef2506cdcb26fa8db360b7e0742f229275cce195d21fe8a80a?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1260e6377d5a1bef2506cdcb26fa8db360b7e0742f229275cce195d21fe8a80a?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1260e6377d5a1bef2506cdcb26fa8db360b7e0742f229275cce195d21fe8a80a?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1260e6377d5a1bef2506cdcb26fa8db360b7e0742f229275cce195d21fe8a80a?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1260e6377d5a1bef2506cdcb26fa8db360b7e0742f229275cce195d21fe8a80a?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1260e6377d5a1bef2506cdcb26fa8db360b7e0742f229275cce195d21fe8a80a?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[50px] h-[50px]"
                            />
                            <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                                <div className="font-medium text-zinc-800">Michael Brown</div>
                                <div className="whitespace-nowrap text-ellipsis text-neutral-500">
                                    {text.length > 40 ? text.slice(0, 24) + '...' : text}                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 mt-5 h-px border border-solid bg-neutral-400 border-neutral-400" />
                        <div className="flex gap-5 pr-2 mt-5">
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
                                    {text.length > 40 ? text.slice(0, 24) + '...' : text}                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 mt-5 h-px border border-solid bg-neutral-400 border-neutral-400" />
                        <div className="flex gap-5 pr-2 mt-5">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca2a70c57a51979456d0babbab7e94efe3873d31b58297a2f28489e1647d1eff?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca2a70c57a51979456d0babbab7e94efe3873d31b58297a2f28489e1647d1eff?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca2a70c57a51979456d0babbab7e94efe3873d31b58297a2f28489e1647d1eff?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca2a70c57a51979456d0babbab7e94efe3873d31b58297a2f28489e1647d1eff?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca2a70c57a51979456d0babbab7e94efe3873d31b58297a2f28489e1647d1eff?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca2a70c57a51979456d0babbab7e94efe3873d31b58297a2f28489e1647d1eff?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca2a70c57a51979456d0babbab7e94efe3873d31b58297a2f28489e1647d1eff?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca2a70c57a51979456d0babbab7e94efe3873d31b58297a2f28489e1647d1eff?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 border-solid aspect-square border-[3px] border-neutral-400 w-[50px] h-[50px]"
                            />
                            <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                                <div className="font-medium text-zinc-800">David Jones</div>
                                <div className="whitespace-nowrap text-ellipsis text-neutral-500">
                                    {text.length > 40 ? text.slice(0, 24) + '...' : text}                                </div>
                            </div>
                        </div>
                        <div style={{ height: '2px' }} className="self-center mt-10 mb-2 w-60 bg-neutral-400"></div>
                        <div className="self-center font-bold text-neutral-400">End</div>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="flex gap-5 justify-between px-12 py-6 w-full bg-[#E0E0E0] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                            <div className="flex gap-5 text-lg">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/86a7748a9c425565703d2d92843a3b5d006b34f60d27bb8ba18aa0026b4fbb54?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/86a7748a9c425565703d2d92843a3b5d006b34f60d27bb8ba18aa0026b4fbb54?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86a7748a9c425565703d2d92843a3b5d006b34f60d27bb8ba18aa0026b4fbb54?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/86a7748a9c425565703d2d92843a3b5d006b34f60d27bb8ba18aa0026b4fbb54?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/86a7748a9c425565703d2d92843a3b5d006b34f60d27bb8ba18aa0026b4fbb54?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86a7748a9c425565703d2d92843a3b5d006b34f60d27bb8ba18aa0026b4fbb54?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/86a7748a9c425565703d2d92843a3b5d006b34f60d27bb8ba18aa0026b4fbb54?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/86a7748a9c425565703d2d92843a3b5d006b34f60d27bb8ba18aa0026b4fbb54?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 border-4 border-solid aspect-[1.02] border-neutral-400 w-[60px] h-[60px]"
                                />
                                <div className="flex flex-col py-1.5 my-auto">
                                    <div className="font-medium text-zinc-800">John Smith</div>
                                    <div className="text-ellipsis text-neutral-500">Active</div>
                                </div>
                            </div>
                            <div className="flex gap-5 justify-between my-auto">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0875e08c910b2ca80c6353466fd26d849803614b91b12ed0f6c0755eb0f7f694?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 aspect-square w-[35px]"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/791b92829cb2704be8ebe8c7af937be2f83b1c99aa55482a7d4ffbe2df299e8f?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 aspect-square w-[35px]"
                                />
                                <div className="shrink-0 self-start h-[33px] w-[7px]" />
                            </div>
                        </div>
                        <div className="flex flex-col px-12 pt-[622px] max-md:px-5 max-md:mt-10 max-md:max-w-full bg-neutral-100">
                            <div className="flex flex-col items-start py-2.5 pr-8 pl-4 border border-solid bg-orange-600 bg-opacity-10 border-neutral-400 w-[103px] rounded-xl max-md:pr-5">
                                <div className="text-xs text-zinc-600">2:30 PM</div>
                                <div className="mt-1.5 text-xl text-black">Hi</div>
                            </div>
                            <div className="flex flex-col items-start self-end py-2.5 pr-8 pl-4 mt-24 rounded-xl border border-solid bg-blue-700 bg-opacity-10 border-neutral-400 w-[94px] max-md:pr-5 max-md:mt-10">
                                <div className="text-xs text-zinc-600">2:30 PM</div>
                                <div className="mt-1.5 text-xl text-black">Hello</div>
                            </div>
                        </div>
                        <div className="flex gap-5 self-center pt-20 max-md:flex-wrap max-md:mt-10 w-full px-5 pb-10 bg-neutral-100">
                            <div className="flex flex-auto gap-5 justify-between py-3.5 rounded-xl border border-solid bg-[#CCCCCC] border-stone-300 max-md:flex-wrap w-full px-10">
                                <div className="my-auto text-lg text-neutral-500 w-full bg-[#CCCCCC]">Type Here</div>
                                <div className="flex gap-2.5 justify-between ">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ddfcc9b84d86a41700fda54352c1076c20ed5ff21004f6c63a60947ab4dd937?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 w-6 aspect-square cursor-pointer"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/da329a985978015750535007642553b587703e072af3c1b5e86da2d0bfc23447?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 w-6 aspect-square cursor-pointer"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3994a18ed97f75af9bd494ec21dfed3503d640428250ae088db060749297cce5?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 w-6 aspect-square cursor-pointer"
                                    />
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/39f6a830627c4724d4e4b9a1c842273a5c29224950ceb40bbb983f57c759b036?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 w-16 aspect-[1.28] cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
