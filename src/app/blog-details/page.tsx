import BlogDetailsMain from '@/components/blog-details/BlogDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const BlgoDetailsPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <BlogDetailsMain id={1}/>
                </main>
            </Wrapper>
        </>
    );
};

export default BlgoDetailsPage;