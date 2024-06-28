import { useState } from "react";
import CommentsDialog from "../../components/comments";
import { useNavigate } from "react-router-dom";

export default function Posts() {
    const [open, setOpen] = useState(false);
    const Navigate = useNavigate();

    return (
        <div className="flex flex-col max-w-[1060px] mx-7 mt-5">
            <div className="flex gap-5 px-5 w-full text-base font-medium text-zinc-800 max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto my-auto">Search on The App Accelerator </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a174ab114ee43d5b1208e9730c7b5a058b4201aa9794dcd97d582c005bff44d3?apiKey=cf358c329e0d49a792d02d32277323ef&"
                    className="shrink-0 aspect-square w-[30px]"
                />
            </div>
            <div className="flex gap-5 justify-between pl-5 mt-10 w-full rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-4 my-auto text-base font-medium text-zinc-500">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4eca671092c10d5cda8097c5ea429b8029a4513c2f357df2aa4e28d2db4dd1?apiKey=cf358c329e0d49a792d02d32277323ef&"
                        className="shrink-0 w-10 border-4 border-violet-800 border-solid aspect-square"
                    />
                    <div className="flex-auto my-auto">Let’s make something new!</div>
                </div>
                <div className="flex flex-col justify-center px-9 py-4 bg-violet-800 rounded-3xl border border-solid border-neutral-400 max-md:px-5">
                    <div className="flex gap-5 justify-between">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c6a5bfa10bfc829411928f0545a1d2f4e7be548a242a2f03a64730f289bb110?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 aspect-square w-[30px]"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9928e221ff81dcf989ef8b7146178be0ddd02598d4bac98b3ccafb8a5bc31b37?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 aspect-square w-[30px]"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/99a946cab8c72acff3b6467ffde7e90e4ede4b672a22273cb1a6a2a56cc84de5?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 aspect-square w-[30px]"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-6 pt-5 pb-7 mt-8 w-full rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:pl-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
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
                            <div className="mt-2 text-xs text-neutral-500">20 mins. ago</div>
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/17fb2d504a4a46adf611331825b24e3490f3ff0a7aa1ff0f0783d4da246b0be9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                        className="shrink-0 my-auto aspect-square w-[25px]"
                    />
                </div>
                <div className="self-start mt-6 text-base text-zinc-800 max-md:max-w-full">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industrys standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </div>
                <div className="flex gap-5 justify-between px-px mt-6 w-full text-sm max-md:flex-wrap max-md:max-w-full">
                    <div className="flex w-full flex-col justify-center text-neutral-400 max-md:max-w-full">
                        <button onClick={()=>{setOpen(!open)}} className="justify-center text-start items-start px-3.5 py-3.5 rounded-xl border border-solid bg-neutral-300 border-neutral-400 max-md:pr-5 w-full">
                            Write a comment
                        </button>
                    </div>
                    <div className="flex max-w-[200px] justify-between w-full my-auto whitespace-nowrap text-neutral-400">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/057f6797c1a65234653a3b14b6904c6026c5676f9bba3f9afe3213ffb0ea12d6?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 aspect-square w-[25px]"
                        />
                        <div className="my-auto">27k</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/81b3988206ae45b69d451692ab183825d130156ed8d4f79341e2ae1d2c11b2ce?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 aspect-square w-[25px]"
                        />
                        <div className="my-auto">10</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc32947d0dc0dffaf5b54937d22a080004ed72c715c0b2d4d6a6def7314ff0f6?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 aspect-square w-[25px]"
                        />
                        <div className="my-auto">1</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-6 pt-5 pb-11 mt-8 w-full rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
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
                            <div className="mt-2 text-xs text-neutral-500">1 hr. ago</div>
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/889512490f09781fe61362bb6cbc08640e404f77d05b9a1f2f54e887f4f1c93d?apiKey=cf358c329e0d49a792d02d32277323ef&"
                        className="shrink-0 my-auto aspect-square w-[25px]"
                    />
                </div>
                <div className="self-start mt-6 text-base text-zinc-800 max-md:max-w-full">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industrys standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </div>
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6d119490dc93903df22a90c1eeec8da331d41c78f88f8dc549d48d26a1612c30?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d119490dc93903df22a90c1eeec8da331d41c78f88f8dc549d48d26a1612c30?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d119490dc93903df22a90c1eeec8da331d41c78f88f8dc549d48d26a1612c30?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d119490dc93903df22a90c1eeec8da331d41c78f88f8dc549d48d26a1612c30?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d119490dc93903df22a90c1eeec8da331d41c78f88f8dc549d48d26a1612c30?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d119490dc93903df22a90c1eeec8da331d41c78f88f8dc549d48d26a1612c30?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d119490dc93903df22a90c1eeec8da331d41c78f88f8dc549d48d26a1612c30?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d119490dc93903df22a90c1eeec8da331d41c78f88f8dc549d48d26a1612c30?apiKey=cf358c329e0d49a792d02d32277323ef&"
                    className="self-center mt-6 w-full border border-solid aspect-[2.63] border-neutral-400 max-w-[784px] max-md:max-w-full"
                />
                <div className="flex gap-5 justify-between px-px mt-6 w-full text-sm max-md:flex-wrap max-md:max-w-full">
                    <div className="flex w-full flex-col justify-center text-neutral-400 max-md:max-w-full">
                        <button onClick={()=>{setOpen(!open)}} className="justify-center text-start items-start px-3.5 py-3.5 rounded-xl border border-solid bg-neutral-300 border-neutral-400 max-md:pr-5 w-full">
                            Write a comment
                        </button>
                    </div>
                    <div className="flex max-w-[200px] justify-between w-full my-auto whitespace-nowrap text-neutral-400">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/057f6797c1a65234653a3b14b6904c6026c5676f9bba3f9afe3213ffb0ea12d6?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 aspect-square w-[25px]"
                        />
                        <div className="my-auto">27k</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/81b3988206ae45b69d451692ab183825d130156ed8d4f79341e2ae1d2c11b2ce?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 aspect-square w-[25px]"
                        />
                        <div className="my-auto">10</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc32947d0dc0dffaf5b54937d22a080004ed72c715c0b2d4d6a6def7314ff0f6?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 aspect-square w-[25px]"
                        />
                        <div className="my-auto">1</div>
                    </div>
                </div>
            </div>
            <CommentsDialog open={open} setOpen={setOpen}/>
        </div>
    );
}

