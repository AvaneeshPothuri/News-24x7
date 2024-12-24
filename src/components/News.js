import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e6ebfd796ed14871a7d45fc3e85d68e5&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading: false}) 
    this.setState({ articles: parsedData.articles , totalResults: parsedData.totalResults });
  }

  handleNextClick = async()=> {
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e6ebfd796ed14871a7d45fc3e85d68e5&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading: false})
    this.setState({ articles: parsedData.articles });
    this.setState({ page: this.state.page + 1})  
  }

  handlePreviousClick = async()=> {
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e6ebfd796ed14871a7d45fc3e85d68e5&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading: false})
    this.setState({ articles: parsedData.articles });
    this.setState({ page: this.state.page - 1 })  
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className='text-center'>Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem 
                  title={element.title ? element.title:""} 
                  description={element.description ? element.description:""} 
                  imageURL={element.urlToImage?element.urlToImage:""} 
                  newsURL={element.url} 
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page===1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button disabled={Math.ceil(this.state.totalResults/this.props.pageSize)===this.state.page} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
