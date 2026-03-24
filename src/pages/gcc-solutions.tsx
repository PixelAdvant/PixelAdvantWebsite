import ServiceDetails from "@/pages/service-details"
import SEO from '@/components/SEO'
import { pageSEOConfig } from '@/lib/seoConfig'

const GCCSolutions = () => {
  return (
    <>
      <SEO {...pageSEOConfig.gccSolutions} />
      <ServiceDetails
        title="GCC Solutions"
        currentPage="GCC Solutions"
        serviceTitle="Global Capability Centre Solutions"
        solutionKey="consultingAdvisory"
      />
    </>
  )
}

export default GCCSolutions
