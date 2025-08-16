import FaqMain from '@/components/faq/FaqMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const FaqPage = () => {
    return (
        <>
             <Wrapper>
                <main>
                    <FaqMain/>
                </main>
            </Wrapper>
        </>
    );
};

export default FaqPage;