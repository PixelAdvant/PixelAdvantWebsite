import RootLayout from "@/layout/root";
import Error from "@/pages/404";
import About from "@/pages/about";
import Blog from "@/pages/blog";
import BlogDetails from "@/pages/blog-details";
import BlogStandard from "@/pages/blog-standard";
import Brochure from "@/pages/brochure";
import CaseStudies from "@/pages/case-studies";
import Click100Redirect from "@/pages/click100-redirect";
import Contact from "@/pages/contact";
import Dashboard from "@/pages/dashboard";
import DashboardLogin from "@/pages/dashboard-login";
import DigitalEngineering from "@/pages/digital-engineering";
import GCCDigitalMarketing from "@/pages/gcc-digital-marketing";
import GCCITServices from "@/pages/gcc-it-services";
import GCCSolutions from "@/pages/gcc-solutions";
import Home from "@/pages/home";
import Jobs from "@/pages/jobs";
import LeadershipTeam from "@/pages/leadership-team";
import ProductThree from "@/pages/product-three";
import ProductTwo from "@/pages/product-two";
import Products from "@/pages/products";
import Project from "@/pages/project";
import ProjectCarousel from "@/pages/project-carousel";
import ProjectDetails from "@/pages/project-details";
import Recruitment from "@/pages/recruitment";
import Resources from "@/pages/resources";
import Service from "@/pages/service";
import ServiceCarousel from "@/pages/service-carousel";
import ServiceDetails from "@/pages/service-details";
import Team from "@/pages/team";
import TeamCarousel from "@/pages/team-carousel";
import TeamDetails from "@/pages/team-details";
import Whitepapers from "@/pages/whitepapers";
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
                element:<Click100Redirect/>
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
                element:<Click100Redirect/>
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
            // ── About Us submenu ──────────────────────────
            {
                path:'/about/leadership-team',
                element:<LeadershipTeam/>
            },
            // ── Recruitment Solutions ─────────────────────
            {
                path:'/recruitment',
                element:<Recruitment/>
            },
            {
                path:'/recruitment/click-100',
                element:<Click100Redirect/>
            },
            {
                path:'/recruitment/advisory-consultancy',
                element:<ServiceDetails solutionKey="consultingAdvisory" />
            },
            {
                path:'/recruitment/hire-global-talent',
                element:<ServiceDetails solutionKey="smartTalentAcquisition" />
            },
            {
                path:'/recruitment/workforce-strategy',
                element:<ServiceDetails solutionKey="talentManagement" />
            },
            // ── Digital Engineering ───────────────────────
            {
                path:'/digital-engineering',
                element:<DigitalEngineering/>
            },
            {
                path:'/digital-engineering/application-engineering',
                element:<ServiceDetails solutionKey="applicationEngineering" />
            },
            {
                path:'/digital-engineering/quality-engineering',
                element:<ServiceDetails solutionKey="qualityEngineering" />
            },
            {
                path:'/digital-engineering/architecture',
                element:<ServiceDetails solutionKey="businessArchitecture" />
            },
            {
                path:'/digital-engineering/product-development',
                element:<ServiceDetails solutionKey="productDevelopment" />
            },
            // ── GCC Solutions ─────────────────────────────
            {
                path:'/gcc-solutions',
                element:<GCCSolutions/>
            },
            {
                path:'/gcc-solutions/consulting-advisory',
                element:<ServiceDetails solutionKey="consultingAdvisory" />
            },
            {
                path:'/gcc-solutions/engagement-models',
                element:<ProjectDetails title="GCC Engagement Models" currentPage="Engagement Models" modelTitle="GCC Engagement Models" category="GCC Models" />
            },
            {
                path:'/gcc-solutions/talent-workspace',
                element:<ServiceDetails solutionKey="workspaceSolutions" />
            },
            {
                path:'/gcc-solutions/it-services',
                element:<GCCITServices/>
            },
            {
                path:'/gcc-solutions/digital-marketing-services',
                element:<GCCDigitalMarketing/>
            },
            {
                path:'/gcc-solutions/legal-services',
                element:<ServiceDetails solutionKey="legalServices" />
            },
            // ── Resources ────────────────────────────────
            {
                path:'/resources',
                element:<Resources/>
            },
            {
                path:'/resources/whitepapers',
                element:<Whitepapers/>
            },
            {
                path:'/resources/case-studies',
                element:<CaseStudies/>
            },
            {
                path:'/resources/brochure',
                element:<Brochure/>
            },
        ]
    },
    {
        path:'*',
        element:<Error/>
    },
])
