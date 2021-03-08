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
      <main>
        <div className="container-title">
        <header>
            <motion.h1
                className="title-of-page"
                variants={variants}
                initial="hidden"
                animate="display"
                transition={{ delay: 0.6 }}
                >
                Resume
            </motion.h1>
        </header>
        </div>
        <ul className="resume-categories">
            <li className="resume-category">
                <h2 className="resume-category-title">Skills</h2>
                <ol>
                    <li className="resume-sub-category">
                        <h3>2017 - 2020</h3>
                        <h4>École Supérieure du Digital</h4>
                        <h5>Bachelor Chargé de Projet Digital</h5>
                        <ol className="resume-list">
                            <li className="resume-item">Art Direction</li>
                            <li className="resume-item">Art Direction</li>
                            <li className="resume-item">Art Direction</li>
                            <li className="resume-item">Art Direction</li>
                        </ol>
                    </li>
                    <li className="resume-sub-category">
                        <h3>2017 - 2020</h3>
                        <h4>École Supérieure du Digital</h4>
                        <h5>Bachelor Chargé de Projet Digital</h5>
                        <ol className="resume-list">
                            <li className="resume-item">Art Direction</li>
                            <li className="resume-item">Art Direction</li>
                            <li className="resume-item">Art Direction</li>
                            <li className="resume-item">Art Direction</li>
                        </ol>
                    </li>
                    <li className="resume-sub-category">
                        <h3>2017 - 2020</h3>
                        <h4>École Supérieure du Digital</h4>
                        <h5>Bachelor Chargé de Projet Digital</h5>
                        <ol className="resume-list">
                            <li className="resume-item">Art Direction</li>
                            <li className="resume-item">Art Direction</li>
                            <li className="resume-item">Art Direction</li>
                            <li className="resume-item">Art Direction</li>
                        </ol>
                    </li>
                </ol>
            </li>
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
      </main>
    </Layout>
  )
}

export default Resume