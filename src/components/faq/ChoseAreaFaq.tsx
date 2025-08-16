import FaqContent from '@/sheardComponent/elements/FaqContent';
import React from 'react';

const ChoseAreaFaq = () => {
    return (
        <>
            <div className="choose-area pt-130 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <div className="faq-wrapper pr-20">
                                <div className="section-title mb-45">
                                    <span className="b-sm-left-1"></span>
                                    <span className="b-sm-left-2"></span>
                                    <span className="sub-t-left">FAQ’s</span>
                                    <h1>Frequently Ask <br /> Questions</h1>
                                </div>
                                <div className="faq-box faq-2-box">
                                    <FaqContent/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <div className="choose-wrapper">
                                <div className="choose-text">
                                    <p>On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness of will which is the same as saying through shrinking from toil and pain cases are perfectly</p>
                                </div>
                                <div className="faq-box faq-2-box">
                                <FaqContent/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChoseAreaFaq;