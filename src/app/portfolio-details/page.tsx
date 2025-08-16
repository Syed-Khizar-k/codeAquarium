import CaseDetailsMain from '@/components/case-details/CaseDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const CaseDetailsPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                <CaseDetailsMain id={2}/>
                </main>
            </Wrapper>
        </>
    );
};

export default CaseDetailsPage;