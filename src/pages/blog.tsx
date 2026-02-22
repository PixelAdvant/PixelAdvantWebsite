import BlogCard from "@/components/sections/blogs/blogCard"
import BlogSubscription from "@/components/sections/blogs/blogSubscription"
import PageTitle from "@/components/sections/pageTitle"
import Pagination from "@/components/ui/pagination"
import { blogPostsThreeData } from "@/db/blogPostsThreeData"

const Blog = () => {
    return (
        <>
            <PageTitle currentPage="Blogs" title="Blog Listings" />
            <section className="news-section-4 fix section-padding">
                <div className="container">
                    {/* Blog Subscription Section */}
                    <div className="row mb-5">
                        <div className="col-lg-8 col-12 mx-auto">
                            <BlogSubscription/>
                        </div>
                    </div>

                    {/* Blog Grid Section */}
                    <div className="row g-4 mt-0">
                        {
                            blogPostsThreeData.map((news) => {
                                return (
                                    <div key={news.id} className="col-xl-4 col-lg-6 col-md-6 wow slideUp" data-delay=".3">
                                         <BlogCard news={news} className={'style-2 mt-0 pb-0'} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Pagination/>
                </div>
            </section>

        </>
    )
}

export default Blog