/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import SVG from "@lekoarts/gatsby-theme-cara/src/components/svg"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import ProjectsMDX from "../sections/projects.mdx"

const Projects = ({ offset }: { offset: number }) => {

  const logos = useStaticQuery(graphql
    `query {
      logos: allFile(filter: {relativeDirectory: {eq: "logos"}}, sort: {fields: name}) {
        edges {
          node {
            childImageSharp {
              fixed(width: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }`
  )

  console.log(logos.logos)
  return (
    <div>
      <Divider
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        sx={{ clipPath: `polygon(0 10%, 100% 20%, 100% 90%, 0 80%)` }}
        speed={-0.2}
        offset={1.2}
        factor={2.5}
      />
      <Content speed={0.4} offset={offset + 0.6} factor={2.5}>
        <Inner>
          <div
            sx={{
              display: `grid`,
              gridGap: [1, 1, 1, 2],
              gridTemplateColumns: [`1fr`, `1fr`, `1fr`, `repeat(3, 1fr)`],
              h2: { gridColumn: `-1/1`, color: `white !important` },
            }}
          >
            <ProjectsMDX logos={logos.logos} />
          </div>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={offset} factor={2.5}>
        <UpDown>
          <SVG icon="box" width={6} color="icon_brightest" left="85%" top="75%" />
          <SVG icon="upDown" width={8} color="icon_teal" left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke color="icon_orange" left="25%" top="5%" />
          <SVG icon="circle" hiddenMobile width={24} color="icon_brightest" left="17%" top="60%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" hiddenMobile width={16} color="icon_green" left="20%" top="90%" />
          <SVG icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="30%" />
          <SVG icon="circle" width={16} color="icon_yellow" left="70%" top="90%" />
          <SVG icon="triangle" hiddenMobile width={16} stroke color="icon_teal" left="18%" top="75%" />
          <SVG icon="circle" width={6} color="icon_brightest" left="75%" top="10%" />
          <SVG icon="upDown" hiddenMobile width={8} color="icon_green" left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
        <SVG icon="circle" width={12} color="icon_pink" left="80%" top="60%" />
        <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
        <SVG icon="box" width={12} color="icon_yellow" left="29%" top="26%" />
        <SVG icon="hexa" width={16} stroke color="icon_red" left="75%" top="30%" />
        <SVG icon="hexa" width={8} stroke color="icon_yellow" left="80%" top="70%" />
      </Divider>
    </div>
  )
}

export default Projects
