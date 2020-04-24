import React from "react"

import { rhythm } from "../utils/typography"
import Sidebar from "./sidebar"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(45),
          padding: `${rhythm(1.5)} ${rhythm(2)}`
          //paddingRight: rhythm(20)
        }}
      >
        <div className='columns'>
          <div className='column is-8'>
              <main>{children}</main>
              <footer>
                  © {new Date().getFullYear()} Aniruddha Mysore.
                 Built with <span role="image" aria-label="heart">❤️</span>. 
                 
                <br />
              </footer>
          </div>
          <div className='column is-4'>
            <Sidebar />
          </div>
        </div>        
      </div>
    )
  }
}

export default Layout
