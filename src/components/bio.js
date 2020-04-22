/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Social from "../components/social";
import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author/* , social */, description } = data.site.siteMetadata
        return (
          <div style={{
            marginTop: rhythm(5),
            marginBottom: rhythm(10),
          }}> 
            <p>
              <h1 style={{
                fontSize: rhythm(2),
                fontFamily: `Quicksand, sans-serif`
              }}> {author} </h1>
              <h3> {description} </h3>
            </p>
            <div
              style={{
                display: `flex`,
              }}
            >
            <Social />
              {/* <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              /> */}
            </div>
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
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
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
