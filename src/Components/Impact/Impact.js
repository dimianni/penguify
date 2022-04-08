import './Impact.scss'

import ImpactBg from './impact-bg.png'

const Impact = () => {
    return (


        <div className="Impact">
            <div className="Impact-hero" style={{ backgroundImage: `url(${ImpactBg})` }}>
                <div className="container">
                    <div className="Impact-hero__wrapper">
                        <div className="Impact-hero__wrapper-text">
                            <div className="pageTitle">Penguify’s <br /> Impact</div>
                        </div>
                        {/* <div className="Impact-hero__wrapper-img">
                            <img src={KidsAbout} />
                            <div className="Impact-hero__wrapper-img--snowflake">
                                <ion-icon name="snow-outline"></ion-icon>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="Impact-misson">
                <h2>Helping as many children as many children as possible to provide warmth and comfort to those in need.</h2>
            </div>

            <div className="Impact-story">
                <div className="container">
                    <div className="Impact-story__wrapper">
                        <div className="Impact-story__wrapper-img">
                            {/* <img src={AboutStory} /> */}
                            <div className="Impact-story__wrapper-img--snowball">
                                {/* <img src={Snowball} /> */}
                            </div>
                            <div className="Impact-story__wrapper-img--snowflakes">
                                {/* <img src={Snowflakes} /> */}
                            </div>
                        </div>
                        <div className="Impact-story__wrapper-text">
                            <div className="Impact-story__wrapper-text--title sectionTitle">
                                <div>Penguify’s Story</div>
                            </div>
                            <ul className="Impact-story__wrapper-text--points">
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

        </div>

    )
}

export default Impact;