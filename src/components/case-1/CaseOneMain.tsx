import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import ProjectSection from '../home-two/ProjectSection';
import Brand from '../home/Brand';
import CtaTwo from '@/sheardComponent/CtaTwo';
import { casesData } from '@/data/case-data';

const CaseOneMain = () => {
    return (
        <>
           <Breadcrumb pageTitle='Case Study One' data={casesData}/>
            <ProjectSection/>
            <CtaTwo/>
            <Brand/>
        </>
    );
};

export default CaseOneMain;