import Card from './Card'
import { useParams } from 'react-router-dom'

function Main({ basket, setBasket, count, setCount, pricee, setPrice, data }) {
    const { category } = useParams()
    if (data) {
        const x =  Object.keys(data).findIndex((item => item == category));
        if (x == -1) return <Error404 />
    }
    return (
        <main className="min-h-[70vh]">
            <div className="py-5">
                <div className="promokod container m-auto">
                    <p>Promo kodunuz var?</p>
                    <span>Endirimdən istifadə edin!</span>
                    <input type="text" id="prokod" placeholder="Promo kodu daxil edin" />
                    <button>OK</button>
                </div>
            </div>
            <div className="cards">
                {data && data[category].map((item, i) => (
                    <Card key={i} id={i+1} item={item} basket={basket} setBasket={setBasket} count={count} setCount={setCount} setPrice={setPrice} pricee={pricee} />
                ))}
            </div>
        </main>
    )
}

export default Main
