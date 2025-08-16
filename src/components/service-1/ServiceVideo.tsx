"use client"
import React, { useState }  from 'react';
import ModalVideo from 'react-modal-video';
import aboutOne from "../../../public/assets/img/about/03.png"
import aboutFour from "../../../public/assets/img/about/04.jpg"
import Image from 'next/image';
import Link from 'next/link';
const ServiceVideo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);
    return (
        <div className="single-about">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openModal(); }} />
            <div className="about-us-img">
                <Image src={aboutOne} alt="" />
                <div className="about-us-2-img">
                    <div className="about-inner-img about-2-inner">
                        <Image src={aboutFour} alt="" />
                        <div className="about-video">
                            <Link href="" className="popup-video" onClick={() => { openModal(); }}><i className='fas fa-play'> </i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceVideo;