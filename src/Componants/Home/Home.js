import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Cards/Card';

const Home = () => {
    const cards = useLoaderData();
    const data = cards.data;

    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center'>   
            {
                data.map( card => <Card key={card.id} card={card}></Card>)
            }
            </div>
        </div>
    );
};

export default Home;