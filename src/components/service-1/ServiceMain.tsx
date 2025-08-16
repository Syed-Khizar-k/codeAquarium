import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import ServiceAbout from './ServiceAbout';
import Service from '../home/Service';
import ContactSection from '../home-two/ContactSection';
import Brand from '../home/Brand';

const ServiceMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Service One' data={undefined}/>
            <ServiceAbout/>
            <Service/>
            <ContactSection/>
            <Brand/>
        </>
    );
};

export default ServiceMain;