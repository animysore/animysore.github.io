import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import SEO from "../components/seo"

const Home = ({ data }) => (
  <>
    <SEO title="Aniruddha Mysore" />
    <main className="home">
      <div className="home-content">
        <GatsbyImage
          className="home-photo"
          image={data.avatar.childImageSharp.gatsbyImageData}
          alt="Aniruddha Mysore"
        />
        <h1>Aniruddha Mysore</h1>
      </div>
    </main>
  </>
)

export default Home

export const pageQuery = graphql`
  query HomePageQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        gatsbyImageData(width: 640, layout: CONSTRAINED)
      }
    }
  }
`
