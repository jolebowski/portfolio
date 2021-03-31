import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const Pagination = (props) => (
<div 
    className="pagination -post"
>
    <ul>
        {(props.previous && props.previous.frontmatter.template === 'project-post') && (
        <li style={{textAlign:"left"}}>
            <Link to={`/${props.previous.frontmatter.slug}`} rel="prev">
                <p>
                  <span className="icon -left" style={{fontSize:"40px"}}><RiArrowLeftLine/></span> 
                  Previous
                </p>
                <span className="page-title">{props.previous.frontmatter.title}</span>
            </Link>
        </li>
        )}
        {(props.next && props.next.frontmatter.template === 'project-post') && (
        <li style={{textAlign:"right"}}>
            <Link to={`/${props.next.frontmatter.slug}`} rel="next">
            <p>
              Next 
              <span className="icon -right" style={{fontSize:"40px"}}><RiArrowRightLine/></span>
            </p>
            <span className="page-title">{props.next.frontmatter.title}</span>
            </Link>
        </li>
        )}
    </ul>
</div>
)

const Post = ({ data, pageContext }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
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
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description ? frontmatter.description : excerpt}
        image={Image}
        article={true}
      />
      <article className="post-content">
        <header className="post-content-header">
            <h1 className="post-content-title">{frontmatter.title}</h1>
        </header>

        {frontmatter.description && (
          <p class="post-content-excerpt">{frontmatter.description}</p>
        )}

        {Image ? (
          <div className="post-content-image">
            <GatsbyImage
              className="kg-image"
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image"
            />
          </div>
        ) : ""}

        <div
          className="post-content-body"
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