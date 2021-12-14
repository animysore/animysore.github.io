import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import ProjectCard from '../components/card'

class Home extends React.Component {
  render() {
    const { data } = this.props
    
    const portfolio = data.portfolio.edges
    // const projects = data.projects.edges

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Aniruddha Mysore's Website"
          keywords={[`aniruddha`, `mysore`, `microsoft research`, `morgan stanley`]}
        />
        <Bio />
        {portfolio.map(({ node }) => {
          return (
            <div key={node.frontmatter.section}>
              <h3
                style={{
                  marginBottom: '1rem',
                }}
              >
              </h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: node.html,
                }}
              />
            </div>
          )
        })}
        {/*
        <h1>Projects</h1> 
        <div style={{ display: 'flex' }}>
          {projects.map(({ node }) => {
            let image = node.frontmatter.image.childImageSharp.gatsbyImageData;
            return (
                <div key={node.frontmatter.title} style={{ flex: 3, padding: 5 }}>
                  <ProjectCard image={image}></ProjectCard>

                  <h3
                    style={{
                      marginBottom: '1rem',
                    }}
                  > {node.frontmatter.title}
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: node.html,
                    }}
                  />
                </div>
            )
          })}
        </div>
        */}
      </Layout>
    );
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
      sort: { fields: [frontmatter___order], order: ASC }
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
                gatsbyImageData(width: 800, layout: CONSTRAINED)
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
