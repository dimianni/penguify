import { Link } from 'react-router-dom';
import './Footer.scss'


const Footer = () => {
    return (
        <footer>
            <div>
                Built with <span role="img" alt="love" aria-label="">&#10084;&#65039;</span>
            </div>
            <div>
                © 2021 <Link to="/"> Penguify</Link>. All rights reserved. 
            </div>
        </footer>
    );
}

export default Footer;