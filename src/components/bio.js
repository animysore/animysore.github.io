/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, description } = data.site.siteMetadata
        return (
          <div style={{
            marginTop: '5rem',
            marginBottom: '2rem',
          }}> 
            <h3 style={{ marginBottom: '0' }}> Hi there! I am </h3>
            <h1 style={{
              margin: 0,
              fontSize: '4rem',
            }}> {author} </h1>
            <h3> {description} </h3>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
  avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
    childImageSharp {
      gatsbyImageData(width: 50, height: 50, layout: FIXED)
    }
  }
  site {
    siteMetadata {
      author
      description
      social {
        twitter
      }
    }
  }
}
`

export default Bio
