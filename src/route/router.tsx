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
import Products from "@/pages/products";
import Project from "@/pages/project";
import ProjectCarousel from "@/pages/project-carousel";
import ProjectDetails from "@/pages/project-details";
import Service from "@/pages/service";
import ServiceCarousel from "@/pages/service-carousel";
import ServiceDetails from "@/pages/service-details";
import Team from "@/pages/team";
import TeamCarousel from "@/pages/team-carousel";
import TeamDetails from "@/pages/team-details";
import { createBrowserRouter, createHashRouter } from "react-router-dom";

// Detect if running on GitHub Pages
const isGitHubPages = window.location.hostname.includes('github.io');
const createRouter = isGitHubPages ? createHashRouter : createBrowserRouter;

export const router = createRouter([
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
                path:'/solutions/consulting-advisory',
                element:<ServiceDetails solutionKey="consultingAdvisory" />
            },
            {
                path:'/solutions/smart-talent-acquisition',
                element:<ServiceDetails solutionKey="smartTalentAcquisition" />
            },
            {
                path:'/solutions/ai-led-talent-supply',
                element:<ServiceDetails solutionKey="aiLedTalentSupply" />
            },
            {
                path:'/solutions/talent-management',
                element:<ServiceDetails solutionKey="talentManagement" />
            },
            {
                path:'/solutions/managed-services',
                element:<ServiceDetails solutionKey="managedServices" />
            },
            {
                path:'/solutions/workspace-solutions',
                element:<ServiceDetails solutionKey="workspaceSolutions" />
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
                path:'/models/captive-model',
                element:<ProjectDetails title="Captive Model" currentPage="Captive Model" modelTitle="Captive Model Information" category="Captive Model" />
            },
            {
                path:'/models/shared-services-model',
                element:<ProjectDetails title="Shared Services Model" currentPage="Shared Services Model" modelTitle="Shared Services Model Information" category="Shared Services Model" />
            },
            {
                path:'/models/build-operate-transfer',
                element:<ProjectDetails title="Build Operate Transfer" currentPage="Build Operate Transfer" modelTitle="Build Operate Transfer Information" category="Build Operate Transfer" />
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
                path:'/products',
                element:<Products/>
            },
            {
                path:'/products/click-100',
                element:<ProductOne/>
            },
            {
                path:'/products/advantage-plus',
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
