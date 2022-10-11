import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const qa = useLoaderData();
    const data = qa.data.questions;
    return (
        <div className='items-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10 place-items-center mt-10'>
            {
                data.map( question => <Question question={question}/>)
            }
        </div>
    );
};

export default Questions;