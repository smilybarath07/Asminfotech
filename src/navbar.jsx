import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css'
import Projects from './projects'
import Logo from './assets/nav/Logo.png'
import Logo1 from './assets/nav/Logo-1.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GoArrowUpRight } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';
import Img1 from './assets/service/img-2.jpg';
import Img2 from './assets/service/img-12.jpeg';
import Img3 from './assets/service/img-17.jpeg';
import Img4 from './assets/service/img-1.jpg';
import Img5 from './assets/service/img-14.jpg';

export default function Navbar() {
    const menuCheckboxRef = useRef(null);
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/projects");
        window.scrollTo(0, 0);
        menuCheckboxRef.current.checked = false;
    };
    const handleLinkClick = () => {
        if (menuCheckboxRef.current) {
            menuCheckboxRef.current.checked = false;
        }
        window.scrollTo(0, 0);
    }
    return (
        <section className='navbar'>
            <div className='logo-left'>
                <img src={Logo} alt="" />
            </div>
            <nav role="navigation">
                <div id="menuToggle" >
                    <input type="checkbox" id="menuCheckbox" ref={menuCheckboxRef} />

                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <div className='toggle-inside-list'>
                            <Link to="/" onClick={handleLinkClick}> Home</Link>
                            <Link to="/about" onClick={handleLinkClick}>About Us</Link>
                            <Link to="/service" onClick={handleLinkClick}>Service</Link>
                            <Link to="/product" onClick={handleLinkClick}>Our Product</Link>
                            <Link to="/project" onClick={handleLinkClick}>Projects</Link>
                            <Link to="/contact" onClick={handleLinkClick}>Contact Us</Link>
                        </div>
                        <Container className='toggle-inside-container'>
                            <Row>
                                <Col>
                                    <div className='toggle-inside-img'>
                                        <Carousel >
                                            <Carousel.Item>
                                                <img className='img-1' src={Img1} alt="" />
                                            </Carousel.Item>


                                            <Carousel.Item>
                                                <img className='img-1' src={Img2} alt="" />
                                            </Carousel.Item>


                                            <Carousel.Item>
                                                <img className='img-1' src={Img3} alt="" />
                                            </Carousel.Item>

                                            <Carousel.Item>
                                                <img className='img-1' src={Img4} alt="" />
                                            </Carousel.Item>

                                            <Carousel.Item>
                                                <img className='img-1' src={Img5} alt="" />
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                </Col>
                                <Col >
                                    <div className='toggle-inside-right'>
                                        <h1>(01) Startegy</h1>
                                        <p>Web Development</p>
                                        <p>Website Design</p>
                                        <p>Mobile Applications</p>
                                        <p>ONLINE MARKETING</p>
                                    </div>
                                    <div className='toggle-inside-right-3'>
                                        <h1>(03) Web design & Development</h1>
                                        <p>Customized Web Applications Development</p>
                                        <p>CMS based solutions for Implementing an existing website</p>
                                    </div>
                                </Col>
                                <Col >
                                    <div className='toggle-inside-right-2'>
                                        <h1>(02) Creation</h1>
                                        <p>Responsive web design & template</p>
                                        <p>Mobile app design & Creative applications</p>
                                    </div>
                                    <div className='toggle-inside-right-4'>
                                        <h1>(04) Mobile Applications</h1>
                                        <p>We provide robust process-based applications for your company.</p>
                                        <p style={{ marginTop: "-10px" }}>Every one of our apps has cutting-edge functionality.</p>
                                    </div>
                                </Col>
                                <Col >
                                    <div className='toggle-inside-right-5'>
                                        <h1>(05) Marketing</h1>
                                        <p>Email marketing and social media marketing (SMM)</p>
                                        <p>Online Reputation Management</p>
                                        <p>360-degree advertising
                                            Optimization of search engines (SEO)</p>
                                    </div>
                                    <div className='toggle-inside-right-6'>
                                        <h3>A project, an idea? Start working with us right now!</h3>
                                        <div className='custom-button'>
                                            <button className='btn' onClick={handleButtonClick}>Votre Project <p><GoArrowUpRight />
                                            </p></button>
                                        </div>
                                    </div>
                                    <div className='toggle-inside-right-7'>
                                        <div><FaLinkedinIn /></div>
                                        <div><FaFacebookF /></div>
                                        <div><FaInstagram /></div>
                                        <div><FaXTwitter /></div>
                                        <div><FaYoutube /></div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </ul>
                </div>
            </nav>
        </section>
    )
}
