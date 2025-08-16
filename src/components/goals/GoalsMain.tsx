import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import OurGoalSec from './OurGoalSec';
import Brand from '../home/Brand';
import WhatWeDo from './WhatWeDo';
import Cta from '../home/Cta';
import ServicesForServiceThree from '../service-3/ServicesForServiceThree';
const GoalsMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Goals' data={undefined}/>
            <OurGoalSec/>
            <Brand/>
            <WhatWeDo/>
            <ServicesForServiceThree/>
            <Cta/>
            <Brand/>
        </>
    );
};

export default GoalsMain;