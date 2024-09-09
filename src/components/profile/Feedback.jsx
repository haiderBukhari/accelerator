import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { failedToast, successToast } from '../../utils/toastNotifications';
import { useDispatch } from 'react-redux';
import { changeFirstName, changeLastName, changeProfilePicture } from '../../features/profile';
import { useNavigate } from 'react-router-dom';

export const FeedbackSettings = ({ open, handleClose, loading, setLoading, clickedSave, setSelectedContent }) => {
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
                    <div className="flex overflow-hidden flex-col text-lg font-medium leading-none max-w-[447px] text-neutral-500">
                        <div className="flex flex-col w-full font-bold text-violet-800 whitespace-nowrap rounded-none">
                            <div className="flex flex-col justify-center items-start px-5 py-3.5 w-full rounded-2xl border border-solid bg-zinc-300 border-neutral-400">
                                <div className="flex gap-5 items-center">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/911cdd273935614ea625c69047f34a88ec1dccb9708d6ca9f68e0ccae46339fa?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef"
                                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                    />
                                    <div className="self-stretch my-auto">Feedback</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 max-w-full w-full text-sm">Report a Problem</div>
                        <div className="mt-2 max-w-full w-full text-sm">Help Center</div>
                        <div className="flex flex-col mt-5 w-full font-bold text-violet-800 whitespace-nowrap rounded-none">
                            <div className="flex flex-col justify-center items-start px-5 py-3.5 w-full rounded-2xl border border-solid bg-zinc-300 border-neutral-400">
                                <div className="flex gap-5 items-center">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/795ae48901f16d0c1d68a983ec7a5da952197999b38ac63bb7e6202a0029998d?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef"
                                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                    />
                                    <div className="self-stretch my-auto">Info</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 max-w-full w-full text-sm">Mighty Terms of Service</div>
                        <div className="mt-2 max-w-full w-full text-sm">Mighty Privacy Policy</div>
                    </div>
                </div>
            </div>
        </div>
    );
}