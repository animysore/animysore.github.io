import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from '../components/card' 
import { rhythm } from "../utils/typography"
import './../style.scss';

class Home extends React.Component {
  render() {
    const { data } = this.props
    
    const portfolio = data.portfolio.edges
    const projects = data.projects.edges

    return (
      <Layout location={this.props.location}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        {portfolio.map(({ node }) => {
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
        <h1>Projects</h1> 
        <div className="columns">
          {projects.map(({ node }) => {
            let image = node.frontmatter.image.childImageSharp.fluid;
            return (
                <div key={node.frontmatter.title} className="column is-one-third">
                  <ProjectCard image={image}></ProjectCard>

                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  > {node.frontmatter.title}
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.html,
                    }}
                  />
                </div>
            )
          })}
        </div>
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
    portfolio: allMarkdownRemark (
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
    projects: allMarkdownRemark(filter: {frontmatter: {type: {eq: "project"}}}) {
      edges {
        node {
          html
          id
          headings {
            value
            depth
          }
          frontmatter {
            title
            type
            section
            image  {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          parent {
            id
          }
        }
      }
    }
  }
`
