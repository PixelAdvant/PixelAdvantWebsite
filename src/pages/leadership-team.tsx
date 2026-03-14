import PageTitle from "@/components/sections/pageTitle"
import TeamesTwo from "@/components/sections/teames/teamesTwo"
import SEO from '@/components/SEO'
import { pageSEOConfig } from '@/lib/seoConfig'

const LeadershipTeam = () => {
  return (
    <>
      <SEO {...pageSEOConfig.leadershipTeam} />
      <PageTitle title="Leadership Team" currentPage="Leadership Team" />
      <TeamesTwo isTitleShow={false} />
    </>
  )
}

export default LeadershipTeam
