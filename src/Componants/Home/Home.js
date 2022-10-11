import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Cards/Card';

const Home = () => {
    const cards = useLoaderData();
    const data = cards.data;

    return (
        <div>
            <h1 className='text-4xl text-center font-bold mt-5 text-cyan-400'>Welcome to Quiz Bash</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>   
            {
                data.map( card => <Card key={card.id} card={card}></Card>)
            }
            </div>
        </div>
    );
};

export default Home;