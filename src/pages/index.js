import * as React from "react"
import Layout from '../components/Layout'
import Card from "../components/Card"
import { Link } from "gatsby"

import heroImage from '../../static/heroImage.jpg'
import card1 from '../../static/card1.png'
import card2 from '../../static/card2.png'
import card3 from '../../static/card3.png'
import card4 from '../../static/card4.png'
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
            <div className='grid-item border-right'>
              <h2>“A&F Cafe is a must-stop anytime I'm on Kapiolani Blvd. Their coffee is the highest quality with a rich flavor profile. A damn good cup of coffee.”</h2>
            </div>
            <div className='grid-item'>
              <h2>Visit Us!</h2>
              <p>Sky Ala Moana</p>
              <p>808 Kapiolani Blvd</p>
              <p>Honolulu, Hawaii 96814</p>
              <a href='https://goo.gl/maps/kP24KXH3WFwxJVBh9' target="_blank">Get Directions</a>
            </div>
          </div>
          </section>
        <section id='section-news' className='section'>
          <div id='news-cards' className="ten-percent-padding">
            <Card image={card1} header='Waffle Wednesdays!'></Card>
            <Card image={card2} header='New Items' subtext='Commodo Lorem commodo dolor fugiat dolor commodo culpa elit aliqua irure sit ullamco consectetur. Qui deserunt do eu ad consectetur officia est amet amet ex eiusmod anim.'>
            </Card>
            <Card image={card3} header='Limited Time Offers'></Card>
            <Card image={card4} header='AnF Rewards'></Card>

          </div>
        </section>
        <section id='section-about' className='section ten-percent-padding'>
          <div id="about-content">
            <h1>Our Story</h1>
            <h2>A&F Cafe was born from a shared dream and a passion for culinary excellence. The story begins with two coworkers, Keanu and Fanny, who embarked on a journey to bring their vision of a charming café to life.</h2>
            <Link to='#' className='button'>learn more</Link>
          </div>
          <img id='about-image' src={aboutUsPicture} />
        </section>
        <section id='section-gallery'>

        </section>
        <section id='section-careers'>
          <div className='grid'>

          </div>
          <div className='careers-content'>
            <h2>Follow us on Instagram for updates & limited offers!</h2>
          </div>
        </section>
      </Layout>
    </div>
  );
}

/**
 * 
A&F Cafe was born from a shared dream and a passion for culinary excellence. The story begins with two friends, Keanu and Fanny, who embarked on a journey to bring their vision of a charming café to life.
 
Fanny, with her adventurous spirit and love for flavors from around the world, had always dreamed of creating a space where people could gather and indulge in exquisite cuisine. With her extensive experience in the culinary industry, she possessed a deep understanding of the art of food and the importance of quality ingredients.

Keanu, on the other hand, had an innate talent for creating warm and inviting atmospheres. His eye for design and knack for creating spaces that radiated comfort and hospitality were unmatched. He believed that a great dining experience was not only about the food but also about the ambiance and the personal touch that guests would feel as soon as they walked through the door.

United by their shared vision, Keanu and Fanny set out on a quest to make their dream a reality. They spent countless hours brainstorming ideas, fine-tuning their menu, and searching for the perfect location that would capture the essence of their vision. After months of meticulous planning and hard work, A&F Cafe was finally born.

The cafe's name, A&F, is a nod to the first initials of the two owners, Keanu and Fanny. It represents their partnership, their dedication, and their commitment to creating a culinary haven that would leave a lasting impression on every guest.

From the moment A&F Cafe opened its doors, it quickly became a beloved gathering place for locals and visitors alike. People were drawn to the cafe's warm and inviting atmosphere, the tantalizing aroma of freshly brewed coffee, and the irresistible flavors that adorned every dish.

Keanu and Fanny's passion for excellence and their unwavering commitment to quality have been the driving forces behind A&F Cafe's success. They believe that food has the power to bring people together, to create lasting memories, and to nourish both body and soul.

Today, A&F Cafe continues to be a testament to Keanu and Fanny's dedication. It is a place where friends meet, families gather, and food lovers embark on a culinary journey. With each passing day, Keanu and Fanny strive to make A&F Cafe a destination that exceeds expectations, leaving a lasting impression on all who walk through its doors.
 */
