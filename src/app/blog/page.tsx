import BlogMain from '@/components/blog/BlogMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const BlogPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <BlogMain/>
                </main>
            </Wrapper>
        </>
    );
};

export default BlogPage;