import { useState } from 'react'
import AboutOne from '@/components/sections/about/aboutOne'
import AchievementOne from '@/components/sections/achievements/achievementOne'
import BlogsOne from '@/components/sections/blogs/blogsOne'
import HeroOne from '@/components/sections/heros/heroOne'
import NewsLetter from '@/components/sections/newsLetter'
import PartnersOne from '@/components/sections/partners/partnersOne'
import ProjectsOne from '@/components/sections/projects/projectsOne'
import ServicesOne from '@/components/sections/services/servicesOne'
import TeamesOne from '@/components/sections/teames/teamesOne'
import TestimonialOne from '@/components/sections/testimonials/testimonialOne'
import DemoRequestModal from '@/components/sections/demoRequest/demoRequestModal'

const Home = () => {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

    return (
        <div>
            <HeroOne onDemoClick={() => setIsDemoModalOpen(true)} />
            <AboutOne />
            <PartnersOne className='pt-0'/>
            <ServicesOne onDemoClick={() => setIsDemoModalOpen(true)} />
            <AchievementOne/>
            <ProjectsOne/>
            <TestimonialOne/>
            <TeamesOne/>
            <BlogsOne/>
            <NewsLetter />
            
            <DemoRequestModal 
                isOpen={isDemoModalOpen} 
                onClose={() => setIsDemoModalOpen(false)} 
            />
        </div>
    )
}

export default Home