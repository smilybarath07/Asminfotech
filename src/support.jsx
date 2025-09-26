import React from 'react'
import './support.css'


export default function Support() {
  return (
    <section id='support'>

      {/* ----------------------------------Row-1-------------------------------- */}

      <div className='support-start' >
        <div className='support-title'>
          <h1>Support</h1>
        </div>
      </div>
      {/* ----------------------------------Row-2-------------------------------- */}
      <div className='support-center'>
        <div className='support-details'>
          <h1>General details</h1>
          <h4>Contact Support</h4>
          <p>For technical questions, our support staff is accessible during business hours. In addition, we offer after-hours and emergency on-call assistance.
            To speak with us directly:</p>
          <ul>
            <li><span>by email :</span><a href="">asminfoindia@gmail.com
            </a></li>
            <li><span>by phone :</span><a href="tel:(+91) 90439 57699 ">(+91) 90439 57699,<br />
            <span className='phone'> 044 42129400 </span><br /> </a></li>
          </ul>
        </div>
      </div>

    </section>
  )
}
