import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateGroup from "../../components/Group/createGroup";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { failedToast } from "../../utils/toastNotifications";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Groups() {

    const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
    const Navigate = useNavigate();

    const [open, setOpen] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [data, setData] = useState([])
    const token = useSelector(state => state.profile.jwt);

    async function getAllGroupData() {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/groups`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((Item) => {
            setData(Item.data.data);
            console.log(Item.data.data)
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }
    useEffect(() => {
        getAllGroupData();
    }, [open])

    return (
        <div className="flex flex-col px-5 max-w-[99%] ">
            <div className="flex justify-between items-center max-md:mt-10 mt-14 ">
                <div className="w-full text-xl lg:text-2xl font-semibold text-zinc-500 max-md:max-w-full">
                    Groups{" "}
                </div>

                <button
                    onClick={() => { setOpen(!open) }}
                    className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-violet-800 border border-transparent hover:bg-violet-700 focus:outline-none focus:ring-offset-2 focus:ring-violet-700 rounded-2xl w-[200px]"
                >
                    Add New Group
                </button>
            </div>
            {
                data?.map((item, i) => (
                    <div key={i} className="px-5 2xl:px-7 py-5 mt-5 w-full rounded-3xl border border-solid bg-neutral-200 border-neutral-400 max-md:px-3 max-md:py-3 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-row max-md:gap-0 justify-between max-2xl:block max-md:flex">
                            <div className="flex flex-col max-md:ml-0 max-md:w-full">
                                <div className="flex grow gap-4 max-md:gap-2 max-md:mt-0 max-md:items-center">
                                    <img
                                        loading="lazy"
                                        src={item.groupImage}
                                        className="shrink-0 aspect-square h-[40px] w-[40px] md:h-[50px] md:w-[50px] border-4 rounded-xl border-violet-800 border-solid"
                                    />
                                    <div className="flex flex-col py-1 my-auto max-md:my-0">
                                        <div className="text-base max-md:text-sm font-medium text-zinc-800">
                                            {item.name}
                                        </div>
                                        <div className="text-xs text-ellipsis text-neutral-500 max-md:hidden">
                                            {item.description > 60 ? item.description.slice(0, 60) + '...' : item.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-2 lg:ml-3 xl:ml-5 max-md:ml-0 max-md:w-full">
                                <div className="flex justify-end 2xl:justify-between self-stretch my-auto max-md:my-auto">
                                    <div className="flex gap-2.5 justify-between text-sm text-violet-800 whitespace-nowrap mr-4 xl:mr-7 max-md:gap-1.5 max-md:mr-5">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbf9f452b2ad0d9bc2072c788e3cdac85906c6c3a63ab0a7ec8669c8d70dc7de?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 aspect-square w-[25px] max-md:w-[15px]"
                                        />
                                        <div className="my-auto">{item.likes}</div>
                                    </div>
                                    <div onClick={() => { Navigate(`/dashboard/details/groups?id=${item._id}`) }} className="flex justify-center px-5 py-1 text-base xl:text-lg text-white bg-violet-800 rounded-xl border border-solid w-full max-w-[130px] xl:max-w-[130px] border-neutral-400 max-md:px-3 max-md:py-2 max-md:max-w-[80px] max-md:text-xs cursor-pointer">
                                        Join Now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="self-center mt-14 text-base font-medium text-zinc-600 max-md:mt-10">
                Show More
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/921125f176c766753f5022d43c5fc218a48df3d917ea9d45a70550fa14d9058a?apiKey=cf358c329e0d49a792d02d32277323ef&"
                className="self-center mt-2 mb-4 border-solid aspect-[8.33] border-[3px] rounded-xl border-zinc-600 stroke-[5px] stroke-zinc-600 w-[43px]"
            />

            <React.Fragment>
                <Dialog
                    open={open}
                    onClose={()=>{setOpen(false)}}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    PaperProps={{
                        sx: {
                            backgroundColor: '#E0E0E0'
                        }
                    }}
                >
                    <DialogTitle id="alert-dialog-title">
                        <p className='font-semibold'>
                            {"Create Group"}
                        </p>
                        <div className='mx-3 my-2' style={{ borderBottom: "2px solid #ccc" }}></div>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description" sx={{width: "300px"}}>
                            {open && <CreateGroup open={open} setOpen={setOpen} submit={submit} setSubmit={setSubmit} />}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <div className='w-[290px] md:w-[400px] mb-3'>
                        <div className='mx-3 my-2 mb-5' style={{ borderBottom: "2px solid #ccc" }}></div>
                        <div className='mx-4'>
                            <div className="flex w-full justify-between">
                                <button onClick={()=>{setOpen(!open)}} className='w-[140px] px-10 py-2 rounded-xl text-center text-black bg-[#CCCCCC]'>Cancel</button>
                                <button onClick={()=>{setSubmit(!submit)}} className='w-[140px] px-10 py-2 rounded-xl text-center text-white bg-[#4C1DBE]'>Save</button>
                            </div>
                        </div>
                    </div>
                </DialogActions>
                </Dialog>
            </React.Fragment>
        </div>
    );
}

