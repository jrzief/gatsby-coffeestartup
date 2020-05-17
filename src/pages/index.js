import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import { FaGulp } from "react-icons/fa"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/info"
import Menu from "../components/Home/Menu"
import Products from "../components/Home/Products"
import Contact from "../components/Home/Contact"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    {/* <FaGulp /> */}
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="ben's alchemy"
      styleClass="default-background"
    />
    <Info />
    <Menu items={data.menu} />
    <Products />
    <Contact />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          price
          description {
            description
          }
          contentful_id
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
