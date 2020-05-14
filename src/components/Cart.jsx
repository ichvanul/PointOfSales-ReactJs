import React, { Component } from 'react'
import Style from '../assets/scss/Cart.module.scss'
import MenuCart from '../components/MenuCart'

class Cart extends Component {
  render () {
    return (
      <div className={Style.main}>
        <MenuCart/>
      </div>
    )
  }
}

export default Cart