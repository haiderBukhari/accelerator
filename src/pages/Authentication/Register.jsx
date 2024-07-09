import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { failedToast } from "../../utils/toastNotifications";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const Navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const registerUser = () => {
    if (
      fname === "" ||
      lname === "" ||
      email === "" ||
      phoneNumber === "" ||
      password === "" ||
      cpassword === ""
    ) {
      return failedToast("All fields are required");
    }
    if (cpassword !== password) {
      return failedToast("Password doesnot matches");
    }
    axios
      .post(
        `${import.meta.env.VITE_APP_BACKEND_URL}/auth`,
        {
          firstName: fname,
          lastName: lname,
          email: email,
          phoneNumber: phoneNumber,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((Item) => {
        Navigate(`/recovery-email?id=${Item.data.id}`);
      })
      .catch((err) => {
        return failedToast(err.response.data.error);
      });
  };
  return (
    <div className="pt-10 md:pt-0 bg-[#f2f2f2] md:bg-transparent">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&"
        className="max-w-full aspect-[2.33] w-[250px] mt-10 mx-auto h-auto block md:hidden"
      />
      <div className="flex flex-col px-14 py-5 mb-16 font-medium md:mx-auto mt-20 md:mt-10 rounded-[60px] md:rounded-2xl border border-solid shadow-lg bg-[#e2e2e2] border-stone-300 leading-[95%] max-w-full md:max-w-[504px] w-full max-md:px-5 min-h-[100vh] md:min-h-auto">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&"
          className="max-w-full aspect-[2.33] w-[115px] hidden md:block"
        />
        <div className="pt-5 md:pt-0 mt-10 text-6xl md:text-4xl font-bold text-black leading-[60px]  max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Create a New <br /> Account
        </div>
        <div className="mt-8 text-xl tracking-wider text-neutral-700 max-md:mt-10 max-md:max-w-full">
          First Name
        </div>
        <input
          onChange={(e) => {
            setFName(e.target.value);
          }}
          value={fname}
          placeholder="i.e. john"
          type="text"
          className="justify-center items-start px-6 py-2 mt-4 text-lg tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-neutral-400 outline-none max-md:px-5 max-md:max-w-full"
        />
        <div className="mt-8 text-xl tracking-wider text-neutral-700 max-md:mt-10 max-md:max-w-full">
          Last Name
        </div>
        <input
          onChange={(e) => {
            setLName(e.target.value);
          }}
          value={lname}
          placeholder="i.e. delton"
          type="text"
          className="justify-center items-start px-6 py-2 mt-4 text-lg tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-neutral-400 outline-none max-md:px-5 max-md:max-w-full"
        />
        <div className="mt-8 text-xl tracking-wider text-neutral-700 max-md:mt-10 max-md:max-w-full">
          Email Address
        </div>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          placeholder="i.e. jhon_e,abc@example.com"
          type="text"
          className="justify-center items-start px-6 py-2 mt-4 text-lg tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-neutral-400 outline-none max-md:px-5 max-md:max-w-full"
        />
        <div className="mt-8 text-xl tracking-wider text-neutral-700 max-md:mt-10 max-md:max-w-full">
          Phone Number
        </div>
        <input
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          value={phoneNumber}
          placeholder="i.e. (XX) XXX XXXXXXX"
          type="text"
          className="justify-center items-start px-6 py-2 mt-4 text-lg tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-neutral-400 outline-none max-md:px-5 max-md:max-w-full"
        />
        <div className="mt-4 text-xl tracking-wider text-neutral-700 max-md:max-w-full">
          Password
        </div>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type={`${showPassword ? "text" : "password"}`}
          className="justify-center items-start px-6 py-2 mt-5 text-lg tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-neutral-400 max-md:px-5 max-md:max-w-full outline-none"
          placeholder="Type Here"
        />
        <div className="mt-4 text-xl tracking-wider text-neutral-700 max-md:max-w-full">
          Confirm Password
        </div>
        <input
          onChange={(e) => {
            setCPassword(e.target.value);
          }}
          value={cpassword}
          type={`${showPassword ? "text" : "password"}`}
          className="justify-center items-start px-6 py-2 mt-5 text-lg tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-neutral-400 max-md:px-5 max-md:max-w-full outline-none"
          placeholder="Type Here"
        />
        <div className="flex gap-3.5 justify-end self-start mt-6 text-base tracking-wider text-black">
          <input
            onChange={() => setShowPassword(!showPassword)}
            className="shrink-0 w-6 h-6 rounded-md border border-solid border-stone-300 bg-black outline-none"
            type="checkbox"
          />
          <div className="flex-auto my-auto text-sm">Show Password</div>
        </div>
        <div className="flex gap-3.5 justify-end self-start mt-6 text-base tracking-wider text-black">
          <input
            className="shrink-0 w-6 h-6 rounded-md border border-solid border-stone-300 bg-black outline-none"
            type="checkbox"
          />
          <div className="flex-auto my-auto text-sm">
            Agree with <strong>Privacy Policy</strong> +{" "}
            <strong> Terms & Conditions</strong>
          </div>
        </div>
        <div
          onClick={registerUser}
          className="flex gap-5 justify-between mt-9 leading-[105%] max-md:flex-wrap max-md:max-w-full cursor-pointer hover:opacity-70"
        >
          <div className="justify-center px-12 py-2 text-2xl text-white whitespace-nowrap bg-violet-800 rounded-2xl max-md:px-5">
            Register
          </div>
        </div>
        <div className="mt-20 text-[17px] md:text-xl leading-5 text-blue-700 max-md:mt-10 max-md:max-w-full">
          Already have an account!{" "}
          <Link to="/login" className="font-bold text-blue-700 underline">
            Back to Login
          </Link>
        </div>
        <div className="flex gap-5 justify-between items-center mt-10 text-xl leading-5 whitespace-nowrap text-neutral-400 md:max-md:flex-wrap">
          <div className="shrink-0 self-stretch my-auto h-0.5 border border-solid bg-neutral-400 border-neutral-400 flex-1" />
          <div className="self-stretch">Or</div>
          <div className="shrink-0 self-stretch my-auto h-0.5 border border-solid bg-neutral-400 border-neutral-400 flex-1" />
        </div>
        <div className="flex gap-5 justify-between self-center mt-9 ml-3.5 text-xl leading-5 whitespace-nowrap">
          <div className="flex flex-col justify-center px-8 py-2 bg-white rounded-2xl border border-solid border-stone-300 text-zinc-800 max-md:px-5">
            <div className="flex gap-1.5 justify-between">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee5515a233863dc2328cf0d6e96f9c96d741d1a36be161c0415c4978e892803d?apiKey=cf358c329e0d49a792d02d32277323ef&"
                className="shrink-0 w-9 aspect-square"
              />
              <div className="my-auto">Google</div>
            </div>
          </div>
          <div className="flex flex-col justify-center px-6 py-2 text-white bg-blue-600 rounded-2xl border border-solid border-stone-300 max-md:px-5">
            <div className="flex gap-1.5 justify-between">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/91ef688dea3849771ecd89b1e18bf4bb761d57b2e1d17a6e9fa6669b4a08c25e?apiKey=cf358c329e0d49a792d02d32277323ef&"
                className="shrink-0 w-9 aspect-square"
              />
              <div className="my-auto">Facebook</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
