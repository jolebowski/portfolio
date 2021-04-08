import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        siteTitle: title
        twitterUsername
      }
    }
  }
`
const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const { siteDesc, siteTitle, twitterUsername } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content="https://github.com/jolebowski/portfolio/blob/master/static/assets/portfolio.jpg" />
      {/* twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />


      <meta property="og:url" content="http://iamjomoreira.netlify.app/"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content={siteTitle}/>
      <meta property="og:description" content={siteDesc}/>
      <meta property="og:image" content="https://github.com/jolebowski/portfolio/blob/master/static/assets/portfolio.jpg"/>
    </Helmet>
  )
}

export default SEO
