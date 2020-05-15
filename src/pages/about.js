import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
//import { FaGulp } from "react-icons/fa"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/info"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    {/* <FaGulp /> */}
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="about us"
      styleClass="about-background"
    />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
