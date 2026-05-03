import React , { useState }from 'react'
import Navbar from './pages/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from'./components/LoginPopup/LoginPopup';
import Verify from './pages/Verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders'
import FoodDetail from './components/FoodDetail/FoodDetail';

const App = () => {

  const [showLogin,setShowLogin]=useState(false)
  const [showDetail,setShowDetail]=useState(null)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    {showDetail ? <FoodDetail food={showDetail} setShowDetail={setShowDetail} /> : <></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>  
      <Routes>
        <Route path='/' element={<Home setShowDetail={setShowDetail}/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify />} />
        <Route path='/myorders' element={<MyOrders />} />

      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App;