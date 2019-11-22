import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import photo from "../images/personalPhoto.jpg"
//import GitHubButton from 'react-github-btn'
import Resume from "../components/Resume 10_19_30.pdf"
/*
    <div style={{  maxWidth: `300px`, marginBottom: `1.45rem`}}>
      <Image  />
    </div>

 */
const IndexPage = () => (
  <Layout>
    <SEO title="Nathaniel Sherrett" />
    <div style={{display: `inline-block`}}>
    <div style={{display: `inline-block`}}>
      <img src={photo} alt={"Nathaniel Sherrett"} style={{ borderRadius: `50%`, maxWidth: `300px`}} />
    </div>
    <div className={"About"} style={{display: `inline-block`}}>
      <h1>About Nathaniel</h1>
      <p>
        Nathaniel is currently a Senior in the Computer Science department at Portland State University with a graduation date of next fall.
        Throughout a day, he can be found working the backend of his school assignments or the front-end for his website and the club
        <a href={"https://ewb.cecs.pdx.edu/"}> Engineers Without Borders</a>. He is currently enrolled in Introduction to Operating Systems,
        Cloud and Cluster Data Management, and Computer Hardware.
      </p>

      <p>Other than his technical skills, Nathaniel was born and raised in the Portland Area and now lives in Vancouver, WA.
        He loves cycling and racing, currently a category 3 road racer. He enjoys gaming, and golfs when the weather lets up.</p>
    </div>
    <ul >
      <li style={{textDecoration: `none`, listStyleType: `none`, textAlign: `center`}}>

        <a href={"http://www.github.com/sherretten/"}> Github </a>
        <a href={"https://www.linkedin.com/in/nathaniel-sherrett-7a4aa0166/"}>LinkedIn </a>
        <a href={"C:\\Users\\Nate\\WebstormProjects\\personalSite\\src\\components\\Resume 10_19_30.pdf"}>Resume </a>
      </li>
    </ul>
    </div>

  </Layout>
)

export default IndexPage
