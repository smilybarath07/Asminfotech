import { section } from 'framer-motion/client'
import { useNavigate } from 'react-router-dom';
import React from 'react'
import './about.css'
import Carousel from 'react-bootstrap/Carousel';
import Img1 from './assets/about/img-1.jpg'
import Img2 from './assets/about/img-7.jpg'
import Img3 from './assets/about/img-8.jpg'
import Img4 from './assets/about/img-5.jpg'
import Img5 from './assets/about/img-14.jpg'
import Img6 from './assets/about/img-12.jpeg'
import Img7 from './assets/about/img-13.jpeg'
import vid1 from './assets/about/vid-1.mp4'
import Img8 from './assets/about/img-6.jpg'
import Img9 from './assets/about/img-9.jpg'
import Img10 from './assets/about/img-10.jpg'
import Img11 from './assets/about/img-11.jpg'
import Img12 from './assets/about/img-15.jpeg'
import Img13 from './assets/about/img-16.jpeg'
import Img14 from './assets/about/img-17.jpeg'
import { CiFaceSmile } from "react-icons/ci";
import Counter from './counter';


export default function About() {
    const logos = [
        Img8,
        Img9,
        Img10,
        Img11,
        Img12,
        Img13,
        Img14
    ];
     const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/projects","/services");
        window.scrollTo(0, 0);
    };
    return (
        <section id='about'>

            {/* ---------------------Row-1----------------------- */}
            <div className='about-title' >
                <h1 >About Us</h1>
                <h3 > Our agency has more than 100 loyal clients <br /> who value our skilled team and superior <br /> software development solutions.</h3>
                <div className='about-title-line'>
                    <div className='about-title-line-1'><img src={Img1} alt="" /></div>
                    <div className='about-title-line-2'><img src={Img2} alt="" /></div>
                    <div className='about-title-line-3'><img src={Img3} alt="" /></div>
                </div>
                <div className='about-title-img'>
                    <img src={Img4} alt="" />
                </div>
                <div className='about-title-counter' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Counter target={100} label="Qualified Employees" />
                    <Counter target={10} label="Years of Experience" />
                    <Counter target={200} label="Satisfied Customers" />
                    <Counter target={100} label="Projects Completed" />
                </div>
            </div>
            {/* ------------------------Row-2------------------ */}
            <div className='about-content'>
                <div className='about-content-title'>
                    <h1>Atouts & Valeurs,<br /> our ADN</h1>
                </div>

                <div className='about-content-right-title'>
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

            {/* -------------------------------Row-3------------------------------- */}

            <div className='about-center'>
                <video src={vid1} autoPlay loop muted playsInline></video>
                <h1>ASM Infotech <br /> Profile</h1>
                <div className='about-center-card-1'>
                    <h4>ASM infotech is a Chennai based creative agency specializing in responsive website development and online marketing services. Using the latest technologies, coupled with creativity and proficiency, the agency offers web-based IT solutions including corporate website design, content management system (CMS), eCommerce solution, web application development, search engine optimization (SEO), search engine marketing (SEM), and digital marketing. Other services cover interactive media design, social media marketing, mobile application development, web hosting, graphic design, eCard design, eBook design.</h4>
                    <div>
                        <img src={Img5} alt="" />
                    </div>
                </div>
                <div className='about-center-card-2'>
                    <h4>We are always committed to provide services to our clients in the best possible ways. ASM infotech is dedicate to understand clients' needs and create customized web-based solutions with own unique goals and vision. We create tailor-made websites that range from simple corporate websites with CMS to more complex custom ecommerce solutions, and to even more sophisticated online web portals to achieve the business demands of our clients.

                    </h4>
                    <div>
                        <img src={Img6} alt="" />
                    </div>
                </div>
                <div className='about-center-card-3'>
                    <h4>As a local based company, we dedicated to make the communication with our client to be interactive and effective.
                        ASM infotech is always open for our clients, be readily available and easy-to-contact.</h4>
                    <div>
                        <img src={Img7} alt="" />
                    </div>
                </div>
            </div>

            {/* -------------------------Row=4------------------------- */}

            <div className='about-bottom'>
                <div className="logo-loop">
                    <div className="logo-track">
                        {[...logos, ...logos].map((src, index) => (
                            <img key={index} src={src} alt={`logo-${index}`} className="logo" />
                        ))}
                    </div>
                </div>

                <div className='about-bottom-title'>
                    <h1>Observation and Quality, <br /> <span>OUR HAPPY CLIENTS <CiFaceSmile />...,
                    </span></h1>
                    <div style={{ height: '400px', width: '80%', margin: '0 auto', paddingTop: '0px', marginTop: '50px' }}>
                        <Carousel className='about-bottom-carousel'>
                            <Carousel.Item>
                                <h1>Mr.RAMESH - Kaaviya Properties</h1>
                                <p>They did a very good job on designing my website an absolutely listen to the clients queries and fix it accordingly credits to Mr Rajendran on completing my website as a good outcome.</p>
                            </Carousel.Item>

                            <Carousel.Item>
                                <h1>Mr.Dhas Karthick - Marlen India Pvt.Ltd</h1>
                                <p>One of the best App Development companies in Chennai.
                                    We tried Mirror Minds for a particular need. We are extremely satisfied with the end result, cost, delivery time and communication. Mr.Rajendran and Mr.Dinesh are an exceptionally sharp guys who takes good care of our needs and delivered above PAR. Mirror Minds is trustworthy, skilled and an overall good partner for a wide variety of Application and website development needs.</p>
                            </Carousel.Item>

                            <Carousel.Item>
                                <h1>Mr.Meenachi - Top Plus Mart, Singapore</h1>
                                <p>I had approached ASM Infotech for developing an online Grocery store for my business. It was a nice experience and the site looks great. I am planning to engage them for digital marketing activities as well. People are good and ready to cater to the specific requirements.</p>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

                <div className='about-bottom-circle'>
                    <div className='about-bottom-circle-1'>
                        <h1>Services provided <br /> by agencies</h1>
                        <h3>How may our staff assist you? <br />Learn about all the areas of knowledge <br />that our agency has.</h3>
                        <button onClick={() => navigate("/service") (window.scrollTo(0, 0))}>Our services</button>
                    </div>
                    <div className='about-bottom-circle-2'>
                        <h1>Have a project in mind?</h1>
                        <h4>We'd love to help you. Drop us a note <br /> using the form below. We will get back to you within 24 hours.</h4>
                        <button onClick={() => navigate("/projects")(window.scrollTo(0, 0))}>Get in touch</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
