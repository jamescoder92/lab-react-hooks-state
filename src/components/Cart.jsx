import React from 'react'

const Cart = () => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {Cart.map ((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
