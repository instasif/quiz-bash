import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Option = ({option, correctAnswer}) => {
    const answerHandler = (option) =>{
        if(option === correctAnswer){
            toast.success('correct answer!!')
        }
        else{
            toast.error('try again!!'); 
        }
    }
    return (
        <div>
            <button onClick={() => answerHandler(option)} className="btn btn-outline btn-success">{option}</button>
            <ToastContainer />
        </div>
    );
};

export default Option;