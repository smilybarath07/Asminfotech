import React from 'react'
import './request.css'
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from 'react-router-dom';




export default function Request() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/contact");
        window.scrollTo(0, 0);
    };
    return (
        <section id='request'>

            {/* ----------------------------------Row-1-------------------------------- */}

            <div className='request-start' >
                <div className='request-title'>
                    <h1>Project request</h1>
                </div>
            </div>


            {/* ----------------------------------Row-2-------------------------------- */}
            <div className='request-center'>
               <div>
                <h2></h2>
                <form action="">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text"  placeholder='name'/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text"  placeholder='name'/>
                    </div>
                </form>
               </div>
            </div>

            {/* ----------------------------------Row-3-------------------------------- */}
            <div className='request-end'>
                <div className='request-end-title'>
                    <div className='request-end-title-text'>
                        <h3>Do you have any query contact us agency</h3>
                        <h1>We advise you, without obligation</h1>
                    </div>
                    <div className='custom-button' style={{ marginTop: '150px' }}>
                        <button className='btn' onClick={handleButtonClick}>Contact us<p><GoArrowUpRight />
                        </p></button>
                    </div>
                </div>
            </div>
        </section>
    )
}
