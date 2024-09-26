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
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CourseDetails from "../pages/Courses/CourseDetails";
import CreateModule from "../pages/Courses/createModule";
import CreateEvent from "../pages/Events/createEvents";
import MembersRequests from "../pages/Members/membersRequest";
import ProfilePage from "../pages/profilePage";
import Payment from "../pages/Payment";
import TripVideo from "../pages/Courses/TripVideo";
import CreateQuiz from "../pages/Courses/createQuiz";
import { Quiz } from "../pages/Courses/Quiz";
import PersonalSection from "../pages/Personal-Section";

const Index = ({ navbarOpen, setNavbarOpen }) => {
  const location = useLocation();
  const currentLocation =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/recovery-email" ||
    location.pathname === "/otp" ||
    location.pathname === "/change-password" || 
    location.pathname.includes('/dashboard/messages')

    const blueBgColor = (location.pathname === '/dashboard/course' || location.pathname === '/dashboard/modules') ? 'bg-neutral-100': 'bg-white'  

  const token = useSelector(state=>state.profile.jwt)
  return (
    <div>
      {!currentLocation && (
        <div className={`max-md:bg-[#f2f2f2] hidden ${blueBgColor}`}>
          <div className="flex justify-between items-center pt-4 px-5 w-full text-base font-medium text-zinc-800 max-md:flex-wrap max-md:max-w-full">
            <p className="hidden md:block">Search on  The App Accelerator </p>
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
                className="shrink-0 md:hidden aspect-square ml-5 w-[30px]"
              />
            </div>
          </div>
        </div>
      )}
      <Routes>
        <Route path="/" element={!token ? <Login /> : <Navigate to ="/dashboard/home"/>} />
        <Route path="/payment" element={!token ? <Payment /> : <Navigate to ="/dashboard/home"/>} />
        <Route path="/login" element={!token ? <Login /> : <Navigate to ="/dashboard/home"/>} />
        <Route path="/register" element={!token ? <Register /> : <Navigate to ="/dashboard/home"/>} />
        <Route path="/recovery-email" element={!token ? <RecoveryEmail /> : <Navigate to ="/dashboard/home"/>} />
        <Route path="/otp" element={!token ? <OtpConfirmation /> : <Navigate to ="/dashboard/home"/>} />
        <Route path="/change-password" element={!token ? <ChangePassword /> : <Navigate to ="/dashboard/home"/>} />
        <Route path="/home" element={token ? <Home /> : <Navigate to ="/login"/>} />
        <Route path="/dashboard/home" element={token ? <Posts /> : <Navigate to ="/login"/>} />
        <Route path="/dashboard/groups" element={token ? <Groups /> : <Navigate to ="/login"/>} />
        <Route path="/dashboard/messages" element={token ? <Messages /> : <Navigate to ="/login"/>} />
        <Route path="/dashboard/messages/:id" element={token ? <MessagesList /> : <Navigate to ="/login"/>} />
        <Route path="/dashboard/members" element={token ? <Members /> : <Navigate to ="/login"/>} />
        <Route path="/dashboard/members/requests" element={token ? <MembersRequests /> : <Navigate to ="/login"/>} />
        <Route path="/dashboard/course" element={token ? <Courses /> : <Navigate to ="/login"/>} />
        <Route path="/dashboard/modules" element={token ? <CreateModule /> : <Navigate to ="/login"/>} />
        <Route path="/dashboard/quiz" element={token ? <CreateQuiz /> : <Navigate to ="/login"/>} />
        <Route path="/dashboard/quiz/attempt" element={token ? <Quiz /> : <Navigate to ="/login"/>} />
        <Route path="/dashboard/video" element={token ? <TripVideo /> : <Navigate to ="/login"/>} />
        <Route path="/dashboard/events" element={token ? <Events /> : <Navigate to ="/login"/>} />
        <Route path="/personal-section" element={token ? <PersonalSection /> : <Navigate to ="/login"/>} />
        <Route path="/dashboard/events/create" element={token ? <CreateEvent /> : <Navigate to ="/login"/>} />
        <Route path="/dashboard/details/groups" element={token ? <GroupsDetails /> : <Navigate to ="/login"/>} />
        <Route path="/dashboard/course/details/:id" element={token ? <CourseDetails /> : <Navigate to ="/login"/>} />
        <Route path="/dashboard/profile/:id" element={token ? <ProfilePage /> : <Navigate to ="/login"/>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Index;