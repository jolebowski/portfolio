import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"

import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Projects = () => {
    const data = useStaticQuery(graphql`
      query {
        flower: file(relativePath: { eq: "flower-mouth.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fist: file(relativePath: { eq: "fist.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

    const variants = {
      hidden: {
        opacity: 0,
        x: -10,
      },
      display: {
        opacity: 1,
        x: 0,
      },
    }
  
    return (
    <Layout> 
        <SEO title="Projects" /> 
    <div className="container-title">
      <header>
        <motion.h1
              className="title-of-page"
              variants={variants}
              initial="hidden"
              animate="display"
              transition={{ delay: 0.6 }}
            >
            Projects
        </motion.h1>
      </header>
    </div>
      <div className="project-blurb">
        <div className="container">
          <div className="inner-blurb">
            <div className="content">
              <h3>The ability to create</h3>
              <p>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using ‘Content here,
                content here’, making it look like readable English. Many desktop
                publishing packages and web page editors now use Lorem Ipsum as
                their default model text, and a search for ‘lorem ipsum’ will
                uncover many web sites still in their infancy. Various versions
                have evolved over the years, sometimes by accident, sometimes on
                purpose (injected humour and the like).
              </p>
              <div className="project-stack">
                <span>react</span>
              </div>
              <div className="btn-row">
                <Link to="/work">Visit site web</Link>
              </div>
            </div>
            <div className="images">
              <div className="top-right">
                <Img fluid={data.fist.childImageSharp.fluid} />
              </div>
              <div className="bottom-left">
                <Img fluid={data.flower.childImageSharp.fluid} />
              </div>
            </div>
          </div>
        </div>
        <div className="black-box"></div>
        <div className="black-box overlay"></div>
        <div className="fixed-misc">Developer frontend</div>

      </div>
      </Layout>
    )
  }
  
  export default Projects
