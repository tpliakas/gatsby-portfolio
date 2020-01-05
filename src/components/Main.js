import PropTypes from 'prop-types'
import React from 'react'
import '../assets/css/demo.css'
import '../assets/css/set2.css'
import { FaEnvelope } from 'react-icons/fa'
import { FaMobileAlt } from 'react-icons/fa'
import heavyliftImage from '../images/portfolio-images/heavylift.jpg'
import lukasImage from '../images/portfolio-images/lukas.jpg'
import radioArtImage from '../images/portfolio-images/radio.jpg'
import islandTalesImage from '../images/portfolio-images/island.jpg'
import manImage from '../images/portfolio-images/man2man.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
            Passionate about web technologies and specifically about Web
            Development.
          </p>
          <p>
            Currently working as a Frontend Developer using React. In my spare
            time I develop a full stack application based on MERN Stack (Mongo,
            Express, React, Node) for my Master Thesis.
          </p>
          <p>
            I'm always highly interested in new web technologies and I
            constantly keep learning and studying.{' '}
          </p>
          <h3>Skills</h3>
          <hr />
          <p>
            HTML, CSS, JavaScript, Bootstrap, PHP, MySQL, NodeJS, ReactJS,
            Angular, jQuery, Gulp, Amazon Alexa, Git, CodeIgniter, Linux, npm,
            Docker, Drupal, Magento, Shopify, Wordpress, CS-Cart, Photoshop,
            Gimp, CPanel, Plesk.
          </p>
          <h3>Languages</h3>
          <hr />
          <p>
            Greek - (Native)
            <br />
            English - (First Certificate in English, Cambridge University (B2))
            <br />
            Dutch - (Beginner (A1 - A2))
          </p>
          <h3>Certifications</h3>
          <hr />
          <p>
            <ul>
              <li>
                Android development scholarship by Udacity, funding from Google.
              </li>
              <li>
                Introduction to Deep Learning with PyTorch Scholarship by
                Udacity, funding from Bertelsmann.
              </li>
              <li>
                Google developers certificates - For attending Google Dart
                Language Workshop & for attending Android Studio SDK Workshop.
              </li>
              <li>
                Several online courses on edx.org, coursera.org, udacity.com,
                udemy.com.
              </li>
              <li> ECDL Core - (7 Modules)</li>
            </ul>
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Experience</h2>
          <p>
            <h3>Eurobank</h3>
            <h5>09/2019 - Current</h5>
            <hr />
            <p>
              <span className="position">Frontend Developer</span>
              <a
                href="https://eurobank.gr"
                title="Eurobank"
                className="website"
              >
                eurobank.gr
              </a>
              JavaScript, ReactJS,
              <br />
              Material UI, Ant Design,
              <br />
              Agile, Scrum.
            </p>
          </p>
          <p>
            <h3>SuperUp - eComMarketing Platform</h3>
            <h5>12/2018 - 08/2019</h5>
            <hr />
            <p>
              <span className="position">Web Developer</span>
              <a
                href="https://www.superup.me/"
                title="SuperUp"
                className="website"
              >
                superup.me
              </a>
              ReactJS, Angular2, NodeJS, PHP, PostgreSQL,
              <br />
              Magento2, Shopify,
              <br />
              Agile, Scrum, Startup environment.
            </p>
          </p>
          <p>
            <h3>BNSPRO - Web & Mobile Applications</h3>
            <h5>12/2017 - 11/2018</h5>
            <hr />
            <p>
              <span className="position">Frontend Developer</span>
              <a href="https://bnspro.gr/" title="Bnspro" className="website">
                bnspro.gr
              </a>
              Responsible mostly for the Front-end part but working with
              Back-end too.
              <br />
              Create custom Drupal 8 themes.
              <br />
              Create custom websites using Codedigniter.
            </p>
          </p>
          <p>
            <h3>SOMON - Office Automation</h3>
            <h5>04/2015 - 11/2017</h5>
            <hr />
            <p>
              <span className="position">
                Webmaster, IT Support, Web Developer
              </span>
              <a href="https://www.somon.gr/" title="Somon" className="website">
                somon.gr
              </a>
              Management and customization company’s website, newsletters.
              <br />
              Web Server administration – WHM / Plesk.
              <br />
              Desktop and laptop repairing, technical support on client’s site.
              <br />
              Programming & installation of tax mechanisms and tax machines.
              <br />
              Remote technical support, networks - routers, computer
              peripherals.
              <br />
              Programming Siemens call centers and PBX.
            </p>
          </p>
          {close}
        </article>
        <article
          id="education"
          className={`${this.props.article === 'education' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Education</h2>
          <p>
            <h3>
              MSc in Aplied Informatics - eBusiness & Innovation Technology
            </h3>
            <h5>2016 - 2020</h5>
            <hr />
            <p>
              <span className="position">University of Macedonia</span>
              IT Infrastructure. <br />
              Digital Business Strategy. <br />
              m-Business & e-Commerce Technologies. <br />
              Web and Mobile Application Development. <br />
              Advanced Software Engineering. <br />
              Cloud Technologies and Web Analytics. <br />
              Innovative e-Business Systems. <br />
              Digital Marketing & Social Networking.
            </p>
          </p>
          <p>
            <h3>FrontEnd Developer Nanodegree Program</h3>
            <h5>2017 - 2018</h5>
            <hr />
            <p>
              <span className="position">Udacity</span>
              Web foundations. <br />
              Web programming with Javascript. <br />
              Exploring JS - Objects Tools and Testing. <br />
              Front-end applications. <br />
              Building with React.
            </p>
          </p>
          <p>
            <h3>BSc in Computer Science & Telecommunications Engineering</h3>
            <h5>2007 - 2013</h5>
            <hr />
            <p>
              <span className="position">
                Technological Educational Institute of Thessaly
              </span>
              Courses attended available here:{' '}
              <a
                href="http://www.cs.teilar.gr/CS/lessons.jsp"
                className="website"
                title="Courses"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.cs.teilar.gr/CS/lessons.jsp
              </a>
            </p>
          </p>
          {close}
        </article>
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Portfolio</h2>
          <div className="portfolio">
            <div className="grid">
              <figure className="effect-ming">
                <img src={heavyliftImage} alt="heavylift group" />
                <figcaption>
                  <h2>
                    <span>Drupal </span>website
                  </h2>
                  <p>Custom theme and modules</p>
                  <a href="https://www.theheavyliftgroup.com/">View more</a>
                </figcaption>
              </figure>
              <figure className="effect-ming">
                <img src={lukasImage} alt="halvas lukas" />
                <figcaption>
                  <h2>
                    <span>CodeIgniter </span>website
                  </h2>
                  <p>Custom theme and development</p>
                  <a href="https://www.lukas.gr">View more</a>
                </figcaption>
              </figure>
              <figure className="effect-ming">
                <img src={radioArtImage} alt="radio art app" />
                <figcaption>
                  <h2>
                    <span>Amazon Alexa </span>application
                  </h2>
                  <p>
                    Radio streaming application for Amazon Alexa enabled devices
                  </p>
                  <a href="https://www.amazon.com/gp/product/B07KP3GZ29">
                    View more
                  </a>
                </figcaption>
              </figure>
              <figure className="effect-ming">
                <img src={islandTalesImage} alt="island tales" />
                <figcaption>
                  <h2>
                    <span>CS-Cart </span>eshop
                  </h2>
                  <p>Custom theme and development</p>
                  <a href="https://www.island-tales.com">View more</a>
                </figcaption>
              </figure>
              <figure className="effect-ming">
                <img src={manImage} alt="man2man eshop" />
                <figcaption>
                  <h2>
                    <span>WooCommerce </span>eshop
                  </h2>
                  <p>WordPress / fb / ig</p>
                  <a href="https://www.man2man.gr">View more</a>
                </figcaption>
              </figure>
            </div>
          </div>
          {close}
        </article>
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <div className="contact-first">
            <p className="contact-first-inner">
              <FaEnvelope className="contact-icon" />
              <span className="contact-text">thodorispliakas@gmail.com</span>
            </p>
            <p className="contact-first-inner">
              <FaMobileAlt className="contact-icon" />
              <span className="contact-text">+30 698689 5502</span>
            </p>
          </div>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/theodorospliakas/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/7622832/tpliakas"
                className="icon fa-stack-overflow"
              >
                <span className="label">Stack Overflow</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/tpliakas" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/thodoris.pliakas"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/its_pliakas/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
