import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" description="this is home page" />
      <header className="header-fixed">
        <div className="fixed-header animate-background">
          <div className="header-container">
            <div className="header-text">
              <h1>
                <p className="animate-text-1">Front End,</p>
                <p className="animate-text-2">Creative</p>
              </h1>
            </div>
            <h2 className="animate-subtitle">
              I'm a creator that happens to use code to develop stuff out of
              thin air.
            </h2>
          </div>
        </div>
      </header>
    </Layout>
  )
}

export default IndexPage
