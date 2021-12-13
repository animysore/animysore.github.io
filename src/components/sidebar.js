
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Social from "../components/social";
import { GatsbyImage as Image } from "gatsby-plugin-image";


function Sidebar(props) {
  return (
    <StaticQuery
    query={socialQuery}
    render={data => {
      const { author, social } = data.site.siteMetadata;
      const { twitter, linkedin, github, scholar } = social;
      return (
        <div style={{
          padding: "5rem 10rem",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image
            image={data.avatar.childImageSharp.gatsbyImageData}
            alt={author}
            style={{
              marginBottom: 10,
              minWidth: 50,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
          <Social twitter={twitter} linkedin={linkedin} github={github} scholar={scholar}/>
        </div> 
      );
    }}/>
  );
}

const socialQuery = graphql`
  query SocialQuery {
  avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
    childImageSharp {
      gatsbyImageData(width: 400, layout: CONSTRAINED)
    }
  }
  site {
    siteMetadata {
      author
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
export default Sidebar
