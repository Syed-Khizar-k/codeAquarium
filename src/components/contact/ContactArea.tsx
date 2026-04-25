import React from 'react';

const ContactArea = () => {
    return (
        <>
           <section className="contact-info-area" >
                    <div className="container">
                        <div className="row mt-5 justify-content-center">
                            <div className="col-xl-8 col-lg-8 col-md-10">
                                <div className="contact text-center mb-0" style={{ 
                                    // background: "url(assets/img/bg/contact-bg.png)"
                                     backgroundColor:"#141419" }}>
                                    <i className='fas fa-envelope-open'> </i>
                                    <h3>Mail Here</h3>
                                    <p>abdulrehman@codeaquarium.tech</p>
                                    {/* <p>www.infotorun.net</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
        </>
    );
};

export default ContactArea;