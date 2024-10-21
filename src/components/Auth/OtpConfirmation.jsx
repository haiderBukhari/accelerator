import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { failedToast, successToast } from "../../utils/toastNotifications";
import { useState } from "react";

const OtpConfirmation = () => {
    const Navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [otp, setOtp] = useState("");
    const email = searchParams.get("email");
  
    const onSubmit = () => {
        if(!otp){
          return failedToast('Invalid Otp');
        }
        axios
        .get(
          `${import.meta.env.VITE_APP_BACKEND_URL}/otp?email=${email}&otp=${otp}`,{
            headers: {
              "Content-Type": "application/json",
            }
          }
        )
        .then((Item) => {
          Navigate(`/change-password?id=${Item.data.id}`)
          return successToast("OTP verified successfully");
        })
        .catch((err) => {
          return failedToast(err.response.data.error);
        });
    }
    return (
        <div className="pt-10 md:pt-0 bg-[#f2f2f2] md:bg-transparent flex flex-col justify-between min-h-screen max-md:min-h-[100vh] max-md:flex max-md:flex-col max-md:justify-between">
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                className="w-full aspect-[2.33] max-w-[150px] mt-4 md:mt-10 mx-auto h-auto block md:hidden"
            />
            <div className="min-h-0 md:min-h-[100vh] flex flex-col justify-center">
                <div className="flex flex-col px-14 py-5 mb-0 md:mb-16 font-medium md:mx-auto rounded-[60px] md:rounded-2xl border border-solid shadow-lg bg-[#e2e2e2] border-stone-300 leading-[95%] max-w-full md:max-w-[504px] w-full max-md:px-5 pb-20 mt-[16vh] md:mt-10 md:min-h-auto">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                        className="max-w-full aspect-[2.33] w-[115px] hidden md:block"
                    />
                    <div className="pt-5 md:pt-0 mt-10 text-6xl md:text-4xl font-bold text-black leading-[60px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                        Enter OTP
                    </div>
                    <div className="mt-7 text-lg leading-6 text-neutral-500 max-md:max-w-full">
                        <span className="">
                            An OTP has been successfully sent to your email. Please verify. If you havnt recieved please change the email or try again.
                        </span>
                        {/* <span className="font-bold text-neutral-500">abc@example.com</span>{" "} */}
                        {/* <span className="">and typesetting industry.</span> */}
                    </div>
                    <div className="mt-10 text-lg tracking-wider leading-5 text-neutral-700 max-md:mt-10 max-md:max-w-full">
                        Enter 5 Digits OTP
                    </div>
                    <input onChange={(e)=>{setOtp(e.target.value)}} value={otp} className="justify-center items-start px-6 py-5 mt-4 text-lg tracking-wider leading-4 whitespace-nowrap rounded-xl border border-solid w-full bg-zinc-300 border-stone-300 text-black outline-none max-md:px-5 max-md:max-w-full focus:outline-none focus:border-[#FA5300] focus:placeholder:text-[#FA5300]" type='text' placeholder="X-X-X-X-X" />
                    <div className="flex gap-5 justify-between mt-11 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                        <div onClick={onSubmit} className="justify-center px-12 py-2 text-white whitespace-nowrap bg-violet-800 rounded-2xl max-md:px-9 cursor-pointer text-lg hover:text-white hover:bg-[#FA5300] transition-colors duration-300">
                            Submit
                        </div>
                        <div onClick={() => {
                            Navigate('/recovery-email')
                        }} className="justify-center cursor-pointer p-px my-auto text-xl text-blue-700 hover:text-[#FA5300] transition-colors duration-300">
                            Change Email
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtpConfirmation
