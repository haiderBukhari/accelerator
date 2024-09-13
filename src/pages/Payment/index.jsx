import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { failedToast } from "../../utils/toastNotifications";

export default function Payment() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    async function paySubscriptionFee(type) {
        await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/payment`, {
            id: id,
            plan: type,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((Item) => {
            console.log(Item)
            window.location.href = Item.data.checkoutLink;
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    return (
        <div className="mx-10">
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a8b44063b6b376a1bcaf3196ddbfaeed08708bfd04d0e614bc1ccb3766708ec2?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8b44063b6b376a1bcaf3196ddbfaeed08708bfd04d0e614bc1ccb3766708ec2?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8b44063b6b376a1bcaf3196ddbfaeed08708bfd04d0e614bc1ccb3766708ec2?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8b44063b6b376a1bcaf3196ddbfaeed08708bfd04d0e614bc1ccb3766708ec2?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8b44063b6b376a1bcaf3196ddbfaeed08708bfd04d0e614bc1ccb3766708ec2?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8b44063b6b376a1bcaf3196ddbfaeed08708bfd04d0e614bc1ccb3766708ec2?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8b44063b6b376a1bcaf3196ddbfaeed08708bfd04d0e614bc1ccb3766708ec2?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8b44063b6b376a1bcaf3196ddbfaeed08708bfd04d0e614bc1ccb3766708ec2?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef"
                className="object-contain w-full aspect-[2.26] max-w-[200px] mt-2"
            />

            <h1 className="pt-5 md:pt-0 mt-10 text-4xl md:text-4xl font-bold mb-10 text-black leading-10 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                Pick up your <br /> Desired Package
            </h1>

            <div className="flex flex-wrap gap-10 items-start">
                <div className="flex flex-col font-semibold leading-none rounded-none min-w-[200px] w-[500px] max-md:max-w-full">
                    <div className="flex flex-col items-start px-9 pt-14 pb-7 w-full rounded-3xl border border-solid bg-neutral-200 border-stone-300 shadow-[12px_12px_24px_rgba(0,0,0,0.15)] max-md:px-5 max-md:max-w-full">
                        <div className="ml-3.5 text-7xl text-violet-800 max-md:ml-2.5 max-md:text-4xl">
                            $147
                        </div>
                        <div className="mt-8 ml-3.5 text-3xl text-black max-md:ml-2.5">
                            Monthly Package
                        </div>
                        <div className="mt-3 ml-3.5 text-xl leading-7 text-zinc-600 max-md:ml-2.5">
                            Lorem Ipsum simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the  standard dummy text
                            ever since the 1500s,
                        </div>
                        <div className="mt-9 text-xl leading-10 text-zinc-600">
                            Lorem Ipsum is simply dummy text
                            <br />
                            Lorem Ipsum simply dummy text
                            <br />
                            Lorem Ipsum simply dummy text
                            <br />
                            Lorem Ipsum simply dummy text
                            <br />
                            Lorem Ipsum simply dummy text
                        </div>
                        <div onClick={()=>{paySubscriptionFee('monthly')}} className="overflow-hidden gap-2.5 self-stretch flex justify-center py-4 mt-12 ml-3.5 text-3xl font-medium text-white bg-violet-800 rounded-2xl max-md:px-5 max-md:mt-10 cursor-pointer hover:opacity-75">
                            Pay Now
                        </div>
                    </div>
                </div>
                <div className="flex flex-col rounded-none min-w-[240px] w-[500px] max-md:max-w-full">
                    <div className="flex flex-col px-9 pb-7 w-full rounded-3xl border-violet-800 border-solid bg-neutral-200 border-[5px] shadow-[12px_12px_24px_rgba(0,0,0,0.15)] max-md:px-5 max-md:max-w-full">
                        <div className="ml-3.5 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col">
                                <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow mt-14 font-semibold leading-none max-md:mt-10">
                                        <div className="text-7xl text-violet-800 max-md:mr-2.5 max-md:text-4xl">
                                            $1497
                                        </div>
                                        <div className="mt-8 text-3xl text-black">Yearly Package</div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bff90beb9df4974fe103f2756dd3bb56ec72383a559b92defb832ff779b0a771?placeholderIfAbsent=true&apiKey=cf358c329e0d49a792d02d32277323ef"
                                        className="object-contain shrink-0 max-w-full aspect-[0.61] w-[135px] max-md:mt-10"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="self-start mt-3 ml-3.5 text-xl leading-7 text-zinc-600 max-md:ml-2.5">
                            Lorem Ipsum simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the  standard dummy text
                            ever since the 1500s,
                        </div>
                        <div className="self-start mt-9 text-xl leading-10 text-zinc-600">
                            Lorem Ipsum simply dummy text
                            <br />
                            Lorem Ipsum simply dummy text
                            <br />
                            Lorem Ipsum simply dummy text
                            <br />
                            Lorem Ipsum simply dummy text
                            <br />
                            Lorem Ipsum simply dummy text
                        </div>
                        <div onClick={()=>{paySubscriptionFee('yearly')}} className="overflow-hidden gap-2.5 self-center px-20 flex justify-center w-full py-4 mt-12 text-3xl font-medium leading-none text-white bg-violet-800 rounded-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full cursor-pointer hover:opacity-70">
                            Pay now
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}