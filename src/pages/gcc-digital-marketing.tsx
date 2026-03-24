import SEO from "@/components/SEO";
import GCCServicePage from "@/components/sections/services/gccServicePage";
import { digitalMarketingServicesPageData } from "@/db/gccServicePagesData";
import { pageSEOConfig } from "@/lib/seoConfig";

const GCCDigitalMarketing = () => {
  return (
    <>
      <SEO
        {...pageSEOConfig.gccDigitalMarketingServices}
        faqSchema={digitalMarketingServicesPageData.faqs}
      />
      <GCCServicePage page={digitalMarketingServicesPageData} />
    </>
  );
};

export default GCCDigitalMarketing;
