import React from 'react';

const Card = ({fname,lname,phone,releyt}) => {
    return (
        <div className='card'>
            <div className="card-body">
                <h5 className="card-title">{fname}</h5>
                <h5 className="card2">{lname}</h5>
                <p className="card-text">{releyt}</p>
                <a className="btn btn-primary links">+{phone}</a>
            </div>
        </div>

    );
};

export default Card;