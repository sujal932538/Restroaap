import React, { useContext } from 'react'
import './FoodDetail.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodDetail = ({ food, setShowDetail }) => {
    const { url, addToCart } = useContext(StoreContext)

    if (!food) return null

    return (
        <div className='food-detail' onClick={() => setShowDetail(null)}>
            <div className='food-detail-container' onClick={(e) => e.stopPropagation()}>
                <div className='food-detail-title'>
                    <h2>{food.name}</h2>
                    <img onClick={() => setShowDetail(null)} src={assets.cross_icon} alt="Close" />
                </div>
                <div className='food-detail-image-container'>
                    <img className='food-detail-image' src={url + "/images/" + food.image} alt={food.name} />
                </div>
                <div className='food-detail-info'>
                    <div className='food-detail-name-price'>
                        <span className='food-detail-name'>{food.name}</span>
                        <span className='food-detail-price'>₹{food.price}</span>
                    </div>
                    <p className='food-detail-desc'>{food.description}</p>
                </div>
                <div className='food-detail-actions'>
                    <button onClick={() => {
                        addToCart(food.id);
                        setShowDetail(null);
                    }}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default FoodDetail
