"use client";

import "./globals.css";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import "../style/index.scss";

import { usePathname } from "next/navigation";
import AppProvider from "@/contextApi/AppProvider";
import { ToastContainer } from "react-toastify";
import { childrenType } from "@/interFace/interFace";
import ReduxProvider from "@/redux/ReduxProvider";

export default function RootLayout({ children }: childrenType) {
  const pathname = usePathname();

  const getTitleAndDescription = () => {
    if (pathname === "/") {
      return {
        title: "Leading Software Development Company in USA | Next Orbit",
        description:
          "Next Orbit is a leading web development company in the USA. We specialize in custom web development, cutting-edge software solutions, and result-driven digital marketing services to grow your business.",
      };
    } else if (pathname === "/about") {
      return {
        title:
          "About Us | Custom Web Development & Software Solutions in USA | Next Orbit",
        description:
          "Next Orbit is a USA-based software development company offering custom web development, AI solutions, digital marketing, DevOps, and data scraping. Learn more about our mission, expertise, and commitment to innovation.",
      };
    } else if (pathname === "/services") {
      return {
        title:
          "Our Services | Next Orbit - Software Development & Digital Solutions",
        description:
          "Next Orbit offers custom web development, AI solutions, digital marketing, DevOps, data scraping, and UX/UI strategy. Drive innovation and scale your business with our expert technology services.",
      };
    } else if (pathname === "/service-details/1") {
      return {
        title:
          "Professional Website Development & Design Services | Next Orbit",
        description:
          "Get stunning web design & development from experts. Next Orbit delivers high-performance, mobile-friendly websites to grow your business and brand online | Next Orbit",
      };
    }else if (pathname === "/service-details/2") {
      return {
        title:
          "Top Artificial Intelligence Companies & AI Digital Marketing Solutions | Next Orbit",
        description:
          "Discover cutting-edge artificial intelligence technologies, AI-powered digital marketing, and innovative AI sites to grow your business faster. | Next Orbit",
      };
    }else if (pathname === "/service-details/3") {
      return {
        title:
          "Best Digital Marketing Agency & Online Marketing Solutions | Next Orbit",
        description:
          "Boost your business with top-rated digital marketing services, creative online campaigns, and professional marketing agency expertise near you. | Next Orbit",
      };
    }else if (pathname === "/service-details/4") {
      return {
        title:
          "Expert DevOps Services & Leading DevOps Companies Solutions | Next Orbit",
        description:
          "Accelerate your business with cutting-edge DevOps technologies, expert consulting, and top-rated DevOps agency solutions for seamless operations. | Next Orbit",
      };
    }else if (pathname === "/service-details/5") {
      return {
        title:
          "Professional Web Scraping & Database Scraping Services | Next Orbit",
        description:
          "Get reliable website scraping, database extraction, and custom web scraping solutions to power your business with accurate, real-time data. | Next Orbit",
      };
    }else if (pathname === "/service-details/6") {
      return {
        title:
          "UX/UI Strategy Services | Expert User Experience & Interface Design",
        description:
          "Enhance your digital product with our UX/UI strategy services. Expert UX design, UI design services, and user-centered solutions for websites & apps.",
      };
    }
    else if (pathname === "/portfolio") {
      return {
        title:
          "Portfolio | Next Orbit - Software Development & Digital Solutions",
        description:
          "Explore Next Orbit’s portfolio of custom web development, AI solutions, digital marketing, DevOps, and data scraping projects. See how we deliver innovative and scalable solutions for businesses across industries.",
      };
    }
    else if (pathname === "/contact") {
      return {
        title:
          "Get in Touch with Our Experts | Next Orbit",
        description:
          "Have a project in mind? Contact Next Orbit, a leading software development company in the USA, for custom web development, AI solutions, digital marketing, DevOps, and more. Let's build something great together!",
      };
    }
    else if (pathname.startsWith("/portfolio-details/")) {
      return {
        title: "Portfolio Details | NextOrbit",
        description: "Check out our portfolio projects in detail.",
      };
    }
    return {
      title: "NextOrbit",
      description: "Generated by create next app",
    };
  };

  const { title, description } = getTitleAndDescription();

  return (
    <>
      <html lang="en">
        <head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="robots" content="noindex, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body suppressHydrationWarning={true}>
          <ReduxProvider>
            <AppProvider>{children}</AppProvider>
            <ToastContainer
              position="top-left"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </ReduxProvider>
        </body>
      </html>
    </>
  );
}
