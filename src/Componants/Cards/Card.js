import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const {name, logo, total, id} = card;
    return (
        <div>
            <div className="card w-96 bg-sky-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {name}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Total: {total}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-outline btn-info"><Link to={`/qa/${id}`}>QUIZ</Link></button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Card;