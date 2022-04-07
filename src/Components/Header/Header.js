import { Component } from 'react'
import { Link } from 'react-router-dom';

import Logo from './penguify_logo.png'
import LogoScroll from './penguify_logo_scroll.png'
import './Header.scss'


class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            burgerActive: false,
            isTop: true
        };
        // https://stackoverflow.com/questions/45999031/react-toggle-class-onclick-and-call-other-function
        this.toggleClass = this.toggleClass.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 10;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }

    toggleClass() {
        const currentState = this.state.burgerActive;
        this.setState({ burgerActive: !currentState });
    };

    render() {
        return (
            <header className={this.state.isTop ? 'header' : 'header scroll'}>
                <div className="container">
                    <div className="header-wrapper">

                        

                        {/* <!-- Menu --> */}
                        <nav className={this.state.burgerActive ? 'header-wrapper__menu menuActive' : 'header-wrapper__menu'}>
                            <ul className="header-wrapper__menu--list">
                                <li className="header-wrapper__menu--list_el">
                                    {/* <a href="#">Shop Now</a> */}
                                    <Link to="/shopnow">
                                        Shop Now
                                    </Link>
                                </li>
                                <li className="header-wrapper__menu--list_el">
                                    <Link to="/about">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        {/* <!-- Logo --> */}
                        <Link to="/" className="header-wrapper__logo">
                            <img src={this.state.isTop ? Logo : LogoScroll} alt="" />
                        </Link>
                        {/* <a href="/" className="header-wrapper__logo">
                            <img src={this.state.isTop ? Logo : LogoScroll} alt="" />
                        </a> */}

                        <div className="header-wrapper__icons">
                            <ul className="header-wrapper__icons--list">
                                <li className="header-wrapper__icons--list_el">
                                    <a href="#">
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </a>
                                </li>
                                <li className="header-wrapper__icons--list_el">
                                    <a href="#">
                                        <ion-icon name="cart-outline"></ion-icon>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* <!-- Burger --> */}
                        <div className="header-wrapper__burger">
                            <div className={this.state.burgerActive ? 'header-wrapper__burger--cont burgerActive' : 'header-wrapper__burger--cont'}
                                onClick={this.toggleClass} >
                                <div className="header-wrapper__burger--cont_el"></div>
                                <div className="header-wrapper__burger--cont_el"></div>
                                <div className="header-wrapper__burger--cont_el"></div>
                                <div className="header-wrapper__burger--cont_el"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>

        )
    }



}

export default Header;