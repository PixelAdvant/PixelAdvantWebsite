import RootLayout from "@/layout/root";
import Error from "@/pages/404";
import About from "@/pages/about";
import Blog from "@/pages/blog";
import BlogDetails from "@/pages/blog-details";
import BlogStandard from "@/pages/blog-standard";
import Contact from "@/pages/contact";
import Dashboard from "@/pages/dashboard";
import DashboardLogin from "@/pages/dashboard-login";
import Home from "@/pages/home";
import Jobs from "@/pages/jobs";
import ProductOne from "@/pages/product-one";
import ProductThree from "@/pages/product-three";
import ProductTwo from "@/pages/product-two";
import Project from "@/pages/project";
import ProjectCarousel from "@/pages/project-carousel";
import ProjectDetails from "@/pages/project-details";
import Service from "@/pages/service";
import ServiceCarousel from "@/pages/service-carousel";
import ServiceDetails from "@/pages/service-details";
import Team from "@/pages/team";
import TeamCarousel from "@/pages/team-carousel";
import TeamDetails from "@/pages/team-details";
import { createHashRouter } from "react-router-dom";

export const router = createHashRouter([
    {
        path: "/dashboard-login",
        element: <DashboardLogin />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/service',
                element:<Service/>
            },
            {
                path:'/service-carousel',
                element:<ServiceCarousel/>
            },
            {
                path:'/service-details',
                element:<ServiceDetails/>
            },
            {
                path:'/project',
                element:<Project/>
            },
            {
                path:'/project-carousel',
                element:<ProjectCarousel/>
            },
            {
                path:'/project-details',
                element:<ProjectDetails/>
            },
            {
                path:'/team',
                element:<Team/>
            },
            {
                path:'/team-carousel',
                element:<TeamCarousel/>
            },
            {
                path:'/team-details',
                element:<TeamDetails/>
            },
            {
                path:'/products/Click 100',
                element:<ProductOne/>
            },
            {
                path:'/products/Advantage plus',
                element:<ProductTwo/>
            },
            {
                path:'/products/prices',
                element:<ProductThree/>
            },
            {
                path:'/404',
                element:<Error/>
            },
            {
                path:'/news',
                element:<Blog/>
            },
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path:'/news-standard',
                element:<BlogStandard/>
            },
            {
                path:'/news-details',
                element:<BlogDetails/>
            },
            {
                path:'/blog-details',
                element:<BlogDetails/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/jobs',
                element:<Jobs/>
            },
            {
                path:'/careers',
                element:<Jobs/>
            },
        ]
    },
    {
        path:'*',
        element:<Error/>
    },
])
