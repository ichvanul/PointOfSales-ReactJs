import React, { Component } from 'react'
import Style from '../assets/scss/Sidebar.module.scss'
import Fork from '../assets/img/fork.png'
import Menu from '../assets/img/clipboard.png'
import Add from '../assets/img/add.png'

class Sidebar extends Component {
  render () {
    return (
      <div className={Style.main}>
        <div className={Style.parent}>
          <img src={Fork} alt="fork"/>
        </div>
        <div className={Style.parent}>
          <img src={Menu} alt="menu"/>
        </div>
        <div className={Style.parent}>
          <img src={Add} alt="fork"/>
        </div>
      </div>
    )
  }
}

export default Sidebar