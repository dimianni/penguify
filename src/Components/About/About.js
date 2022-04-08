import './About.scss';

import KidsAbout from './kids-about.png'
import AboutStory from './about-story.png'
import Dimon from './dimon.jpg'

import Snowball from '../../snowball.svg'
import Snowflakes from '../../snowflakes.svg'

const About = () => {

    return (
        <div className="About">
            <div className="About-hero">
                <div className="container">
                    <div className="About-hero__wrapper">
                        <div className="About-hero__wrapper-text">
                            <div className="pageTitle">About <br /> Us</div>
                        </div>
                        <div className="About-hero__wrapper-img">
                            <img src={KidsAbout} />
                            <div className="About-hero__wrapper-img--snowflake">
                                <ion-icon name="snow-outline"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="About-misson">
                <h2>We believe that every child deserves to stay warm during cold times. We offer affordable repurposed coats and boots that would leave every kid happy and cared for!</h2>
            </div>

            <div className="About-story">
                <div className="container">
                    <div className="About-story__wrapper">
                        <div className="About-story__wrapper-img">
                            <img src={AboutStory} />
                            <div className="About-story__wrapper-img--snowball">
                                <img src={Snowball} />
                            </div>
                            <div className="About-story__wrapper-img--snowflakes">
                                <img src={Snowflakes} />
                            </div>
                        </div>
                        <div className="About-story__wrapper-text">
                            <div className="About-story__wrapper-text--title sectionTitle">
                                <div>Penguify’s Story</div>
                            </div>
                            <ul className="About-story__wrapper-text--points">
                                <li>
                                    <h4>How it started</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac ante ligula. Proin ligula libero, bibendum sed iaculis eget, volutpat et augue.</p>
                                </li>
                                <li>
                                    <h4>Now</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac ante ligula. Proin ligula libero, bibendum sed iaculis eget, volutpat et augue.</p>
                                </li>
                                <li>
                                    <h4>Looking forward</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac ante ligula. Proin ligula libero, bibendum sed iaculis eget, volutpat et augue.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="About-team">
                <div className="container">
                    <div className="About-team__wrapper">
                        <div className="About-team__wrapper-top">
                            <div className="About-team__wrapper-top--title sectionTitle">
                                Meet our team
                            </div>
                        </div>
                        <div className="About-team__wrapper-bottom">
                            <div className="About-team__wrapper-bottom--officer">
                                <div className="About-team__wrapper-bottom--officer_image">
                                    <img src={Dimon} />
                                </div>
                                <div className="About-team__wrapper-bottom--officer_descr">
                                    <h4>Kendra H.</h4>
                                    <p>Chief Execution Officer</p>
                                </div>
                            </div>

                            <div className="About-team__wrapper-bottom--officer">
                                <div className="About-team__wrapper-bottom--officer_image">
                                    <img src={Dimon} />
                                </div>
                                <div className="About-team__wrapper-bottom--officer_descr">
                                    <h4>Dmytro A.</h4>
                                    <p>Chief Technology Officer</p>
                                </div>
                            </div>
                            
                            
                        </div>

                        <button className='button primary'>Join us!</button>

                    </div>
                </div>
            </div>
        </div>

    )

}
export default About;