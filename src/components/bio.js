/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Social from "../components/social";
import { GatsbyImage as Image } from "gatsby-plugin-image";

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, description, social } = data.site.siteMetadata
        const { twitter, github, linkedin, scholar } = social;
        return (
          <div className="row" style={{ marginTop: '2rem' }}> 
            <div className="col-md-7">              
              <h3 style={{ marginBottom: '0' }}> Hi there! I am </h3>
              <h1 style={{
                margin: 0,
                fontSize: '4rem',
              }}> {author} </h1>
              <h3 style={{ marginBottom: '0' }}> {description} </h3>
            </div>
            <div className="col-md-5" div style={{
                padding: "0 4rem",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Image
                  className="d-none d-md-block"
                  image={data.avatar.childImageSharp.gatsbyImageData}
                  alt={author}
                  style={{
                    marginBottom: 10,
                    minWidth: 50,
                    maxWidth: 180,
                    borderRadius: `100%`,
                  }}
                  imgStyle={{
                    borderRadius: `50%`,
                  }}
                />
                <Social twitter={twitter} linkedin={linkedin} github={github} scholar={scholar}/>
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
      gatsbyImageData(width: 400, layout: CONSTRAINED)
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
        scholar
      }
    }
  }
}
`

export default Bio
