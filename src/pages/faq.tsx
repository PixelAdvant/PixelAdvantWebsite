import FaqHomeFour from "@/components/sections/faqHomeFour"
import PageTitle from "@/components/sections/pageTitle"
import SEO from '@/components/SEO'
import { pageSEOConfig } from '@/lib/seoConfig'

const Faq = () => {
    return (
        <>
            <SEO {...pageSEOConfig.faq} />
            <PageTitle currentPage="Faq" title="Faq" />
            <FaqHomeFour />
        </>
    )
}

export default Faq