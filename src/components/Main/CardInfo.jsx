import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CardInfo({ setBasket, basket, setCount, count, pricee, setPrice }) {
    const params = useParams();
    const { category: catParam, id } = params;
    const [data, setData] = useState(null);
    const [isImgBroken, setIsImgBroken] = useState(false);

    useEffect(() => {
        axios.get("../../../data/data.json")
            .then(res => setData(res.data[catParam][id - 1]))
    }, [])
    console.log(data);

    return (
        <div className="container px-5 py-5 min-h-[71vh]">
            <div className="my-8 text-center">
                <p>Almırsansa nə baxsan ə?</p>
            </div>
            {data != null && <div className=" bg-white border border-gray-200 flex flex-col mobil:flex-row w-fit m-auto">
                {!isImgBroken ? (
                    <img
                        src={data.img}
                        alt={data.title}
                        onError={() => setIsImgBroken(true)}
                    />
                ) : (
                    <div className="rounded shadow-md animate-pulse">
                        <div className="sm:h-52 h-full w-[400px] sm:w-[100%] bg-gray-300"></div>
                    </div>
                )}
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data.title}</h5>
                    <p className="py-2 capitalize "><span className="font-medium">Məhsulun Kateqoriyasi:</span> {data.category}</p>
                    <p className="py-2 "><span className="font-medium">Məhsulun Tərkibi:</span> {data.composition}</p>
                    <p className="py-2 "><span className="font-medium">Məhsulun ölçüsü:</span>
                        <select onChange={(e) => setPrice( e.target.value )}>
                            {data.variations.map((variation, index) => (
                                <option key={index} value={variation.price}>
                                    {variation.type} - {variation.size}
                                </option>
                            ))}
                        </select>
                    </p>
                    <div className="flex justify-between items-center mt-4">
                        <button className="btn mt-3" onClick={() => {
                            setBasket([...basket, data]);
                            setCount(count + 1);
                            setPrice(pricee + +data.price)
                        }}>Səbətə at</button>
                        <p className="py-1 font-medium">Məhsulun qiyməti: <span className="font-bold text-[1.3em]"> {pricee} azn</span></p>
                    </div>
                </div>
            </div>}
            <div className="mt-10 text-center">
                <Link to='/menu/pizza'>← Menyuya qayıt </Link>
            </div>
        </div>
    )
}

export default CardInfo