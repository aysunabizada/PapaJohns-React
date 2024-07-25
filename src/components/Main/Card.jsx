import React from 'react';
import { Link } from 'react-router-dom';

function Card({ item, setBasket, basket, setCount, count, pricee, setPrice}) {
    const { img, price, title, composition } = item
    return (
        <div className="card">
            <Link to='/product'><img src={img} alt={title} /></Link>
            <div className="sum">
                <h3>{title}</h3>
                <button onClick={()=> {
                    setBasket([...basket, item]);
                    setCount(count + 1) ;
                    setPrice(pricee + +price)
                    }}>BUNU SEC</button>
            </div>
            <p className='text-[13px]'>{composition}</p>
        </div>
    );
}

export default Card;
