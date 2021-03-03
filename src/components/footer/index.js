import React from "react"
import SocialLinks from "../../constant/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer">
        <div className="inner">
          <span>copyright&copy;{new Date().getFullYear()}
          <span> jolebowski </span> all rights reserved</span>
          <div className="socials">
              <SocialLinks styleClass="footer-links"></SocialLinks>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer