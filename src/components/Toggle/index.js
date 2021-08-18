import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

import React from "react"

export default function Toggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div>
          <FontAwesomeIcon
            icon={theme === "dark" ? faSun : faMoon}
            style={{ fontSize: 22 }}
            onClick={() =>
              theme === "dark" ? toggleTheme("light") : toggleTheme("dark")
            }
          />
        </div>
      )}
    </ThemeToggler>
  )
}
