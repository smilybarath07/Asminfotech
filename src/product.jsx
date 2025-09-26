import React from 'react'
import "./product.css"
import Img1 from './assets/product/img-1.jpeg'
import Img2 from './assets/product/img-2.jpeg'
import Img3 from './assets/product/img-3.jpeg'
import Img4 from './assets/product/img-4.jpeg'
import Img5 from './assets/product/img-5.jpeg'
import Img6 from './assets/product/img-6.png'
import Img7 from './assets/product/img-7.jpeg'

export default function Product() {
    return (
        <section id='product'>

            {/* ------------------Row-1----------- */}
            <div className='product-title'>
                <div className='product-title-left' >
                    <h1>Products</h1>
                    <h3>Software product description content explains <br /> what a product does and the value it offers <br /> potential customers by covering its features,<br /> benefits, target audience, supported systems,<br /> and user experience.</h3>
                </div>
                <div className='product-title-right'>
                    <div >
                        <img src={Img1} alt=""  />
                    </div>
                </div>
            </div>

            {/* ---------------row-2------------------ */}
            <div className='product-end'>
                <div className='card-1'> 
                    <div className='card-1-1'>
                        <h1>Mobile billing</h1>
                        <h4>Mobile billing software allows businesses to manage sales, invoicing, inventory, and accounting on a smartphone, offering features like professional invoice generation, GST compliance, digital receipt delivery, and real-time financial insights</h4>
                    </div>
                    <div className='card-1-2'>
                        <img src={Img2} alt="" />
                    </div>
                </div>


                <div className='card-2'>
                    <div className='card-2-1'>
                        <h1>Daily sublayer</h1>
                        <h4>A software sublayer is a distinct section or division within a larger software layer, used for organization and to handle specific functionalities or operations that a parent layer might not manage directly, allowing for more granular control and modularity in software design and networking protocols</h4>
                    </div>
                    <div className='card-2-2'>
                        <img src={Img3} alt="" />
                    </div>
                </div>


                <div className='card-3'>
                    <div className='card-3-1'>
                        <h1>Daily cash collection</h1>
                        <h4>Daily cash collection involves receiving payments for goods and services from customers, which can be collected in person or electronically via accounts receivable. </h4>
                    </div>
                    <div className='card-3-2'>
                        <img src={Img7} alt="" />
                    </div>
                </div>


                <div className='card-4'>
                    <div className='card-4-1'>
                        <h1>Membership application </h1>
                        <h4>For a membership application to be effective, its content and design should clearly communicate the value of joining while making the application process simple. Images and layout play a key role in making the application visually appealing and reflective of your brand. </h4>
                    </div>
                    <div className='card-4-2'>
                        <img src={Img4} alt="" />
                    </div>
                </div>


                <div className='card-5'>
                    <div className='card-5-1'>
                        <h1>Spinning mill management</h1>
                        <h4>Spinning mill management oversees the entire yarn production process, from sourcing raw fibers to marketing the final product, while prioritizing quality, cost-efficiency, and productivity. </h4>
                    </div>
                    <div className='card-5-2'>
                        <img src={Img5} alt="" />
                    </div>
                </div>


                <div className='card-6'>
                    <div className='card-6-1'>
                        <h1>Retail billing software</h1>
                        <h4>A retail billing software is a business application that automates the billing process and streamlines operations for retail stores. These systems, often integrated into a Point-of-Sale (POS) solution, handle transactions, manage inventory, generate reports, and provide data-driven insights to help retailers run their business more efficiently. Modern versions are often cloud-based, accessible from various devices, and suitable for businesses of all sizes</h4>
                    </div>
                    <div className='card-6-2'>
                        <img src={Img6} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
