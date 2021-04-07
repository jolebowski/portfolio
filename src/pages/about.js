import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "iamjomoreira.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="About me" />
      <main className="container-about container-slide-left">
        <header>
          <h1 className="title-of-page">About Me</h1>
        </header>
        <article>
          <div className="about-content">
            <div className="column" style={{ flexBasis: "33.33%" }}>
              <figure className="photo">
                <span className="span-photo">
                  <span className="span-photo-1">
                    <Img fluid={data.me.childImageSharp.fluid} />
                  </span>
                </span>
              </figure>
            </div>
            <div className="column" style={{ flexBasis: "60.66%" }}>
              <h2>My name is Jordan Moreira</h2>
              <p>
                I’m a front end developer + web designer born and raised in
                Meaux, France. I’m fascinated by web design and development,
                performance optimization and building helpful things on the web.
              </p>
            </div>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export default About
