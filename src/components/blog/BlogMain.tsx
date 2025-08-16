import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import BlogSection from './BlogSection';


const BlogMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Blog' data={undefined}/>
            <BlogSection/>
        </>
    );
};

export default BlogMain;