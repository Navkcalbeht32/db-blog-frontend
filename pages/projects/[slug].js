import PageLayout from "../../components/PageLayout"
import { useRouter } from 'next/router'
import { getBlogBySlug, getAllBlogs } from '../../lib/api';
import BlogPage from "../../components/BlogPage";
import BlogContent from "../../components/BlogContent";

const BlogDetail = ({blog}) => {
    return (
        <PageLayout>
            <BlogPage 
            title={blog.title}
            subtitle={blog.subtitle}
            image={blog.image}
            date={blog.date}
            author={blog.author}
            />
            <BlogContent content={blog.content} />
        </PageLayout>
    )
}

export async function getStaticProps({params}) {
    const blog = await getBlogBySlug(params.slug);
    return {
      props: {blog}
    }
  }

  export async function getStaticPaths() {
    const blogs = await getAllBlogs();
    return {
      paths: blogs?.map(b => ({params: {slug: b.slug}})),
      fallback: false
    }
  }

export default BlogDetail
