import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { failedToast, successToast } from "../../utils/toastNotifications";
import { CircularProgress } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

export default function CreateModule() {
    const Navigate = useNavigate();
    const token = useSelector(state => state.profile.jwt);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedCourseId, setSelectedCourseId] = useState();
    const [videoFile, setVideoFile] = useState(null);
    const [pictureFile, setPictureFile] = useState(null);
    const videoFileInputRef = useRef(null);
    const imageFileInputRef = useRef(null);
    const [name, setName] = useState("")
    const [shortDescription, setShortDescription] = useState("")
    const [longdescription, setLongDescription] = useState("")
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title'); // Get the 'title' query parameter

    const getCourses = async () => {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/courses`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((res) => {
            res.data.courses.map((Item) => {
                if(Item.name.toLowerCase() == title.toLowerCase()){
                    setSelectedCourseId(Item.id)
                }
            })
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    useEffect(() => {
        getCourses();
    }, []);

    const handleVideoFileChange = (event) => {
        setVideoFile(event.target.files[0]);
    }

    const handlePictureFileChange = (event) => {
        setPictureFile(event.target.files[0]);
    }

    const handleVideoUploadClick = () => {
        videoFileInputRef.current.click();
    }

    const handlePictureUploadClick = () => {
        imageFileInputRef.current.click();
    }

    const createNewModule = async () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 'auto' for instant scrolling, 'smooth' for smooth scrolling
        });
        setLoading(true);
        const formdata = new FormData();
        formdata.append('courseId', selectedCourseId)
        formdata.append('name', name)
        formdata.append('descriptionShort', shortDescription)
        formdata.append('descriptionLong', longdescription)
        formdata.append('file', pictureFile)
        formdata.append('file1', videoFile)
        await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/courses/modules`, formdata, {
            headers: {
                'Content-Type': 'multipart/formdata',
                'Authorization': `Bearer ${token}`
            },
        }).then(() => {
            setLoading(false)
            successToast("Module Added Successfully")
            Navigate('/dashboard/course')
        }).catch((err) => {
            setLoading(false)
            return failedToast(err.response.data.error);
        });
    }

    return (
        <div className="flex flex-col px-5 pb-10 pt-3 bg-neutral-100 min-h-screen">
            <div className="flex flex-col px-5">
                <div className="mt-14 w-full text-4xl font-bold text-neutral-700 max-md:mt-10 max-w-full">
                    Add New Module in {title} Course
                </div>
                <div className="mt-4 w-full text-base text-neutral-500 max-md:max-w-full">
                    Fill the given fields.
                </div>
                <div className="max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-[50%] w-full max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col flex-wrap content-start py-px text-base font-medium tracking-wider leading-4 text-neutral-800 max-md:mt-10 w-full">
                                <div className="mt-10 max-md:mt-10">Module Name</div>
                                <input onChange={(e) => { setName(e.target.value) }} className="px-5 w-full py-3.5 mt-5 text-base tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 outline-none text-black" type="text" name="" id="" placeholder="i.e. Introduction" />
                                <div className="mt-10">Module Description (Short)</div>
                                <textarea onChange={(e) => { setShortDescription(e.target.value) }} rows={2} name="" id="" className="px-5 py-3.5 mt-3.5 text-base tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-black outline-none" placeholder="Type Here."></textarea>
                                <div className="mt-10">Module Description (Detailed)</div>
                                <textarea onChange={(e) => { setLongDescription(e.target.value) }} rows={6} name="" id="" className="px-5 py-3.5 mt-3.5 text-base tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-black outline-none" placeholder="Type Here."></textarea>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[40%] max-md:ml-0 max-md:w-full">
                            <div>
                                <div
                                    className="flex grow justify-center items-center px-16 mt-4 w-full text-xl font-medium tracking-wider leading-5 border border-dashed bg-zinc-300 bg-opacity-0 border-neutral-500 rounded-[30px] text-neutral-500 max-md:px-5 max-md:mt-10 max-md:max-w-full cursor-pointer"
                                    onClick={handlePictureUploadClick}
                                >
                                    <div className="flex flex-col my-20 max-w-full w-[345px]">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddf234ff4315ed40e757db8d6a0251ee7884a5b5e6bd51bf0b08ec53a25703a4?"
                                            className="self-center max-w-full aspect-[1.39] w-[53px]"
                                        />
                                        <div className="mt-6 text-md text-center leading-6">Upload Module Picture Here</div>

                                        {pictureFile && (
                                            <div className="mt-4 text-center text-black text-sm">
                                                Selected file: {pictureFile.name}
                                            </div>
                                        )}
                                    </div>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        ref={imageFileInputRef}
                                        className="hidden"
                                        onChange={handlePictureFileChange}
                                    />
                                </div>
                                <div
                                    className="flex grow justify-center items-center px-16 mt-4 w-full text-xl font-medium tracking-wider leading-5 border border-dashed bg-zinc-300 bg-opacity-0 border-neutral-500 rounded-[30px] text-neutral-500 max-md:px-5 max-md:mt-10 max-md:max-w-full cursor-pointer"
                                    onClick={handleVideoUploadClick}
                                >
                                    <div className="flex flex-col my-20 max-w-full w-[345px]">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddf234ff4315ed40e757db8d6a0251ee7884a5b5e6bd51bf0b08ec53a25703a4?"
                                            className="self-center max-w-full aspect-[1.39] w-[53px]"
                                        />
                                        <div className="mt-6 text-md text-center leading-6">Upload Module Video Here</div>

                                        {videoFile && (
                                            <div className="mt-4 text-center text-black text-sm">
                                                Selected file: {videoFile.name}
                                            </div>
                                        )}
                                    </div>
                                    <input
                                        type="file"
                                        accept="video/*"
                                        ref={videoFileInputRef}
                                        className="hidden"
                                        onChange={handleVideoFileChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={createNewModule} className="self-start px-12 py-3 mt-4 text-xl font-medium cursor-pointer leading-5 text-white bg-violet-800 rounded-2xl max-md:px-5">
                    Add New Course
                </div>
            </div>
            {
                loading && <CircularProgress className='absolute' style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
            }
        </div>
    );
}
