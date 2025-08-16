import ServiceManageMain from '@/components/service-manage/ServiceManageMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const ServiceManagePage = () => {
    const id = 1
    return (
        <>
            <Wrapper>
                <main>
                    <ServiceManageMain id={id}/>
                </main>
            </Wrapper>
        </>
    );
};

export default ServiceManagePage;