import BlockContent from '@sanity/block-content-to-react'
import HighlightCode from '../components/HighlightCode'

const serializers = {
  types: {
    code: ({node: {language, code, filename}}) => {
      return (
        <HighlightCode language={language}>
          {code}
          <div className="code-filename">{filename}</div>
        </HighlightCode>
      )
    },
    image: ({node: {asset, alt}}) => {
        return(
            <div className="block-content-image">
                <img src={asset.url} />
                <h5 className="block-content-image-alt"><em>{alt}</em></h5>
            </div>
        )
    }
  }
}

const BlogContent = ({content}) =>
  <BlockContent className="block-content"
    imageOptions={{w: 320, h: 240, fit: 'max'}}
    serializers={serializers}
    blocks={content}
  />

export default BlogContent;