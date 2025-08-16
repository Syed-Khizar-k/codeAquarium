import React from 'react';
 
import WishlistArea from './WishlistArea';
import Breadcrumb from '@/sheardComponent/Breadcrumb';
 

const WishlistMain = () => {
    return (
        <>
           <Breadcrumb pageTitle="Wishlist" data={undefined}/>
            <WishlistArea/>
             
        </>
    );
};

export default WishlistMain;