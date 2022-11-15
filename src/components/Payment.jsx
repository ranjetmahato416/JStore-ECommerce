import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

function Payment() {
    const alert = (async) => {
        // toast("Payment Successful!")
        
        Swal.fire({
            title: 'Payment Successful!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          }).then(()=>window.location.replace('/'))
        // window.location.replace("/");
    };
    const message = (async) => {
        Swal.fire({
            title: 'Gareeb Log!',
            text: 'Ameer Bano',
            icon: 'warning',
            confirmButtonText: 'Thik Hai'
          })
        
    };
  return (
    <>
        <div>
            <div className='d-flex justify-content-center'>
            <h1 className='lead'>Choose Payment Methods.</h1>
            </div>
            <div className='row'>
                <div className='col-md-4 px-5 my-5'>
                    <img className='card-img' src="/assets/esewa-logo.png" alt="" />
                    <button className="btn btn-success" onClick = {alert}>Pay</button>
                </div>
                <div className='col-md-4 my-5'>
                    <img className='card-img my-2' src="/assets/khalti_logo.png" alt="" />
                    <button className="btn btn-success" onClick = {alert}>Pay</button>
                </div>
                <div className='col-md-4 my-5'>
                <h1> CASH ON DELIVERY</h1>
                <button className="btn btn-success" my-5 onClick={message}>Message For You!!!</button>
                </div>
            </div>
        </div>
        <ToastContainer />
    </>
  )
}

export default Payment