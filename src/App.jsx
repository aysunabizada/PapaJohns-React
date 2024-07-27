import React, { useState , useEffect} from 'react';
import Header from './components/Header';
import Slider from './components/Main/Slider';
import Main from './components/Main/Main';
import Basket from './components/Main/Basket';
import Footer from './components/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import Kampaniya from './components/Main/Kampaniya';
import axios from 'axios';
import CardInfo from './components/Main/CardInfo';
import Error404 from './components/Main/Error/Error404';

function App() {
    const [status, setStatus] = useState(false); // sebeti acan sey
    const [basket, setBasket] = useState([]); // sebetdeki seyler
    const [count, setCount] = useState(0); // sebetdeki yemek sayi
    const [pricee, setPrice] = useState(0); // sebetdeki qiymet
    const [data, setData] = useState()

    const {pathname} = useLocation()
    useEffect(()=>  {
        window.scroll(0,0)
    }, [pathname])

    useEffect(() => {
        axios.get('../../data/data.json')
            .then(res => setData(res.data))
    }, [])
    function deletee(id) {
        const deletedElem = basket.filter(item => item.id != id)
        setBasket(deletedElem)
        setCount(deletedElem.length)
    }
    return (
        <>
            <Header setStatus={setStatus} status={status} count={count} setCount={setCount} pricee={pricee} />
            <Routes>
                <Route path="/" element={<Slider />} />
                <Route path="/kampaniyalar" element={<Kampaniya data={data} setData={setData} />} />
                <Route path="/menu/:category" element={<Main data={data} setData={setData} setStatus={setStatus} status={status} basket={basket} setBasket={setBasket} count={count} setCount={setCount} setPrice={setPrice} pricee={pricee} />} />
                <Route path="/menu/:category/:id" element={<CardInfo data={data} setData={setData} basket={basket} setBasket={setBasket} count={count} setCount={setCount} setPrice={setPrice} pricee={pricee} />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Basket del={deletee} setStatus={setStatus} status={status} basket={basket} setBasket={setBasket} count={count} setCount={setCount} setPrice={setPrice} pricee={pricee} />
            <Footer />
        </>
    );
}

export default App;
