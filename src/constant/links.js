import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { useLocation } from "@reach/router"

const Links = ({ styleClass }) => {
  const links = [
    {
      id: 1,
      text: "home",
      url: "/",
    },
    {
      id: 2,
      text: "projects",
      url: "/projects/",
    },
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
        <Link
          to={link && link.url}
          target={"_blank"}
          activeStyle={{ color: "#AA88BF" }}
        >
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
