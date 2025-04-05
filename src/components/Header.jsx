import { Link } from "react-router-dom";
import { FaBasketShopping, FaUser } from "react-icons/fa6";
import logo from '../../src/assets/img/logo.png';
import flagAze from '../../src/assets/img/flag_az.png';

function Header({ setStatus, count, pricee }) {
    return (
        <header>
            <nav>
                <div className="nav-top container justify-center">
                    <Link to='/'><img src={logo} alt="" id="logo-mobil" /></Link>
                    <div className="lang txtcenter">
                        <img src={flagAze} alt="aze" id="flag" />
                        <p>AZ</p>
                    </div>
                    <div className="login text-center">
                        <FaUser className="text-[1.15em] ml-1" />
                        <p>Giriş</p>
                    </div>
                    <div className="sebet txtcenter">
                        <span className="sebetsay">{count}</span>
                        <FaBasketShopping onClick={() => setStatus(true)} className="fa-solid fa-basket-shopping" />
                        <p className="sebetqiymet">{pricee * count} ₼</p>
                    </div>
                </div>
                <div className="nav-top-desk container m-auto">
                    <div className="ntd-left">
                        <a href="">Restoranlar</a>
                        <a>PapaBonus</a>
                    </div>
                    <div className="ntd-right">
                        <div className="lang" id="drp">
                            <img src={flagAze} alt="" id="flag" />
                            <span>Azərbaycanca ▼</span>
                            <div className="down">
                                <div className="lang">
                                    <a href="https://www.papajohns.az/en/papabonus">
                                        <img src="src/assets/img/flag_en.png" alt="" id="flag" />
                                        <span>English</span>
                                    </a>
                                </div>
                                <div className="lang">
                                    <a href="https://www.papajohns.az/ru/papabonus">
                                        <img src="src/assets/img/flag_ru.png" alt="" id="flag" />
                                        <span>Русский</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <a href="">Giriş/Qeydiyyat</a>
                        <div className="sebet">
                            <span className="sebetsay">{count}</span>
                            <FaBasketShopping onClick={() => setStatus(true)} className="fa-solid fa-basket-shopping" />
                            <p className="sebetqiymet">{pricee * count} ₼</p>
                        </div>
                    </div>
                </div>
                <div className="nav-bottom">
                    <div className="container">
                        <Link to='/' id="logmob" href=""><img src={logo} alt="PapaJohns-Logo" /></Link>
                        <div className="nb-list w-full">
                            <ul className='justify-center'>
                                <li className="link"><Link to='/kampaniyalar'>kampaniyalar</Link></li>
                                <li className="link"><Link to='/menu/papadias'>papadias</Link></li>
                                <li className="link"><Link to='/menu/pizza'>pizza</Link></li>
                                <li className="link"><Link to='/menu/qalyanaltilar'>qəlyənaltı</Link></li>
                                <li className="link"><Link to='/menu/salat'>salat</Link></li>
                                <li className="link"><Link to='/menu/pasta'>pasta</Link></li>
                                <li className="link"><Link to='/menu/icki'>içki</Link></li>
                                <li className="link"><Link to='/menu/desertlar'>desert</Link></li>
                                <li className="link"><Link to='/menu/souses'>sous</Link></li>
                            </ul>
                            <div className="bal txtwhite">
                                <span>0 bal  <span id="sual"> ? </span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header