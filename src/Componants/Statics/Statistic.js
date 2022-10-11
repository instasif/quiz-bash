import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistic = () => {
    const datas = useLoaderData();
    const data = datas.data;
    console.log(data);
    return (
        <div>
            <div className='flex justify-center mt-10'>
            <LineChart width={500} height={400} data={data}>
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip/>
            </LineChart>
            </div>
            <div>
                <h1 className='text-center'>All topics Total Questions</h1>
            </div>
        </div>
    );
};

export default Statistic;