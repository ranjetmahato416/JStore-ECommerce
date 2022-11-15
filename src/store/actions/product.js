export const incrementProduct = (quantity,id) =>{
    return dispatch =>{
        dispatch({
            type:"INCREMENT_PRODUCT",
            quantity:quantity,
            id:id
        })
    }
}

export const decrementProduct = (quantity,id) =>{
    return dispatch =>{
        dispatch({
            type:"DECREMENT_PRODUCT",
            quantity:quantity,
            id:id
        })
    }
}