import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsURL, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ height: "28rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <img src={imageURL || "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"} className="card-img-top" alt="News" style={{ height: "10rem", objectFit: "cover" }} />
          <div className="card-body">
            <h5 className="card-title" style={{ height: "3rem", overflow: "hidden" }}>{title}</h5>
            <span className="badge text-bg-dark">{source}</span>
            <p className="card-text" style={{ height: "4.5rem", overflow: "hidden" }}>{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
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