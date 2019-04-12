import React from "react"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { children } = this.props
  
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(45),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          //paddingRight: rhythm(20)
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} Aniruddha Mysore
          <br />
        </footer>
      </div>
    )
  }
}

export default Layout
