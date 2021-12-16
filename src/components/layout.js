import React from "react"

import Sidebar from "./sidebar"
import Bio from "../components/bio"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className="container">
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: '80rem',
            padding: `1.5rem 2rem`,
          }}
        >
          <Bio />
          <div className="row">
            <div className="col-md-7">
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()} Aniruddha Mysore.
                  Built with ❤️. 
                  
                  <br />
                </footer>
            </div>
            <div className="col-md-5">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
