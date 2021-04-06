import React from "react"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Resume = () => {

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
      <SEO title="Resume" />
      <motion.div   
        variants={variants}
        initial="hidden"
        animate="display"
        transition={{ delay: 0.3 }}>
        <div className="container-title">
        <header>
            <h1 className="title-of-page">Resume</h1>
        </header>
        </div>
        <ul className="resume-categories">
            <li className="resume-category">
            <h2 className="resume-category-title">Experience</h2>
                <ol>
                    <li className="resume-sub-category">
                        <h3>2017 - 2020</h3>
                        <h4>Lorem Ipsum</h4>
                        <h5>Lorem Ipsum</h5>
                        <ol className="resume-list">
                            <li className="resume-item">Art Direction</li>
                            <li className="resume-item">Art Direction</li>
                            <li className="resume-item">Art Direction</li>
                            <li className="resume-item">Art Direction</li>
                        </ol>
                    </li>
                    <li className="resume-sub-category">
                        <h3>2017 - 2020</h3>
                        <h4>Lorem Ipsum</h4>
                        <h5>Lorem Ipsum</h5>
                        <ol className="resume-list">
                            <li className="resume-item">Art Direction</li>
                            <li className="resume-item">Art Direction</li>
                            <li className="resume-item">Art Direction</li>
                            <li className="resume-item">Art Direction</li>
                        </ol>
                    </li>
                    <li className="resume-sub-category">
                        <h3>2017 - 2020</h3>
                        <h4>Lorem Ipsum</h4>
                        <h5>Lorem Ipsum</h5>
                        <ol className="resume-list">
                            <li className="resume-item">Lorem Ipsum</li>
                            <li className="resume-item">Lorem Ipsum</li>
                            <li className="resume-item">Lorem Ipsum</li>
                            <li className="resume-item">Lorem Ipsum</li>
                        </ol>
                    </li>
                </ol>
            </li>
            <li className="resume-category">
                <h2 className="resume-category-title">Skills</h2>
                <ol>
                    <li className="resume-sub-category">
                        <h4>Front end</h4>
                        <ol className="resume-list">
                            <li className="resume-item">React Js</li>
                            <li className="resume-item">Redux</li>
                            <li className="resume-item">JavaScript</li>
                            <li className="resume-item">HTML</li>
                            <li className="resume-item">CSS</li>
                        </ol>
                    </li>
                    <li className="resume-sub-category">
                        <h4>Back end</h4>
                        <ol className="resume-list">
                            <li className="resume-item">Graphql</li>
                            <li className="resume-item">Node Js</li>
                        </ol>
                    </li>
                    <li className="resume-sub-category">
                        <h4>Databases</h4>
                        <ol className="resume-list">
                            <li className="resume-item">MySql</li>
                            <li className="resume-item">PostgreSql</li>
                            <li className="resume-item">MongoDb</li>
                        </ol>
                    </li>
                </ol>
            </li>
            <li className="resume-category">
            <h2 className="resume-category-title">Cursus</h2>
                <ol>
                    <li className="resume-sub-category">
                        <h3>2017 - 2020</h3>
                        <h4>École Supérieure du Digital</h4>
                        <h5>Bachelor Chargé de Projet Digital</h5>
                        <ol className="resume-list">
                            <li className="resume-item">Lorem Ipsum</li>
                            <li className="resume-item">Lorem Ipsum</li>
                            <li className="resume-item">Lorem Ipsum</li>
                            <li className="resume-item">Lorem Ipsum</li>
                        </ol>
                    </li>
                    <li className="resume-sub-category">
                        <h3>2017 - 2020</h3>
                        <h4>École Supérieure du Digital</h4>
                        <h5>Bachelor Chargé de Projet Digital</h5>
                        <ol className="resume-list">
                            <li className="resume-item">Lorem Ipsum</li>
                            <li className="resume-item">Lorem Ipsum</li>
                            <li className="resume-item">Lorem Ipsum</li>
                            <li className="resume-item">Lorem Ipsum</li>
                        </ol>
                    </li>
                    <li className="resume-sub-category">
                        <h3>2017 - 2020</h3>
                        <h4>Lorem Ipsum</h4>
                        <h5>Lorem Ipsum</h5>
                        <ol className="resume-list">
                            <li className="resume-item">Art Direction</li>
                            <li className="resume-item">Art Direction</li>
                            <li className="resume-item">Art Direction</li>
                            <li className="resume-item">Art Direction</li>
                        </ol>
                    </li>
                </ol>
            </li>
        </ul>
        </motion.div>
    </Layout>
  )
}

export default Resume