import React from "react"

import Sidebar from "./sidebar"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: '80rem',
          padding: `1.5rem 2rem`
        }}
      >
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 6 }}>
              <main>{children}</main>
              <footer>
                  © {new Date().getFullYear()} Aniruddha Mysore.
                 Built with ❤️. 
                 
                <br />
              </footer>
          </div>
          <div style={{ flex: 4 }}>
            <Sidebar />
          </div>
        </div>        
      </div>
    )
  }
}

export default Layout
