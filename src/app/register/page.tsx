import RegisterMain from '@/components/register/RegisterMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <RegisterMain/>
                </main>
            </Wrapper>
        </>
    );
};

export default page;