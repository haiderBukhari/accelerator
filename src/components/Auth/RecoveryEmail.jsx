import { useNavigate } from "react-router-dom";

const RecoveryEmail = () => {
    const Navigate = useNavigate();
    const onSubmit = () => {
        Navigate('/otp')
    }
    return (
        <div className="flex justify-center">
            <div className="flex flex-col px-14 my-6 pt-11 pb-20 font-medium rounded-3xl border border-solid shadow-lg bg-neutral-200 border-stone-300 leading-[95%] max-w-[464px] w-full max-md:px-5">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                    className="max-w-full aspect-[2.33] w-[125px]"
                />
                <div className="mt-6 text-4xl font-bold text-black leading-[39px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                    Enter Recovery <br/>  Email Address
                </div>
                <div className="mt-5 text-lg tracking-wider text-neutral-700 max-md:mt-10 max-md:max-w-full">
                    Email Address
                </div>
                <input className="justify-center items-start px-6 py-3 mt-5 text-lg tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 outline-none text-neutral-400 max-md:px-5 max-md:max-w-full" type='email' placeholder="i.e. abc@example.com"/>
                <div onClick={onSubmit} className="justify-center px-16 py-3 mt-9 text-md leading-6 text-white bg-violet-800 rounded-2xl cursor-pointer max-md:px-5 text-center w-[200px] hover:opacity-50">
                    Send OTP
                </div>
            </div>
        </div>
    )
}
export default RecoveryEmail
