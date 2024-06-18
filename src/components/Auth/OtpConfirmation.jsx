import { useNavigate } from "react-router-dom";

const OtpConfirmation = () => {
    const Navigate = useNavigate();
    const onSubmit = () => {
        Navigate('/change-password')
    }
    return (
        <div className="flex justify-center my-7">
            <div className="flex flex-col px-12 pt-11 pb-14 font-medium rounded-3xl border border-solid shadow-lg bg-neutral-200 border-stone-300 leading-[105%] max-w-[500px] w-full max-md:px-5">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                    className="max-w-full aspect-[2.33] w-[125px]"
                />
                <div className="mt-6 text-3xl font-bold text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                    Enter OTP
                </div>
                <div className="mt-7 text-lg leading-6 text-neutral-500 max-md:max-w-full">
                    <span className="">
                        Lorem Ipsum is simply dummy text of the printing{" "}
                    </span>
                    <span className="font-bold text-neutral-500">abc@example.com</span>{" "}
                    <span className="">and typesetting industry.</span>
                </div>
                <div className="mt-10 text-lg tracking-wider leading-5 text-neutral-700 max-md:mt-10 max-md:max-w-full">
                    Enter 5 Digits OTP
                </div>
                <input className="justify-center items-start px-6 py-5 mt-4 text-lg tracking-wider leading-4 whitespace-nowrap rounded-xl border border-solid bg-zinc-300 border-stone-300 text-neutral-400 max-md:px-5 w-full" type='text' placeholder="X-X-X-X-X"/>
                <div className="flex gap-5 justify-between mt-11 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div onClick={onSubmit} className="justify-center px-14 py-3.5 text-2xl text-white whitespace-nowrap bg-violet-800 rounded-2xl max-md:px-5 hover:opacity-50 cursor-pointer">
                        Submit
                    </div>
                    <div onClick={()=>{
                        Navigate('/recovery-email')
                    }} className="justify-center cursor-pointer p-px my-auto text-xl text-blue-700">
                        Change Email
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtpConfirmation
