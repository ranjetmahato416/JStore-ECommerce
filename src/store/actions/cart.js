export const cartUpdate = (data)=>{
    console.log(data,"keraData")
 return dispatch =>{
    dispatch({
        type:"CART_UPDATE",
        data:data
    })
 }
}

export const removeCartItem = (id) =>{
    return dispatch=>{
        dispatch({
            type:"REMOVE_ITEM",
            id:id
        })
    }
}