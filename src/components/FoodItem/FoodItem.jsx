import React, { useContext, } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({id,name,description,image,price}) => {

    // const [itemCount,setItemCount] = useState(0)
    const {cartItems,addToCart,remove} = useContext(StoreContext);
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
            {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
                :<div className='food-item-counter'>
                    <img onClick={()=>remove(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
               
              </div>

            }
        </div>

        <div className="food-item-info">
            <div className="food-item-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
        </div>

       <p className="food-item-desc">{description}</p>

       <p className="food-item-price">${price}</p>



    </div>
  )
}

export default FoodItem