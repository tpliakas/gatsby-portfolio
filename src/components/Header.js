import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo" />
    <div className="content">
      <div className="inner">
        <h1>Theodore Pliakas</h1>
        <p>
          Frontend Engineer & Web Developer
          <p className="capitalize">Passionate for web technologies</p>
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('education')
            }}
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
