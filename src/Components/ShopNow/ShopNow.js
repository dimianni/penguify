import axios from "axios";
import { Component } from "react";
import { Link } from 'react-router-dom';

import Spinner from "../../UI/Spinner/Spinner";
import ProductCard from '../ProductCard/ProductCard';
import './ShopNow.scss';
import Kids from './kids.png'

import Snowball from '../../snowball.svg'
import Snowflakes from '../../snowflakes.svg'

class ShopNow extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: null
        }
    }

    componentDidMount() {
        axios.get("https://penguify-pbl-default-rtdb.firebaseio.com/products.json")
            .then(res => {
                console.log(res.data);
                this.setState({ products: res.data })
            })

    }

    render() {

        let productsList = <Spinner />

        if (this.state.products) {

            productsList = this.state.products.map(prod => {

                return (
                    // Passing the ID as a Route parameter
                    <div className="productsList-el">
                        <Link to={`/product/` + prod.id} key={prod.id}>
                            <ProductCard ttl={prod.title} img={prod.images[0]} price={prod.price} />
                        </Link>
                    </div>
                )

            })
        }

        return (

            <div className="shopNow">
                <div className="shopNow-hero">
                    <div className="container">
                        <div className="shopNow-hero__wrapper">
                            <div className="shopNow-hero__wrapper-text">
                                <div className="pageTitle">Explore <br /> our <br /> catalog</div>

                            </div>
                            <div className="shopNow-hero__wrapper-img">
                                <img src={Kids} />
                                <div className="shopNow-hero__wrapper-img--snowball">
                                    <img src={Snowball} />
                                </div>
                                <div className="shopNow-hero__wrapper-img--snowflakes">
                                    <img src={Snowflakes} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="productsList">
                        {productsList}
                    </div>
                </div>
            </div>

        )
    }

}

export default ShopNow;