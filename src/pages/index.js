import * as React from "react"
import Layout from '../components/Layout'
import Card from "../components/Card"
import { Link } from "gatsby"

import heroImage from '../../static/heroImage.jpg'
import card1 from '../../static/card1.png'
import card2 from '../../static/card2.png'
import card3 from '../../static/card3.png'
import card4 from '../../static/card4.png'
import gallery1 from '../../static/gallery1.png'
import gallery2 from '../../static/gallery2.png'
import gallery3 from '../../static/gallery3.png'
import gallery4 from '../../static/gallery4.png'
import gallery5 from '../../static/gallery5.png'
import gallery6 from '../../static/gallery6.png'
import aboutUsPicture from '../../static/about-us-picture.jpg'


import '../styles/index.css'

export default function Home() {
  return (
    <div>
      <Layout>
        <section id='section-hero' className='section'>
          <img src={heroImage} />
          <div id='hero-overlay'></div>
          <div className='ten-percent-padding'>
            <h1 id='hero-text'>Every morning is <span className='white-text'>a new opportunity.</span></h1>
            <Link to='#' className='button' >order online</Link>
          </div>

        </section>
        <section id='section-location' className='section'>
          <div className='grid five-three'>
            <div className='border-right'>
              <h2>“A&F Cafe is a must-stop anytime I'm on Kapiolani Blvd. Their coffee is the highest quality with a rich flavor profile. A damn good cup of coffee.”</h2>
            </div>
            <div>
              <h2>Visit Us!</h2>
              <p>Sky Ala Moana</p>
              <p>808 Kapiolani Blvd</p>
              <p>Honolulu, Hawaii 96814</p>
              <a href='https://goo.gl/maps/kP24KXH3WFwxJVBh9' target="_blank"><p>Get Directions</p></a>
            </div>
          </div>
        </section>
        <section id='section-news' className='section'>
          <div id='news-cards' className="ten-percent-padding">
            <Card image={card1} header='Waffle Wednesdays!' subtext='Join us every Wednesday morning to savor the delightful flavors of our beloved waffles while enjoying significant discounts.'></Card>
            <Card image={card2} header='New Items' subtext='Exciting news from A&F Cafe! We are thrilled to introduce an array of delectable new items. Among these exciting additions, our star creation is our Turkey Pesto Panini.'>
            </Card>
            <Card image={card3} header='Limited Time Offers' subtext='Our limited-time offers are carefully curated by our culinary team, bringing you seasonal creations that tantalize your taste buds like never before. '></Card>
            <Card image={card4} header='AnF Rewards' subtext='Our loyalty program is designed to reward and appreciate our valued customers for their continued support and patronage. As a member of our loyalty program, you can enjoy a range of exclusive benefits and special perks.'></Card>

          </div>
        </section>
        <section id='section-about' className='section'>
          <div id="about-content">
            <h1>Our Story</h1>
            <h2>A&F Cafe was born from a shared dream and a passion for culinary excellence. The story begins with two coworkers, Keanu and Fanny, who embarked on a journey to bring their vision of a charming café to life.</h2>
            <Link to='#' className='button'>learn more</Link>
          </div>
          <img id='about-image' src={aboutUsPicture} />
        </section>
        <section id='section-gallery' className='section'>
          <div id='gallery-grid' className='grid ten-percent-padding'>
            <div className="grid-item">
              <a id='gallery-link' href='#' target='_blank'>
                <h2>Follow us on Instagram!</h2>
              </a>
            </div>
            <div className="grid-item">
              <img src={gallery2}></img>
            </div>
            <div className="grid-item">
              <img src={gallery3}></img>
            </div>
            <div className="grid-item">
              <img src={gallery4}></img>
            </div>
            <div className="grid-item">
              <img src={gallery5}></img>
            </div>
            <div className="grid-item">
              <img src={gallery6}></img>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}

