import React from 'react';

const Card = (props) => {
    // Destructuring
    const { id, name, email } = props;

    return (
        <div className='bg-light-green dib tc br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}`} alt='robots' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;