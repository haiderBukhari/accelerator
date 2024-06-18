import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';
import RecoveryEmail from '../components/Auth/RecoveryEmail';
import OtpConfirmation from '../components/Auth/OtpConfirmation';
import ChangePassword from '../components/Auth/ChangePassword';
import Home from '../pages/Home'

const index = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/recovery-email" element={<RecoveryEmail />}/>
                <Route path="/otp" element={<OtpConfirmation />}/>
                <Route path="/change-password" element={<ChangePassword />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="*" element={<Login />}/>
            </Routes>
        </>
    )
}

export default index
