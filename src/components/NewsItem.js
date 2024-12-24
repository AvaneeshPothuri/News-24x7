import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsURL } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageURL} className="card-img-top" alt="hi" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <button 
              className="btn btn-sm btn-dark" 
              onClick={() => window.open(newsURL, "_blank")}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;