import React from 'react'

function Contact() {
  return (
    <div className='row text-center text-white bg-success mt-2' style={{ height: "80vh" }}>
      <h1 className='p-2'>CONTACT US</h1>
      <hr/>
      <div className='col-md-6'>
       <div className='conatiner mx-5 p-5'>
        <label htmlFor="company">
        <i class="fa fa-building"> Company</i>
        <p className='lead mx-5'>Janak Store Ltd.</p>
        </label>
        <label htmlFor="address">
        <i class="fa fa-map"> Location</i>
        <p className='lead mx-5'>Kathmandu, Nepal</p>
        </label>
        <label htmlFor="company">
        <i class="fa fa-envelope"> Email Address</i>
        <p className='lead mx-5'>jstore@gmail.com</p>
        </label>
        <label htmlFor="company">
        <i class="fa fa-address-book"> Contact</i>
        <p className='lead mx-5'>041-786546</p>
        </label>
       </div>
      </div>
      <div className='col-md-6'>
        <div className='mx-5 px-5 py-2 m-3 bg-warning rounded bg-opacity-50'>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
            <i class="fa fa-at"></i> Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
             <i className="fa fa-envelope px-2"></i>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button className='btn btn-dark'>SEND</button>
        </div>
    </div>

    </div>
    
  )
}

export default Contact