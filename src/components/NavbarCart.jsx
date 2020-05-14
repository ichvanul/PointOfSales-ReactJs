import React, { Component } from 'react'
import Style from '../assets/scss/NavbarCart.module.scss'

class Cart extends Component {
  render () {
    return (
      <div className={Style.main}>
        <div className={Style.body}>
          <h1>Cart</h1>
        </div>
      </div>
    )
  }
}

export default Cart