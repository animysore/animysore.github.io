
import React from "react"
import Img from "gatsby-image"

function ProjectCard(props) {
    return (
        <>
            <Img fluid={props.image} />
        </>
    )
}

export default ProjectCard
