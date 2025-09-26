import React from 'react'
import './service.css'
import { useNavigate } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";
import Img1 from './assets/service/img-2.jpg';
import Img2 from './assets/service/img-12.jpeg';
import Img3 from './assets/service/img-17.jpeg';
import Img4 from './assets/service/img-1.jpg';
import Img5 from './assets/service/img-14.jpg';
import { GoArrowUpRight } from "react-icons/go";



export default function Service() {
      const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/projects");
        window.scrollTo(0, 0);
    };
  return (
    <section id='service'>
      <div className='service-start' >
        <div className='service-title'>
          <h1>Service</h1>
          <h3>How can we help you?</h3>
        </div>
        <div className='service-text'>
          <h4>Looking for a partner for more effective digital marketing? Our agency brings together all the skills you need under one roof.</h4>
        </div>
      </div>



      <div className='service-center'>
        <div className='service-center-card-1'>
          <div className='service-center-card-1-1'>
            <h1><span>(1)</span>Strategy</h1>
            <p>Software deployment strategies are methods used to release new or updated software into production environments. </p>
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


      <div className='service-end'>
        <div className='service-end-title'>
          <div className='service-end-title-text'>
            <h3>Do you have a project in the works?</h3>
            <h1>We advise you, without obligation</h1>
          </div>
          <div className='custom-button' style={{ marginTop: '150px' }}>
            <button className='btn' onClick={handleButtonClick}>Votre Project <p><GoArrowUpRight />
            </p></button>
          </div>
        </div>
      </div>
    </section>
  )
}
