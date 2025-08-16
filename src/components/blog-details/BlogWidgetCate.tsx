import Link from 'next/link';
import React from 'react';

const BlogWidgetCate = () => {
    return (
        <>
            <div className="widget mb-40">
                    <div className="widget-title-box mb-30">
                        <span className="animate-border"></span>
                        <h3 className="widget-title">Categories</h3>
                    </div>
                    <ul className="cat">
                        <li>
                            <Link href="/">Lifestyle <span className="f-right">78</span></Link>
                        </li>
                        <li>
                            <Link href="/">Travel <span className="f-right">42</span></Link>
                        </li>
                        <li>
                            <Link href="/">Fashion <span className="f-right">32</span></Link>
                        </li>
                        <li>
                            <Link href="/">Music <span className="f-right">85</span></Link>
                        </li>
                        <li>
                            <Link href="/">Branding <span className="f-right">05</span></Link>
                        </li>
                    </ul>
                </div>
        </>
    );
};

export default BlogWidgetCate;