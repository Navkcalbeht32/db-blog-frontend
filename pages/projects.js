import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PageLayout from '../components/PageLayout'
import BlogCard from '../components/BlogCard'
import { Row, Col } from 'react-bootstrap'
import { getAllBlogs } from '../lib/api'
import Fade from 'react-reveal/Fade';
import moment from 'moment'

export default function Projects({blogs}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Danny Balentine | Projects</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
      </Head>
      <PageLayout>
        <div className="blog-container">
          <Row className="blog">
            <div className="blog-heading">
              <h1>Projects<br/> 
              <Fade>
                <span>& More</span>
              </Fade>
              </h1>
            </div>
            { blogs.map(blog =>
                <Col key={blog.slug} sm="12" md="6" lg="4">
                  <Fade>
                    <BlogCard 
                    title={blog.title}
                    subtitle={blog.subtitle}
                    image={blog.image}
                    slug={blog.slug}
                    // author={blog.author}
                    // date={moment(blog.date).format('LL')}
                    date={blog.date}
                    link={{
                      href: '/projects/[slug]',
                      as: `/projects/${blog.slug}`
                    }}
                    />
                  </Fade>
                </Col>
            )
            }
          </Row>
        </div>
      </PageLayout>
    </div>
  )
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs
    }
  }
}
