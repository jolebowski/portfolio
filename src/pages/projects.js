import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PROJECTS_DATA from "../projects-data"

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <main className="container-about container-slide-left">
        <header>
          <h1 className="title-of-page">Projects</h1>
        </header>
        <div className="card-container">
          <div className="container">
            {PROJECTS_DATA.map(project => {
              return (
                <Link key={project.id} to={`/${project.linkUrl}`}>
                  <div className="card">
                    <div className="card-header">
                      <img src={project.imageProject} alt="image of project" />
                    </div>
                    <div className="card-body">
                      <div className="card-tag">
                        {project.technos.map((t, i) => (
                          <span key={i} className="tag card-tag-color">
                            {t}
                          </span>
                        ))}
                      </div>
                      <h4>{project.title}</h4>
                      <p>{project.desc}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Projects
