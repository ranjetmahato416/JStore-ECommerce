import { updateObject } from "../utility"

const initialState={
    cart:{},
   items:{}
}

const updateCart = (state,action) =>{
    // return updateObject(state, {cart:state.cart.push(action.data)})
    // let data = state.cart.filter(cart=>cart.id===state.items)
    let newData ={ ...state.cart,[action.data.id]:{...action.data,quantity:state.items[action.data.id]?state.items[action.data.id].quantity:1}}
    return updateObject(state,  { cart :newData})

}

const cartReducer = (state=initialState,action) =>{
    switch(action.type){
        case "CART_UPDATE":
            return updateCart(state,action)

        case "INCREMENT_PRODUCT":
        //    return { ...state, quantity:{quantity:action.quantity,id:action.id}, price:action.data  }
           return {...state,items:{...state.items,[action.id]:{id:action.id,quantity:1+action.quantity}}}

        //    case "INCREMENT_PRODUCT":
        //     return { ...state, amount:[...state.amount,action.data], price:action.data  }

            
               

        case "REMOVE_ITEM":
            const cartObj={...state.cart}
            let cartarr=[]
            for ( let key in cartObj ){
                cartarr.push(cartObj[key])
            }
            console.log(cartarr,"reduxcart")
            console.log(action.id,"action")
            // console.log(cart,"newcart")
            const newCart = cartarr.filter((eachCart,index)=>eachCart.id!==action.id)
            console.log(newCart,'new')
            return {...state,cart:newCart}
        default:
        return state   
    }
    
}

export default cartReducer