import BlogDetailsMain from '@/components/blog-details/BlogDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const BlogDetailsDynamicPage = ({ params }: { params: { id: string } }) => {
    const id = params.id
    return (
        <>
            <Wrapper>
                <main>
                    <BlogDetailsMain id={id}/>
                </main>
            </Wrapper>
        </>
    );
};

export default BlogDetailsDynamicPage;