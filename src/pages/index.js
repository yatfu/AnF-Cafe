import * as React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
        <section id='section-hero'>
          <h1 id='hero-text'>Every morning is a new opportunity.</h1>
          <button>order online</button>
        </section>
        <section id='section-news'>
          <div class='4-grid'>
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
      <Footer></Footer>
    </div>
  );
}
