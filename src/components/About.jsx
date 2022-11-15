import React from 'react'
import { NavLink } from 'react-router-dom'
import footer from '../image/footer.jpg'

function Footer() {
  return (
    <>
      <div className= "text-center mt-2 shadow-1-strong rounded text-white" style={{backgroundImage : `url(${footer})`}}>
          <h1>About Us</h1>
          <hr/>
          <div className="row py-3">
            <div className='col-md-4 px-5'>
              <p className=' card-text lead bg-warning rounded bg-opacity-50 p-2'>
                We are genuine quaility service oriented sales store with high end products available at our store. 
                You can order things online for efficient services at your doorstep or you can even visit our store physically.
                We even have product return policy within a week with replacement and cash on return.
              </p>              
            </div>
            <div className='col-md-8'>
                <div class="card-text py-3 m-3 bg-secondary rounded bg-opacity-50">
                  
                  <img src="/assets/prazol.jpg" className="rounded-circle m-3" alt="100x100" width="100" height="120"/> 
                  <h3 className='lead'>CEO</h3>
                  <h3>Prazol Shamsher Bist <hr/></h3>
                  <p className='lead'>We have the ambition to become Nepal's most sustainable supermarket. 

                  As one of Nepal’s growing companies we need to show the way forward. By acting together now, we can create a better Nepal for future generations. As part of this ambition, we launched our 
                  Sustainability Strategy under two pillars ‘Together to Zero’ and ‘Better Together’.</p>
                </div>
            {/* <img className ="img-circle" src="/assets/anjal.jpg" alt="img" height={100} width = {100}/> */}
          </div>          
          </div>
                      
      </div>

      
    </>
  )
}

export default Footer