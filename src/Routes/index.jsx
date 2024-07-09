import { Routes, Route } from "react-router-dom";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import RecoveryEmail from "../components/Auth/RecoveryEmail";
import OtpConfirmation from "../components/Auth/OtpConfirmation";
import ChangePassword from "../components/Auth/ChangePassword";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Groups from "../pages/Groups";
import Messages from "../pages/Messages";
import MessagesList from "../pages/Messages/MessageList";
import Members from "../pages/Members";
import Courses from "../pages/Courses";
import Events from "../pages/Events";
import GroupsDetails from "../pages/GroupDetails";
import CourseDetails from "../pages/Courses/CourseDetails";
import { useLocation } from "react-router-dom";

const index = ({ navbarOpen, setNavbarOpen }) => {
  const location = useLocation();
  const currentLocation =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/recovery-email" ||
    location.pathname === "/otp" ||
    location.pathname === "/change-password";
  return (
    <div>
      {!currentLocation && (
        <div className="mx-7">
          <div className="flex justify-between items-center mt-4 px-5 w-full text-base font-medium text-zinc-800 max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a1c69ec7cc4e9f8ce4864f0877f50d6dd3d199366253aac9591bae9c934b0c?apiKey=cf358c329e0d49a792d02d32277323ef&"
              className="max-w-full aspect-[2.33] w-[100px] h-auto block md:hidden"
            />
            <div className="flex">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a174ab114ee43d5b1208e9730c7b5a058b4201aa9794dcd97d582c005bff44d3?apiKey=cf358c329e0d49a792d02d32277323ef&"
                className="shrink-0 aspect-square w-[30px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d929e9612869849c117010131f7baa3461183325052925370663effd1ee05fdd?apiKey=cf358c329e0d49a792d02d32277323ef&"
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="shrink-0 aspect-square ml-5 w-[30px]"
              />
            </div>
          </div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recovery-email" element={<RecoveryEmail />} />
        <Route path="/otp" element={<OtpConfirmation />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard/home" element={<Posts />} />
        <Route path="/dashboard/groups" element={<Groups />} />
        <Route path="/dashboard/messages" element={<Messages />} />
        <Route path="/dashboard/messages/:id" element={<MessagesList />} />
        <Route path="/dashboard/members" element={<Members />} />
        <Route path="/dashboard/course" element={<Courses />} />
        <Route path="/dashboard/events" element={<Events />} />
        <Route path="/dashboard/details/groups" element={<GroupsDetails />} />
        <Route path="/dashboard/course/details" element={<CourseDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default index;
