import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import cartReducer from '../../store/reducers/cart';
import Buttons from "./Buttons";
function Navbar() {
  const state = useSelector(state => state.cartReducer.cart);
  const loginInfo = JSON.parse(localStorage.getItem('user_login'))?JSON.parse(localStorage.getItem('user_login')):''
  const username = loginInfo && loginInfo[0].name
  console.log(username,"username")
  console.log(loginInfo,"info")

  const [ toggle, setToggle ] = useState(false)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success bg-opacity-90 py-3">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            JStore
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            {username ?
            (
              <>
            <div onClick={()=>setToggle(pre=>!pre)} className="btn btn-danger ">
                {username}
                {toggle ?
                (
                  <>
                {/* <i className ="mx-1 fa fa-chevron-up"> </i> */}
                <div onClick={()=>localStorage.removeItem('user_login')} className="py-1 btn btn-success mx-2">Logout</div>
                </>

                )
                :
                (
                  <></>
                // <i className ="mx-1 fa fa-chevron-down"> </i>
                )
                            }
            {/* { toggle && (
              <div>Logout</div>
            ) } */}
            </div>
            </>
            )
            :
            <Buttons/>
            }
            <NavLink to="/carts" className="btn btn-outline-warning ms-2">
              <i className ="fa fa-cart-plus"> Cart({state.length})</i>
              </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
