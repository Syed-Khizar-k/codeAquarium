import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import Project from '../home/Project';
import CaseAreaTwo from '../case-2/CaseAreaTwo';
import Brand from '../home/Brand';

const CaseThreeMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Case Study Three' data={undefined}/>
            <Project/>
            <CaseAreaTwo/>
            <Brand/>
        </>
    );
};

export default CaseThreeMain;