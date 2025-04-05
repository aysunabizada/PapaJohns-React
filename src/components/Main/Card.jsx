import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Card({ id, item, setBasket, basket, setCount, count, pricee, setPrice }) {
    const { img, price, title, composition } = item;
    const [isImgBroken, setIsImgBroken] = useState(false);

    const handleAddToBasket = () => {
        setBasket([...basket, item]);
        setCount(count + 1);
        setPrice(pricee + +price);
    };

    return (
        <div className="card">
            <Link to={`${id}`}>
                {!isImgBroken ? (
                    <img
                        src={img}
                        alt={title}
                        onError={() => setIsImgBroken(true)}
                    />
                ) : (
                    <div className="rounded shadow-md animate-pulse">
                        <div className="h-48 rounded-t bg-gray-300"></div>
                    </div>
                )}
            </Link>
            <div className="sum">
                <h3>{title}</h3>
                <button onClick={handleAddToBasket}>BUNU SEC</button>
            </div>
            <p className='text-[13px]'>{composition}</p>
        </div>
    );
}

export default Card;
