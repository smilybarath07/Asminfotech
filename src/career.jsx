import React from 'react'
import './career.css'


export default function Career() {
    return (
        <section id='career'>

            {/* ----------------------------------Row-1-------------------------------- */}

            <div className='career-start' >
                <div className='career-title'>
                    <h1>Career</h1>
                    <h3>Welcome to the team</h3>
                </div>
                <div className='career-text'>
                    <h4>Come to Weiswampach (L) and join our amazing team.</h4>
                </div>
            </div>

            {/* ----------------------------------Row-2-------------------------------- */}
            <div className='career-center'>
                <div className='career-details'>
                    <p>Sorry, there are no specific positions available at this time.</p>
                    <p>Unsolicited applications are welcome at any time:</p>
                    <h1>Prerequisites</h1>
                    <p>Your unsolicited applications will be considered if...</p>
                    <h4>1.Are you trying to find a long-term position?<br />
                        <span>At this time, we are not hiring independent contractors.</span></h4>
                    <h4>2.You're situated in the area. <br />
                        <span>Weiswampach is where our teams primarily work in person (L).</span></h4>
                    <h4>3.You speak our languages <br />
                        <span>You are fluent in French AND German or Luxembourgish.</span></h4>
                    <p>Send your application by email to : <br /><a href="">asminfoindia@gmail.com</a></p>
                </div>
            </div>

        </section>
    )
}
