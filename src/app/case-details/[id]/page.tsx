"use client";

import CaseDetailsMain from '@/components/case-details/CaseDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import { useParams } from 'next/navigation';
import React from 'react';

const DynamicCaseDetailsPage = ({}) => {

    const {id} = useParams();
    
    console.log("idmmm==>", id);
    return (
        <>
             <Wrapper>
                <main>
                <CaseDetailsMain id={id}/>
                </main>
            </Wrapper>
        </>
    );
};

export default DynamicCaseDetailsPage;