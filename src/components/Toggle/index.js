import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons"

import React from "react"

export default function Toggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div>
          <FontAwesomeIcon
            icon={faMoon}
            style={{ fontSize: 20, marginRight: 20 }}
            onClick={() =>
              theme === "dark" ? toggleTheme("light") : toggleTheme("dark")
            }
          />
        </div>
      )}
    </ThemeToggler>
  )
}
