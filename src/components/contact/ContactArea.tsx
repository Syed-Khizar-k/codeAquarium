import React from 'react';

const ContactArea = () => {
    return (
        <>
           <section className="contact-info-area" >
                    <div className="container">
                        <div className="row mt-5 justify-content-center">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="contact text-center mb-0" style={{ 
                                    // background: "url(assets/img/bg/contact-bg.png)"
                                     backgroundColor:"#141419" }}>
                                    <i className='fas fa-envelope-open'> </i>
                                    <h3>Mail Here</h3>
                                    <p>abdulrehman@codeaquarium.tech</p>
                                    {/* <p>www.infotorun.net</p> */}
                                </div>
                            </div>
                            <div className="col-xl-6  col-lg-6 col-md-6 ">
                                <div className="contact text-center mb-0" style={{
                                    //  background: "url(assets/img/bg/contact-bg.png)"
                                     backgroundColor:"#141419" 
                                     }}>
                                    <i className='fas fa-phone'> </i>
                                    <h3>Call Us Now</h3>
                                    <p>+92 3174750491</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
        </>
    );
};

export default ContactArea;