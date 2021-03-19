import Link from 'next/link'

export default function CardItem({ title, subtitle, image, link, author, date }) {

    return (      
        <Link {...link} > 
            <div className="blog-card">
                <div className="card-body-wrapper">
                  <div className="blog-card-image">
                      <img 
                        src={image}
                      />
                  </div>
                  <div className="blog-card-text">
                    <div className="blog-card-title">{title}</div>
                    <div className="blog-card-subtitle">{subtitle}</div>
                    <div>{author}</div>
                    <div>{date}</div>
                  </div>
                </div>
            </div>
        </Link>  
    )
}

