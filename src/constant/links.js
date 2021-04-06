import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "projects",
    url: "/jotrackercovid19/",
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
      <Link to={link.url}>
          {link.text}
      </Link>

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