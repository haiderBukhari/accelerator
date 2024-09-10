import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MoveRight } from 'lucide-react';

export default function CommentsDialog({ open, setOpen }) {

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Comments"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div className="flex flex-col max-w-[436px]">
                            <div className="flex gap-5 justify-between w-full">
                                <div className="flex gap-3.5 justify-between">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fbe6bec93d754f16adf257b6d5b5ae3e05c107c64167b633a5708e80c35aa556?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbe6bec93d754f16adf257b6d5b5ae3e05c107c64167b633a5708e80c35aa556?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbe6bec93d754f16adf257b6d5b5ae3e05c107c64167b633a5708e80c35aa556?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbe6bec93d754f16adf257b6d5b5ae3e05c107c64167b633a5708e80c35aa556?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbe6bec93d754f16adf257b6d5b5ae3e05c107c64167b633a5708e80c35aa556?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbe6bec93d754f16adf257b6d5b5ae3e05c107c64167b633a5708e80c35aa556?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbe6bec93d754f16adf257b6d5b5ae3e05c107c64167b633a5708e80c35aa556?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbe6bec93d754f16adf257b6d5b5ae3e05c107c64167b633a5708e80c35aa556?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 border-violet-800 border-solid aspect-square border-[3px] w-[52px]"
                                    />
                                    <div className="flex flex-col px-5 py-1 my-auto">
                                        <div className="text-sm font-medium text-zinc-800">
                                            Jennifer Susan
                                        </div>
                                        <div className="mt-2 text-xs text-neutral-500">1 hr. ago</div>
                                    </div>
                                </div>
                                <div className="flex gap-2.5 justify-between my-auto">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e16ed1c94157a98618f34bd1679fd26114c350e59399e218b67a768b69834d60?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 aspect-square w-[25px]"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3411a4c1843c724411d1e218f88ec02d920b4589db9c5c6c0c95b9531034fdac?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 aspect-square w-[25px]"
                                    />
                                </div>
                            </div>
                            <div className="mt-4 w-full text-sm text-zinc-800">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industrys standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book.
                            </div>
                            <div className="flex gap-3 items-start mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f8842a9918c48d8583165e8a02e00179c91029dbeb0d742db0b78724b679f55?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 self-start aspect-[0.36] w-[23px]"
                                />
                                <div className="flex flex-auto gap-5 justify-between self-end px-px mt-11">
                                    <div className="flex gap-2.5">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/998acb03d53e883f1d43c95d07df45620ed89a379fbd8dc570dcf265c1c3a27b?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/998acb03d53e883f1d43c95d07df45620ed89a379fbd8dc570dcf265c1c3a27b?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/998acb03d53e883f1d43c95d07df45620ed89a379fbd8dc570dcf265c1c3a27b?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/998acb03d53e883f1d43c95d07df45620ed89a379fbd8dc570dcf265c1c3a27b?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/998acb03d53e883f1d43c95d07df45620ed89a379fbd8dc570dcf265c1c3a27b?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/998acb03d53e883f1d43c95d07df45620ed89a379fbd8dc570dcf265c1c3a27b?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/998acb03d53e883f1d43c95d07df45620ed89a379fbd8dc570dcf265c1c3a27b?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/998acb03d53e883f1d43c95d07df45620ed89a379fbd8dc570dcf265c1c3a27b?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 border-violet-800 border-solid aspect-square border-[3px] w-[43px]"
                                        />
                                        <div className="flex flex-col px-5 py-1 my-auto">
                                            <div className="text-xs font-medium text-zinc-800">
                                                Jennifer Susan
                                            </div>
                                            <div className="mt-1.5 text-xs text-neutral-500">1 hr. ago</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2.5 justify-between my-auto">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/82765ded9d0677e304c674179684fb6488d3b46fe7a3cda2c8adc1b29e670fed?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 aspect-square w-[25px]"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e63e0e1c7e55dc721842acf2cbce9dec876b583d22484d4ea5685423f83421eb?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shrink-0 aspect-square w-[25px]"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 w-full text-sm text-zinc-800">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industrys standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book.
                            </div>
                            <div className="flex gap-5 justify-between mt-8 w-full">
                                <div className="flex gap-3.5 justify-between">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fbe6bec93d754f16adf257b6d5b5ae3e05c107c64167b633a5708e80c35aa556?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbe6bec93d754f16adf257b6d5b5ae3e05c107c64167b633a5708e80c35aa556?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbe6bec93d754f16adf257b6d5b5ae3e05c107c64167b633a5708e80c35aa556?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbe6bec93d754f16adf257b6d5b5ae3e05c107c64167b633a5708e80c35aa556?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbe6bec93d754f16adf257b6d5b5ae3e05c107c64167b633a5708e80c35aa556?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbe6bec93d754f16adf257b6d5b5ae3e05c107c64167b633a5708e80c35aa556?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbe6bec93d754f16adf257b6d5b5ae3e05c107c64167b633a5708e80c35aa556?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbe6bec93d754f16adf257b6d5b5ae3e05c107c64167b633a5708e80c35aa556?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 border-violet-800 border-solid aspect-square border-[3px] w-[52px]"
                                    />
                                    <div className="flex flex-col px-5 py-1 my-auto">
                                        <div className="text-sm font-medium text-zinc-800">
                                            Jennifer Susan
                                        </div>
                                        <div className="mt-2 text-xs text-neutral-500">1 hr. ago</div>
                                    </div>
                                </div>
                                <div className="flex gap-2.5 justify-between my-auto">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e16ed1c94157a98618f34bd1679fd26114c350e59399e218b67a768b69834d60?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 aspect-square w-[25px]"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3411a4c1843c724411d1e218f88ec02d920b4589db9c5c6c0c95b9531034fdac?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="shrink-0 aspect-square w-[25px]"
                                    />
                                </div>
                            </div>
                            <div className="mt-4 w-full text-sm text-zinc-800">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industrys standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book.
                            </div>
                        </div>                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <div className="flex gap-5 py-4 pr-6 pl-3 rounded-xl border border-solid bg-neutral-200 border-stone-300 w-full">
                        <div className="flex-auto my-auto text-sm text-neutral-500">
                            Write a commment
                        </div>
                        <div className="flex gap-5 hidden">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a603fbb697e90781961ee95ea21b20e9b84bfc250653dd1126f05f3fd91e8ae?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-square w-[30px]"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cf5ee83f466a0151e24bd39724939aed6bd3f89f52a9e3c6b659e16a01d3ef2?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-square w-[30px]"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center max-w-[75px]">
                        <div className="flex justify-center items-center px-6 py-5 w-full bg-violet-800 rounded-xl border border-solid border-stone-300">
                        <MoveRight className="text-white" />
                        </div>
                    </div>

                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
