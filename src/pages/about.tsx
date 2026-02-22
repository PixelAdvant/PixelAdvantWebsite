import AboutTwo from "@/components/sections/about/aboutTwo"
import PartnersOne from "@/components/sections/partners/partnersOne"
import ProjectsTwo from "@/components/sections/projects/projectsTwo"
import Offer from "@/components/sections/offer"
import PageTitle from "@/components/sections/pageTitle"
import TeamesThree from "@/components/sections/teames/teamesThree"

const About = () => {
  return (
    <>
      <PageTitle title="About Us" currentPage="About Us"/>
      <AboutTwo/>
      <Offer/>
      <ProjectsTwo/>
      <TeamesThree/>
      <PartnersOne/>
    </>
  )
}

export default About