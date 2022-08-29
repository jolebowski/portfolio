import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  RiArrowRightLine,
  RiArrowLeftLine,
  RiArrowDownLine,
} from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const Pagination = props => (
  <div className="pagination -post">
    <ul>
      {props.previous &&
        props.previous.frontmatter.template === "project-post" && (
          <li style={{ textAlign: "left" }}>
            <Link to={`/${props.previous.frontmatter.slug}/`} rel="prev">
              <p>
                <span className="icon -left">
                  <RiArrowLeftLine />
                </span>
                <span className="page-title">
                  {props.previous.frontmatter.title}
                </span>
              </p>
            </Link>
          </li>
        )}
      <Link to="/projects" rel="prev">
        <p>
          <span className="page-title">Projects</span>
        </p>
      </Link>
      {props.next && props.next.frontmatter.template === "project-post" && (
        <li style={{ textAlign: "right" }}>
          <Link to={`/${props.next.frontmatter.slug}/`} rel="next">
            <p>
              <span className="page-title">{props.next.frontmatter.title}</span>
              <span className="icon -right">
                <RiArrowRightLine />
              </span>
            </p>
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
    next,
  }

  const separator = React.createRef()

  const scrollToContent = e => {
    separator.current.scrollIntoView({ block: "start", behavior: "smooth" })
  }

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
        image={Image}
        article={true}
      />
      <main className="container-page">
        <article className="post-content">
          <section className="title-section">
            <header className="post-content-header">
              <h1 className="post-content-title">{frontmatter.title}</h1>
            </header>
            <button
              onClick={scrollToContent}
              className="button-scroll"
              aria-label="scroll"
            >
              <RiArrowDownLine />
            </button>
          </section>

          {frontmatter.description && (
            <p
              ref={separator}
              className="post-content-excerpt"
              dangerouslySetInnerHTML={{ __html: frontmatter.description }}
            ></p>
          )}
          {Image ? (
            <div className="post-content-image">
              <GatsbyImage
                className="kg-image"
                image={Image}
                alt={frontmatter.title + " - Featured image"}
              />
            </div>
          ) : (
            ""
          )}

          <div
            className="post-content-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
        {(previous || next) && <Pagination {...props} />}
      </main>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query ProjectPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
