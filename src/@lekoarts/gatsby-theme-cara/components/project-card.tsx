/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Img from "gatsby-image"

type ProjectCardProps = {
  link: string
  title: string
  children: any
  bg: string
}

const ProjectCard = ({ link, title, children, bg }: ProjectCardProps) => {
  console.log(children)

  const { description, logo } = children

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      sx={{
        width: `100%`,
        boxShadow: `lg`,
        position: `relative`,
        textDecoration: `none`,
        borderRadius: `lg`,
        px: 4,
        py: [4, 4],
        color: `white`,
        background: bg || `none`,
        transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
        "&:hover": {
          color: `white !important`,
          transform: `translateY(-5px)`,
          boxShadow: `xl`,
        },
      }}
    >
      <Img
        fixed={logo}
      />
      <div
        sx={{
          textTransform: `uppercase`,
          letterSpacing: `wide`,
          pt: 3,
          fontSize: [3, 3],
          fontWeight: `medium`,
          lineHeight: 1,
        }}
      >
        {title}
      </div>
      <div sx={{ opacity: 0.75, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{description}</div>
    </a>
  )
}

export default ProjectCard
