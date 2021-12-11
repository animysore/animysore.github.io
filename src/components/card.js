
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";

function ProjectCard(props) {
    return (
        <>
            <GatsbyImage image={props.image} />
        </>
    )
}

export default ProjectCard
