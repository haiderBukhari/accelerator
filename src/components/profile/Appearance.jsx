import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { failedToast, successToast } from '../../utils/toastNotifications';
import { useDispatch } from 'react-redux';
import { changeFirstName, changeLastName, changeProfilePicture } from '../../features/profile';
import { useNavigate } from 'react-router-dom';

export const AppearanceSettings = ({ open, handleClose, loading, setLoading, clickedSave, setSelectedContent }) => {
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
                    <div className="flex overflow-hidden flex-col items-start max-w-[447px]">
                        <div className="flex flex-col self-stretch w-full text-lg font-bold leading-none text-violet-800 whitespace-nowrap rounded-none">
                            <div className="flex flex-col justify-center items-start px-5 py-3.5 w-full rounded-2xl border border-solid bg-zinc-300 border-neutral-400">
                                <div className="flex gap-5 items-center">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/60b7c9d460d3ba82e000d9eb9d4091df8b40296348d5b6a62272da8bf4152d52?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef"
                                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                    />
                                    <div className="self-stretch my-auto">Appearance</div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch mt-5 text-xs tracking-wide leading-none text-neutral-800">
                            Choose how your experience in Appreneur looks.
                        </div>
                        <div className="flex gap-3.5 mt-5 max-w-full text-lg tracking-wider leading-none text-neutral-800 w-[175px]">
                            <input className="flex shrink-0 rounded-lg border border-solid bg-neutral-200 border-stone-300 h-[20px] w-[20px]" type="checkbox" checked name="" id="" />
                            <div className="grow shrink my-auto w-[129px]">Device Setting</div>
                        </div>
                        <div className="flex gap-3.5 mt-5 max-w-full text-lg tracking-wider leading-none text-neutral-800 w-[175px]">
                            <input className="flex shrink-0 rounded-lg border border-solid bg-neutral-200 border-stone-300 h-[20px] w-[20px]" type="checkbox" name="" id="" />
                            <div className="grow shrink my-auto w-[129px]">Dark Mode</div>
                        </div>
                        <div className="flex gap-3.5 mt-5 max-w-full text-lg tracking-wider leading-none text-neutral-800 w-[175px]">
                            <input className="flex shrink-0 rounded-lg border border-solid bg-neutral-200 border-stone-300 h-[20px] w-[20px]" type="checkbox" name="" id="" />
                            <div className="grow shrink my-auto w-[129px]">Light Mode</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}