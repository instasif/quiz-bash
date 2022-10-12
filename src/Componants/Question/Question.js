import React from 'react';
import Option from '../Option/Option';

const Question = (props) => {
    console.log(props);
    const {question, options, id, correctAnswer} = props.question;
    return (
        <div className="card lg:card-side shadow-xl p-10 w-50 place-items-center bg-sky-100">
        <div className="card-body">
            <h2 className="card-title text-center text-sky-700">{question}</h2>
            <div className="card-actions justify-center">
            <div class="grid grid-cols-2 place-items-center gap-5 mb-3">
                {
                    options.map(option => <Option key={id} correctAnswer={correctAnswer} option={option}></Option>)
                }
                </div>
            </div>
        </div>
        </div>
    );
};

export default Question;