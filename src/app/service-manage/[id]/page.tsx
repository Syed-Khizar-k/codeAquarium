import ServiceManageMain from '@/components/service-manage/ServiceManageMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = ({ params }: { params: { id: string } }) => {
    const id = params.id
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

export default page;