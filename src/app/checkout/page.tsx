import CheckoutMain from '@/components/checkout/CheckoutMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const CheckOutPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <CheckoutMain/>
                </main>
            </Wrapper>
        </>
    );
};

export default CheckOutPage;