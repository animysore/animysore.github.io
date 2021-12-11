import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter } from "react-icons/io"; 
import { rhythm } from "../utils/typography"

const linkstyle = {color:'black', background: 'none'}

function Social() {
  return (
    <StaticQuery
      query={socialQuery}
      render={data => {
        const { twitter, linkedin, github } = data.site.siteMetadata.social
        return (
          <div> 
            <div
              style={{
                display: `flex`,
                fontSize: rhythm(1)
              }}
            >
              <a style={linkstyle} href={twitter} rel='noopener noreferrer' target='_blank'><IoLogoTwitter /></a>
              <a style={linkstyle} href={linkedin} rel='noopener noreferrer' target='_blank'><IoLogoLinkedin /></a>
              <a style={linkstyle} href={github} rel='noopener noreferrer' target='_blank'><IoLogoGithub /></a>
            </div>
          </div>
        )
      }}
    />
  )
}

const socialQuery = graphql`
  query socialQuery {
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
        linkedin
        github
      }
    }
  }
}
`

export default Social