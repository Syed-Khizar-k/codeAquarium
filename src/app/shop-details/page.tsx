import ShopDetailsMain from '@/components/shop-details/ShopDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const shopDetails = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <ShopDetailsMain id={1}/>
                </main>
            </Wrapper>
        </>
    );
};

export default shopDetails;