import * as React from "react"
import Layout from '../components/Layout'
import Card from "../components/Card"
import { Link } from "gatsby"

import card1 from '../../static/card1.png'
import card2 from '../../static/card2.png'
import card3 from '../../static/card3.png'
import card4 from '../../static/card4.png'

export default function Home() {
  return (
    <div>
      <Layout>
        <section id='section-hero'>
          <h1 id='hero-text'>Every morning is a new opportunity.</h1>
          <Link to='#'>order online</Link>
        </section>
        <section id='section-news'>
          <div id='cards'>
          <Card image={card1} header='Waffle Wednesdays!'></Card>
            <Card image={card2} header='New Items' subtext='Commodo Lorem commodo dolor fugiat dolor commodo culpa elit aliqua irure sit ullamco consectetur. Qui deserunt do eu ad consectetur officia est amet amet ex eiusmod anim.'>
            </Card>
            <Card image={card3} header='Limited Time Offers'></Card>
            <Card image={card4} header='AnF Rewards'></Card>
            
          </div>
        </section>
        <section id='section-menu'>

        </section>
        <section id='section-location'>

        </section>
        <section id='section-gallery'>

        </section>
        <section id='section-careers'>

        </section>
      </Layout>
    </div>
  );
}
