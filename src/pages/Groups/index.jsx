export default function Groups() {
    const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
    return (
        <div className="flex flex-col px-5 max-w-[860px]">
            <div className="flex gap-5 w-full text-base font-medium text-zinc-800 max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto my-auto">Search on The App Accelerator </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/44c5df01ac7b3823e2df88cf5d0a1554b5bbd054c9c91c494efc638bb720e856?apiKey=cf358c329e0d49a792d02d32277323ef&"
                    className="shrink-0 aspect-square w-[30px]"
                />
            </div>
            <div className="mt-14 w-full text-2xl font-semibold text-zinc-500 max-md:mt-10 max-md:max-w-full">
                Entrepreneur Groups{" "}
            </div>
            {
                new Array(10).fill(0).map((_, i) => (
                    <div key={i} className="px-7 py-5 mt-5 w-full rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                                <div className="flex grow gap-4 max-md:flex-wrap max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 border-4 border-violet-800 border-solid aspect-square w-[60px]"
                                    />
                                    <div className="flex flex-col py-1 my-auto">
                                        <div className="text-base font-medium text-zinc-800">
                                            Group Name Here
                                        </div>
                                        <div className="text-xs text-ellipsis text-neutral-500">
                                            {text.length > 60 ? text.slice(0, 60) + '...' : text}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[220px] max-md:ml-0 max-md:w-full">
                                <div className="flex justify-between self-stretch my-auto max-md:mt-10">
                                    <div className="flex gap-2.5 justify-between my-auto text-sm text-violet-800 whitespace-nowrap">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbf9f452b2ad0d9bc2072c788e3cdac85906c6c3a63ab0a7ec8669c8d70dc7de?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 aspect-square w-[25px]"
                                        />
                                        <div className="my-auto">27k</div>
                                    </div>
                                    <div className="justify-center px-5 py-1 text-lg text-white bg-violet-800 rounded-xl border border-solid w-[120px] border-neutral-400 max-md:px-5">
                                        Join Now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="self-center mt-14 text-base font-medium text-zinc-600 max-md:mt-10">
                Show More
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/921125f176c766753f5022d43c5fc218a48df3d917ea9d45a70550fa14d9058a?apiKey=cf358c329e0d49a792d02d32277323ef&"
                className="self-center mt-2 border-solid aspect-[8.33] border-[5px] border-zinc-600 stroke-[5px] stroke-zinc-600 w-[43px]"
            />
        </div>
    );
}

