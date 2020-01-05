import React from 'react'
import PropTypes from 'prop-types'
import ReactImage from '../images/react-icon.png'
import GatsbyImage from '../images/gatsby-icon.png'
import OctocatImage from '../images/octocat.png'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      <i className="fa fa-code" /> with <i className="fa fa-heart" /> using{' '}
      <a
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        title="React"
      >
        <img
          src={ReactImage}
          alt="react logo"
          height="18px"
          className="footer-icons"
        />
      </a>{' '}
      and{' '}
      <a
        href="https://www.gatsbyjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        title="Gatsby"
      >
        <img
          src={GatsbyImage}
          alt="gatsby logo"
          height="16px"
          className="footer-icons"
        />
      </a>{' '}
      <span className="footer-github">
        hosted on{' '}
        <a
          href="https://github.com/tpliakas/gatsby-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <img
            src={OctocatImage}
            alt="github logo"
            height="16px"
            className="footer-icons"
          />
        </a>
      </span>
      <br />
      tpliakas.com &copy; 2020
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
