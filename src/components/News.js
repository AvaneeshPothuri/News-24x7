import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="My Title" description="My Description" imageURL=".."/>
          </div>
          <div className="col-md-4">
            <NewsItem title="My Title" description="My Description"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="My Title" description="My Description"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="My Title" description="My Description"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="My Title" description="My Description"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="My Title" description="My Description"/>
          </div>
        </div>
      </div>
    )
  }
}

export default News