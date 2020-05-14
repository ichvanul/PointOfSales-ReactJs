import React, { Component } from 'react'
import Style from '../assets/scss/Navbar.module.scss'

class Navbar extends Component {
  render () {
    return (
      <div className={Style.main}>
        <div className={Style.body}>
          <h1>Menu</h1>
        </div>
      </div>
    )
  }
}

export default Navbar