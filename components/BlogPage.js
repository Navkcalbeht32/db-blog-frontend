import Head from 'next/head'

export default function BlogPage({title, subtitle, image, author, date}) {
    return (
        <>
        <Head>
            <title>Danny Balentine | {title}</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        </Head>
        <div className="blog-page">
                <div className="blog-page-header">  
                    <h1 className="font-weight-bold blog-detail-header-title mb-0">{title}</h1>
                    <h3 className="blog-page-subtitle mb-3">{subtitle}</h3>
                    <div className="blog-page-author">
                        <p className="lead mb-0">
                        <img
                            src={author?.avatar}
                            className="rounded-circle mr-3"
                            height="50px"
                            width="50px"
                            alt="avatar"/>
                        {author?.name}
                        {', '} {date}
                        </p>
                    </div>
                    
                    {/* Check if contains cover image */}
                    <div className="blog-page-image">
                        <img
                        className="img-fluid rounded"
                        src={image} alt=""/>
                    </div>
                </div>
                <hr/>
            </div>
        </>
    )
}
