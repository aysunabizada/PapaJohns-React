import { FaFacebookF, FaTwitter, FaInstagram, FaDiscord} from "react-icons/fa";

function Footer() {
    return (
        <footer className="px-5">
            <div className="mobil-f">
                <div className="mobil-footer p20">
                    <div className="mf-left">
                        <ul>
                            <li><a href="">Haqqımızda</a></li>
                            <li><a href="">Sual-cavab</a></li>
                            <li><a href="">Karyera</a></li>
                            <li><a href="">Xəmir</a></li>
                            <li><a href="">Papa Talk - Şərtlər<br /> və Qaydalar</a></li>
                        </ul>
                    </div>
                    <div className="mf-right">
                        <ul>
                            <li><a href="">Restoranlar</a></li>
                            <li><a href="">Kampaniyalar</a></li>
                            <li><a>PapaBonus</a></li>
                        </ul>
                    </div>
                </div>
                <a href="tel://*7272" id="tel"></a>
                <div className="icons p20">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-discord"></i>
                </div>
                <div className="copy txtcenter">© PJA 2024</div>
            </div>
            <div className="desk-f">
                <div className="container">
                    <div className="df">
                        <div className="copy">© PJA 2024</div>
                        <ul>
                            <li><a href="">Haqqımızda</a></li>
                            <li><a href="">Sual-cavab</a></li>
                            <li><a href="">Karyera</a></li>
                            <li><a href="">Xəmir</a></li>
                            <li><a href="">Papa Talk - Şərtlər</a></li>
                        </ul>
                    </div>
                    <div className="df">
                        <a href="tel://*7272" id="tel"></a>
                        <div className="icons p20">
                            <a href="" ><FaFacebookF /></a>
                            <a href="" ><FaTwitter /></a>
                            <a href="" ><FaInstagram /></a>
                            <a href="" ><FaDiscord /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer