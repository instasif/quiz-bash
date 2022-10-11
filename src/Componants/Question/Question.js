import React from 'react';

const Question = ({question}) => {
    console.log(question);
    return (
        <div>
            <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
                <h4 className="card-title">Q. {question.question}</h4>
            </div>
            
        </div>
        </div>
    );
};

export default Question;