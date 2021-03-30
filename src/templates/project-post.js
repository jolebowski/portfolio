/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const styles = {
    'article blockquote': {
      'background-color': 'cardBg'
    },
    pagination: {
      'a': {
        color: 'muted',
        '&.is-active': {
          color: 'text'
        },
        '&:hover': {
          color: 'text'
        }
      }
    }
  }
  
const Pagination = (props) => (
<div 
    className="pagination-post"
    sx={styles.pagination}
>
    <ul>
        {(props.previous && props.previous.frontmatter.template === 'project-post') && (
        <li>
            <Link to={props.previous.frontmatter.slug} rel="prev">
                <p
                sx={{
                    color: 'muted'
                }}
                >
                <span className="icon-left"><RiArrowLeftLine/></span> Previous</p>
                <span className="page-title">{props.previous.frontmatter.title}</span>
            </Link>
        </li>
        )}
        {(props.next && props.next.frontmatter.template === 'project-post') && (
        <li>
            <Link to={props.next.frontmatter.slug} rel="next">
            <p
                sx={{
                color: 'muted'
                }}
            >Next <span className="icon-right"><RiArrowRightLine/></span></p>
            <span className="page-title">{props.next.frontmatter.title}</span>
            </Link>
        </li>
        )}
    </ul>
</div>
)

const Post = ({ data, pageContext }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  console.log(data, "data")
  const { frontmatter, html, excerpt } = markdownRemark

  const Image = frontmatter.featuredImage
  ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
  : ""
  const { previous, next } = pageContext

  let props = {
    previous,
    next
  }

  return (
    <Layout className="page">
      <SEO
        title={frontmatter.title}
        description={frontmatter.description ? frontmatter.description : excerpt}
        image={Image}
        article={true}
      />
      <article className="project-post">
        <header className="featured-banner">
          <section className="article-header">
            <h1>{frontmatter.title}</h1>
            <time>{frontmatter.date}</time>
          </section>
          {Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image"
            />
          ) : ""}
        </header>
        
        <div
          className="project-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      {(previous || next) && (
        <Pagination {...props} />
      )}
    </Layout>
  )
}

export default Post


export const pageQuery = graphql`
  query ProjectPostQuery($id: String!) {
    markdownRemark( 
      id: { eq: $id }
    ) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`