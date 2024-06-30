import { useState } from "react"
import { useNavigate } from "react-router-dom"

const ChangePassword = () => {
    const Navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="pt-10 md:pt-0 bg-[#f2f2f2] md:bg-transparent">
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                className="max-w-full aspect-[2.33] w-[250px] mx-auto h-auto block md:hidden mt-[7vh]"
            />
            <div className="flex justify-center">
                <div className="flex flex-col px-14 py-5 mb-16 font-medium md:mx-auto rounded-[60px] md:rounded-2xl border border-solid shadow-lg bg-[#e2e2e2] border-stone-300 leading-[95%] max-w-full md:max-w-[504px] w-full max-md:px-5 pb-20 mt-[16vh] md:mt-10 md:min-h-auto">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                        className="max-w-full aspect-[2.33] w-[115px] hidden md:block"
                    />
                    <div className="pt-5 md:pt-0 mt-10 text-7xl md:text-4xl font-bold text-black leading-[60px]  max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                        Set A New Password
                    </div>
                    <div className="mt-7 text-xl tracking-wider text-neutral-700 max-md:mt-10 max-md:max-w-full">
                        Enter New Password
                    </div>
                    <input className="justify-center items-start px-6 py-3 mt-5 text-lg tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-neutral-400 max-md:px-5 max-md:max-w-full" type={`${showPassword ? 'text' : 'password'}`} placeholder="Type Here." />
                    <div className="mt-4 text-xl tracking-wider text-neutral-700 max-md:max-w-full">
                        Confirm Password
                    </div>
                    <input className="justify-center items-start px-6 py-3 mt-5 text-lg tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-neutral-400 max-md:px-5 max-md:max-w-full" type={`${showPassword ? 'text' : 'password'}`} placeholder="Type Here." />
                    <div className="flex gap-3.5 justify-end self-start mt-6 text-base tracking-wider text-black">
                        <input onChange={() => setShowPassword(!showPassword)} className="shrink-0 w-6 h-6 rounded-md border border-solid border-stone-300 bg-black outline-none" type='checkbox' checked={showPassword} />
                        <div onClick={() => setShowPassword(!showPassword)} className="flex-auto my-auto cursor-pointer">Show Password</div>
                    </div>
                    <div onClick={() => {
                        Navigate('/home')
                    }} className="justify-center self-start px-16 py-3.5 mt-9 text-2xl leading-6 text-white whitespace-nowrap bg-violet-800 rounded-2xl max-md:px-5 cursor-pointer hover:opacity-50">
                        Submit
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword