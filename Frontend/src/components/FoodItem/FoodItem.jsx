import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
const FoodItem= ({id,name,price,description,image,setShowDetail}) => {
  

  const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);
  
  const imgSrc = String(image).includes('/') || String(image).startsWith('data:') ? image : url+"/images/"+image;
  
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img onClick={()=>setShowDetail({id,name,price,description,image})} className='food-item-image' src={imgSrc} alt=''/>
            {!cartItems[id]
              ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=""/> 
              :<div className='food-item-counter'>  
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/> 
              </div>  
              }  
        </div>
      
        <div className="food-item-info" onClick={()=>setShowDetail({id,name,price,description,image})}>  
        <div className="food-item-name-rating">  
            <p>{name}</p>  
            <img src={assets.rating_starts} alt="" />  
        </div>  
        <p className="food-item-desc">{description}</p>  
        <p className="food-item-price">₹{price}</p>  
        </div>  
    </div>
  )
}

export default FoodItem;