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
                            <div className="subtitle">Repurposed winter clothing for kids</div>
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
                <h2>Every child deserves to stay warm during cold times. We offer affordable repurposed coats and boots that would leave every kid happy and cared for!</h2>
            </div>

            <div className="Home-todo">
                <div className='container'>
                    <div className='Home-todo__title sectionTitle'>
                        How You Can Help
                    </div>
                    <div className="Home-todo__wrapper">
                        <div className="Home-todo__wrapper-el">
                            <div className="Home-todo__wrapper-el--icon icon1">
                                <ion-icon name="cash-outline"></ion-icon>
                            </div>
                            <div className="Home-todo__wrapper-el--description">
                                <h4>Donate Money</h4> 
                                <p>Create your own fundraiser to support a cause that's
                                    important to you, and provide hope to those in need in
                                    your community.</p>
                            </div>
                        </div>
                        <div className="Home-todo__wrapper-el">
                            <div className="Home-todo__wrapper-el--icon icon2">
                                <ion-icon name="gift-outline"></ion-icon>
                            </div>
                            <div className="Home-todo__wrapper-el--description">
                                <h4>Give Clothes</h4> 
                                <p>Your donations to Penguify Stores help fund
                                    rehabilitation programs that heal addictions, change lives,
                                    and restore families.</p>
                            </div>
                        </div>
                        <div className="Home-todo__wrapper-el">
                            <div className="Home-todo__wrapper-el--icon icon3">
                                <ion-icon name="accessibility-outline"></ion-icon>
                            </div>
                            <div className="Home-todo__wrapper-el--description">
                                <h4>Volunteer</h4> 
                                <p>Your donations to Penguify help us serve the most
                                    vulnerable members of your community.</p>
                            </div>
                        </div>
                    </div>
                    <div className='Home-todo__learnmore'>
                        <Link to="/about">
                            <button className='button secondary'>Learn more</button>
                        </Link>
                    </div>

                </div>
            </div>

            <div className="Home-contact">
                <div className='container'>
                    <div className='Home-contact__title sectionTitle'>
                        Have Any Questions?
                    </div>
                    <div className='Home-contact__button sectionTitle'>
                        <a href='mailto:kendra.hinz@wolves.northern.edu' className='button primary'>Get in touch</a>
                    </div>
                </div>
            </div>

        </div>


    )

}

export default Home;