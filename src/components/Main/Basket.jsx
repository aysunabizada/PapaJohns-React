import { FaTimesCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useEffect, useState } from 'react';

function Basket({ status, setStatus, basket, pricee, count, del, setCount }) {
    const [isImgBroken, setIsImgBroken] = useState(false);
    useEffect(() => {
        if (status) { document.body.classList.add('no-scroll') }
        else { document.body.classList.remove('no-scroll') }
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
                            <div className="flex gap-5" key={i}>
                                {!isImgBroken ? (
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="max-w-[200px]"
                                        onError={() => setIsImgBroken(true)}
                                    />
                                ) : (
                                    <div className="rounded shadow-md animate-pulse">
                                        <div className="w-[200px] h-full bg-gray-300"></div>
                                    </div>
                                )}
                                <div className="">
                                    <h3>{item.title}</h3>
                                    <p className="text-[12px]">{item.composition}</p>
                                    <div className="flex justify-between items-center">
                                        <div class="inline-flex">
                                            <button onClick={() => setCount(count > 1 ? count - 1 : count)} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-l"> - </button>
                                            <span className="p-2"> {count} </span>
                                            <button onClick={() => setCount(count + 1)} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-r"> + </button>
                                        </div>
                                        <span className="font-bold text-[1.2em]">{item.price * count} ₼</span>
                                    </div>
                                </div>
                                <span><FaXmark className="text-gray-500 cursor-pointer" onClick={() => del(item.id)} /></span>
                            </div>
                        )) : 'Səbət boşdur!'
                    }
                </div>
                <div className="btns df">
                    <button onClick={() => setStatus(false)}>Menyuya Keçin</button>
                    <h4>Ümumi məbləğ: <span className="sebetqiymet">{pricee * count} m</span></h4>
                </div>
            </div>
        </>
    )
}

export default Basket