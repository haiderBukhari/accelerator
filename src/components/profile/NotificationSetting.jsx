import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { failedToast, successToast } from '../../utils/toastNotifications';
import { useDispatch } from 'react-redux';
import { changeFirstName, changeLastName, changeProfilePicture } from '../../features/profile';
import { useNavigate } from 'react-router-dom';

const NotificationSettings = ({ open, handleClose, loading, setLoading, clickedSave, setSelectedContent }) => {
    const [userData, setUserData] = useState({});
    const [tempUserData, setTempUserData] = useState({});
    const [profilePhoto, setProfilePhoto] = useState(null);
    const fileInputRef = useRef(null);
    const token = useSelector(state => state.profile.jwt);
    const id = useSelector(state => state.profile.id);
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const handlePhotoChange = (event) => {
        setProfilePhoto(event.target.files[0]);
    };

    const handlePhotoClick = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = async () => {
        setLoading(true);
        setSelectedContent(-1);
        if (profilePhoto) {
            const formData = new FormData();
            formData.append('file', profilePhoto);
            formData.append('firstName', userData.firstName);
            formData.append('lastName', userData.lastName);
            formData.append('bio', userData.bio);
            formData.append('aboutMe', userData.aboutMe);
            try {
                await axios.put(`${import.meta.env.VITE_APP_BACKEND_URL}/auth/update`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`
                    }
                }).then((Item) => {
                    setLoading(false)
                    successToast("Profile Uploaded Successfully");
                    dispatch(changeProfilePicture(Item.data.profilePicture))
                    dispatch(changeFirstName(Item.data.firstName))
                    dispatch(changeLastName(Item.data.lastName))
                    handleClose();
                })
            } catch (error) {
                setLoading(false);
                console.error('Error uploading file:', error);
                alert('Error uploading file');
            }
        } else {
            if (tempUserData.firstName === userData.firstName && tempUserData.lastName === userData.lastName && tempUserData.bio === userData.bio && tempUserData.aboutMe === userData.aboutMe) {
                return;
            }
            try {
                await axios.put(`${import.meta.env.VITE_APP_BACKEND_URL}/auth`, {
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    bio: userData.bio,
                    aboutMe: userData.aboutMe,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }).then((Item) => {
                    successToast("Profile Uploaded Successfully");
                    dispatch(changeFirstName(Item.data.firstName))
                    dispatch(changeLastName(Item.data.lastName))
                    setLoading(false)
                    handleClose();
                })
            } catch (error) {
                console.error('Error uploading file:', error);
                alert('Error uploading file');
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        if (clickedSave) {
            handleSubmit();
        }
    }, [clickedSave])

    async function getUserData() {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/auth/userData`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setUserData(Item.data.user);
            setTempUserData(Item.data.user);
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }
    useEffect(() => {
        getUserData();
    }, [open])

    return (
        <div>
            <div className='w-[80%] mt-5'>
                <div className="flex flex-col text-base font-medium tracking-wider leading-4 max-w-[361px] text-neutral-800">
                    <div className="w-full font-semibold">First Name</div>
                    <input onChange={(event) => { setUserData({ ...userData, firstName: event.target.value }) }} value={userData?.firstName ?? ""} style={{ border: "1px solid #AAAAAA" }} type="text" name="" id="" className="justify-center items-start px-5 py-2 mt-3 w-full text-base tracking-wider rounded-xl border border-solid outline-none text-black bg-zinc-300 border-stone-300" placeholder='i.e. jhon' />
                    <div className="mt-6 w-full font-semibold">Last Name</div>
                    <input onChange={(event) => { setUserData({ ...userData, lastName: event.target.value }) }} value={userData?.lastName ?? ""} style={{ border: "1px solid #AAAAAA" }} type="text" name="" id="" className="justify-center items-start px-5 py-2 mt-3 w-full text-base tracking-wider rounded-xl border border-solid outline-none text-black bg-zinc-300 border-stone-300" placeholder='i.e. bravo' />
                    <div className="mt-5 w-full font-semibold">Bio</div>
                    <textarea onChange={(event) => { setUserData({ ...userData, bio: event.target.value }) }} value={userData?.bio ?? ""} rows={4} style={{ border: "1px solid #AAAAAA" }} className="justify-center items-start px-5 py-2 mt-3 w-full text-base tracking-wider rounded-xl border border-solid outline-none text-black bg-zinc-300 border-stone-300" placeholder='Type here' name="" id=""></textarea>
                    <div className="mt-5 w-full font-semibold">About Me</div>
                    <textarea onChange={(event) => { setUserData({ ...userData, aboutMe: event.target.value }) }} value={userData?.aboutMe ?? ""} rows={4} style={{ border: "1px solid #AAAAAA" }} className="justify-center items-start px-5 py-2 mt-3 w-full text-base tracking-wider rounded-xl border border-solid outline-none text-black bg-zinc-300 border-stone-300" placeholder='Type here' name="" id=""></textarea>
                </div>
            </div>
        </div>
    );
}

export default NotificationSettings;