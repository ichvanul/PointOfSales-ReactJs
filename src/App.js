import React from 'react'
import './assets/css/App.css'
import './assets/css/ContainerApp.css'
import './assets/css/HeaderApp.css'
import Menu from './components/Menu'
import Sidebar from './components/Sidebar'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import NavbarCart from './components/NavbarCart'

function App() {
  return(
    <div className="ContainerApp">
      <div className="HeaderApp">
        <Navbar/>
        <NavbarCart/>
      </div>
      <div className="App">
        <Sidebar/>
        <Menu/>
        <Cart/>
      </div>
    </div>
  )
}


export default App;