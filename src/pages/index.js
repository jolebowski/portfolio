import * as React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"


const IndexPage = () => {
  return (
    <Layout>
    <SEO title="Home" description="this is our home page" />
    <div>
      <h1>Coucou !!</h1>
    </div>
    </Layout>
  )
}

export default IndexPage
