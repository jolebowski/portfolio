import React from "react"
import { Link } from "gatsby"

import { FaAlignRight } from "react-icons/fa"
import Toggle from "../Toggle"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="logoName">
            JordanMoreira
          </Link>
        </div>
      </div>
      <Toggle />
      <button type="button" className="toggle-btn" onClick={toggleSidebar}>
        <FaAlignRight></FaAlignRight>
      </button>
    </nav>
  )
}

export default Navbar
