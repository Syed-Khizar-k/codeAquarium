import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import ShopSection from './ShopSection';


const ShopMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Shop' data={undefined}/>
            <ShopSection/>
            
        </>
    );
};

export default ShopMain;