import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { failedToast, successToast } from "../../utils/toastNotifications";
import { CircularProgress } from '@mui/material';
import { Trash } from "lucide-react";

export default function CreateQuiz() {
    const Navigate = useNavigate();
    const token = useSelector(state => state.profile.jwt);
    const [loading, setLoading] = useState(false);
    const [quizName, setQuizName] = useState("")
    const [selectedCourseId, setSelectedCourseId] = useState();
    const [name, setName] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [longDescription, setLongDescription] = useState("");
    const [questions, setQuestions] = useState([{
        qns: "",
        options: {
            option1: { option: "", isCorrect: false },
            option2: { option: "", isCorrect: false },
            option3: { option: "", isCorrect: false },
            option4: { option: "", isCorrect: false }
        }
    }]);
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title'); // Get the 'title' query parameter
    const groupId = searchParams.get('groupId'); // Get the 'title' query parameter

    const getCourses = async () => {
        await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/courses?${groupId && `groupId=${groupId}`}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((res) => {
            res.data.courses.map((Item) => {
                if (Item.name.toLowerCase() === title.toLowerCase()) {
                    setSelectedCourseId(Item.id);
                }
            });
        }).catch((err) => {
            return failedToast(err.response.data.error);
        });
    };

    useEffect(() => {
        getCourses();
    }, []);

    // Handle question change
    const handleQuestionChange = (index, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].qns = value;
        setQuestions(updatedQuestions);
    };

    // Handle option change
    const handleOptionChange = (qIndex, optionKey, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[qIndex].options[optionKey].option = value;
        setQuestions(updatedQuestions);
    };

    const handleCorrectOptionChange = (qIndex, optionKey) => {
        const updatedQuestions = [...questions];
        Object.keys(updatedQuestions[qIndex].options).forEach(opt => {
            updatedQuestions[qIndex].options[opt].isCorrect = false;
        });
        updatedQuestions[qIndex].options[optionKey].isCorrect = true;
        setQuestions(updatedQuestions);
    };

    const addNewQuestion = () => {
        setQuestions([...questions, {
            qns: "",
            options: {
                option1: { option: "", isCorrect: false },
                option2: { option: "", isCorrect: false },
                option3: { option: "", isCorrect: false },
                option4: { option: "", isCorrect: false }
            }
        }]);
    };

    // Delete question
    const deleteQuestion = (qIndex) => {
        const updatedQuestions = questions.filter((_, index) => index !== qIndex);
        setQuestions(updatedQuestions);
    };

    const createNewModule = async () => {
        setLoading(true);
        const quizData = {
            courseId: selectedCourseId,   
            title: quizName,
            questions
        };
        await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/quiz`, quizData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(() => {
            setLoading(false);
            successToast("Quiz Created Successfully");
            Navigate('/dashboard/course');
        }).catch((err) => {
            setLoading(false);
            return failedToast(err.response.data.error);
        });
    };

    return (
        <div className="flex flex-col px-5 pb-10 pt-3 bg-neutral-100 min-h-screen">
            <div className="flex flex-col px-5">
                <div className="mt-14 w-full text-4xl font-bold text-neutral-700 max-md:mt-10 max-w-full">
                    Add New Quiz in {title} Course
                </div>
                <div className="mt-4 w-full text-base text-neutral-500 max-md:max-w-full">
                    Fill the given fields.
                </div>

                <div className="font-semibold mt-10">Quiz Name</div>
                <textarea onChange={(e) => setQuizName(e.target.value)}
                            placeholder="Quiz Name" className="px-5 py-3.5 mt-3.5 text-base tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-black outline-none w-full active:border-3 active:border-black  placeholder:text-black" value={quizName}></textarea>


                {questions.map((question, qIndex) => (
                    <div key={qIndex} className="mt-5">
                        <div className="flex justify-between items-center">
                            <div className="font-semibold">Question {qIndex + 1}</div>
                            {
                                qIndex ? <Trash onClick={() => deleteQuestion(qIndex)} className="text-red-500 cursor-pointer"/> : <></>
                            }
                        </div>
                        <textarea onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                            placeholder="Type your question here" className="px-5 py-3.5 mt-3.5 text-base tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-black outline-none w-full active:border-3 active:border-black  placeholder:text-black" value={question.qns}></textarea>

                        {Object.keys(question.options).map((optionKey, oIndex) => (
                            <div key={oIndex} className="flex items-center mt-3">
                                <input
                                    type="text"
                                    className="px-5 py-3.5 mt-3.5 text-base tracking-wider rounded-xl border border-solid bg-zinc-300 border-stone-300 text-black outline-none w-full active:border-3 active:border-black placeholder:text-black"
                                    value={question.options[optionKey].option}
                                    onChange={(e) => handleOptionChange(qIndex, optionKey, e.target.value)}
                                    placeholder={`Option ${oIndex + 1}`}
                                />
                                <div className="w-full max-w-[200px]">
                                    <input
                                        type="checkbox"
                                        className="ml-3 w-[20px] mr-2"
                                        checked={question.options[optionKey].isCorrect}
                                        onChange={() => handleCorrectOptionChange(qIndex, optionKey)}
                                    /> Mark as correct
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

                <button
                    onClick={addNewQuestion}
                    className="px-5 py-2 bg-violet-800 text-white rounded-lg mt-10 mb-4">
                    + Add New Question
                </button>

                <div onClick={createNewModule} className="self-start px-12 py-3 mt-4 text-xl font-medium cursor-pointer mx-auto leading-5 text-white bg-violet-800 rounded-2xl">
                    Add Quiz
                </div>
            </div>
            {loading && <CircularProgress className='absolute' style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />}
        </div>
    );
}
