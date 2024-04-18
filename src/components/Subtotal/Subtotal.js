import React from 'react'
import './Subtotal.css'
import { useStateValue } from '../../StateProvider';
import { getCartTotal } from '../../reducer';
import { useNavigate } from 'react-router-dom';


function Subtotal() {
  const navigate = useNavigate();
  const [{ cart }, dispatch] = useStateValue();

  const currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }


  return (
    <div className='subtotal'>
      <div>
        <p>
          Subtotal ({cart.length} items): <strong>{currencyFormat(getCartTotal(cart))}</strong>
        </p>
        <small className='subtotal__gift'>
          <input type="checkbox" /> This order contains a gift
        </small>
      </div>

      <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal