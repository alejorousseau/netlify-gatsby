import * as React from "react"
import { Link } from "gatsby"

//import components
import Header from "../components/header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let headerTitle

  if (isRootPath) {
    headerTitle = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } 
  return (
    <div  data-is-root-path={isRootPath}>
      {/*<Header isRootPath={isRootPath} title={title}/>*/}
      <div className="global-wrapper">
        <headerTitle className="global-header">{headerTitle}</headerTitle>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
