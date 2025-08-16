import Link from 'next/link';
import React from 'react';

const Complete = () => {
    return (
        <>
            <div className="order_summary text-center">
            <h3>THANK YOU</h3>
            <p>Payment Is Successfully Processsed And Your Order Is On The Way </p>
            <p>Transaction ID:1254284759352</p>
             <Link className='checkout_btn btn_back_two' href="/shop">Continue Shoping</Link>
            </div>
        </>
    );
};

export default Complete;