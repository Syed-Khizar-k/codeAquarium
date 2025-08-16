import { blogDataType } from "@/interFace/interFace"
import thumbOne from "../../public/assets/img/blog/blog-1.jpg"
import thumbTwo from "../../public/assets/img/blog/blog-4.jpg"
import thumbThree from "../../public/assets/img/blog/blog-5.jpg"
import blogOne from "../../public/assets/img/blog/blog-1.jpg";
import blogTwo from "../../public/assets/img/blog/blog-2.jpg";
import blogThree from "../../public/assets/img/blog/blog-3.jpg";


 
export const blogData:blogDataType[] = [
    {
        id:1,
        title:"Monthly Web Development To Update React Hooks Cons",
        subTitle:"Monthly Web Development discusses the pros and cons of updating React Hooks. It covers best practices, potential issues, and tips for smooth migration.layout strategies, and advanced features.",
        img:thumbOne
    },
    {
        id:2,
        title:"Detailed Comparison Between WordPress & October CMS",
        subTitle:"Detailed Comparison Between WordPress & October CMS provides an in-depth analysis of the features, performance, and suitability of both content management systems. It helps readers make informed decisions when choosing a CMS.",
        img:thumbTwo
    },
    {
        id:3,
        title:"Exploring Latest Web Design Trends Together With Themes",
        subTitle:"Exploring Latest Web Design Trends Together With Themes showcases the latest trends in web design and offers insights into how to incorporate them into website projects. It highlights popular themes and design elements.",
        img:thumbThree
    },
    {
        id:4,
        title:"Understanding the Impact of Responsive Design",
        subTitle:"Understanding the Impact of Responsive Design explains the importance of responsive web design in today's digital landscape. It discusses the benefits of responsiveness and its impact on user experience and SEO.",
        img:blogOne
    },
    {
        id:5,
        title:"Mastering CSS Grid Layouts: Tips and Techniques",
        subTitle:"Mastering CSS Grid Layouts: Tips and Techniques provides practical advice and techniques for effectively using CSS Grid layouts in web development projects. It covers grid fundamentals, layout strategies, and advanced features.",
        img:blogTwo
    },
    {
        id:6,
        title:"Best Practices for Frontend Performance Optimization",
        subTitle:"Best Practices for Frontend Performance Optimization offers actionable tips and strategies for improving the performance of frontend web applications. It covers optimization techniques for assets, rendering, and network requests.",
        img:blogThree
    }
];

