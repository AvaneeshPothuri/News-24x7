import './App.css';
import React, { Component } from 'react';
import News from './components/News';
import Navbar from './components/Navbar';

export default class App extends Component {
  state ={
    selectedLanguage: 'en',
    sortBy: 'Popularity'
  };

  handleOptionChange = (key, value) => {
    this.setState({ [key]: value });
  };  
  
  render() {
    return (
      <div>
        <Navbar onOptionChange={this.handleOptionChange} />
        <News pageSize={6} url="https://newsapi.org/v2/everything?" apiKey="apiKey=e6ebfd796ed14871a7d45fc3e85d68e5" selectedLanguage={this.state.selectedLanguage} sortBy={this.state.sortBy}/>
      </div>
    );
  }
}
