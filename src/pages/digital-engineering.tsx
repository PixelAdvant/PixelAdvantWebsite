import ServiceDetails from "@/pages/service-details"
import SEO from '@/components/SEO'
import { pageSEOConfig } from '@/lib/seoConfig'

const DigitalEngineering = () => {
  return (
    <>
      <SEO {...pageSEOConfig.digitalEngineering} />
      <ServiceDetails
        title="Digital Engineering"
        currentPage="Digital Engineering"
        serviceTitle="Engineering Digital Advantage"
        solutionKey="applicationEngineering"
      />
    </>
  )
}

export default DigitalEngineering
