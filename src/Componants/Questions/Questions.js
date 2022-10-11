import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const qa = useLoaderData();
    const data = qa.data.questions;
    return (
        <div>
            {
                data.map( question => <Question question={question}/>)
            }
        </div>
    );
};

export default Questions;