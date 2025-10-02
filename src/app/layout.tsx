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
        title: "Leading Software Development Company in USA | CodeAquariam",
        description:
          "Code Aquariam is a leading web development company in the USA. We specialize in custom web development, cutting-edge software solutions, and result-driven digital marketing services to grow your business.",
      };
    } else if (pathname === "/about") {
      return {
        title:
          "About Us | Custom Web Development & Software Solutions in USA | CodeAquariam",
        description:
          "Code Aquariam is a USA-based software development company offering custom web development, AI solutions, digital marketing, DevOps, and data scraping. Learn more about our mission, expertise, and commitment to innovation.",
      };
    } else if (pathname === "/services") {
      return {
        title:
          "Our Services | CodeAquariam - Software Development & Digital Solutions",
        description:
          "Code Aquariam offers custom web development, AI solutions, digital marketing, DevOps, data scraping, and UX/UI strategy. Drive innovation and scale your business with our expert technology services.",
      };
    } else if (pathname === "/service-details/1") {
      return {
        title:
          "Professional Website Development & Design Services | CodeAquariam",
        description:
          "Get stunning web design & development from experts. Code Aquariam delivers high-performance, mobile-friendly websites to grow your business and brand online | Code Aquariam",
      };
    }else if (pathname === "/service-details/2") {
      return {
        title:
          "Top Artificial Intelligence Companies & AI Digital Marketing Solutions | CodeAquariam",
        description:
          "Discover cutting-edge artificial intelligence technologies, AI-powered digital marketing, and innovative AI sites to grow your business faster. | CodeAquariam",
      };
    }else if (pathname === "/service-details/3") {
      return {
        title:
          "Best Digital Marketing Agency & Online Marketing Solutions | CodeAquariam",
        description:
          "Boost your business with top-rated digital marketing services, creative online campaigns, and professional marketing agency expertise near you. | CodeAquariam",
      };
    }else if (pathname === "/service-details/4") {
      return {
        title:
          "Expert DevOps Services & Leading DevOps Companies Solutions | CodeAquariam",
        description:
          "Accelerate your business with cutting-edge DevOps technologies, expert consulting, and top-rated DevOps agency solutions for seamless operations. | Code Aquariam",
      };
    }else if (pathname === "/service-details/5") {
      return {
        title:
          "Professional Web Scraping & Database Scraping Services | CodeAquariam",
        description:
          "Get reliable website scraping, database extraction, and custom web scraping solutions to power your business with accurate, real-time data. | Code Aquariam",
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
          "Portfolio | CodeAquariam - Software Development & Digital Solutions",
        description:
          "Explore Code Aquariam portfolio of custom web development, AI solutions, digital marketing, DevOps, and data scraping projects. See how we deliver innovative and scalable solutions for businesses across industries.",
      };
    }
    else if (pathname === "/contact") {
      return {
        title:
          "Get in Touch with Our Experts | CodeAquariam",
        description:
          "Have a project in mind? Contact Code Aquariam, a leading software development company in the USA, for custom web development, AI solutions, digital marketing, DevOps, and more. Let's build something great together!",
      };
    }
    else if (pathname.startsWith("/portfolio-details/")) {
      return {
        title: "Portfolio Details | CodeAquariam",
        description: "Check out our portfolio projects in detail.",
      };
    }
    return {
      title: "CodeAquariam",
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
