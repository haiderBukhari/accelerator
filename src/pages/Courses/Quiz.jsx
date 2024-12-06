import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { failedToast } from '../../utils/toastNotifications';
import { CircularProgress } from '@mui/material';
import jsPDF from "jspdf";
import "jspdf-autotable";

export function Quiz() {
    const Navigate = useNavigate();
    const token = useSelector(state => state.profile.jwt);
    const firstName = useSelector(state => state.profile.firstName);
    const lastName = useSelector(state => state.profile.lastName);
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id'); // Access path parameter
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [alreadySubmitted, setAlreadySubmitted] = useState(false);
    const [notSubmitted, setNotSubmitted] = useState(false)
    const [selectedOptions, setSelectedOptions] = useState({}); // To store selected options
    const [alreadySubmittedData, setAlreadySubmittedData] = useState({})

    async function getQuizSubmissionDetails() {
        setLoading(true);
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/quiz/solution?quizId=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(async (Item) => {
            if (!Item.data.success) {
                setAlreadySubmitted(false)
                setNotSubmitted(true)
                await getQuizDetails();
            } else {
                setAlreadySubmittedData(Item.data.submission)
                setAlreadySubmitted(true)
                setNotSubmitted(false)
            }
            console.log(Item.data)
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }



    const getQuizDetails = async () => {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/quiz?id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((res) => {
            setLoading(false)
            setData(res.data.quiz);
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    }

    useEffect(() => {
        if (id) {
            getQuizSubmissionDetails()
        }
    }, [id]);

    // Handle option selection
    const handleOptionChange = (questionId, optionId) => {
        setSelectedOptions((prevSelected) => ({
            ...prevSelected,
            [questionId]: optionId,
        }));
    };

    const handleSubmit = async () => {
        let correctAnswers = 0;
        data?.questions.forEach((question) => {
            const selectedOptionId = selectedOptions[question._id];
            const correctOption = Object.values(question.options).find(option => option.isCorrect);

            if (correctOption && correctOption._id === selectedOptionId) {
                correctAnswers++;
            }
        });

        const percentage = (correctAnswers / data?.questions.length) * 100;
        alert(`You scored ${correctAnswers} out of ${data?.questions.length} (${percentage.toFixed(2)}%)`);

        await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/quiz/solution`, {
            quizId: id,
            totalQuestions: data?.questions.length,
            totalMarks: data?.questions.length * 2,
            totalPointsObtained: correctAnswers * 100,
            totalNumberObtained: correctAnswers * 2,
            percentage: percentage,
            userName: firstName + " " + lastName
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(async () => {
            Navigate('/dashboard/course')
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });

    };

    return (
        <div className="flex flex-col px-5 pb-10 pt-3 bg-neutral-100 min-h-screen">
            <div className="self-start mt-9 text-4xl text-neutral-700 font-semibold mb-4">
                Quiz {data?.title}
            </div>
            {/* <div className="self-start text-xl text-zinc-500">
                Check The Right Answer.
            </div> */}
            <div className="flex flex-col mt-4 max-md:mr-1 max-md:max-w-full">
                {
                    data?.questions?.map((question, qIndex) => (
                        <div key={question._id} className="flex flex-col max-w-full w-full">
                            <div className="self-start mt-7 text-2xl font-bold text-neutral-700">
                                Question # {qIndex + 1}
                            </div>
                            <div className="mt-2 mr-16 text-xl text-zinc-600 max-md:mr-2.5 max-md:max-w-full">
                                {question.qns}
                            </div>
                            <div className="flex flex-col mt-6 max-w-full text-base tracking-wider leading-none text-neutral-800 w-[162px]">
                                {
                                    Object.values(question.options).map((option) => (
                                        <div key={option._id} className="flex gap-5 py-1 w-full">
                                            <input
                                                className="flex shrink-0 self-start rounded-3xl border-2 border-solid bg-neutral-200 border-stone-300 h-[18px] w-[19px]"
                                                type="radio"
                                                name={`question_${question._id}`}
                                                value={option._id}
                                                onChange={() => handleOptionChange(question._id, option._id)}
                                                checked={selectedOptions[question._id] === option._id} // To manage checked state
                                            />
                                            <div className="grow shrink w-[120px]">
                                                {option.option}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                notSubmitted && !loading && <div onClick={handleSubmit} className="self-start px-12 py-3 mt-4 text-xl font-medium cursor-pointer mx-auto leading-5 text-white bg-violet-800 rounded-2xl">
                    Submit Quiz
                </div>
            }
            {
                loading && !alreadySubmitted && <CircularProgress className='absolute' style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
            }
            {
                alreadySubmitted && <SubmittedQuizComponent submission={alreadySubmittedData} />
            }
        </div>
    );
}


function SubmittedQuizComponent({ submission }) {

    const data = useSelector(state => state.profile);

    const downloadPdf = async () => {
        const doc = new jsPDF();

        doc.setFontSize(20);
        doc.setTextColor(40);
        doc.text("Quiz Summary Report", 105, 20, null, null, "center");

        // Add User Information
        doc.setFontSize(12);
        doc.text(`Name: ${data.firstName} ${data.lastName}`, 20, 40);

        // Fetch and Add Profile Picture
        if (data.profilePicture) {
            try {
                const response = await fetch(data.profilePicture);
                const blob = await response.blob();

                // Convert Blob to Base64
                const reader = new FileReader();
                reader.onload = () => {
                    const base64Image = reader.result.split(",")[1];
                    doc.addImage(base64Image, "JPEG", 150, 30, 40, 40);
                    generatePdfBody(doc); // Proceed with the rest of the content
                };
                reader.readAsDataURL(blob);
            } catch (error) {
                console.error("Failed to load image", error);
                generatePdfBody(doc); // Continue generating the PDF even if the image fails
            }
        } else {
            generatePdfBody(doc); // Skip image if not available
        }
    };

    const generatePdfBody = (doc) => {
        const quizData = [
            ["Total Questions", submission?.totalQuestions],
            ["Total Marks", submission?.totalMarks],
            ["Total Points Obtained", submission?.totalPointsObtained],
            ["Points Number Obtained", submission?.totalNumberObtained],
            [
                "Correctly Answered Questions",
                (submission?.totalNumberObtained /
                    (submission?.totalMarks / submission?.totalQuestions)),
            ],
            ["Overall Percentage", `${submission?.percentage.toFixed(2)}%`],
            ["Status", submission.percentage > 40 ? "Passed" : "Failed"],
        ];

        doc.autoTable({
            startY: 80,
            head: [["Detail", "Value"]],
            body: quizData,
            theme: "grid",
            styles: { fontSize: 10, halign: "center" },
            headStyles: { fillColor: [40, 125, 245], textColor: 255, fontStyle: "bold" },
        });

        doc.setFontSize(10);
        doc.text(
            "This report was generated automatically. For further details, contact theappaccelerator@gmail.com.",
            20,
            doc.lastAutoTable.finalY + 10
        );

        // Save the PDF
        doc.save("quiz-summary.pdf");
    };
    return (
        <div className="flex overflow-hidden flex-col items-start">
            <div className="flex flex-col items-start self-stretch w-full font-bold max-md:max-w-full">
                <div className="text-xl text-zinc-500 font-light">
                    Lets Check What You Have Done?
                </div>
            </div>
            <div className='flex items-center justify-center mx-auto'>
                <div style={{ border: "2px solid #ccc", borderLeft: "none" }} className='flex flex-col p-5 m-4 w-full justify-center'>
                    <div className="flex flex-row justify-between py-px mt-3 w-[300px] md:w-[400px] max-w-full text-lg font-bold text-neutral-700 max-md:ml-2.5">
                        <div className="self-start w-[250px]">Total Number of Questions</div>
                        <div className="z-10 shrink-0 self-end -mt-6 border border-solid border-neutral-400 h-[22px] w-[1px]" />
                        <div className="self-start w-[20px]">{submission?.totalQuestions}</div>
                    </div>
                    <div style={{ borderBottom: "1px solid #ccc" }} className='my-5'></div>
                    <div className="flex flex-row justify-between py-px w-[300px] md:w-[400px] text-lg font-bold text-neutral-700 max-md:ml-2.5">
                        <div className="self-start w-[250px]">Total Marks</div>
                        <div className="z-10 shrink-0 self-end -mt-6 border border-solid border-neutral-400 h-[22px] w-[1px]" />
                        <div className="self-start w-[20px]">{submission?.totalMarks}</div>
                    </div>
                    <div style={{ borderBottom: "1px solid #ccc" }} className='my-5'></div>
                    <div className="flex flex-row justify-between py-px w-[300px] md:w-[400px] text-lg font-bold text-neutral-700 max-md:ml-2.5">
                        <div className="self-start w-[250px]">Total Points Obtained</div>
                        <div className="z-10 shrink-0 self-end -mt-6 border border-solid border-neutral-400 h-[22px] w-[1px]" />
                        <div className="self-start w-[20px]">{submission?.totalPointsObtained}</div>
                    </div>
                    <div style={{ borderBottom: "1px solid #ccc" }} className='my-5'></div>
                    <div className="flex flex-row justify-between py-px w-[300px] md:w-[400px] text-lg font-bold text-neutral-700 max-md:ml-2.5">
                        <div className="self-start w-[250px]">Total Number Obtained</div>
                        <div className="z-10 shrink-0 self-end -mt-6 border border-solid border-neutral-400 h-[22px] w-[1px]" />
                        <div className="self-start w-[20px]">{submission?.totalNumberObtained}</div>
                    </div>
                    <div className="flex flex-col items-start mt-11 max-w-full w-[543px] max-md:mt-10">
                        <div className="flex flex-col ml-4 max-md:ml-2.5">
                            <div className="self-start text-xl text-zinc-600">
                                Overall Percentage
                            </div>
                            <div className="mt-1 text-5xl font-semibold text-gray-400 max-md:text-4xl">
                                {submission?.percentage.toFixed(2)}%
                            </div>
                            <div className="mt-6 text-8xl font-bold text-violet-800 max-md:text-4xl">
                                {submission.percentage > 40 ? "Passed" : "Failed"}
                            </div>
                            <div onClick={downloadPdf} className="relative justify-center self-center mt-20 ml-4 px-10 text-base font-medium leading-4 bg-violet-800 rounded-lg cursor-pointer text-white py-3 mx-auto">Download Result</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}