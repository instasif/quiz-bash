import React from 'react';

const Card = ({card}) => {
    const {name, logo, total} = card;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={logo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Total: {total}</p>
                <div className="card-actions">
                <button className="btn btn-outline btn-info">Quiz</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Card;