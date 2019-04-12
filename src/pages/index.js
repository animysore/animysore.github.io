import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class Home extends React.Component {
  render() {
    const { data } = this.props
    
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        {posts.map(({ node }) => {
          return (
            <div key={node.frontmatter.section}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.html,
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
    allMarkdownRemark (
      sort: { fields: [frontmatter___order], order: DESC }
      filter: {frontmatter: {type: {eq: "portfolio"}}}
      limit: 1000
    ){
      edges {
        node {
          html
          frontmatter {
            section
          }
        }
      }
    }
  }
`
