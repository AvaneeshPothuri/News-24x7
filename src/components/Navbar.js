import React, { Component } from 'react'

export class Navbar extends Component {
  handleLanguageChange = (lang) => {
    this.props.onOptionChange('selectedLanguage', lang);
  };

  handleSortChange = (sortBy) => {
    this.props.onOptionChange('sortBy', sortBy);
  };
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">News 24x7</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <li className="nav-item dropdown mx-3">
              <a className="nav-link dropdown-toggle text-white" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Select Language
              </a>
              <ul className="dropdown-menu">
                {['ar', 'de', 'en', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'sv', 'ud', 'zh'].map((lang) => (
                  <li key={lang}>
                    <div className="dropdown-item" onClick={() => this.handleLanguageChange(lang)}>{lang}</div>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item dropdown mx-3">
            <a className="nav-link dropdown-toggle text-white" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sort By
            </a>
            <ul className="dropdown-menu">
              {['Popularity', 'PublishedAt'].map((sort) => (
                <li key={sort}>
                  <div className="dropdown-item" onClick={() => this.handleSortChange(sort)}>{sort}</div>
                </li>
              ))}
            </ul>
          </li>
            <li className="mx-5"></li>
        </nav>
      </div>
    )
  }
}

export default Navbar
