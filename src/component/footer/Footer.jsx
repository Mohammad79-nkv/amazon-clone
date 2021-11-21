import './footer.css'
const Footer = () => {
    return ( 
        <footer>
            <div className="footer__container container-fluid p-3 row bg-dark mx-auto">
                <div className="footer__section col col-12 col-sm-6 col-md-3 pb-5">
                    <h4 className="footer__title">Get to Know Us</h4>
                    <div className="footer__items">
                        <a href="#" className="footer__link">Careers</a>
                        <a href="#" className="footer__link">Blog</a>
                        <a href="#" className="footer__link">About Amazon</a>
                        <a href="#" className="footer__link">Investor Relations</a>
                        <a href="#" className="footer__link">Amazon Devices
                        </a>
                    </div>
                </div>
                <div className="footer__section col col-12 col-sm-6 col-md-3 pb-5">
                    <h4 className="footer__title">Make Money with Us</h4>
                    <div className="footer__items">
                    <a href="#" className="footer__link">Sell products on Amazon</a>
                    <a href="#" className="footer__link">Sell on Amazon Business</a>
                    <a href="#" className="footer__link">Sell apps on Amazon</a>
                    <a href="#" className="footer__link">Become an Affiliate</a>
                    <a href="#" className="footer__link">Advertise Your Products</a>
                    <a href="#" className="footer__link">Self-Publish with Us</a>
                    <a href="#" className="footer__link">Host an Amazon Hub</a>
                    <a href="#" className="footer__link">›See More Make Money with Us</a>

                    </div>
                </div>
                <div className="footer__section col col-12 col-sm-6 col-md-3 pb-5">
                    <h4 className="footer__title">Amazon Payment Products</h4>
                    <div className="footer__items">
                    
                    <a href="#" className="footer__link">Amazon Business Card</a>
                    <a href="#" className="footer__link">Shop with Points</a>
                    <a href="#" className="footer__link">Reload Your Balance</a>
                    <a href="#" className="footer__link">Amazon Currency Converter</a>

                    </div>
                </div>
                <div className="footer__section col col-12 col-sm-6 col-md-3 pb-5">
                    <h4 className="footer__title">Let Us Help You</h4>
                    <div className="footer__items">
                    <a href="#" className="footer__link">Amazon and COVID-19</a>
                    <a href="#" className="footer__link">Your Account</a>

                    <a href="#" className="footer__link">Your Orders</a>
                    <a href="#" className="footer__link">Shipping Rates & Policies</a>
                    <a href="#" className="footer__link">Returns & Replacements</a>
                    <a href="#" className="footer__link">Manage Your Content and Devices</a>
                    <a href="#" className="footer__link">Amazon Assistant</a>
                    <a href="#" className="footer__link">Help</a>

                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;