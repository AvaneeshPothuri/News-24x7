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
    let url = `${this.props.url}q=elections&language=${this.props.selectedLanguage}&sortBy=${this.props.sortBy}&${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading: false}) 
    this.setState({ articles: parsedData.articles , totalResults: parsedData.totalResults });
  }

  handleNextClick = async()=> {
    let url = `${this.props.url}q=elections&language=${this.props.selectedLanguage}&sortBy=${this.props.sortBy}&${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading: false})
    this.setState({ articles: parsedData.articles });
    this.setState({ page: this.state.page + 1})  
  }

  handlePreviousClick = async()=> {
    let url = `${this.props.url}q=elections&language=${this.props.selectedLanguage}&sortBy=${this.props.sortBy}&${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
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
          {!this.state.loading && this.state.articles && this.state.articles.filter((element) => element.title !== "[Removed]").map((element) => {
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
