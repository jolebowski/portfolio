import React from "react"
import { Link, graphql, useStaticQuery} from "gatsby"
import { useLocation } from "@reach/router"

export const pageQuery = graphql`
query MyQuery {
  allMarkdownRemark {
    nodes {
      frontmatter {
        slug
      }
    }
  }
}
`

const Links = ({styleClass}) => {

const { pathname } = useLocation()

  const { allMarkdownRemark } = useStaticQuery(pageQuery)
  let linksProjects = { 
    id: 2,
    text: "projects",
    url:  "/jotrackercovid19/"
  }

    allMarkdownRemark.nodes.forEach((link) => {
      const slug = `/${link.frontmatter.slug}/`
      const newLink = pathname === slug
      if(newLink){
        linksProjects = {
          id: 2,
          text: "projects",
          url: slug
        }
      }
    })

    const links = [
      {
        id: 1,
        text: "home",
        url: "/",
      },
      linksProjects,
      {
        id: 3,
        text: "about me",
        url: "/about/",
      },
      {
        id: 4,
        text: "resume",
        url: "/resume/",
      },
      {
        id: 5,
        text: "contact",
        url: "https://ihgz0kpjw0z.typeform.com/to/oBYcYMtY",
      },
    ]


  const tempLinks = links.map(link => {
    return (
      <li key={link && link.id}>
        <Link to={link && link.url} target={"_blank"} activeStyle={{color: "#AA88BF"}}>
            {link && link.text}
        </Link>
      </li>
    )
  })

  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
    {tempLinks}
  </ul>
  )
}

export default Links