import React from "react"
import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter  } from "react-icons/io"; 
import { SiGooglescholar } from "react-icons/si";

const linkstyle = { background: 'none' }

function Social({ twitter, linkedin, github, scholar }) {
  return (
    <div
      style={{
        display: `flex`,
        fontSize: '1.5rem',
        justifyContent: 'space-between',
      }}
    >
      <a style={linkstyle} href={twitter} rel='noopener noreferrer' target='_blank'><IoLogoTwitter /></a>
      <a style={linkstyle} href={linkedin} rel='noopener noreferrer' target='_blank'><IoLogoLinkedin /></a>
      <a style={linkstyle} href={github} rel='noopener noreferrer' target='_blank'><IoLogoGithub /></a>
      <a style={linkstyle} href={scholar} rel='noopener noreferrer' target='_blank'><SiGooglescholar /></a>
    </div>
  )
}

export default Social