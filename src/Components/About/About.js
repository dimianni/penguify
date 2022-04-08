import './About.scss';

import KidsAbout from './kids-about.png'

const About = () => {

    return (
        <div className="About">
            <div className="About-hero">
                <div className="container">
                    <div className="About-hero__wrapper">
                        <div className="About-hero__wrapper-text">
                            <div className="pageTitle">Our <br /> Mission</div>
                        </div>
                        <div className="About-hero__wrapper-img">
                            <img src={KidsAbout} />
                            <div className="About-hero__wrapper-img--snowball">
                                {/* <img src={Snowball} /> */}
                            </div>
                            <div className="About-hero__wrapper-img--snowflakes">
                                {/* <img src={Snowflakes} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="About-misson">
                <h2>We believe that every child deserves to stay warm during cold times. We offer affordable repurposed coats and boots that would leave every kid happy and good-looking!</h2>
            </div>
        </div>

    )

}
export default About;