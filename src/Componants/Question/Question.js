import React from 'react';
import Option from '../Option/Option';
import './Question.css'


const Question = (props) => {
    const {question, options, id, correctAnswer} = props.question;
    return (
        <div>
            <div class="card bg-sky-100 " >
                <div class="card-body">
                    <button type="button" class="btn btn-success w-2 h-1 lowercase rounded-full" data-bs-toggle="tooltip" data-bs-placement="top" title={correctAnswer}><small>Ans.</small></button>
                    <h5 class="card-title">{question}</h5>
                    <div class="grid grid-cols-2 place-items-center gap-8 mb-3">
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