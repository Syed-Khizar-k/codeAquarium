import ShopMain from '@/components/shop/ShopMain';
import Wrapper from '@/layout/DefaultWrapper';
import ProductModal from '@/sheardComponent/ProductModal';
import React from 'react';

const ShopPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <ShopMain/>
                    <ProductModal/>
                </main>
            </Wrapper>
        </>
    );
};

export default ShopPage;