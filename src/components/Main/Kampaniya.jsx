function Kampaniya({ data }) {
    return (
        <div className='container'>
            <section className="flex min-h-[70vh] items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded dark:bg-default-600 dark:text-gray-50">Back to homepage</a>
                    </div>
                </div>
            </section>
            {/* <div className="promokod container m-auto">
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
            </div> */}
        </div>
    )
}

export default Kampaniya