import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { failedToast, successToast } from "../../utils/toastNotifications";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUserDetails } from "../../features/profile";

const Login = () => {
    const Navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault()
        if (
            email === "" ||
            password === ""
        ) {
            return failedToast("All fields are required");
        }
        axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/auth?email=${email}&password=${password}`, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then((Item) => {
            if (!Item.data.recoveryEmail) {
                successToast("Successfully LogedIn")
                Navigate(`/recovery-email?id=${Item.data.id}`);
            } else {
                // if(!Item.data.isSubscriber){
                //     successToast("Please Select Payment Plan")
                //     Navigate(`/payment?id=${Item.data.id}`)
                //     return;
                // }
                successToast("Successfully LogedIn")
                dispatch(addUserDetails({
                    jwt: Item.data.token,
                    firstName: Item.data.firstName,
                    lastName: Item.data.lastName,
                    profilePicture: Item.data.profilePicture,
                    id: Item.data.id
                }))
                Navigate('/dashboard/course')
            }
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    };

    const forgotPassword = () => {
        Navigate('/recovery-email')
    }
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="pt-10 md:pt-0 bg-[#f2f2f2] md:bg-transparent">
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                className="w-full aspect-[2.33] max-w-[150px] mt-4 md:mt-10 mx-auto h-auto block md:hidden"
            />
            <form className="min-h-[100vh] flex flex-col justify-center">
                <div className="flex flex-col px-14 py-5 mb-16 font-medium md:mx-auto mt-8 md:mt-10 rounded-[60px] md:rounded-2xl border border-solid shadow-lg bg-[#e2e2e2] border-stone-300 leading-[95%] max-w-full md:max-w-[504px] w-full max-md:px-5 min-h-[100%] md:min-h-auto">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                        className="max-w-full aspect-[2.33] w-[115px] hidden md:block"
                    />
                    <div className="pt-5 md:pt-0 mt-10 text-6xl md:text-4xl max-md:text-3xl font-bold text-black leading-[60px]  max-md:mt-10 max-md:max-w-full  max-md:leading-10">
                        Login With Your <br /> Account
                    </div>
                    <div className="mt-8 text-base md:text-xl tracking-wider text-neutral-700 max-md:mt-10 max-md:max-w-full">
                        Username/Email Address
                    </div>
                    <input onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="i.e. jhon_e,abc@example.com" type='text' className="justify-center items-start px-6 py-2 mt-2 text-lg tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-black outline-none max-md:px-5 max-md:max-w-full focus:outline-none focus:border-[#FA5300] focus:placeholder:text-[#FA5300]" />
                    <div className="mt-4 text-xl tracking-wider text-neutral-700 max-md:max-w-full">
                        Password
                    </div>
                    <input onChange={(e) => { setPassword(e.target.value) }} value={password} type={`${showPassword ? 'text' : 'password'}`} className="justify-center items-start px-6 py-2 mt-2 text-lg tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-black max-md:px-5 max-md:max-w-full outline-none focus:outline-none focus:border-[#FA5300] focus:placeholder:text-[#FA5300]" placeholder="Type Here" />
                    <div className="flex gap-3.5 justify-end self-start mt-6 text-base tracking-wider text-black">
                        <input onChange={() => setShowPassword(!showPassword)} className="shrink-0 w-5 h-5 rounded-md border border-solid border-stone-300 bg-black outline-none" type='checkbox' />
                        <div className="flex-auto my-auto leading-[20px]">Show Password</div>
                    </div>
                    <div className="flex gap-5 justify-between mt-9 leading-[105%] max-md:flex-wrap max-md:max-w-full">
                        <button type="submit" onClick={onSubmit} className=" justify-center px-12 py-2 text-white whitespace-nowrap bg-violet-800 rounded-2xl max-md:px-9 cursor-pointer text-lg hover:text-white hover:bg-[#FA5300] transition-colors duration-300">
                            Login
                        </button>
                        <div onClick={forgotPassword} className="justify-center p-0.5 my-auto text-base md:text-xl text-[#0000FF] cursor-pointer hover:text-[#FA5300] transition-colors duration-300">
                            Forgot Password
                        </div>
                    </div>
                    <div className="mt-20 text-base md:text-xl leading-5 text-blue-700 max-md:mt-10 max-md:max-w-full">
                        Don’t have an account!{" "}
                        <Link to="/register" className="font-bold text-blue-700 underline">Create One</Link>
                    </div>
                    <div className="flex gap-5 justify-between items-center mt-10 text-xl leading-5 whitespace-nowrap text-black md:max-md:flex-wrap">
                        <div className="shrink-0 self-stretch my-auto h-0.5 border border-solid bg-neutral-400 border-neutral-400 flex-1" />
                        <div className="self-stretch">Or</div>
                        <div className="shrink-0 self-stretch my-auto h-0.5 border border-solid bg-neutral-400 border-neutral-400 flex-1" />
                    </div>
                    <div className="flex gap-5 justify-between self-center mt-9 ml-3.5 text-xl leading-5 whitespace-nowrap">
                        <div className="flex flex-col justify-center px-8 py-2 bg-white rounded-2xl border border-solid border-stone-300 text-zinc-800 max-md:px-4">
                            <div className="flex gap-1.5 justify-start md:justify-between">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee5515a233863dc2328cf0d6e96f9c96d741d1a36be161c0415c4978e892803d?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 aspect-square w-full max-w-[20px]"
                                />
                                <div className="my-auto text-base">Google</div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center px-6 py-2 text-white bg-blue-600 rounded-2xl border border-solid border-stone-300 max-md:px-5">
                            <div className="flex gap-1.5 justify-start md:justify-between">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/91ef688dea3849771ecd89b1e18bf4bb761d57b2e1d17a6e9fa6669b4a08c25e?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 aspect-square w-full max-w-[20px]"
                                />
                                <div className="my-auto text-base">Facebook</div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
