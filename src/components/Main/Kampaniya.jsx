function Kampaniya({ data }) {
    return (
        <div className='container'>
            <div className="promokod container m-auto">
                <p>Promo kodunuz var?</p>
                <span>Endirimdən istifadə edin!</span>
                <input type="text" id="prokod" placeholder="Promo kodu daxil edin" />
                <button>OK</button>
            </div> <br />
            <h1 className='font-bold text-[1.5em] mb-6'>Kampaniyalar</h1>
            <div className='flex flex-wrap gap-9 justify-center'>
                {data && data.kampaniyalar.map((item, i) => (
                    <div className="w-[310px] mx-3" key={i}>
                        <img src={item.img} alt='' className='' />
                        <button className='my-5 btn'>ƏTRAFLI MƏLUMAT</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Kampaniya