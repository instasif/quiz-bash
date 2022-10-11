import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card, quitHandler}) => {
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
                <button onClick={() => quitHandler()} className="btn btn-outline btn-info"><Link to={`/qa/${id}`}>QUIZ</Link></button>
                </div>
            </div>
            </div>
        </div>
        // <div>
        //     <div className="card w-96 bg-stone-200 shadow-xl">
        //     <figure className="px-10 pt-10">
        //         <img src={logo} alt="Shoes" className="rounded-xl" />
        //     </figure>
        //     <div className="card-body items-center text-center">
        //         <h2 className="card-title">{name}</h2>
        //         <p>Total: {total}</p>
        //         <div className="card-actions">
        //         <button className="btn btn-outline btn-info">Quiz</button>
        //         </div>
        //     </div>
        //     </div>
        // </div>
    );
};

export default Card;