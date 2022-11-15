import React, {useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {removeCartItem} from '../store/actions/cart'
function Cart() {
const dispatch = useDispatch()
    const {id} = useParams();
    const [data, setdata] = useState();
    const [loading, setLoading] = useState(false);

    // const price = useSelector(state=>state.cartReducer.price)

    // const amount = useSelector(state=>state.cartReducer.amount.reduce((item,acc)=>item+acc))+price;
    // console.log(amount,'amount')

    const cartData = useSelector(state=>state.cartReducer.cart)

    const newCartData = cartData && cartData

    let cartArr=[];

    for ( let key in newCartData  ){
        console.log(key,newCartData[key],"caett")
         cartArr.push({id:key, data:newCartData[key]})
    }
console.log(cartArr,"arr")
    const removeHander= (id)=>{
        console.log(id,"id")
        dispatch(removeCartItem(id))
    }

    return(
        <>
     {cartArr.length>0?
    cartArr.map((cart,index)=>{
        
        return (
            <div>
            <div className="row mx-5 my-2 p-2 bg-success">
                <div className='col-md-3'>
                    <img src={cart.data.image} alt={cart.data.title} height = "100px" width = "100px" />
                    <h5 className ="card-title mb-0">{cart.data.title.substring(0,12)}...</h5>
                </div>
                <div className='col-md-3'>
                    <p className='mx-5'>{cart.data.category}</p>
                </div>
                <div className='col-md-3'>
                    <p>
                        Price $ {(cart.data.price*cart.data.quantity).toFixed(2)}
                    </p>
                <div>Quantity: {cart.data.quantity}</div>
                </div>
                <div onClick={()=>removeHander(cart.data.id)} className='remove col-md-3'>
                    <button className='btn btn-danger'>Remove Item</button>
                </div>
            </div>
        </div>           
        )
    }) :'No Results found'
    }
    
      </>
    )
   
}


    

export default Cart