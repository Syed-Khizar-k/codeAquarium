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
                                {/* <div className="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24187.924717451475!2d-74.17913762136895!3d40.72922934784896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1655544592973!5m2!1sen!2sbd"></iframe>
                                </div> */}
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