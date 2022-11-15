import React from 'react'
import Cart from './Cart'
import { NavLink } from "react-router-dom";

function Carts() {
  return (
    <div>
        <div>
            <Cart/>
        </div>
        <NavLink to={"/payment"} className='btn btn-success mx-5 my-5'>Make Payment</NavLink>
    </div>
  )
}

export default Carts