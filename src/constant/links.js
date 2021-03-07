import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const data = [
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

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <AniLink cover   to={link.url}
        direction="up"
        duration={2}
        activeStyle={{ color: "#AA88BF" }}
        target={"_blank"}
        bg="#462e55">
          {link.text}
      </AniLink>

    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!
export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}