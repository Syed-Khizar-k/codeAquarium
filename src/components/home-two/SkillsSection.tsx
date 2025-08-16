"use client"
import React from 'react';
import ProgressApp from './progress/ProgressApp';
import ProgressAppTwo from './progress/ProgressAppTwo';
import imgOne from "../../../public/assets/img/bg/01.jpg"
import Image from 'next/image';
import { usePathname } from 'next/navigation';
const SkillsSection = () => {
    const path = usePathname()
    return (
        <div className={`our-skills-area pt-130 ${path ==="/service-3" ? "" : "pb-100"}`}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 mb-30">
                        <div className="our-skills-img">
                            <Image style={{ width: "100%", height: "auto" }} src={imgOne} alt="skills-img" />
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="progress-wrapper mb-30">
                            <div className="section-title  mb-50">
                                <span className="b-sm-left-2"></span>
                                <span className="sub-t-left">our skills</span>
                                <h1>More Than 25+ Years We Provide Solutions</h1>
                            </div>
                            <div className="progress-bar-text">
                                <div className="progress-skill">
                                    <div className="single-skill mb-35">
                                        <div className="bar-title">
                                            <h4>Design Strategy</h4>
                                        </div>
                                        <ProgressApp/>
                                    </div>
                                    <div className="single-skill mb-35">
                                        <div className="bar-title">
                                            <h4>Marketing Strategy</h4>
                                        </div>
                                        <ProgressAppTwo/>
                                    </div>
                                    <div className="single-skill mb-35">
                                        <div className="bar-title">
                                            <h4>UX/UI Strategy</h4>
                                        </div>
                                        <ProgressApp />
                                    </div>
                                    <div className="single-skill mb-35">
                                        <div className="bar-title">
                                            <h4>Business Development</h4>
                                        </div>
                                        <ProgressAppTwo />
                                    </div>
                                    <div className="single-skill">
                                        <div className="bar-title">
                                            <h4>Software Development</h4>
                                        </div>
                                        <ProgressApp />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsSection;