import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import ServicesForServiceThree from './ServicesForServiceThree';
import FactArea from './FactArea';
import SkillsSection from '../home-two/SkillsSection';
import Brand from '../home/Brand';

const ServiceThreeMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Service Three' data={undefined}/>
            <ServicesForServiceThree/>
            <FactArea/>
            <SkillsSection/>
            <Brand/>
        </>
    );
};

export default ServiceThreeMain;