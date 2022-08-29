import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Resume = () => {
  return (
    <Layout>
      <SEO title="Resume" />
      <main className="container-slide-left">
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
                <h3>2021 - 2022</h3>
                <h4>Viseo</h4>
                <h5>React Native developer</h5>
                <ol className="resume-list">
                  <li className="resume-item">
                    implementation, testing, deployment, documentation and
                    maintenance of the features
                  </li>
                  <li className="resume-item">Definition of the data flow</li>
                  <li className="resume-item">
                    Follow-up, prioritization and delivery of tasks following
                    the Scrum methodology
                  </li>
                </ol>
              </li>
              <li className="resume-sub-category">
                <h3>2020 - 2021</h3>
                <h4>Artifexio</h4>
                <h5>Front end developer</h5>
                <ol className="resume-list">
                  <li className="resume-item">
                    Adding new features Reworking user interfaces Setting up an
                    admin interface
                  </li>
                </ol>
              </li>
              <li className="resume-sub-category">
                <h3>2019 - 2020</h3>
                <h4>Reezocar</h4>
                <h5>Front end developer</h5>
                <ol className="resume-list">
                  <li className="resume-item">Adding new features to CRM</li>
                  <li className="resume-item">
                    Project management with scrum method
                  </li>
                  <li className="resume-item">Use of Api</li>
                </ol>
              </li>
              <li className="resume-sub-category">
                <h3>2016 - 2018</h3>
                <h4>Reparizy</h4>
                <h5>Web developer</h5>
                <ol className="resume-list">
                  <li className="resume-item">Use of Filezilia</li>
                  <li className="resume-item">Creation of website</li>
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
                  <li className="resume-item">TypeScript</li>
                  <li className="resume-item">HTML</li>
                  <li className="resume-item">CSS</li>
                  <li className="resume-item">Tailwind CSS</li>
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
              <li className="resume-sub-category">
                <h4>Mobile</h4>
                <ol className="resume-list">
                  <li className="resume-item">Swift</li>
                  <li className="resume-item">React Native</li>
                </ol>
              </li>
              <li className="resume-sub-category">
                <h4>Environment</h4>
                <ol className="resume-list">
                  <li className="resume-item">Linux</li>
                  <li className="resume-item">MacOs</li>
                </ol>
              </li>
            </ol>
          </li>
          <li className="resume-category">
            <h2 className="resume-category-title">Cursus</h2>
            <ol>
              <li className="resume-sub-category">
                <h3>2017 - 2019</h3>
                <h4>Next Formation</h4>
                <h5>Software achitect</h5>
              </li>
              <li className="resume-sub-category">
                <h3>2015 - 2017</h3>
                <h4>Samsung Campus</h4>
                <h5>Web developer certificate level II</h5>
              </li>
            </ol>
          </li>
        </ul>
      </main>
    </Layout>
  )
}

export default Resume
