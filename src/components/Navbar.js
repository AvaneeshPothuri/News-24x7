import React, { Component} from 'react'

export class Navbar extends Component {
  
  handleLanguageChange = (lang) => {
    this.props.onOptionChange('selectedLanguage', lang);
  };

  handleSortChange = (sortBy) => {
    this.props.onOptionChange('sortBy', sortBy);
  };

  handleOnChange = (event)=>{
    this.props.textChange(event.target.value);
  };

  handleOnClick = ()=>{
    this.props.onSearch();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
  };
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">News 24x7</a>
            </div>
            <form className="d-flex w-100 justify-content-center align-items-center" role="search" onSubmit={this.handleFormSubmit}>
              <input className="form-control me-2 mx-2" type="search" placeholder="Search" aria-label="Search" value={this.props.text} onChange={this.handleOnChange}></input>
              <button className="btn btn-outline-light" type="submit" onClick={this.handleOnClick}>Search</button>
            </form>
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
              {['Popularity', 'PublishedAt' , 'Relevancy'].map((sort) => (
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
