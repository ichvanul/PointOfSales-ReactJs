import React, { Component } from 'react'
import Styles from '../assets/scss/MenuCart.module.scss'
import Coffee from '../assets/img/latte.jpg'

class MenuCart extends Component {
  render () {
    return (
      <div className={Styles.container}>
        <div className={Styles.main}>
          <div className={Styles.parent}>
            <img src={Coffee} alt="food"/>
          </div>
          <div className={Styles.content}>
            <div className={Styles.body}>
              <h5>Coffee Latte</h5>
            </div>
            <div className={Styles.button}>
              <div><button> - </button></div>
              <div><input type="number" value="1"/></div>
              <div><button> + </button></div>
            </div>
          </div>
          <div className={Styles.price}>
            <h5>Rp. 5000</h5>
          </div>
        </div>
        <div className={Styles.main}>
          <div className={Styles.parent}>
            <img src={Coffee} alt="food"/>
          </div>
          <div className={Styles.content}>
            <div className={Styles.body}>
              <h5>Coffee Latte</h5>
            </div>
            <div className={Styles.button}>
              <div><button> - </button></div>
              <div><input type="number" value="1"/></div>
              <div><button> + </button></div>
            </div>
          </div>
          <div className={Styles.price}>
            <h5>Rp. 5000</h5>
          </div>
        </div>
        <div className={Styles.main}>
          <div className={Styles.parent}>
            <img src={Coffee} alt="food"/>
          </div>
          <div className={Styles.content}>
            <div className={Styles.body}>
              <h5>Coffee Latte</h5>
            </div>
            <div className={Styles.button}>
              <div><button> - </button></div>
              <div><input type="number" value="1"/></div>
              <div><button> + </button></div>
            </div>
          </div>
          <div className={Styles.price}>
            <h5>Rp. 5000</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuCart