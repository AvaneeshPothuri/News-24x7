import './App.css';
import React, { Component } from 'react';
import News from './components/News';
import Navbar from './components/Navbar';

export default class App extends Component {
  state ={
    selectedLanguage: 'en',
    sortBy: 'Popularity',
    showNews: true,
    text: '',
    search: 'elections',
    apiKey: process.env.REACT_APP_NEWS_API
  };

  onOptionChange = (key, value) => {
    this.setState({ [key]: value, showNews: false }, () => {
      this.setState({ showNews: true });
    });
  };
  
  textChange = (value) => {
    this.setState({text : value})
  }

  onSearch = () => {
    console.log("Received value command");
    this.setState({ search: this.state.text, showNews: false }, () => {
      console.log("Searched for:", this.state.search);
      this.setState({ showNews: true });
    });
  };
  
  
  render() {
    return (
      <div>
        <Navbar onOptionChange={this.onOptionChange} textChange={this.textChange} onSearch={this.onSearch}/>
        {this.state.showNews && <News pageSize={6} url="https://newsapi.org/v2/everything?" search={this.state.search} apiKey={this.state.apiKey} selectedLanguage={this.state.selectedLanguage} sortBy={this.state.sortBy}/>}
      </div>
    );
  }
}
