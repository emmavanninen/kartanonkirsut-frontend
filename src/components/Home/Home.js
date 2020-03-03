import React, { Component } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import GoogleMap from "../GoogleMap/GoogleMap"
import Contact from "../Contact/Contact"
import "./Home.css"
import "./Parallax.css"

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Header />
        <section className='section1' id='section1'>
          <div className='section1Icon section1Link'>
            <img src='/images/bone.png' alt='icon' />
            <h5>Title</h5>
            <div className='section1LinkText'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              accusamus nam reprehenderit quaerat iste cum nostrum mollitia
              consequatur quos
            </div>
          </div>
          <div className='section1Icon section1Link'>
            <img src='/images/pawprint.png' alt='icon' />
            <h5>Title</h5>
            <div className='section1LinkText'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              accusamus nam reprehenderit quaerat iste cum nostrum mollitia
              consequatur quos
            </div>
          </div>
          <div className='section1Icon section1Link'>
            <img src='/images/hot-dog.png' alt='icon' />
            <h5>Title</h5>
            <div className='section1LinkText'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              accusamus nam reprehenderit quaerat iste cum nostrum mollitia
              consequatur quos
            </div>
          </div>
        </section>
        <div className='parallax parallax1'></div>
        <section className='section2' id='section2'>
          <div>
            <h5 className='aboutTitle'>About us</h5>
            <div className='about'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              animi, praesentium veritatis sint accusantium illum dicta
              laboriosam esse! Tempora distinctio aperiam assumenda architecto
              consectetur non vitae aspernatur culpa quod quisquam!
              <br />
              Optio aut alias voluptas, repudiandae tempore totam odio similique
              temporibus, nisi illum ducimus atque minus? Necessitatibus
              perspiciatis ipsum vero harum beatae quam dolorum! Possimus fugiat
              omnis eos libero blanditiis expedita. Soluta ullam molestias magni
              aspernatur, architecto odio corporis, libero quo minima eligendi
              consectetur nobis quia. Ab voluptatem officia quia possimus
              exercitationem non, error assumenda harum? Laboriosam vero tempora
              magnam inventore? Quibusdam, explicabo consectetur. Impedit sequi,
              atque quo accusantium expedita, dolor quod harum eveniet nisi
              maxime aperiam enim officia? Commodi, porro? Harum minus sapiente
              sint ducimus fugiat quod necessitatibus nam facere?
              <br />
              Ab quidem veniam voluptate vel consequatur, adipisci quam
              dignissimos libero incidunt omnis illum repudiandae excepturi iste
              quaerat nesciunt quisquam totam repellendus culpa. Rerum adipisci
              in aliquam voluptas labore hic quas.
            </div>
          </div>
          <img
            src='/images/garrett-karoski-1780KxFn2fQ-unsplash.jpg'
            alt='about us img'
          />
        </section>
        <div className='parallax parallax2'></div>
        <section className='section3' id='section3'>
          <div className='contactUs'>
            <Contact />
          </div>
          <div className='location'>
            <GoogleMap />
          </div>
        </section>
        <div className='parallax parallax3'>
          <Footer />
        </div>
      </div>
    )
  }
}
