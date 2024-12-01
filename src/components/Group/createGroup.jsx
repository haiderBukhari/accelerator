import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { failedToast, successToast } from '../../utils/toastNotifications';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreateGroup = ({ open, setOpen, submit, setSubmit }) => {
    const [userData, setUserData] = useState({
        name: '',
        contactNumber: '',
        email: '',
        talksAbout: '',
        description: '',
        isPrivate: false
    });
    const [tempUserData, setTempUserData] = useState({});
    const [profilePhoto, setProfilePhoto] = useState(null);
    const fileInputRef = useRef(null);
    const token = useSelector(state => state.profile.jwt);
    const id = useSelector(state => state.profile.id);
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const handleClose = () => {
        setOpen(!open);
        setUserData({
            name: '',
            contactNumber: '',
            email: '',
            talksAbout: '',
            description: '',
            isPrivate: false
        });
    }

    const handlePhotoChange = (event) => {
        setProfilePhoto(event.target.files[0]);
    };

    const handlePhotoClick = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = async () => {
        if (userData.email === "" || userData.email.includes("@") === false || userData.email.includes(".") === false) {
            return failedToast("Please Enter Valid Email");
        }
        if (
            userData.name === "" ||
            userData.contactNumber === "" ||
            userData.email === "" ||
            userData.talksAbout === "" ||
            userData.description === ""
        ) {
            return failedToast("Please Fill All The Fields");
        }
        const formData = new FormData();
        formData.append('file', profilePhoto);
        formData.append('name', userData.name);
        formData.append('contactNumber', userData.contactNumber);
        formData.append('email', userData.email);
        formData.append('talksAbout', userData.talksAbout);
        formData.append('description', userData.description);
        formData.append('isPrivate', userData.isPrivate);
        try {
            await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/groups`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            }).then(() => {
                successToast("Group Created Successfully");
                handleClose();
                setSubmit(false)
            })
        } catch (error) {
            console.error('Error uploading file:', error);
            setSubmit(false)
        }
    };

    useEffect(() => {
        if (submit) {
            handleSubmit();
        }
    }, [submit])

    return (
        <div>
            <div
                className="w-full border border-solid aspect-[9.09] max-w-[447px] stroke-[1px] bg-[#AAAAAA] bg-opacity-40 rounded-2xl px-3 py-3 cursor-pointer"
                onClick={handlePhotoClick}
            >
                <div className="flex gap-2 text-lg font-bold leading-4 text-violet-800 whitespace-nowrap">
                    <img
                        loading="lazy"
                        src={profilePhoto ? URL.createObjectURL(profilePhoto) : "https://cdn.builder.io/api/v1/image/assets/TEMP/92a2157aee4e429aae8e4dbeb9e67d66034defda4c489409e9a2e3627dc8db0e?"}
                        className="shrink-0 aspect-square w-[23px]"
                        alt="Profile"
                    />
                    <div className="my-auto text-[17px] ml-0">Group Picture</div>
                </div>
            </div>
            <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
                ref={fileInputRef}
            />
            <div className='w-full mt-5'>
                <div className="flex flex-col text-base font-medium tracking-wider leading-4 max-w-[361px] text-neutral-800">
                    <div className="w-full font-semibold">Group Name</div>
                    <input onChange={(event) => { setUserData({ ...userData, name: event.target.value }) }} value={userData?.name ?? ""} style={{ border: "1px solid #AAAAAA" }} type="text" name="" id="" className="justify-center items-start px-5 py-2 mt-3 w-full text-base tracking-wider rounded-xl border border-solid outline-none text-black bg-zinc-300 border-stone-300" placeholder='i.e. jhon' />
                    <div className="mt-6 w-full font-semibold">Contact Number</div>
                    <input onChange={(event) => { setUserData({ ...userData, contactNumber: event.target.value }) }} value={userData?.contactNumber ?? ""} style={{ border: "1px solid #AAAAAA" }} type="text" name="" id="" className="justify-center items-start px-5 py-2 mt-3 w-full text-base tracking-wider rounded-xl border border-solid outline-none text-black bg-zinc-300 border-stone-300" placeholder='i.e. bravo' />
                    <div className="mt-6 w-full font-semibold">Email</div>
                    <input onChange={(event) => { setUserData({ ...userData, email: event.target.value }) }} value={userData?.email ?? ""} style={{ border: "1px solid #AAAAAA" }} type="text" name="" id="" className="justify-center items-start px-5 py-2 mt-3 w-full text-base tracking-wider rounded-xl border border-solid outline-none text-black bg-zinc-300 border-stone-300" placeholder='i.e. bravo' />
                    <div className="mt-5 w-full font-semibold">Talks About</div>
                    <textarea onChange={(event) => { setUserData({ ...userData, talksAbout: event.target.value }) }} value={userData?.talksAbout ?? ""} rows={4} style={{ border: "1px solid #AAAAAA" }} className="justify-center items-start px-5 py-2 mt-3 w-full text-base tracking-wider rounded-xl border border-solid outline-none text-black bg-zinc-300 border-stone-300" placeholder='Type here' name="" id=""></textarea>
                    <div className="mt-5 w-full font-semibold">Description</div>
                    <textarea onChange={(event) => { setUserData({ ...userData, description: event.target.value }) }} value={userData?.description ?? ""} rows={4} style={{ border: "1px solid #AAAAAA" }} className="justify-center items-start px-5 py-2 mt-3 w-full text-base tracking-wider rounded-xl border border-solid outline-none text-black bg-zinc-300 border-stone-300" placeholder='Type here' name="" id=""></textarea>
                    <div className="mt-5 w-full font-semibold">Group Type</div>
                    {/* <textarea  placeholder='Type here' name="" id=""></textarea> */}
                    <select onChange={(event) => { setUserData({ ...userData, isPrivate: event.target.value == "true" ? true : false }); }} rows={4} style={{ border: "1px solid #AAAAAA" }} className="justify-center items-start px-5 py-2 mt-3 w-full text-base tracking-wider rounded-xl border border-solid outline-none text-black bg-zinc-300 border-stone-300" name="" id="">
                        <option value={"false"}>Public</option>
                        <option value={"true"}>Private</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default CreateGroup;