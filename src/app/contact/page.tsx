import ContactMain from '@/components/contact/ContactMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const contactPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <ContactMain/>
                </main>
            </Wrapper>
        </>
    );
};

export default contactPage;