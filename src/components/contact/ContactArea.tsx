import React from 'react';

const ContactArea = () => {
    return (
        <>
           <section className="contact-info-area" >
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="contact text-center mb-0" style={{ 
                                    // background: "url(assets/img/bg/contact-bg.png)"
                                     backgroundColor:"#ffffff" }}>
                                    <i className='fas fa-envelope-open'> </i>
                                    <h3>Mail Here</h3>
                                    <p>info@codeaquariam.com</p>
                                    {/* <p>www.infotorun.net</p> */}
                                </div>
                            </div>
                            {/* <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="contact text-center mb-0"  style={{ 
                                    // background: "url(assets/img/bg/contact-bg.png)"
                                    backgroundColor:"#ffffff" }}>
                                    <i className='fas fa-map-marker-alt'> </i>
                                    <h3>Visit Here</h3>
                                    <p>Virginia USA</p>
                                </div>
                            </div> */}
                            <div className="col-xl-4  col-lg-4 col-md-4 ">
                                <div className="contact text-center mb-0" style={{
                                    //  background: "url(assets/img/bg/contact-bg.png)"
                                     backgroundColor:"#ffffff" 
                                     }}>
                                    <i className='fas fa-phone'> </i>
                                    <h3>Call Us Now</h3>
                                    <p> +92-3174750492</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
        </>
    );
};

export default ContactArea;