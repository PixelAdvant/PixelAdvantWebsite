import SEO from "@/components/SEO";
import GCCServicePage from "@/components/sections/services/gccServicePage";
import { itServicesPageData } from "@/db/gccServicePagesData";
import { pageSEOConfig } from "@/lib/seoConfig";

const GCCITServices = () => {
  return (
    <>
      <SEO {...pageSEOConfig.gccItServices} faqSchema={itServicesPageData.faqs} />
      <GCCServicePage page={itServicesPageData} />
    </>
  );
};

export default GCCITServices;
