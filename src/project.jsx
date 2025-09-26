import React from 'react'
import "./project.css"
import { section } from 'framer-motion/client'
import Img1 from './assets/project/img-1.webp'
import Img2 from './assets/project/img-2.jpg'
import vid1 from './assets/project/vid-1.webm'
import { MdFormatTextdirectionLToR } from "react-icons/md";
import Img3 from './assets/project/img-3.jpg';
import Img4 from './assets/project/img-4.jpg';
import Img5 from './assets/project/img-5.jpg';
import Img6 from './assets/project/img-6.jpg';
import Img7 from './assets/project/img-7.jpg';
import Img8 from './assets/project/img-8.jpg';
import Img9 from './assets/project/img-9.jpg';
import Img10 from './assets/project/img-10.jpg';
import Img11 from './assets/project/img-11.jpg';
import Img12 from './assets/project/img-12.jpg';
import Img13 from './assets/project/img-13.jpg';
import Img14 from './assets/project/img-14.jpg';



export default function Project() {
    return (
        <section id='project'>
            <div className='project-title'>
                <h1>Projects</h1>
                <h3> Our team puts their all into every project,<br /> combining creativity and experience, <br />and we are passionate about what we do.</h3>
                <div className='project-title-line'>
                    <div className='project-title-line-1'><img src={Img1} alt="" /></div>
                    <div className='project-title-line-2'><video src={vid1} autoPlay loop muted></video></div>
                    <div className='project-title-line-3'><img src={Img2} alt="" /></div>
                </div>
            </div>

            <div className='project-end'>
                <div className='project-end-left'> 
                    <h1>A SELECTION OF OUR BEST WORKS</h1>
                    <h4> <span><MdFormatTextdirectionLToR /><MdFormatTextdirectionLToR /></span> We create websites and mobile apps. We believe those people are more engaging and that will beneficial for your business.</h4>
                    <p><span><MdFormatTextdirectionLToR /><MdFormatTextdirectionLToR /></span>  Several of our clients have been with us for decades, and their trust is what keeps us motivated.</p>
                    <div></div>
                </div>


                <div className='project-end-right'>
                    <div className='project-end-right-card-1'>
                        <div className='project-end-right-card-1-1'>
                            <img src={Img3} alt="" />
                        </div>
                        <h2>Breathe Care Systems</h2>
                        <p>CMS Website</p>
                    </div>

                    <div className='project-end-right-card-2'>
                        <div className='project-end-right-card-2-1'>
                            <img src={Img4} alt="" />
                        </div>
                        <h2>Mitra International Business Club</h2>
                        <p>CMS Website</p>
                    </div>

                    <div className='project-end-right-card-3'>
                        <div className='project-end-right-card-3-1'>
                            <img src={Img5} alt="" />
                        </div>
                        <h2>kaaviya Properties</h2>
                        <p>CMS Website</p>
                    </div>

                    <div className='project-end-right-card-4'>
                        <div className='project-end-right-card-4-1'>
                            <img src={Img6} alt="" />
                        </div>
                        <h2>marlen cinemas</h2>
                        <p>Responsive Web Design</p>
                    </div>

                    <div className='project-end-right-card-5'>
                        <div className='project-end-right-card-5-1'>
                            <img src={Img7} alt="" />
                        </div>
                        <h2>senaithalaivar matrimonial</h2>
                        <p>Matrimonial Portal</p>
                    </div>

                    <div className='project-end-right-card-6'>
                        <div className='project-end-right-card-6-1'>
                            <img src={Img8} alt="" />
                        </div>
                        <h2>mitra times</h2>
                        <p>CMS Website</p>
                    </div>

                    <div className='project-end-right-card-7'>
                        <div className='project-end-right-card-7-1'>
                            <img src={Img9} alt="" />
                        </div>
                        <h2>santhosh</h2>
                        <p>Responsive Web Design</p>
                    </div>

                    <div className='project-end-right-card-8'>
                        <div className='project-end-right-card-8-1'>
                            <img src={Img10} alt="" />
                        </div>
                        <h2>senaithalaivar Sangam</h2>
                        <p>CMS Website</p>
                    </div>
                    <div className='project-end-right-card-9'>
                        <div className='project-end-right-card-9-1'>
                            <img src={Img11} alt="" />
                        </div>
                        <h2>stampa</h2>
                        <p>stampa</p>
                    </div>

                    <div className='project-end-right-card-10'>
                        <div className='project-end-right-card-10-1'>
                            <img src={Img12} alt="" />
                        </div>
                        <h2>strike a price</h2>
                        <p>CMS Website</p>
                    </div>

                    <div className='project-end-right-card-11'>
                        <div className='project-end-right-card-11-1'>
                            <img src={Img13} alt="" />
                        </div>
                        <h2>thepostvfx</h2>
                        <p>Responsive Web Design</p>
                    </div>

                    <div className='project-end-right-card-12'>
                        <div className='project-end-right-card-12-1'>
                            <img src={Img14} alt="" />
                        </div>
                        <h2>Top Plus Super Market</h2>
                        <p>E-commerce / Online Shopping</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
