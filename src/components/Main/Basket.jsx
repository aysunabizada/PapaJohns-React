import { FaTimesCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useEffect } from 'react';

function Basket({ status, setStatus, basket, pricee, count, del}) {
    useEffect(() => {
        if (status) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [status]);

    return (
        <>
            <div className={`${status ? 'block' : 'hidden'} background`} onClick={() => setStatus(false)}></div>
            <div id="basket" className={`${status ? 'block' : 'hidden'}`}>
                <FaTimesCircle className="xmark" onClick={() => setStatus(false)} />
                <h2>Səbət</h2>
                <p>Səbətinizdəki məhsul sayı: <span className="sebetsay">{count}</span></p>
                <div className="flex flex-col gap-7 p20 overflow-auto max-h-[400px]">
                    {
                        basket ? basket.map((item, i) => (
                            <div className="card flex gap-5" key={i}>
                                <img src={item.img} alt={item.title} />
                                <div className="">
                                    <h3>{item.title}</h3>
                                    <p className="text-[12px]">{item.composition}</p>
                                </div>
                                <span>{item.price} ₼</span>
                                <span><FaXmark className="text-gray-500 cursor-pointer" onClick={() => del(item.title)}/></span>
                            </div> 
                        )) : 'Səbət boşdur!'
                    }
                </div>
                <div className="btns df">
                    <button onClick={() => setStatus(false)}>Menyuya Keçin</button>
                    <h4>Ümumi məbləğ: <span className="sebetqiymet">{pricee} m</span></h4>
                </div>
            </div>
        </>
    )
}

export default Basket