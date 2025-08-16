import React from 'react';

const BlogWidgetSearch = () => {
    return (
        <>
            <div className="widget mb-40">
                    <div className="widget-title-box mb-30">
                        <span className="animate-border"></span>
                        <h3 className="widget-title">Search Objects</h3>
                    </div>
                    <form className="search-form">
                        <input type="text" placeholder="Search" />
                        <button type="submit"><i className='fas fa-search'></i></button>
                    </form>
                </div>
        </>
    );
};

export default BlogWidgetSearch;