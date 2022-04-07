import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard'


const ProductList = ({products}) => {
    return (

        <div className="ProductList">

            {
                products.map(prod => {
                    return(
                        // Passing the ID as a Route parameter
                        <Link to={`/product/` + prod[0]} key={prod[0]}>
                            <ProductCard />
                        </Link>
                    )
                })
            }

        </div>

    )
}

export default ProductList;