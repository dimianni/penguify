import './Home.scss'
import Penguin from '../../penguin.svg'
import KidsHome from './kids-home.png'
import HomeBg from './home-bg.png'
import { Link } from "react-router-dom";


const Home = () => {

    return (
        <div className="Home">
            <div className="Home-hero">
                <div className="container">
                    <div className="Home-hero__wrapper" style={{ backgroundImage: `url(${HomeBg})` }}>
                        <div className="Home-hero__wrapper-text">
                            <div className="pageTitle">We Are <br /> Penguify!</div>
                            <div className="subtitle">Repurposed winter clothes for kids</div>
                            <div className="Home-hero__wrapper-text--btns">
                                <Link to="/shopnow">
                                    <button className="button primary">Shop Now</button>
                                </Link>
                                <Link to="/about">
                                    <button className="button secondary">Learn more</button>
                                </Link>
                            </div>
                        </div>
                        <div className="Home-hero__wrapper-img">
                            <img src={KidsHome} />
                            <div className="Home-hero__wrapper-img--penguin">
                                <img src={Penguin} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Home-misson">
                <h2>Every child deserves to stay warm during cold times. We offer affordable repurposed coats and boots that would leave every kid happy and good-looking!</h2>
            </div>

            <div className="Home-todo">
                <div className='container'>
                    <div className="Home-todo__wrapper">
                        <div className="Home-todo__wrapper-el">
                            <div className="Home-todo__wrapper-el--icon icon1">
                                <ion-icon name="cash-outline"></ion-icon>
                            </div>
                            <div className="Home-todo__wrapper-el--description">
                                Donate Money
                            </div>
                        </div>
                        <div className="Home-todo__wrapper-el">
                            <div className="Home-todo__wrapper-el--icon icon2">
                                <ion-icon name="gift-outline"></ion-icon>
                            </div>
                            <div className="Home-todo__wrapper-el--description">
                                Give Clothes
                            </div>
                        </div>
                        <div className="Home-todo__wrapper-el">
                            <div className="Home-todo__wrapper-el--icon icon3">
                                <ion-icon name="accessibility-outline"></ion-icon>
                            </div>
                            <div className="Home-todo__wrapper-el--description">
                                Volunteer
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>


    )

}

export default Home;