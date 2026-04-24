import ContactForm from '@/form/ContactForm';
import React from 'react';
import contactImg from "../../../public/assets/img/bg/contact-img.jpg"
import Image from 'next/image';

const Contact = () => {
    
    return (
        <div className="contact-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                        <div className="section-title section-title-white text-center">
                            <span className="border-left-1"></span>
                            <span>contact us</span>
                            <span className="border-right-1"></span>
                            <h1 className=''> {`Don't`} Hesitate To <br/>Contact Us</h1>
                        </div>
                    </div>
                </div>
                </div>
                <div className="contact-bg">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5 mb-0">
                            <div className="map-wrapper">
                                <div>
                                    <Image src={contactImg} alt="" loading="lazy" style={{ width: "100%", height: "auto" }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 mb-0">
                            <div className="appointment-wrapper">
                                 <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Contact;