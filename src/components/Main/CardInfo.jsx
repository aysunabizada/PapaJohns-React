function CardInfo({ data, setBasket, basket, setCount, count, pricee, setPrice }) {
    // const { img, price, title, composition, variations } = data
    return (
        <div className="container">
            <div className="flex flex-col mobil:flex-row justify-center py-8">
                <div><img src="https://www.papajohns.az/uploads/images/pizza/Grill-%C3%87iken-Parmezan.png" alt="" /></div>
                <div className="p-5 bg-gray-50">
                    <h2 className="text-[1.6em] font-bold py-1">Biberli pizza</h2>
                    <p className="py-1 font-medium">Məhsulun qiyməti: <span className="font-bold text-[1.3em]">9 azn</span></p>
                    <p className="py-1 "><span className="font-medium">Xəmir tipi:</span> Ənənəvi</p>
                    <p className="py-1 "><span className="font-medium">Məhsulun Kateqoriyasi:</span> Papadias</p>
                    <p className="py-1 "><span className="font-medium">Məhsulun Tərkibi:</span> Ranç Sousu, Qril Toyuğu, Pomidor, Mozzarella, Baffalo Sousu</p>
                    <p className="py-1 "><span className="font-medium">Məhsulun ölçüsü:</span>
                        <select>
                            <option>11sm</option>
                            <option>20sm</option>
                            <option>23sm</option>
                        </select>
                    </p>
                    <button className="btn mt-3" onClick={() => {
                        setBasket([...basket, item]);
                        setCount(count + 1);
                        setPrice(pricee + +price)
                    }}>Səbətə at</button>
                </div>
            </div>
        </div>
    )
}

export default CardInfo