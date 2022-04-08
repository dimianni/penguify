import './Impact.scss'

import ImpactBg from './impact-bg.png'
import Penguin from '../../penguin.svg'
import ImpactStory from './impact-story.png'
import Snowball from '../../snowball.svg'
import Snowflakes from '../../snowflakes.svg'



const Impact = () => {
    return (


        <div className="Impact">
            <div className="Impact-hero" style={{ backgroundImage: `url(${ImpactBg})` }}>
                <div className="container">
                    <div className="Impact-hero__wrapper">
                        <div className="Impact-hero__wrapper-text">
                            <div className="pageTitle">Penguify’s <br /> Impact</div>
                        </div>
                        <div className="Impact-hero__wrapper-img">
                            <img src={Penguin} />

                        </div>
                    </div>
                </div>
            </div>
            <div className="Impact-misson">
                <h2>Helping as many children as many children as possible to provide warmth and comfort to those in need.</h2>
            </div>

            <div className="Impact-story">
                <div className="container">
                    <div className="Impact-story__wrapper">
                        <div className="Impact-story__wrapper-text">
                            <div className="Impact-story__wrapper-text--title sectionTitle">
                                <div>How we Give Back</div>
                            </div>
                            <ul className="Impact-story__wrapper-text--points">
                                <li>
                                    <h4>Repurposing used winter clothing</h4>
                                    <p>Once we are given used coats, boots, and accesories, we are able to clean and fix any problem to make them look brand new. We also give others the opportunities to repurpose items themselves. </p>
                                </li>
                                <li>
                                    <h4>Making the products available</h4>
                                    <p>After we referbish the used products, we make them available on our website, so families can see affordable options. We also donate many winter coats and accesories to those in need.</p>
                                </li>
                                <li>
                                    <h4>Opportunity to help other</h4>
                                    <p>There are many ways for community members to contribute to our cause with their time, skills, and contributions</p>
                                </li>
                            </ul>
                        </div>
                        <div className="Impact-story__wrapper-img">
                            <img src={ImpactStory} />
                            <div className="Impact-story__wrapper-img--snowball">
                                <img src={Snowball} />
                            </div>
                            <div className="Impact-story__wrapper-img--snowflakes">
                                <img src={Snowflakes} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="Impact-help">
                <div className="container">
                    <div className="Impact-help__wrapper">
                        <div className="Impact-help__wrapper-title sectionTitle">
                            How to Help
                        </div>
                        <div className="Impact-help__wrapper-inputs">
                            <form className="Impact-help__wrapper-inputs--el">
                                <label>
                                    Donate Money
                                    <input type="text" name="money" placeholder='$' />
                                </label>
                                <input type="submit" value="Contribute" className='button primary' />
                            </form>
                            <form className="Impact-help__wrapper-inputs--el">
                                <label>
                                    Give clothing
                                    {/* <input type="text" name="clothing" /> */}
                                </label>
                                <input type="submit" value="Give" className='button primary' />
                            </form>
                            <form className="Impact-help__wrapper-inputs--el">
                                <label>
                                    Volunteer
                                    {/* <input type="text" name="money" /> */}
                                </label>
                                <input type="submit" value="Volunteer" className='button primary' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Impact;