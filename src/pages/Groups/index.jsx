import { useNavigate } from "react-router-dom";

export default function Groups() {
    const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
    const Navigate = useNavigate();
    return (
        <div className="flex flex-col px-5 max-w-[99%] ">
            <div className="mt-14 w-full text-xl lg:text-2xl font-semibold text-zinc-500 max-md:mt-10 max-md:max-w-full">
                Entrepreneur Groups{" "}
            </div>
            {
                new Array(10).fill(0).map((_, i) => (
                    <div key={i} className="px-5 2xl:px-7 py-5 mt-5 w-full rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:px-3 max-md:py-3 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-row max-md:gap-0 justify-between max-2xl:block max-md:flex">
                            <div className="flex flex-col max-md:ml-0 max-md:w-full">
                                <div className="flex grow gap-4 max-md:gap-2 max-md:mt-0 max-md:items-center">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/38c5b4735a899f8e1f0330e48ffd4f7e6b5350d54ab094cd0066d3ec939cb22c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 aspect-square h-[40px] w-[40px] md:h-[50px] md:w-[50px] border-4 rounded-xl border-violet-800 border-solid"
                                    />
                                    <div className="flex flex-col py-1 my-auto max-md:my-0">
                                        <div className="text-base max-md:text-sm font-medium text-zinc-800">
                                            Group Name Here
                                        </div>
                                        <div className="text-xs text-ellipsis text-neutral-500 max-md:hidden">
                                            {text.length > 60 ? text.slice(0, 60) + '...' : text}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-2 lg:ml-3 xl:ml-5 max-md:ml-0 max-md:w-full">
                                <div className="flex justify-end 2xl:justify-between self-stretch my-auto max-md:my-auto">
                                    <div className="flex gap-2.5 justify-between text-sm text-violet-800 whitespace-nowrap mr-4 xl:mr-7 max-md:gap-1.5 max-md:mr-5">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbf9f452b2ad0d9bc2072c788e3cdac85906c6c3a63ab0a7ec8669c8d70dc7de?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 aspect-square w-[25px] max-md:w-[15px]"
                                        />
                                        <div className="my-auto">27k</div>
                                    </div>
                                    <div onClick={()=>{Navigate('/dashboard/details/groups')}} className="flex justify-center px-5 py-1 text-base xl:text-lg text-white bg-violet-800 rounded-xl border border-solid w-full max-w-[130px] xl:max-w-[130px] border-neutral-400 max-md:px-3 max-md:py-2 max-md:max-w-[80px] max-md:text-xs">
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
                className="self-center mt-2 mb-4 border-solid aspect-[8.33] border-[3px] rounded-xl border-zinc-600 stroke-[5px] stroke-zinc-600 w-[43px]"
            />
        </div>
    );
}

