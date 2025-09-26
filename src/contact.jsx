import React from 'react'
import './contact.css'
import { useNavigate } from 'react-router-dom';
import { section } from 'framer-motion/client'
import { GoArrowUpRight } from "react-icons/go";

export default function Contact() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/projects","/support","/career");
  };
  return (
    <section id='contact'>
      <div className='contact-start'>
        <div className='contact-title'>
          <h1>Contact</h1>
          <h3>ASM Infotech Partner for digital growth</h3>
          <p>NO. 23, FIRST FLOOR, 8th Street,<br />
            Kamarajar Colony
            Kodambakkam
            Chennai,<br />
            Tamil Nadu 600019.</p>
          <p>Phone: <a href="tel:(+91) 90439 57699">(+91) 90439 57699</a>, <br />
            <a href="tel:044 42129400">044 42129400</a> <br />
            Email: <a href="email">asminfoindia@gmail.com</a></p>
        </div>

        <div className='contact-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.9786620527348!2d80.21495386888135!3d13.049235885071264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e5dd033e69%3A0x99d83eb38c1a12b5!2sASM%20Infotech!5e1!3m2!1sen!2sin!4v1758696349478!5m2!1sen!2sin" style={{ width: "600", height: "450", style: "border:0;", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
        </div>
      </div>


      <div className='contact-end'>
        <div className='contact-card-1'>
          <h1>A new project/client?</h1>
          <h4>Are you interested in our services and/or would you like to receive initial advice without obligation?</h4>
          <div className='custom-button' style={{ marginLeft: "50px", width: "350px", backgroundColor: "#804f4fff" }}>
            <button className='btn' onClick={()=>navigate("/projects") (window.scrollTo(0, 0))}>Project request <p><GoArrowUpRight />
            </p></button>
          </div>
        </div>


        <div className='contact-card-2'>
          <h1>Already a customer?</h1>
          <h4>Are you already a customer and would like to contact the team for an update, questions or a new need?</h4>
          <div className='custom-button' style={{ marginLeft: "0px", width: "440px", backgroundColor: "#804f4fff" }}>
            <button className='btn' href="email">Project@Asminfotech.com<p><GoArrowUpRight />
            </p></button>
          </div>
        </div>


        <div className='contact-card-3'>
          <h1>Technical support</h1>
          <h4>Do you need technical assistance or would you like to adapt your domain configuration or emails?</h4>
          <div className='custom-button' style={{ width: "400px", backgroundColor: "#804f4fff", marginLeft: "20px" }}>
            <button className='btn' onClick={()=>navigate("/support")(window.scrollTo(0, 0))}>Technical Support<p><GoArrowUpRight />
            </p></button>
          </div>
        </div>


        <div className='contact-card-4'>
          <h1>Candidacy</h1>
          <h4>Interested in applying to join our team? Discover our job openings and opportunities here.</h4>
          <div className='custom-button' style={{ marginLeft: "80px", width: "300px", backgroundColor: "#804f4fff" }}>
            <button className='btn' onClick={()=>navigate("/career")(window.scrollTo(0, 0))}>Job offers<p><GoArrowUpRight />
            </p></button>
          </div>
        </div>
      </div>
    </section >
  )
}
