import React from 'react'
import './footer.css'
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Logo1 from './assets/nav/Logo.png'
import { GoArrowUpRight } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/projects");
        window.scrollTo(0, 0);
    };
    return (
        <footer className='footer'>
            <div className='footer-top'>
                <div className='footer-logo'><img src={Logo1} alt="" /></div>
                <div className='footer-about'>
                    <h1>About Us</h1>
                    <p>ASM Infotech is an internet consulting <br /> company focusing on efficient use of <br /> internet and  web technologies in business. <br /> We have helped several budding entrepreneurs <br /> in establishing their business online since 2015.</p>
                </div>
                <div className='footer-service'>
                    <h1>We offer services <br /> <span>such as</span></h1>
                    <ul>
                        <li>Website Design & Development</li>
                        <li>Web Application Development</li>
                        <li>Mobile Apps Development</li>
                        <li>E-Commerce Development</li>
                        <li>Web Portal Development</li>
                        <li>Content Management System</li>
                        <li>Mobile E-Commerce Solution</li>
                        <li>Energy Management & Industrial Analytics</li>
                    </ul>
                </div>
                <div className='footer-reach'>
                    <h1>Reach Us</h1>
                    <p>NO. 23,<br />
                        FIRST FLOOR,<br />
                        8th Street,<br /> Kamarajar Colony <br />
                        Kodambakkam <br />
                        Chennai, <br />
                        Tamil Nadu 600019.</p>
                </div>
                <div className='footer-contact'>
                    <h1>contact</h1>
                    <p>Phone: <a href="tel:(+91) 90439 57699">(+91) 90439 57699"</a><br />
                        <a href="tel:044 42129400">044 42129400</a> <br />
                        Email: <a href="email:asminfoindia@gmail.com">asminfoindia@gmail.com
                        </a></p>
                </div>
            </div>
            <div className='toggle-inside-right6'>
                <h3>A project, an idea? <br /> Start working with <br />us right now!</h3>
                <div className='custom-button' style={{ marginLeft: "-50px" }}>
                    <button className='btn' onClick={handleButtonClick}>Votre Project <p><GoArrowUpRight />
                    </p></button>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='toggle-inside-right7'>
                    <div><FaLinkedinIn /></div>
                    <div><FaFacebookF /></div>
                    <div><FaInstagram /></div>
                    <div><FaXTwitter /></div>
                    <div><FaYoutube /></div>
                </div>

            </div>
            <div className='pre-footer'>ASM Infotech. All Rights Reserved 2015.</div>
        </footer>
    )
}
