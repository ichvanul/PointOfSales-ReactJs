import React, { Component } from 'react'
import Styles from '../assets/scss/Menu.module.scss'
import Coffee from '../assets/img/latte.jpg'

class Menu extends Component {
  render () {
    return (
      <div className={Styles.main}>
        <div className={Styles.parent}>
          <img src={Coffee} alt="food"/>
          <p>Cofee Latte</p>
          <h5>Rp. 5.000</h5>
        </div>
        <div className={Styles.parent}>
          <img src={Coffee} alt="food"/>
          <p>Cofee Latte</p>
          <h5>Rp. 5.000</h5>
        </div>
        <div className={Styles.parent}>
          <img src={Coffee} alt="food"/>
          <p>Cofee Latte</p>
          <h5>Rp. 5.000</h5>
        </div>
        <div className={Styles.parent}>
          <img src={Coffee} alt="food"/>
          <p>Cofee Latte</p>
          <h5>Rp. 5.000</h5>
        </div>
      </div>
    )
  }
}

export default Menu