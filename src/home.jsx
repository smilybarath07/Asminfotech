import { div, section } from 'framer-motion/client'
import React from 'react'
import './home.css'
import TypingText from './textTyping'
import { LuArrowUpFromDot } from "react-icons/lu";
import Video1 from './assets/home/Video1.webm'
import { GoArrowRight } from "react-icons/go";
import Img1 from './assets/service/img-2.jpg';
import Img2 from './assets/service/img-12.jpeg';
import Img3 from './assets/service/img-17.jpeg';
import Img4 from './assets/service/img-1.jpg';
import Img5 from './assets/service/img-14.jpg';
import Logo from './assets/nav/Logo.png'
import Img6 from './assets/home/img-1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useState, useEffect, useRef } from 'react';
import { HiOutlineSignal } from "react-icons/hi2";
import { FaSignal } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { SiTraefikproxy } from "react-icons/si";


export default function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id='home'>

            {/* ----------------------home-row-1------------------ */}
            <div className='home-row-1'>
                <div className='home-col-1' data-aos="fade-up">
                    <h1>Agency of <br /><span>software development</span> </h1>
                    <h3> We make <br />your development <br />
                        <span> <TypingText textArray={['apps.', 'websites.', 'dreams into reality.']} /></span>
                    </h3>
                </div>
                <div className='home-col-2' data-aos="fade-left">
                    <p><span className='arrow'><LuArrowUpFromDot /></span> Discover</p>
                    <div className='video-1'>
                        <video src={Video1} autoPlay loop muted playsInline />
                    </div>
                </div>
            </div>

            {/* ----------------------home-row-2------------------ */}

            <div className='home-row-2'>
                <div className='home-row-2-1'>
                    <img src={Logo} alt="" />
                    <h4>We Design Delightful
                        Customer Experience
                        We partner with brands, agencies and start-ups to create engaging
                        content and meaningful experiences in the digital space.We offer a complete solution to help grow your business online. As a full service agency we manage the entire project lifecycle from research & strategy through web design & development to ongoing support and Online Marketing.</h4>
                </div>
                {/* ----------------------home-row-3------------------ */}
                <div className='home-row-2-2' data-aos="fade-up">
                    <h1>Your objectives, our mission!</h1>
                    <h4>We comprehend your problems and offer thorough, astute, digital, and tested solutions.
                        <br />   You benefit from our digital marketing:</h4>
                </div>

                {/* ----------------------home-row-4------------------ */}
                <div className='home-row-2-3'>
                    <div className='box-1'>
                        <div className='box-1-1'>
                            <div><HiOutlineSignal /></div>
                            <h3><span># </span>Visibility</h3>
                        </div>

                        <div className='box-1-2'>
                            <h1>Boost your visibility and reputation</h1>
                            <h4>Increase your market awareness and effectively stand out from your competitors.</h4>
                        </div>
                    </div>

                    <div className='box-2'>
                        <div className='box-2-1'>
                            <div><FaSignal /></div>
                            <h3><span># </span>Growth</h3>
                        </div>

                        <div className='box-2-2'>
                            <h1>Win customers & improve profitability</h1>
                            <h4>Attract leads and increase your results with targeted digital advertising strategies.</h4>
                        </div>
                    </div>

                    <div className='box-3'>
                        <div className='box-3-1'>
                            <div><LuUsers /></div>
                            <h3><span># </span>Visibility</h3>
                        </div>

                        <div className='box-3-2'>
                            <h1>Recruiting the right talent for your team</h1>
                            <h4>Profile your company as an attractive employer and hire the best team members for your project.</h4>
                        </div>
                    </div>

                    <div className='box-4'>
                        <div className='box-4-1'>
                            <div><SiTraefikproxy /></div>
                            <h3><span># </span>Recruiting</h3>
                        </div>

                        <div className='box-4-2'>
                            <h1>Optimize your processes & your digital agility</h1>
                            <h4>Leverage modern tools to optimize your productivity and daily life in the digital age.</h4>
                        </div>
                    </div>
                </div>

                {/* ----------------------home-row-5------------------ */}
                <div className='service-center' style={{ borderRadius: '0px' }}>
                    <div className='home-center-title'>
                        <div className='home-center-title-1' data-aos="fade-up">
                            <h1 >Full-service or a la carte</h1>
                            <h4>Agency services</h4>
                        </div>
                        <div className='home-center-title-2' data-aos="fade-up">
                            <h2>Our in-house team masters the entire spectrum of software development,from strategy and creation to sophisticated campaigns.</h2>
                        </div>
                    </div>
                    <div className='service-center-card-1'>
                        <div className='service-center-card-1-1'>
                            <h1><span>(1)</span>Strategy</h1>
                            <p>Software deployment strategies are methods used to release new or updated software into production environments.</p>
                            <ul>
                                <li><span><GoArrowRight /></span>web development</li>
                                <li><span><GoArrowRight /></span>web design </li>
                                <li><span><GoArrowRight /></span>Mobile Applications</li>
                                <li><span><GoArrowRight /></span>Online Marketing</li>
                            </ul>
                        </div>
                        <div className='service-center-card-1-2'>
                            <img src={Img4} alt="" />
                        </div>
                    </div>

                    <div className='service-center-card-2'>
                        <div className='service-center-card-2-1'>
                            <h1><span>(2)</span>Creation</h1>
                            <p>Websites, content, and designs that highlight your brand.</p>
                            <ul>
                                <li><span><GoArrowRight /></span>Responsive web design & template</li>
                                <li><span><GoArrowRight /></span>Mobile app design & Creative applications</li>
                            </ul>
                        </div>
                        <div className='service-center-card-2-2'>
                            <img src={Img1} alt="" />
                        </div>
                    </div>

                    <div className='service-center-card-3'>
                        <div className='service-center-card-3-1'>
                            <h1><span>(3)</span>web design & Development</h1>
                            <p>Web development refers to building, creating, and maintaining websites.</p>
                            <ul>
                                <li><span><GoArrowRight /></span>Customized Web Applications Development</li>
                                <li><span><GoArrowRight /></span>CMS based solutions for Implementing an existing website</li>
                            </ul>
                        </div>
                        <div className='service-center-card-3-2'>
                            <img src={Img5} alt="" />
                        </div>
                    </div>

                    <div className='service-center-card-4'>
                        <div className='service-center-card-4-1'>
                            <h1><span>(4)</span>Mobile Applications</h1>
                            <p>Digital tools that revolutionize your daily life and your processes.</p>
                            <ul>
                                <li><span><GoArrowRight /></span>We provide robust process-based applications for your company.</li>
                                <li><span><GoArrowRight /></span>Every one of our apps has cutting-edge functionality.</li>
                            </ul>
                        </div>
                        <div className='service-center-card-4-2'>
                            <img src={Img2} alt="" />
                        </div>
                    </div>

                    <div className='service-center-card-5'>
                        <div className='service-center-card-5-1'>
                            <h1><span>(5)</span>Marketing</h1>
                            <p>clever campaigns that produce observable and quantifiable outcomes.</p>
                            <ul>
                                <li><span><GoArrowRight /></span>Online Reputation Management</li>
                                <li><span><GoArrowRight /></span>360-degree advertising Optimization of search engines (SEO)</li>
                            </ul>
                        </div>
                        <div className='service-center-card-5-2'>
                            <img src={Img3} alt="" />
                        </div>
                    </div>

                </div>

                {/* ----------------------home-row-6------------------ */}

                <div className='home-row-6'>
                    <div className='home-row-6-1'>
                        <img src={Img5} alt="" />
                    </div>
                    <div className='home-row-6-2'>
                        <h1>The opinions of our agency's clientele</h1>
                        <h4>They did a very good job on designing my website an absolutely listen to the clients queries and fix it accordingly credits to Mr Rajendran on completing my website as a good outcome.One of the best App Development companies in Chennai.
                            We tried Mirror Minds for a particular need. We are extremely satisfied with the end result, cost, delivery time and communication. Mr.Rajendran and Mr.Dinesh are an exceptionally sharp guys who takes good care of our needs and delivered above PAR. Mirror Minds is trustworthy, skilled and an overall good partner for a wide variety of Application and website development needs.</h4>
                        <img src={Logo} alt="" />
                    </div>
                </div>

                {/* ----------------------home-row-7------------------ */}
                <div className='about-content' style={{ marginTop: "-55%" }}>
                    <div className='home-content-title'>
                        <h2 className='home-row-7-h1'>About our agency</h2>
                        <div className='home-row-7-img'>
                            <img src={Img6} alt="" />
                        </div>
                        <h4 className='home-row-7-h4'>Let's get to know each other</h4>
                        <div className='plain'></div>
                    </div>

                    <div className='about-content-right-title' style={{ color: "black", fontWeight: '1000px' }}>
                        <div className='about-content-right-title-1'>
                            <h1><span># </span>  Being proactive</h1>
                            <div className='about-content-right-title-1-content-1'>
                                <h3>We anticipate.</h3>
                                <p>Rather just executing aveuglément, we develop solutions that actually make sense for your goals. We identify what works with a strategic perspective. Having strong thoughts rather than ephemeral trends is what truly adds value to your work.</p>
                            </div>
                        </div>
                        <div className='about-content-right-title-2'>
                            <h1><span>#</span>Knowledge</h1>
                            <div className='about-content-right-title-2-content-2'>
                                <h3>We provide the quality.</h3>
                                <p>Our soudée team is made up of seasoned professionals. You gain from expertise concentrated under one roof. No experiments at your expense, just professionally implemented solutions that live up to their promises.</p>
                            </div>
                        </div>
                        <div className='about-content-right-title-3'>
                            <h1><span>#</span>Confiance</h1>
                            <div className='about-content-right-title-3-content-3'>
                                <h3>We have our commitments.</h3>
                                <p>For us, an open line of contact and sincere advice are obvious. We uphold our agreements and provide clarity in every project. This openness is the foundation of a long-term successful partnership.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
