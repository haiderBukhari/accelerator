
export default function CourseDetails() {
    const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

    return (
        <div className="flex flex-col px-5">
            <div className="mt-12 w-full text-4xl font-bold text-neutral-700 max-md:mt-10 max-md:max-w-full">
                Introduction to Mobile App Development
            </div>
            <div className="mt-2 w-full text-base text-neutral-500 max-md:max-w-full">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
            </div>
            <div className="mt-10 w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 justify-center">
                    <div className="flex flex-col max-md:ml-0 max-w-[800px] w-full max-md:w-full">
                        <div className="flex flex-col grow max-md:mt-7 max-md:max-w-full">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9b02672138d1d811d1b05ee04a352f492244aad83a7b3c5b255876bb281a8a45?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b02672138d1d811d1b05ee04a352f492244aad83a7b3c5b255876bb281a8a45?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b02672138d1d811d1b05ee04a352f492244aad83a7b3c5b255876bb281a8a45?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b02672138d1d811d1b05ee04a352f492244aad83a7b3c5b255876bb281a8a45?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b02672138d1d811d1b05ee04a352f492244aad83a7b3c5b255876bb281a8a45?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b02672138d1d811d1b05ee04a352f492244aad83a7b3c5b255876bb281a8a45?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b02672138d1d811d1b05ee04a352f492244aad83a7b3c5b255876bb281a8a45?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b02672138d1d811d1b05ee04a352f492244aad83a7b3c5b255876bb281a8a45?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="w-full border border-solid aspect-[1.52] border-neutral-400 max-md:max-w-full"
                            />
                            <div className="flex gap-5 mt-7 w-full text-sm text-violet-800 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                                <div className="flex gap-2.5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/20aad50a5cff051f05769958fdcb7f595b06c00e216e73a7d2fb33271ac2655a?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 aspect-square w-[35px]"
                                    />
                                    <div className="my-auto">
                                        120 People are attending this session
                                    </div>
                                </div>
                                <div className="flex gap-2.5 whitespace-nowrap">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7127c3185a0f74bd417caa5929e7943fe0a431d3cabb5c823d86fe4de0159224?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 aspect-square w-[35px]"
                                    />
                                    <div className="my-auto">Introduction</div>
                                </div>
                            </div>
                            <div className="mt-11 text-2xl font-bold text-neutral-700 max-md:mt-10 max-md:max-w-full">
                                More About This Session
                            </div>
                            <div className="mt-5 text-base text-neutral-500 max-md:max-w-full">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industrys standard dummy
                                text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. It was
                                popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of
                                Lorem Ipsum.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[400px] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col items-start py-8 pl-10 w-[400px] rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:mt-7 ">
                            <div className="text-xl font-bold text-neutral-700 max-md:max-w-full">
                                Other Sessions In This Module
                            </div>
                            <div className="flex gap-5 mt-10 max-md:flex-wrap max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/10b110547c5803c02c843fe8541d29ce55e3b75d3d3c86787d1dac4259064065?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/10b110547c5803c02c843fe8541d29ce55e3b75d3d3c86787d1dac4259064065?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/10b110547c5803c02c843fe8541d29ce55e3b75d3d3c86787d1dac4259064065?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/10b110547c5803c02c843fe8541d29ce55e3b75d3d3c86787d1dac4259064065?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/10b110547c5803c02c843fe8541d29ce55e3b75d3d3c86787d1dac4259064065?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/10b110547c5803c02c843fe8541d29ce55e3b75d3d3c86787d1dac4259064065?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/10b110547c5803c02c843fe8541d29ce55e3b75d3d3c86787d1dac4259064065?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/10b110547c5803c02c843fe8541d29ce55e3b75d3d3c86787d1dac4259064065?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto border-violet-800 border-solid aspect-[1.16] border-[3px] w-[70px]"
                                />
                                <div className="flex flex-col py-1 max-md:max-w-full">
                                    <div className="text-lg font-semibold text-violet-800 max-md:max-w-full">
                                        Introduction to Mobile App Development
                                    </div>
                                    <div className="mt-2.5 text-base whitespace-nowrap text-ellipsis text-neutral-500 max-md:max-w-full">
                                    {text.length > 30 ? text.slice(0, 30) + '...' : text}
                                    </div>
                                </div>
                            </div>
                            <div className="shrink-0 mt-7 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
                            <div className="flex gap-5 mt-7 max-md:flex-wrap">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto border-solid aspect-[1.16] border-[3px] border-neutral-400 w-[70px]"
                                />
                                <div className="flex flex-col py-1 max-md:max-w-full">
                                    <div className="text-lg font-semibold text-zinc-600 max-md:max-w-full">
                                        Introduction to Mobile App Development
                                    </div>
                                    <div className="mt-2.5 text-base whitespace-nowrap text-ellipsis text-neutral-500 max-md:max-w-full">
                                    {text.length > 30 ? text.slice(0, 30) + '...' : text}
                                    </div>
                                </div>
                            </div>
                            <div className="shrink-0 mt-7 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
                            <div className="flex gap-5 mt-7 max-md:flex-wrap">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto border-solid aspect-[1.16] border-[3px] border-neutral-400 w-[70px]"
                                />
                                <div className="flex flex-col py-1 max-md:max-w-full">
                                    <div className="text-lg font-semibold text-zinc-600 max-md:max-w-full">
                                        Introduction to Mobile App Development
                                    </div>
                                    <div className="mt-2.5 text-base whitespace-nowrap text-ellipsis text-neutral-500 max-md:max-w-full">
                                    {text.length > 30 ? text.slice(0, 30) + '...' : text}

                                    </div>
                                </div>
                            </div>
                            <div className="shrink-0 mt-7 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
                            <div className="flex gap-5 mt-7 max-md:flex-wrap">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto border-solid aspect-[1.16] border-[3px] border-neutral-400 w-[70px]"
                                />
                                <div className="flex flex-col py-1 max-md:max-w-full">
                                    <div className="text-lg font-semibold text-zinc-600 max-md:max-w-full">
                                        Introduction to Mobile App Development
                                    </div>
                                    <div className="mt-2.5 text-base whitespace-nowrap text-ellipsis text-neutral-500 max-md:max-w-full">
                                    {text.length > 30 ? text.slice(0, 30) + '...' : text}

                                    </div>
                                </div>
                            </div>
                            <div className="shrink-0 mt-7 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
                            <div className="flex gap-5 mt-7 max-md:flex-wrap">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1244ef1466ef41f46fc9b190ed70aa8abaff73ecfa96bd4f03eb8836e621c21f?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto border-solid aspect-[1.16] border-[3px] border-neutral-400 w-[70px]"
                                />
                                <div className="flex flex-col py-1 max-md:max-w-full">
                                    <div className="text-lg font-semibold text-zinc-600 max-md:max-w-full">
                                        Introduction to Mobile App Development
                                    </div>
                                    <div className="mt-2.5 text-base whitespace-nowrap text-ellipsis text-neutral-500 max-md:max-w-full">
                                    {text.length > 30 ? text.slice(0, 30) + '...' : text}
                                    </div>
                                </div>
                            </div>
                            <div className="shrink-0 mt-7 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}