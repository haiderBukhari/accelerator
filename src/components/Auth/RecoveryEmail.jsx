import axios from "axios";
import { useState } from "react";
import { failedToast, successToast } from "../../utils/toastNotifications";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { addUserDetails } from "../../features/profile";
import { useDispatch } from "react-redux";

const RecoveryEmail = () => {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const id = searchParams.get("id");
  const Navigate = useNavigate();
  const onSubmit = () => {
    if (email === "" || email.includes("@") === false || email.includes(".") === false) {
      return failedToast("Please Enter Valid Email");
    }
    if (id) {
      axios
        .patch(
          `${import.meta.env.VITE_APP_BACKEND_URL}/auth`,
          {
            id: id,
            recoveryEmail: email,
          },
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        )
        .then((Item) => {
          if (!Item.data.isSubscriber) {
            successToast("Please Select Payment Plan")
            Navigate(`/payment?id=${Item.data.id}`)
            return;
          }
          Navigate(`/dashboard/course`);
          dispatch(addUserDetails({
            jwt: Item.data.token,
            firstName: Item.data.firstName,
            lastName: Item.data.lastName,
            profilePicture: Item.data.profilePicture,
            id: Item.data.id
          }))
          successToast('Recovery Email added Successfully')
        })
        .catch((err) => {
          return failedToast(err.response.data.error);
        });
    } else {
      axios
        .post(
          `${import.meta.env.VITE_APP_BACKEND_URL}/otp`,
          {
            email: email,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((Item) => {
          Navigate(`/otp?email=${email}`);
          return successToast("Otp sent to recovery Email");
        })
        .catch((err) => {
          return failedToast(err.response.data.error);
        });
    }
  };
  return (

    <div className="pt-10 md:pt-0 bg-[#f2f2f2] md:bg-transparent flex flex-col justify-between min-h-screen max-md:min-h-[100vh] max-md:flex max-md:flex-col max-md:justify-between">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&"
        className="aspect-[2.33] w-full max-w-[150px] mx-auto h-auto block md:hidden mt-[7vh]"
      />
      <div className="min-h-0 md:min-h-[100vh] flex flex-col justify-center">
        <div className="flex flex-col px-14 py-5 mb-0 md:mb-16 font-medium md:mx-auto rounded-[60px] md:rounded-2xl border border-solid shadow-lg bg-[#e2e2e2] border-stone-300 leading-[95%] max-w-full md:max-w-[504px] w-full max-md:px-5 pb-20 mt-[16vh] md:mt-10 md:min-h-auto">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&"
            className="max-w-full aspect-[2.33] w-[115px] hidden md:block"
          />
          <div className="pt-5 md:pt-0 mt-10 text-6xl md:text-4xl font-bold text-black leading-[60px]  max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Enter Recovery <br /> Email Address
          </div>
          <div className="mt-5 text-lg tracking-wider text-neutral-700 max-md:mt-10 max-md:max-w-full">
            Email Address
          </div>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className="justify-center items-start px-6 py-3 mt-5 text-lg tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-black outline-none max-md:px-5 max-md:max-w-full focus:outline-none focus:border-[#FA5300] focus:placeholder:text-[#FA5300]"
            type="email"
            placeholder="i.e. abc@example.com"
          />
          <div
            onClick={onSubmit}
            className="justify-center px-10 py-3 mt-9 text-md leading-6 text-white bg-violet-800 rounded-2xl cursor-pointer max-md:px-5 text-center w-full max-w-[100%]  md:max-w-[200px] text-lg hover:text-white hover:bg-[#FA5300] transition-colors duration-300"
          >
            {id ? "Add Email" : "Send OTP"}
          </div>
        </div>
      </div>
    </div>

  );
};
export default RecoveryEmail;
