import { useState } from "react"
import { useNavigate } from "react-router-dom"

const ChangePassword = () => {
    const Navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="flex justify-center my-7">
            <div className="flex flex-col px-12 pt-11 pb-10 font-medium rounded-3xl border border-solid shadow-lg bg-neutral-200 border-stone-300 leading-[95%] max-w-[464px] w-full max-md:px-5">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6ec5f65ecd602d1af7641ac488ef9987205bb8d333369980b0a77cdaf4adeda3?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ec5f65ecd602d1af7641ac488ef9987205bb8d333369980b0a77cdaf4adeda3?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ec5f65ecd602d1af7641ac488ef9987205bb8d333369980b0a77cdaf4adeda3?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ec5f65ecd602d1af7641ac488ef9987205bb8d333369980b0a77cdaf4adeda3?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ec5f65ecd602d1af7641ac488ef9987205bb8d333369980b0a77cdaf4adeda3?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ec5f65ecd602d1af7641ac488ef9987205bb8d333369980b0a77cdaf4adeda3?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ec5f65ecd602d1af7641ac488ef9987205bb8d333369980b0a77cdaf4adeda3?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ec5f65ecd602d1af7641ac488ef9987205bb8d333369980b0a77cdaf4adeda3?apiKey=cf358c329e0d49a792d02d32277323ef&"
                    className="max-w-full aspect-[2.27] w-[115px]"
                />
                <div className="mt-5 text-2xl font-bold text-black leading-[50px] max-md:max-w-full max-md:leading-10">
                    Set A New Password
                </div>
                <div className="mt-7 text-xl tracking-wider text-neutral-700 max-md:mt-10 max-md:max-w-full">
                    Enter New Password
                </div>
                <input className="justify-center items-start px-6 py-3 mt-5 text-lg tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-neutral-400 max-md:px-5 max-md:max-w-full" type={`${showPassword ? 'text' : 'password'}`} placeholder="Type Here."/>
                <div className="mt-4 text-xl tracking-wider text-neutral-700 max-md:max-w-full">
                    Confirm Password
                </div>
                <input className="justify-center items-start px-6 py-3 mt-5 text-lg tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-neutral-400 max-md:px-5 max-md:max-w-full" type={`${showPassword ? 'text' : 'password'}`} placeholder="Type Here."/>
                <div className="flex gap-3.5 justify-end self-start mt-6 text-base tracking-wider text-black">
                <input onChange={() => setShowPassword(!showPassword)} className="shrink-0 w-6 h-6 rounded-md border border-solid border-stone-300 bg-black outline-none" type='checkbox' checked={showPassword}/>
                <div onClick={() => setShowPassword(!showPassword)} className="flex-auto my-auto cursor-pointer">Show Password</div>
                </div>
                <div onClick={()=>{
                    Navigate('/home')
                }} className="justify-center self-start px-16 py-3.5 mt-9 text-2xl leading-6 text-white whitespace-nowrap bg-violet-800 rounded-2xl max-md:px-5 cursor-pointer hover:opacity-50">
                    Submit
                </div>
            </div>
        </div>
    )
}

export default ChangePassword