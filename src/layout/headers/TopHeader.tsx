import Link from 'next/link';
import React from 'react';

const TopHeader = () => {
    return (
        <>
            <div className="header-top-area py-2 grey-bg d-none d-md-block">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-6 d-flex align-items-center">
                        <div className="header-info">
                            <span className="header-ph cta-link hover-white"> <Link href="tel:+923174750491" target='_blank'><i className='fa-sharp fa-solid fa-phone'></i> +92 3174750491</Link> </span>
                            <span className="header-en hover-white"> <Link href="mailto:abdulrehman@codeaquarium.tech" target='_blank'><i className='fas fa-envelope-open me-2'></i>abdulrehman@codeaquarium.tech</Link> </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default TopHeader;