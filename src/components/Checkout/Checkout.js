import React from 'react'
import './Checkout.css'
import Subtotal from '../Subtotal/Subtotal'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img
          src="https://m.media-amazon.com/images/I/51WQaQD-EsL.jpg"
          alt=""
          className="checkout__ad" />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">
            Shopping Cart
          </h2>
          {cart?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout