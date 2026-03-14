import PageTitle from "@/components/sections/pageTitle"
import TeamesTwo from "@/components/sections/teames/teamesTwo"
import SEO from '@/components/SEO'

const Team = () => {
  return (
    <>
        <SEO
          title="Our Team"
          description="Meet the Pixel Advant team — experienced professionals driving innovation in GCC setup, consulting, and digital engineering services in India."
          keywords="Pixel Advant team, GCC professionals, consulting team India"
          canonical="/team"
          breadcrumbs={[{ name: 'Our Team', url: '/team' }]}
        />
        <PageTitle title="Our Team" currentPage="Our Team"/>
        <TeamesTwo isTitleShow={false}/>
    </>
  )
}

export default Team