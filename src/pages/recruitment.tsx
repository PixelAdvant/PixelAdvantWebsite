import ServiceDetails from "@/pages/service-details"
import SEO from '@/components/SEO'
import { pageSEOConfig } from '@/lib/seoConfig'

const Recruitment = () => {
  return (
    <>
      <SEO {...pageSEOConfig.recruitment} />
      <ServiceDetails
        title="Recruitment Solutions"
        currentPage="Recruitment Solutions"
        serviceTitle="Smarter Hiring, Faster Outcomes"
        solutionKey="smartTalentAcquisition"
      />
    </>
  )
}

export default Recruitment
