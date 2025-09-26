import React from 'react'
import './projects.css'
import { useNavigate } from 'react-router-dom';
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineModeEdit } from "react-icons/md";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FaArrowTrendUp } from "react-icons/fa6";


export default function Projects() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };
  return (
    <section id='projects'>

      {/* ----------------------------------Row-1-------------------------------- */}

      <div className='projects-start' >
        <div className='projects-title'>
          <h1>Your Project</h1>
          <h3>nice to meet you</h3>
        </div>
        <div className='projects-text'>
          <h4>Share your vision with us! We listen to your needs and design customized solutions that bring your ideas to life.</h4>
        </div>
      </div>


      {/* ----------------------------------Row-2-------------------------------- */}
      <div className='projects-center'>
        <div className='projects-center-card-1'>
          <div className='projects-center-card-1-1'>
            <span className='arrow-2'><MdOutlineModeEdit /></span>
            <span className='arrow-1'><GoArrowUpRight /></span>
          </div>
          <h4>Project Request</h4>
        </div>

        <div className='projects-center-card-1'>
          <div className='projects-center-card-1-1'>
            <span className='arrow-2'><AiTwotoneCalendar /></span>
            <span className='arrow-1'><GoArrowUpRight /></span>
          </div>
          <h4 >Make an appointment</h4>
        </div>

        <div className='projects-center-card-1'>
          <div className='projects-center-card-1-1'>
            <span className='arrow-2'><FaArrowTrendUp /></span>
            <span className='arrow-1'><GoArrowUpRight /></span>
          </div>
          <h4>Website Audit</h4>
        </div>
      </div>

      {/* ----------------------------------Row-3-------------------------------- */}
      <div className='projects-end'>
        <div className='projects-end-title'>
          <div className='projects-end-title-text'>
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
