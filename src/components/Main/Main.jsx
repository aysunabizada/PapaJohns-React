import Card from './Card'
import { useParams } from 'react-router-dom'

function Main({basket, setBasket, count, setCount, pricee, setPrice, data}) {
    const { category } = useParams()
    return (
        <>
            <div className="promokod container m-auto">
                <p>Promo kodunuz var?</p>
                <span>Endirimdən istifadə edin!</span>
                <input type="text" id="prokod" placeholder="Promo kodu daxil edin" />
                <button>OK</button>
            </div>
            <div className="cards">
                {data && data[category].map((item , i) => (
                    <Card key={i} item={item} basket={basket} setBasket={setBasket} count={count} setCount={setCount} setPrice={setPrice} pricee={pricee} />
                ))}
            </div>
        </>
    )
}

export default Main
