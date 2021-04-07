import React from "react"
// import "../../css/main.css"
import Navbar from "../navbar"
import Sidebar from "../sidebar"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [visible, setVisible] = React.useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  React.useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, 100)
  })

  return (
    <>
      <div className="layout-index"></div>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {visible && <>{children}</>}
    </>
  )
}

export default Layout
