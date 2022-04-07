import './ProductCard.scss'

const ProductCard = ({ ttl, img, price }) => {
    return (
        <div className='productCard-wrapper'>
            <div className='productCard-wrapper_img'>
                <img src={`images/${img}.webp`} />
            </div>
            <div className='productCard-wrapper_title'>{ttl}</div>
            <div className='productCard-wrapper_price'>${price}</div>
        </div>
    )
}

export default ProductCard;